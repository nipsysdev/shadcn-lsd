import { atom, map } from 'nanostores';

export interface TocItem {
  title: string;
  isChild: boolean;
}

export const $sections = map<TocItem[]>([]);
export const $activeSection = atom<string | null>(null);

let observer: IntersectionObserver | null = null;
const observedElements = new Map<string, Element>();

export function registerSection(section: TocItem) {
  const current = $sections.get();
  if (!current.some(s => s.title === section.title)) {
    const newSections = [...current, section];

    const sortedSections = sortSectionsByDomPosition(newSections);
    $sections.set(sortedSections);

    if (observer) {
      const element = document.getElementById(section.title);
      if (element) {
        observer.observe(element);
        observedElements.set(section.title, element);
      }
    }
  }
}

function sortSectionsByDomPosition(sections: TocItem[]): TocItem[] {
  return [...sections].sort((a, b) => {
    const elementA = document.getElementById(a.title);
    const elementB = document.getElementById(b.title);

    if (!elementA || !elementB) return 0;

    const position = elementA.compareDocumentPosition(elementB);

    if (position & Node.DOCUMENT_POSITION_FOLLOWING) {
      return -1;
    }
    if (position & Node.DOCUMENT_POSITION_PRECEDING) {
      return 1;
    }

    return 0;
  });
}

export function unregisterSection(title: string) {
  const current = $sections.get();
  $sections.set(current.filter(s => s.title !== title));

  const element = observedElements.get(title);
  if (element && observer) {
    observer.unobserve(element);
    observedElements.delete(title);
  }
}

export function scrollToSection(title: string) {
  const element = document.getElementById(title);
  if (element) {
    element.scrollIntoView({
      behavior: 'instant',
      block: 'start',
    });
  }
}

export function setupObserver() {
  if (observer) return;

  observer = new IntersectionObserver(
    entries => {
      const intersectingEntries = entries.filter(entry => entry.isIntersecting);

      if (intersectingEntries.length === 0) return;

      const topmostEntry = intersectingEntries.reduce((topmost, current) => {
        const topmostRect = topmost.boundingClientRect;
        const currentRect = current.boundingClientRect;

        return currentRect.top < topmostRect.top ? current : topmost;
      });

      $activeSection.set(topmostEntry.target.id);
    },
    {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    }
  );

  const sections = $sections.get();
  const sortedSections = sortSectionsByDomPosition(sections);
  $sections.set(sortedSections);

  sortedSections.forEach(section => {
    const element = document.getElementById(section.title);
    if (element) {
      observer!.observe(element);
      observedElements.set(section.title, element);
    }
  });
}

export function cleanup() {
  if (observer) {
    observer.disconnect();
    observer = null;
  }
  observedElements.clear();
  $sections.set([]);
  $activeSection.set(null);
}
