'use client';

import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Switch,
  Typography,
} from '@nipsys/shadcn-lsd';
import { UserIcon } from '@phosphor-icons/react';

interface ThemeDemoCardProps {
  themeMode?: string;
  themeAccent?: string;
}

export function ThemeDemoCard({
  themeMode = 'light',
  themeAccent = 'monochrome',
}: ThemeDemoCardProps) {
  return (
    <div data-theme={themeAccent} className={themeMode}>
      <Card>
        <CardHeader>
          <div className="flex items-start gap-4">
            {/* Avatar placeholder */}
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
              <UserIcon className="h-6 w-6" weight="duotone" />
            </div>
            <div className="flex-1 space-y-1">
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage your profile and preferences</CardDescription>
            </div>
            {/* Status badges */}
            <div className="flex gap-2">
              <Badge variant="success">Verified</Badge>
              <Badge variant="info">Premium</Badge>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Profile Information */}
          <div className="space-y-3">
            <Typography variant="label1">Profile Information</Typography>
            <div className="space-y-3">
              <div className="space-y-1">
                <label htmlFor="displayName" className="text-sm">
                  Display Name
                </label>
                <Input id="displayName" placeholder="John Doe" />
              </div>
              <div className="space-y-1">
                <label htmlFor="email" className="text-sm">
                  Email Address
                </label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div className="space-y-3">
            <Typography variant="label1">Preferences</Typography>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <label htmlFor="notifications" className="text-sm font-medium block">
                    Email Notifications
                  </label>
                  <Typography variant="body3" color="secondary" className="block">
                    Receive updates about your account
                  </Typography>
                </div>
                <Switch id="notifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <label htmlFor="darkMode" className="text-sm font-medium block">
                    Dark Mode
                  </label>
                  <Typography variant="body3" color="secondary" className="block">
                    Use dark theme across the app
                  </Typography>
                </div>
                <Switch id="darkMode" />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <label htmlFor="autoSave" className="text-sm font-medium block">
                    Auto-save Changes
                  </label>
                  <Typography variant="body3" color="secondary" className="block">
                    Automatically save your work
                  </Typography>
                </div>
                <Switch id="autoSave" defaultChecked />
              </div>
            </div>
          </div>

          {/* Regional Settings */}
          <div className="space-y-3">
            <Typography variant="label1">Regional Settings</Typography>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-1">
                <label htmlFor="language" className="text-sm">
                  Language
                </label>
                <Select defaultValue="en">
                  <SelectTrigger id="language">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Español</SelectItem>
                    <SelectItem value="fr">Français</SelectItem>
                    <SelectItem value="de">Deutsch</SelectItem>
                    <SelectItem value="ja">日本語</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1">
                <label htmlFor="timezone" className="text-sm">
                  Timezone
                </label>
                <Select defaultValue="utc-5">
                  <SelectTrigger id="timezone">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="utc-8">Pacific Time (UTC-8)</SelectItem>
                    <SelectItem value="utc-5">Eastern Time (UTC-5)</SelectItem>
                    <SelectItem value="utc+0">UTC (UTC+0)</SelectItem>
                    <SelectItem value="utc+1">Central European (UTC+1)</SelectItem>
                    <SelectItem value="utc+9">Japan (UTC+9)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="border-t pt-6">
            <Typography variant="label1" color="destructive">
              Danger Zone
            </Typography>
            <div className="mt-3 flex items-center justify-between gap-4">
              <div className="space-y-1 flex flex-col">
                <Typography variant="body1">Delete Account</Typography>
                <Typography variant="body3" color="secondary">
                  Permanently delete your account and all data
                </Typography>
              </div>
              <Button variant="destructive">Delete</Button>
            </div>
          </div>
        </CardContent>

        <CardFooter className="justify-end gap-2">
          <Button variant="outlined">Cancel</Button>
          <Button>Save Changes</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
