'use client';

import { Card, CardContent, Button as LSDButton, Separator, Typography } from '@nipsys/shadcn-lsd';
import { CodeExample } from '../../components/docs/CodeExample';
import { ComponentPreview } from '../../components/docs/ComponentPreview';

declare global {
  interface Window {
    toast?: {
      (message: string, options?: Record<string, unknown>): void;
      success(message: string, options?: Record<string, unknown>): void;
      error(message: string, options?: Record<string, unknown>): void;
      info(message: string, options?: Record<string, unknown>): void;
      warning(message: string, options?: Record<string, unknown>): void;
      dismiss(): void;
    };
  }
}

export default function SonnerPage() {
  return (
    <div className="container mx-auto px-(--lsd-spacing-base) py-(--lsd-spacing-larger) max-w-5xl">
      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h1" className="mb-(--lsd-spacing-base)">
          Sonner
        </Typography>
        <Typography
          variant="body1"
          className="text-muted-foreground text-lg mb-(--lsd-spacing-base)"
        >
          A toast notification component that displays messages to users. Sonner provides beautiful,
          animated toast notifications with rich content support.
        </Typography>
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Installation
        </Typography>
        <CodeExample title="Install the component" code={'pnpm add @nipsys/shadcn-lsd'} />
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Import
        </Typography>
        <CodeExample
          title="Import the component"
          code={`import { toast, Toaster } from '@nipsys/shadcn-lsd';`}
        />
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Setup
        </Typography>
        <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
          Add the{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            Toaster
          </code>{' '}
          component to your app's root layout to enable toast notifications.
        </Typography>
        <CodeExample
          title="Add Toaster to your app"
          code={`// In your root layout or App component
import { Toaster } from '@nipsys/shadcn-lsd';

export default function App() {
  return (
    <>
      {/* Your app content */}
      <Toaster />
    </>
  );
}`}
        />
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Usage
        </Typography>
        <CodeExample title="Basic toast" code={`toast('Event has been created');`} />
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Basic Toasts
        </Typography>
        <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
          Use the{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            toast
          </code>{' '}
          function to display notifications with different types.
        </Typography>

        <ComponentPreview
          title="Basic toast types"
          code={`<div className="flex flex-wrap gap-(--lsd-spacing-base)">
  <Button
    variant="filled"
    onClick={() => toast('Event has been created')}
  >
    Show Simple Toast
  </Button>
  <Button
    variant="filled"
    onClick={() => toast.success('Event has been created')}
  >
    Show Success Toast
  </Button>
  <Button
    variant="filled"
    onClick={() => toast.error('Event has not been created')}
  >
    Show Error Toast
  </Button>
  <Button
    variant="filled"
    onClick={() => toast.info('This is an informational message')}
  >
    Show Info Toast
  </Button>
  <Button
    variant="filled"
    onClick={() => toast.warning('This is a warning message')}
  >
    Show Warning Toast
  </Button>
</div>`}
        >
          <div className="flex flex-wrap gap-(--lsd-spacing-base)">
            <LSDButton
              variant="filled"
              onClick={() => {
                if (typeof window !== 'undefined' && window.toast) {
                  window.toast('Event has been created');
                }
              }}
            >
              Show Simple Toast
            </LSDButton>
            <LSDButton
              variant="filled"
              onClick={() => {
                if (typeof window !== 'undefined' && window.toast) {
                  window.toast.success('Event has been created');
                }
              }}
            >
              Show Success Toast
            </LSDButton>
            <LSDButton
              variant="filled"
              onClick={() => {
                if (typeof window !== 'undefined' && window.toast) {
                  window.toast.error('Event has not been created');
                }
              }}
            >
              Show Error Toast
            </LSDButton>
            <LSDButton
              variant="filled"
              onClick={() => {
                if (typeof window !== 'undefined' && window.toast) {
                  window.toast.info('This is an informational message');
                }
              }}
            >
              Show Info Toast
            </LSDButton>
            <LSDButton
              variant="filled"
              onClick={() => {
                if (typeof window !== 'undefined' && window.toast) {
                  window.toast.warning('This is a warning message');
                }
              }}
            >
              Show Warning Toast
            </LSDButton>
          </div>
        </ComponentPreview>
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Toast with Action
        </Typography>
        <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
          Add an action button to your toast using the{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            action
          </code>{' '}
          option.
        </Typography>

        <ComponentPreview
          title="Toast with action"
          code={`<div className="flex flex-wrap gap-(--lsd-spacing-base)">
  <Button
    variant="filled"
    onClick={() =>
      toast('Event has been created', {
        action: {
          label: 'Undo',
          onClick: () => console.log('Undo'),
        },
      })
    }
  >
    Show Toast with Action
  </Button>
</div>`}
        >
          <div className="flex flex-wrap gap-(--lsd-spacing-base)">
            <LSDButton
              variant="filled"
              onClick={() => {
                if (typeof window !== 'undefined' && window.toast) {
                  window.toast('Event has been created', {
                    action: {
                      label: 'Undo',
                      onClick: () => console.log('Undo'),
                    },
                  });
                }
              }}
            >
              Show Toast with Action
            </LSDButton>
          </div>
        </ComponentPreview>
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Toast with Rich Content
        </Typography>
        <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
          Pass React components as the message to create rich, custom toast content.
        </Typography>

        <ComponentPreview
          title="Toast with rich content"
          code={`<div className="flex flex-wrap gap-(--lsd-spacing-base)">
  <Button
    variant="filled"
    onClick={() =>
      toast(
        <div>
          <h4 className="font-semibold">Event Created</h4>
          <p className="text-sm">
            Your event has been created successfully.
          </p>
        </div>,
        {
          duration: 5000,
        },
      )
    }
  >
    Show Rich Toast
  </Button>
</div>`}
        >
          <div className="flex flex-wrap gap-(--lsd-spacing-base)">
            <LSDButton
              variant="filled"
              onClick={() => {
                if (typeof window !== 'undefined' && window.toast) {
                  window.toast('Event has been created with rich content', {
                    duration: 5000,
                  });
                }
              }}
            >
              Show Rich Toast
            </LSDButton>
          </div>
        </ComponentPreview>
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Persistent Toast
        </Typography>
        <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
          Use{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            duration: Infinity
          </code>{' '}
          to create a toast that doesn't auto-dismiss.
        </Typography>

        <ComponentPreview
          title="Persistent toast"
          code={`<div className="flex flex-wrap gap-(--lsd-spacing-base)">
  <Button
    variant="filled"
    onClick={() =>
      toast('This toast will not close automatically', {
        duration: Infinity,
      })
    }
  >
    Show Persistent Toast
  </Button>
  <Button variant="outlined" onClick={() => toast.dismiss()}>
    Dismiss All Toasts
  </Button>
</div>`}
        >
          <div className="flex flex-wrap gap-(--lsd-spacing-base)">
            <LSDButton
              variant="filled"
              onClick={() => {
                if (typeof window !== 'undefined' && window.toast) {
                  window.toast('This toast will not close automatically', {
                    duration: Number.POSITIVE_INFINITY,
                  });
                }
              }}
            >
              Show Persistent Toast
            </LSDButton>
            <LSDButton
              variant="outlined"
              onClick={() => {
                if (typeof window !== 'undefined' && window.toast) {
                  window.toast.dismiss();
                }
              }}
            >
              Dismiss All Toasts
            </LSDButton>
          </div>
        </ComponentPreview>
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Positioned Toasts
        </Typography>
        <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
          Use the{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            position
          </code>{' '}
          option to control where toasts appear.
        </Typography>

        <ComponentPreview
          title="Positioned toasts"
          code={`<div className="flex flex-wrap gap-(--lsd-spacing-base)">
  <Button
    variant="filled"
    onClick={() =>
      toast('Top-left toast', {
        position: 'top-left',
      })
    }
  >
    Top-Left
  </Button>
  <Button
    variant="filled"
    onClick={() =>
      toast('Top-right toast', {
        position: 'top-right',
      })
    }
  >
    Top-Right
  </Button>
  <Button
    variant="filled"
    onClick={() =>
      toast('Bottom-left toast', {
        position: 'bottom-left',
      })
    }
  >
    Bottom-Left
  </Button>
  <Button
    variant="filled"
    onClick={() =>
      toast('Bottom-right toast', {
        position: 'bottom-right',
      })
    }
  >
    Bottom-Right
  </Button>
</div>`}
        >
          <div className="flex flex-wrap gap-(--lsd-spacing-base)">
            <LSDButton
              variant="filled"
              onClick={() => {
                if (typeof window !== 'undefined' && window.toast) {
                  window.toast('Top-left toast', {
                    position: 'top-left',
                  });
                }
              }}
            >
              Top-Left
            </LSDButton>
            <LSDButton
              variant="filled"
              onClick={() => {
                if (typeof window !== 'undefined' && window.toast) {
                  window.toast('Top-right toast', {
                    position: 'top-right',
                  });
                }
              }}
            >
              Top-Right
            </LSDButton>
            <LSDButton
              variant="filled"
              onClick={() => {
                if (typeof window !== 'undefined' && window.toast) {
                  window.toast('Bottom-left toast', {
                    position: 'bottom-left',
                  });
                }
              }}
            >
              Bottom-Left
            </LSDButton>
            <LSDButton
              variant="filled"
              onClick={() => {
                if (typeof window !== 'undefined' && window.toast) {
                  window.toast('Bottom-right toast', {
                    position: 'bottom-right',
                  });
                }
              }}
            >
              Bottom-Right
            </LSDButton>
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
              Toast Options
            </Typography>
            <div className="space-y-4">
              <div>
                <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                  message
                </code>
                <Typography
                  variant="body1"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    string | React.ReactNode
                  </code>
                  <br />
                  The message to display in the toast.
                </Typography>
              </div>
              <div>
                <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                  duration
                </code>
                <Typography
                  variant="body1"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">number</code>
                  <br />
                  Default: <code className="px-(--lsd-spacing-smaller) bg-muted rounded">4000</code>
                  <br />
                  The duration in milliseconds before the toast auto-dismisses. Use{' '}
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">Infinity</code> for
                  persistent toasts.
                </Typography>
              </div>
              <div>
                <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                  position
                </code>
                <Typography
                  variant="body1"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    "top-left" | "top-right" | "bottom-left" | "bottom-right"
                  </code>
                  <br />
                  Default:{' '}
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    "bottom-right"
                  </code>
                  <br />
                  The position where the toast appears.
                </Typography>
              </div>
              <div>
                <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                  action
                </code>
                <Typography
                  variant="body1"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    &lbrace; label: string; onClick: () =&gt; void &rbrace;
                  </code>
                  <br />
                  An action button to display in the toast.
                </Typography>
              </div>
              <div>
                <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                  id
                </code>
                <Typography
                  variant="body1"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    string | number
                  </code>
                  <br />
                  Optional unique identifier for the toast.
                </Typography>
              </div>
              <div>
                <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                  onDismiss
                </code>
                <Typography
                  variant="body1"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">() =&gt; void</code>
                  <br />
                  Callback function when the toast is dismissed.
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Toaster Props
        </Typography>
        <Card>
          <CardContent className="p-(--lsd-spacing-large)">
            <Typography variant="h3" className="mb-(--lsd-spacing-base)">
              Toaster Component Props
            </Typography>
            <div className="space-y-4">
              <div>
                <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                  theme
                </code>
                <Typography
                  variant="body1"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    "light" | "dark" | "system"
                  </code>
                  <br />
                  Default:{' '}
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">"system"</code>
                  <br />
                  The theme for the toaster. Automatically syncs with your app's theme.
                </Typography>
              </div>
              <div>
                <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                  richColors
                </code>
                <Typography
                  variant="body1"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">boolean</code>
                  <br />
                  Default: <code className="px-(--lsd-spacing-smaller) bg-muted rounded">true</code>
                  <br />
                  Whether to use rich colors for different toast types.
                </Typography>
              </div>
              <div>
                <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                  expand
                </code>
                <Typography
                  variant="body1"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">boolean</code>
                  <br />
                  Default:{' '}
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">false</code>
                  <br />
                  Whether to expand the toast on hover.
                </Typography>
              </div>
              <div>
                <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                  position
                </code>
                <Typography
                  variant="body1"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    "top-left" | "top-right" | "bottom-left" | "bottom-right"
                  </code>
                  <br />
                  Default:{' '}
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    "bottom-right"
                  </code>
                  <br />
                  The default position for all toasts.
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
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">string</code>
                  <br />
                  Additional CSS classes to apply to the toaster.
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
          Sonner toasts follow WAI-ARIA guidelines and are fully accessible. The component
          automatically includes the appropriate{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            role="alert"
          </code>{' '}
          and{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            aria-live
          </code>{' '}
          attributes. Toasts are announced to screen readers and can be dismissed using keyboard
          navigation.
        </Typography>
      </div>
    </div>
  );
}
