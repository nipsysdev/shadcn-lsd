'use client';

import { Card, CardContent, Typography } from '@nipsys/shadcn-lsd';
import { DocsLayout } from '@/components/docs/DocsLayout';
import { PageContent } from '@/components/docs/PageContent';
import { PageHeader } from '@/components/docs/PageHeader';
import { PageNavigation } from '@/components/docs/PageNavigation';
import { PageSection } from '@/components/docs/PageSection';
import { ColorValue } from './ColorValue';

export default function ColorsPage() {
  return (
    <DocsLayout>
      <PageHeader
        title="Colors"
        description="Explore the color palette used throughout LSD components."
      />

      <PageContent>
        <PageSection title="Primary Colors">
          <Typography variant="body1" className="block">
            The primary color is used for main actions and important elements.
          </Typography>

          <div className="inline-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card className="min-w-fit max-w-[250px]">
              <CardContent className="pt-(--lsd-spacing-large)">
                <div
                  className="h-24 mb-(--lsd-spacing-base)"
                  style={{ backgroundColor: 'var(--lsd-primary)' }}
                />
                <Typography variant="h5" className="mb-(--lsd-spacing-smallest)">
                  Primary
                </Typography>
                <Typography variant="label1" className="text-nowrap">
                  --lsd-primary: <ColorValue variable="--lsd-primary" />
                </Typography>
              </CardContent>
            </Card>

            <Card className="min-w-fit max-w-[250px]">
              <CardContent className="pt-(--lsd-spacing-large)">
                <div
                  className="h-24 mb-(--lsd-spacing-base)"
                  style={{ backgroundColor: 'var(--lsd-primary-foreground)' }}
                />
                <Typography variant="h5" className="mb-(--lsd-spacing-smallest)">
                  Primary Foreground
                </Typography>
                <Typography variant="label1" className="text-nowrap">
                  --lsd-primary-foreground: <ColorValue variable="--lsd-primary-foreground" />
                </Typography>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Text Colors">
          <Typography variant="body1" className="block">
            Text colors for primary and secondary content.
          </Typography>

          <div className="inline-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card className="min-w-fit max-w-[250px]">
              <CardContent className="pt-(--lsd-spacing-large)">
                <div
                  className="h-24 mb-(--lsd-spacing-base)"
                  style={{ backgroundColor: 'var(--lsd-text-primary)' }}
                />
                <Typography variant="h5" className="mb-(--lsd-spacing-smallest)">
                  Text Primary
                </Typography>
                <Typography variant="label1" className="text-nowrap">
                  --lsd-text-primary: <ColorValue variable="--lsd-text-primary" />
                </Typography>
              </CardContent>
            </Card>

            <Card className="min-w-fit max-w-[250px]">
              <CardContent className="pt-(--lsd-spacing-large)">
                <div
                  className="h-24 mb-(--lsd-spacing-base)"
                  style={{ backgroundColor: 'var(--lsd-text-secondary)' }}
                />
                <Typography variant="h5" className="mb-(--lsd-spacing-smallest)">
                  Text Secondary
                </Typography>
                <Typography variant="label1" className="text-nowrap">
                  --lsd-text-secondary: <ColorValue variable="--lsd-text-secondary" />
                </Typography>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Surface & Border Colors">
          <Typography variant="body1" className="block">
            Surface and border colors for backgrounds and dividers.
          </Typography>

          <div className="inline-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card className="min-w-fit max-w-[250px]">
              <CardContent className="pt-(--lsd-spacing-large)">
                <div
                  className="h-24 mb-(--lsd-spacing-base) border"
                  style={{ backgroundColor: 'var(--lsd-surface)' }}
                />
                <Typography variant="h5" className="mb-(--lsd-spacing-smallest)">
                  Surface
                </Typography>
                <Typography variant="label1" className="text-nowrap">
                  --lsd-surface: <ColorValue variable="--lsd-surface" />
                </Typography>
              </CardContent>
            </Card>

            <Card className="min-w-fit max-w-[250px]">
              <CardContent className="pt-(--lsd-spacing-large)">
                <div
                  className="h-24 mb-(--lsd-spacing-base)"
                  style={{ backgroundColor: 'var(--lsd-border)' }}
                />
                <Typography variant="h5" className="mb-(--lsd-spacing-smallest)">
                  Border
                </Typography>
                <Typography variant="label1" className="text-nowrap">
                  --lsd-border: <ColorValue variable="--lsd-border" />
                </Typography>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Icon Colors">
          <Typography variant="body1" className="block">
            Icon colors for primary and secondary icons.
          </Typography>

          <div className="inline-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card className="min-w-fit max-w-[250px]">
              <CardContent className="pt-(--lsd-spacing-large)">
                <div
                  className="h-24 mb-(--lsd-spacing-base)"
                  style={{ backgroundColor: 'var(--lsd-icon-primary)' }}
                />
                <Typography variant="h5" className="mb-(--lsd-spacing-smallest)">
                  Icon Primary
                </Typography>
                <Typography variant="label1" className="text-nowrap">
                  --lsd-icon-primary: <ColorValue variable="--lsd-icon-primary" />
                </Typography>
              </CardContent>
            </Card>

            <Card className="min-w-fit max-w-[250px]">
              <CardContent className="pt-(--lsd-spacing-large)">
                <div
                  className="h-24 mb-(--lsd-spacing-base)"
                  style={{ backgroundColor: 'var(--lsd-icon-secondary)' }}
                />
                <Typography variant="h5" className="mb-(--lsd-spacing-smallest)">
                  Icon Secondary
                </Typography>
                <Typography variant="label1" className="text-nowrap">
                  --lsd-icon-secondary: <ColorValue variable="--lsd-icon-secondary" />
                </Typography>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Semantic Colors">
          <Typography variant="body1" className="block">
            Semantic colors for success, warning, destructive, and info states.
          </Typography>

          <div className="inline-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card className="min-w-fit max-w-[250px]">
              <CardContent className="pt-(--lsd-spacing-large)">
                <div
                  className="h-24 mb-(--lsd-spacing-base)"
                  style={{ backgroundColor: 'var(--lsd-success)' }}
                />
                <Typography variant="h5" className="mb-(--lsd-spacing-smallest)">
                  Success
                </Typography>
                <Typography variant="label1" className="text-nowrap">
                  --lsd-success: <ColorValue variable="--lsd-success" />
                </Typography>
              </CardContent>
            </Card>

            <Card className="min-w-fit max-w-[250px]">
              <CardContent className="pt-(--lsd-spacing-large)">
                <div
                  className="h-24 mb-(--lsd-spacing-base)"
                  style={{ backgroundColor: 'var(--lsd-destructive)' }}
                />
                <Typography variant="h5" className="mb-(--lsd-spacing-smallest)">
                  Destructive
                </Typography>
                <Typography variant="label1" className="text-nowrap">
                  --lsd-destructive: <ColorValue variable="--lsd-destructive" />
                </Typography>
              </CardContent>
            </Card>

            <Card className="min-w-fit max-w-[250px]">
              <CardContent className="pt-(--lsd-spacing-large)">
                <div
                  className="h-24 mb-(--lsd-spacing-base)"
                  style={{ backgroundColor: 'var(--lsd-warning)' }}
                />
                <Typography variant="h5" className="mb-(--lsd-spacing-smallest)">
                  Warning
                </Typography>
                <Typography variant="label1" className="text-nowrap">
                  --lsd-warning: <ColorValue variable="--lsd-warning" />
                </Typography>
              </CardContent>
            </Card>

            <Card className="min-w-fit max-w-[250px]">
              <CardContent className="pt-(--lsd-spacing-large)">
                <div
                  className="h-24 mb-(--lsd-spacing-base)"
                  style={{ backgroundColor: 'var(--lsd-info)' }}
                />
                <Typography variant="h5" className="mb-(--lsd-spacing-smallest)">
                  Info
                </Typography>
                <Typography variant="label1" className="text-nowrap">
                  --lsd-info: <ColorValue variable="--lsd-info" />
                </Typography>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Semantic Text Colors">
          <Typography variant="body1" className="block">
            Text colors for semantic states.
          </Typography>

          <div className="inline-grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card className="min-w-fit max-w-[250px]">
              <CardContent className="pt-(--lsd-spacing-large)">
                <div
                  className="h-24 mb-(--lsd-spacing-base)"
                  style={{ backgroundColor: 'var(--lsd-success-text)' }}
                />
                <Typography variant="h5" className="mb-(--lsd-spacing-smallest)">
                  Success Text
                </Typography>
                <Typography variant="label1" className="text-nowrap">
                  --lsd-success-text: <ColorValue variable="--lsd-success-text" />
                </Typography>
              </CardContent>
            </Card>

            <Card className="min-w-fit max-w-[250px]">
              <CardContent className="pt-(--lsd-spacing-large)">
                <div
                  className="h-24 mb-(--lsd-spacing-base)"
                  style={{ backgroundColor: 'var(--lsd-destructive-text)' }}
                />
                <Typography variant="h5" className="mb-(--lsd-spacing-smallest)">
                  Destructive Text
                </Typography>
                <Typography variant="label1" className="text-nowrap">
                  --lsd-destructive-text: <ColorValue variable="--lsd-destructive-text" />
                </Typography>
              </CardContent>
            </Card>

            <Card className="min-w-fit max-w-[250px]">
              <CardContent className="pt-(--lsd-spacing-large)">
                <div
                  className="h-24 mb-(--lsd-spacing-base)"
                  style={{ backgroundColor: 'var(--lsd-warning-text)' }}
                />
                <Typography variant="h5" className="mb-(--lsd-spacing-smallest)">
                  Warning Text
                </Typography>
                <Typography variant="label1" className="text-nowrap">
                  --lsd-warning-text: <ColorValue variable="--lsd-warning-text" />
                </Typography>
              </CardContent>
            </Card>

            <Card className="min-w-fit max-w-[250px]">
              <CardContent className="pt-(--lsd-spacing-large)">
                <div
                  className="h-24 mb-(--lsd-spacing-base)"
                  style={{ backgroundColor: 'var(--lsd-info-text)' }}
                />
                <Typography variant="h5" className="mb-(--lsd-spacing-smallest)">
                  Info Text
                </Typography>
                <Typography variant="label1" className="text-nowrap">
                  --lsd-info-text: <ColorValue variable="--lsd-info-text" />
                </Typography>
              </CardContent>
            </Card>
          </div>
        </PageSection>
      </PageContent>

      <PageNavigation
        previous={{
          title: 'Theming',
          href: '/getting-started/theming',
        }}
        next={{
          title: 'Spacing',
          href: '/design-tokens/spacing',
        }}
      />
    </DocsLayout>
  );
}
