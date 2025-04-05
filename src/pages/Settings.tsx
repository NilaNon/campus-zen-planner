
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Bell, User, ShieldCheck, PanelLeftOpen, MailCheck } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Settings = () => {
  const { toast } = useToast();
  const [notificationSettings, setNotificationSettings] = useState({
    studyReminders: true,
    groupMessages: true,
    deadlineAlerts: true,
    spaceAvailability: false,
    wellnessCheckins: true,
    systemUpdates: false
  });
  
  const handleSaveProfile = () => {
    toast({
      title: "Profile updated",
      description: "Your profile information has been saved.",
    });
  };
  
  const handleSaveNotifications = () => {
    toast({
      title: "Notification preferences updated",
      description: "Your notification settings have been saved.",
    });
  };
  
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Settings</h1>
      
      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 lg:w-auto">
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>Profile</span>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            <span>Notifications</span>
          </TabsTrigger>
          <TabsTrigger value="privacy" className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4" />
            <span>Privacy</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>
                Update your personal details and preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" defaultValue="Tshegofatso" />
                  </div>
                  <div>
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" defaultValue="Motsamai" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="tshegofatso.m@example.edu" />
                </div>
                
                <div>
                  <Label htmlFor="student-id">Student ID</Label>
                  <Input id="student-id" defaultValue="STU9876543" readOnly className="bg-muted" />
                </div>
                
                <div>
                  <Label htmlFor="programme">Programme</Label>
                  <Input id="programme" defaultValue="Bachelor of Arts in Social Sciences" />
                </div>
                
                <div>
                  <Label htmlFor="year">Year of Study</Label>
                  <Input id="year" defaultValue="2" />
                </div>
              </div>
              
              <Separator />
              
              <div>
                <CardTitle className="text-base mb-4">Study Preferences</CardTitle>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="quiet-spaces" className="block mb-1">Prefer Quiet Study Spaces</Label>
                      <p className="text-sm text-muted-foreground">Show quiet study spaces first in recommendations</p>
                    </div>
                    <Switch id="quiet-spaces" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="group-study" className="block mb-1">Open to Group Study</Label>
                      <p className="text-sm text-muted-foreground">Allow others to see you as available for group study</p>
                    </div>
                    <Switch id="group-study" />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button onClick={handleSaveProfile}>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>
                Configure how and when you receive notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="block mb-1">Study Reminders</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications for scheduled study sessions</p>
                  </div>
                  <Switch 
                    checked={notificationSettings.studyReminders}
                    onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, studyReminders: checked})}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="block mb-1">Group Messages</Label>
                    <p className="text-sm text-muted-foreground">Notifications for new messages in study groups</p>
                  </div>
                  <Switch 
                    checked={notificationSettings.groupMessages}
                    onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, groupMessages: checked})}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="block mb-1">Deadline Alerts</Label>
                    <p className="text-sm text-muted-foreground">Get reminded about upcoming assignment deadlines</p>
                  </div>
                  <Switch 
                    checked={notificationSettings.deadlineAlerts}
                    onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, deadlineAlerts: checked})}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="block mb-1">Space Availability</Label>
                    <p className="text-sm text-muted-foreground">Alerts when preferred study spaces become available</p>
                  </div>
                  <Switch 
                    checked={notificationSettings.spaceAvailability}
                    onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, spaceAvailability: checked})}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="block mb-1">Wellness Check-ins</Label>
                    <p className="text-sm text-muted-foreground">Periodic reminders to check in on your well-being</p>
                  </div>
                  <Switch 
                    checked={notificationSettings.wellnessCheckins}
                    onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, wellnessCheckins: checked})}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="block mb-1">System Updates</Label>
                    <p className="text-sm text-muted-foreground">Notifications about new features and updates</p>
                  </div>
                  <Switch 
                    checked={notificationSettings.systemUpdates}
                    onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, systemUpdates: checked})}
                  />
                </div>
              </div>
              
              <Separator />
              
              <div>
                <CardTitle className="text-base mb-4">Notification Methods</CardTitle>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <PanelLeftOpen className="h-4 w-4 text-muted-foreground" />
                      <Label>In-App Notifications</Label>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MailCheck className="h-4 w-4 text-muted-foreground" />
                      <Label>Email Notifications</Label>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button onClick={handleSaveNotifications}>Save Preferences</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="privacy" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Privacy Settings</CardTitle>
              <CardDescription>
                Manage who can see your data and study activity
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="block mb-1">Profile Visibility</Label>
                    <p className="text-sm text-muted-foreground">Allow other students to see your profile</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="block mb-1">Study Status Visibility</Label>
                    <p className="text-sm text-muted-foreground">Show when you're currently studying</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="block mb-1">Location Sharing</Label>
                    <p className="text-sm text-muted-foreground">Share your study location with group members</p>
                  </div>
                  <Switch />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="block mb-1">Data Analytics</Label>
                    <p className="text-sm text-muted-foreground">Allow anonymous usage data to improve the app</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
              
              <Separator />
              
              <div>
                <CardTitle className="text-base mb-4">Data Management</CardTitle>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">Export Your Data</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Download a copy of all your personal data and study history
                    </p>
                    <Button variant="outline">Export Data</Button>
                  </div>
                  
                  <div className="p-4 border border-destructive/20 rounded-lg">
                    <h3 className="font-medium text-destructive mb-2">Delete Account</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Permanently delete your account and all associated data
                    </p>
                    <Button variant="destructive">Delete Account</Button>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button>Save Privacy Settings</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
