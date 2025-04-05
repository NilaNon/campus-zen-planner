
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Heart, Brain, Clock, Users, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const academicResources = [
  {
    title: "Research Paper Writing Guide",
    description: "A comprehensive guide to writing effective research papers",
    type: "PDF",
    size: "1.2 MB",
    downloads: 256
  },
  {
    title: "Database Design Principles",
    description: "Learn the fundamentals of database normalization and schema design",
    type: "PDF",
    size: "895 KB",
    downloads: 189
  },
  {
    title: "Literature Review Template",
    description: "Structure and format your literature reviews effectively",
    type: "DOCX",
    size: "420 KB",
    downloads: 312
  },
  {
    title: "Statistical Analysis Methods",
    description: "Overview of common statistical methods for research",
    type: "PDF",
    size: "1.8 MB",
    downloads: 145
  }
];

const wellnessResources = [
  {
    title: "Stress Management Techniques",
    description: "Science-backed strategies to manage academic stress",
    category: "Mental Health",
    externalLink: true
  },
  {
    title: "Mindfulness for Students",
    description: "Quick mindfulness exercises for busy student schedules",
    category: "Mindfulness",
    externalLink: false
  },
  {
    title: "Healthy Sleep Habits",
    description: "Tips for improving sleep quality during exam periods",
    category: "Physical Health",
    externalLink: true
  },
  {
    title: "Time Management Workbook",
    description: "Interactive worksheets to improve productivity",
    category: "Productivity",
    externalLink: false
  }
];

const communityResources = [
  {
    title: "Peer Tutoring Program",
    description: "Connect with senior students for academic support",
    schedule: "Mon-Fri, 10:00-16:00",
    location: "Library Learning Commons"
  },
  {
    title: "Student Counseling Services",
    description: "Free and confidential counseling for all students",
    schedule: "Mon-Thu, 09:00-17:00",
    location: "Student Wellness Center, Room 105"
  },
  {
    title: "Academic Skills Workshops",
    description: "Weekly workshops on research, writing, and presentation skills",
    schedule: "Tuesdays, 14:00-16:00",
    location: "Humanities Building, Room 203"
  }
];

const Resources = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Academic & Wellness Resources</h1>
      
      <Tabs defaultValue="academic" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="academic" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            <span>Academic</span>
          </TabsTrigger>
          <TabsTrigger value="wellness" className="flex items-center gap-2">
            <Heart className="h-4 w-4" />
            <span>Wellness</span>
          </TabsTrigger>
          <TabsTrigger value="community" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>Community</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="academic" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-zen-blue" />
                <span>Academic Resources</span>
              </CardTitle>
              <CardDescription>
                Study guides, templates, and research materials to support your academic journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {academicResources.map((resource, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium">{resource.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{resource.description}</p>
                      </div>
                      <Badge variant="outline">{resource.type}</Badge>
                    </div>
                    <div className="flex justify-between items-center mt-4 pt-2 border-t text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <span>Size: {resource.size}</span>
                        <span>{resource.downloads} downloads</span>
                      </div>
                      <Button size="sm" className="flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="wellness" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-500" />
                <span>Wellness Resources</span>
              </CardTitle>
              <CardDescription>
                Tools and guides to help maintain your mental and physical wellbeing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {wellnessResources.map((resource, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium">{resource.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{resource.description}</p>
                      </div>
                      <Badge variant="secondary" className="bg-zen-purple/20 text-zen-purple">
                        {resource.category}
                      </Badge>
                    </div>
                    <div className="flex justify-end mt-4 pt-2 border-t">
                      <Button size="sm" variant="outline" className="flex items-center gap-2">
                        {resource.externalLink ? (
                          <>
                            <ExternalLink className="h-4 w-4" />
                            Visit Resource
                          </>
                        ) : (
                          <>
                            <Download className="h-4 w-4" />
                            Download
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-zen-green" />
                <span>Quick Wellness Tips</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h3 className="font-medium mb-2">Study Break Technique</h3>
                    <p className="text-sm">Try the Pomodoro Technique: 25 minutes of focused study followed by a 5-minute break. After 4 cycles, take a longer 15-30 minute break.</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h3 className="font-medium mb-2">Mindful Breathing</h3>
                    <p className="text-sm">When feeling stressed, practice 4-7-8 breathing: Inhale for 4 seconds, hold for 7 seconds, and exhale for 8 seconds. Repeat 3-4 times.</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h3 className="font-medium mb-2">Hydration Reminder</h3>
                    <p className="text-sm">Keep a water bottle at your study space and aim to drink at least 8 glasses of water throughout the day to maintain focus and energy.</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h3 className="font-medium mb-2">Digital Detox</h3>
                    <p className="text-sm">Set aside 30-60 minutes before bedtime as screen-free time to improve sleep quality and reduce digital eye strain.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="community" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-zen-blue" />
                <span>Campus Support Services</span>
              </CardTitle>
              <CardDescription>
                Available campus resources and support services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {communityResources.map((resource, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <h3 className="font-medium">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1 mb-3">{resource.description}</p>
                    <Separator />
                    <div className="mt-3 pt-2 space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{resource.schedule}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{resource.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Emergency Contacts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <h3 className="font-medium text-red-700">Campus Security</h3>
                  <p className="text-sm text-red-600 mt-1">For emergencies on campus</p>
                  <p className="text-lg font-bold text-red-700 mt-2">+27 555-1000</p>
                  <p className="text-sm text-red-600 mt-1">Available 24/7</p>
                </div>
                
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h3 className="font-medium text-blue-700">Student Counseling Hotline</h3>
                  <p className="text-sm text-blue-600 mt-1">For mental health support and counseling</p>
                  <p className="text-lg font-bold text-blue-700 mt-2">+27 555-2000</p>
                  <p className="text-sm text-blue-600 mt-1">Available 08:00-20:00 weekdays</p>
                </div>
                
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h3 className="font-medium text-green-700">Health Center</h3>
                  <p className="text-sm text-green-600 mt-1">For health concerns and medical assistance</p>
                  <p className="text-lg font-bold text-green-700 mt-2">+27 555-3000</p>
                  <p className="text-sm text-green-600 mt-1">Available 08:00-18:00 weekdays</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Resources;
