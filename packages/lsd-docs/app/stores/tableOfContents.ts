import { atom, map } from 'nanostores';

export interface TocItem {
  id: string;
  title: string;
  level: number;
}

// Global stores
export const $sections = map<TocItem[]>([]);
export const $activeId = atom<string | null>(null);

let observer: IntersectionObserver | null = null;
const observedElements = new Map<string, Element>();

export function registerSection(section: TocItem) {
  const current = $sections.get();
  if (!current.some(s => s.id === section.id)) {
    $sections.set([...current, section]);

    // If observer is already set up, observe the new element
    if (observer) {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
        observedElements.set(section.id, element);
      }
    }
  }
}

export function unregisterSection(id: string) {
  const current = $sections.get();
  $sections.set(current.filter(s => s.id !== id));

  // Unobserve the element if it exists
  const element = observedElements.get(id);
  if (element && observer) {
    observer.unobserve(element);
    observedElements.delete(id);
  }
}

export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}

export function setupObserver() {
  if (observer) return;

  observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          $activeId.set(entry.target.id);
        }
      });
    },
    {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    }
  );

  // Observe all current sections
  const sections = $sections.get();
  sections.forEach(section => {
    const element = document.getElementById(section.id);
    if (element) {
      observer!.observe(element);
      observedElements.set(section.id, element);
    }
  });
}

export function cleanup() {
  if (observer) {
    observer.disconnect();
    observer = null;
  }
  observedElements.clear();
  // Clear sections when cleaning up (e.g., on page navigation)
  $sections.set([]);
  $activeId.set(null);
}
