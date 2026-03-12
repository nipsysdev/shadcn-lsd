'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Button as LSDButton,
  Progress as LSDProgress,
  Separator,
  Typography,
} from '@nipsys/shadcn-lsd';
import { CodeExample } from '../../components/docs/CodeExample';
import { ComponentPreview } from '../../components/docs/ComponentPreview';

export default function ProgressPage() {
  return (
    <div className="container mx-auto px-(--lsd-spacing-base) py-(--lsd-spacing-larger) max-w-5xl">
      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h1" className="mb-(--lsd-spacing-base)">
          Progress
        </Typography>
        <Typography
          variant="body1"
          className="text-muted-foreground text-lg mb-(--lsd-spacing-base)"
        >
          A progress component that displays the completion status of a task.
          Progress bars provide visual feedback about the progress of an
          operation.
        </Typography>
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Installation
        </Typography>
        <CodeExample
          title="Install the component"
          code={`pnpm add @nipsys/shadcn-lsd`}
        />
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Import
        </Typography>
        <CodeExample
          title="Import the component"
          code={`import { Progress } from '@nipsys/shadcn-lsd';`}
        />
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Usage
        </Typography>
        <CodeExample title="Basic progress" code={`<Progress value={50} />`} />
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Basic Progress
        </Typography>
        <Typography
          variant="body1"
          className="text-muted-foreground mb-(--lsd-spacing-base)"
        >
          Use the{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            value
          </code>{' '}
          prop to set the progress percentage (0-100).
        </Typography>

        <ComponentPreview
          title="Progress values"
          code={`<div className="space-y-4">
  <Progress value={30} />
  <Progress value={50} />
  <Progress value={75} />
  <Progress value={100} />
</div>`}
        >
          <div className="space-y-4">
            <LSDProgress value={30} />
            <LSDProgress value={50} />
            <LSDProgress value={75} />
            <LSDProgress value={100} />
          </div>
        </ComponentPreview>
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Color Variants
        </Typography>
        <Typography
          variant="body1"
          className="text-muted-foreground mb-(--lsd-spacing-base)"
        >
          Use the{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            variant
          </code>{' '}
          prop to change the progress bar color.
        </Typography>

        <ComponentPreview
          title="Progress color variants"
          code={`<div className="space-y-4">
  <Progress value={50} variant="default" />
  <Progress value={50} variant="success" />
  <Progress value={50} variant="warning" />
  <Progress value={50} variant="destructive" />
</div>`}
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <Typography variant="body2" className="text-muted-foreground">
                Default:
              </Typography>
              <LSDProgress value={50} variant="default" />
            </div>
            <div className="space-y-2">
              <Typography variant="body2" className="text-muted-foreground">
                Success:
              </Typography>
              <LSDProgress value={50} variant="success" />
            </div>
            <div className="space-y-2">
              <Typography variant="body2" className="text-muted-foreground">
                Warning:
              </Typography>
              <LSDProgress value={50} variant="warning" />
            </div>
            <div className="space-y-2">
              <Typography variant="body2" className="text-muted-foreground">
                Destructive:
              </Typography>
              <LSDProgress value={50} variant="destructive" />
            </div>
          </div>
        </ComponentPreview>
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Sizes
        </Typography>
        <Typography
          variant="body1"
          className="text-muted-foreground mb-(--lsd-spacing-base)"
        >
          Use the{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            size
          </code>{' '}
          prop to change the progress bar size.
        </Typography>

        <ComponentPreview
          title="Progress sizes"
          code={`<div className="space-y-4">
  <Progress value={50} size="sm" />
  <Progress value={50} size="md" />
  <Progress value={50} size="lg" />
</div>`}
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <Typography variant="body2" className="text-muted-foreground">
                Small:
              </Typography>
              <LSDProgress value={50} size="sm" />
            </div>
            <div className="space-y-2">
              <Typography variant="body2" className="text-muted-foreground">
                Medium (default):
              </Typography>
              <LSDProgress value={50} size="md" />
            </div>
            <div className="space-y-2">
              <Typography variant="body2" className="text-muted-foreground">
                Large:
              </Typography>
              <LSDProgress value={50} size="lg" />
            </div>
          </div>
        </ComponentPreview>
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Label Display
        </Typography>
        <Typography
          variant="body1"
          className="text-muted-foreground mb-(--lsd-spacing-base)"
        >
          Use the{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            showLabel
          </code>{' '}
          prop to display the progress percentage.
        </Typography>

        <ComponentPreview
          title="Progress with labels"
          code={`<div className="space-y-4">
  <Progress value={50} showLabel />
  <Progress value={75} showLabel />
  <Progress value={100} showLabel />
</div>`}
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <Typography variant="body2" className="text-muted-foreground">
                50%:
              </Typography>
              <LSDProgress value={50} showLabel />
            </div>
            <div className="space-y-2">
              <Typography variant="body2" className="text-muted-foreground">
                75%:
              </Typography>
              <LSDProgress value={75} showLabel />
            </div>
            <div className="space-y-2">
              <Typography variant="body2" className="text-muted-foreground">
                100%:
              </Typography>
              <LSDProgress value={100} showLabel />
            </div>
          </div>
        </ComponentPreview>
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Label Position
        </Typography>
        <Typography
          variant="body1"
          className="text-muted-foreground mb-(--lsd-spacing-base)"
        >
          Use the{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            labelPosition
          </code>{' '}
          prop to control where the label appears.
        </Typography>

        <ComponentPreview
          title="Progress label positions"
          code={`<div className="space-y-4">
  <Progress value={50} showLabel labelPosition="top" />
  <Progress value={75} showLabel labelPosition="bottom" />
</div>`}
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <Typography variant="body2" className="text-muted-foreground">
                Label on top (default):
              </Typography>
              <LSDProgress value={50} showLabel labelPosition="top" />
            </div>
            <div className="space-y-2">
              <Typography variant="body2" className="text-muted-foreground">
                Label on bottom:
              </Typography>
              <LSDProgress value={75} showLabel labelPosition="bottom" />
            </div>
          </div>
        </ComponentPreview>
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Indeterminate Progress
        </Typography>
        <Typography
          variant="body1"
          className="text-muted-foreground mb-(--lsd-spacing-base)"
        >
          Use the{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            indeterminate
          </code>{' '}
          prop for loading states where the duration is unknown.
        </Typography>

        <ComponentPreview
          title="Indeterminate progress"
          code={`<div className="space-y-4">
  <Progress indeterminate />
  <Progress indeterminate speed="slow" />
  <Progress indeterminate speed="fast" />
</div>`}
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <Typography variant="body2" className="text-muted-foreground">
                Normal Speed (default):
              </Typography>
              <LSDProgress indeterminate />
            </div>
            <div className="space-y-2">
              <Typography variant="body2" className="text-muted-foreground">
                Slow Speed:
              </Typography>
              <LSDProgress indeterminate speed="slow" />
            </div>
            <div className="space-y-2">
              <Typography variant="body2" className="text-muted-foreground">
                Fast Speed:
              </Typography>
              <LSDProgress indeterminate speed="fast" />
            </div>
          </div>
        </ComponentPreview>
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Combined Features
        </Typography>
        <Typography
          variant="body1"
          className="text-muted-foreground mb-(--lsd-spacing-base)"
        >
          Combine multiple props for advanced use cases.
        </Typography>

        <ComponentPreview
          title="Combined features"
          code={`<div className="space-y-4">
  <Progress
    value={75}
    variant="success"
    showLabel
  />
  <Progress
    value={40}
    variant="warning"
    showLabel
    labelPosition="bottom"
  />
  <Progress
    indeterminate
    variant="destructive"
    speed="fast"
  />
</div>`}
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <Typography variant="body2" className="text-muted-foreground">
                Success with label:
              </Typography>
              <LSDProgress value={75} variant="success" showLabel />
            </div>
            <div className="space-y-2">
              <Typography variant="body2" className="text-muted-foreground">
                Warning with label on bottom:
              </Typography>
              <LSDProgress
                value={40}
                variant="warning"
                showLabel
                labelPosition="bottom"
              />
            </div>
            <div className="space-y-2">
              <Typography variant="body2" className="text-muted-foreground">
                Destructive indeterminate fast:
              </Typography>
              <LSDProgress indeterminate variant="destructive" speed="fast" />
            </div>
          </div>
        </ComponentPreview>
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          API Reference
        </Typography>
        <Card>
          <CardContent className="p-(--lsd-spacing-large)">
            <Typography variant="h3" className="mb-(--lsd-spacing-base)">
              Progress Props
            </Typography>
            <div className="space-y-4">
              <div>
                <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                  value
                </code>
                <Typography
                  variant="body1"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    number
                  </code>
                  <br />
                  The progress value (0-100). Required for determinate progress.
                </Typography>
              </div>
              <div>
                <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                  indeterminate
                </code>
                <Typography
                  variant="body1"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    boolean
                  </code>
                  <br />
                  Default:{' '}
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    false
                  </code>
                  <br />
                  Whether the progress is indeterminate (loading state).
                </Typography>
              </div>
              <div>
                <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                  variant
                </code>
                <Typography
                  variant="body1"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    "default" | "success" | "warning" | "destructive"
                  </code>
                  <br />
                  Default:{' '}
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    "default"
                  </code>
                  <br />
                  The color variant of the progress bar.
                </Typography>
              </div>
              <div>
                <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                  size
                </code>
                <Typography
                  variant="body1"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    "sm" | "md" | "lg"
                  </code>
                  <br />
                  Default:{' '}
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    "md"
                  </code>
                  <br />
                  The size of the progress bar.
                </Typography>
              </div>
              <div>
                <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                  showLabel
                </code>
                <Typography
                  variant="body1"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    boolean
                  </code>
                  <br />
                  Default:{' '}
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    false
                  </code>
                  <br />
                  Whether to display the progress percentage label.
                </Typography>
              </div>
              <div>
                <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                  labelPosition
                </code>
                <Typography
                  variant="body1"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    "top" | "bottom"
                  </code>
                  <br />
                  Default:{' '}
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    "top"
                  </code>
                  <br />
                  The position of the label when{' '}
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    showLabel
                  </code>{' '}
                  is true.
                </Typography>
              </div>
              <div>
                <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                  speed
                </code>
                <Typography
                  variant="body1"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    "slow" | "normal" | "fast"
                  </code>
                  <br />
                  Default:{' '}
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    "normal"
                  </code>
                  <br />
                  The animation speed for indeterminate progress.
                </Typography>
              </div>
              <div>
                <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                  paused
                </code>
                <Typography
                  variant="body1"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    boolean
                  </code>
                  <br />
                  Default:{' '}
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    false
                  </code>
                  <br />
                  Whether to pause the indeterminate animation.
                </Typography>
              </div>
              <div>
                <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                  className
                </code>
                <Typography
                  variant="body1"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    string
                  </code>
                  <br />
                  Additional CSS classes to apply.
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Accessibility
        </Typography>
        <Typography variant="body1" className="text-muted-foreground">
          Progress components follow WAI-ARIA guidelines and are fully
          accessible. The component automatically includes the appropriate{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            role="progressbar"
          </code>{' '}
          and{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            aria-valuenow
          </code>{' '}
          attributes. When using indeterminate progress, the component properly
          communicates the loading state to assistive technologies.
        </Typography>
      </div>
    </div>
  );
}
