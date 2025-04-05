
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Link as LinkIcon, FileText, Map } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Resources = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Academic Resources</h1>
        <p className="text-muted-foreground">Find study materials and campus services to help you succeed.</p>
      </div>

      <Tabs defaultValue="library">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="library">Library</TabsTrigger>
          <TabsTrigger value="online">Online Resources</TabsTrigger>
          <TabsTrigger value="tutoring">Tutoring</TabsTrigger>
          <TabsTrigger value="campus">Campus Services</TabsTrigger>
        </TabsList>
        
        <TabsContent value="library">
          <Card>
            <CardHeader>
              <CardTitle>Library Resources</CardTitle>
              <CardDescription>Access study materials and quiet spaces</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Main Library</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-2"><span className="font-medium">Hours:</span> 8:00 AM - 8:00 PM (Mon-Fri)</p>
                    <p className="text-sm mb-2"><span className="font-medium">Location:</span> Central Campus, Building A</p>
                    <p className="text-sm mb-4"><span className="font-medium">Features:</span> Quiet study zones, group study rooms, computer lab</p>
                    <Button size="sm" variant="outline">View Map</Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Science & Technology Library</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-2"><span className="font-medium">Hours:</span> 9:00 AM - 6:00 PM (Mon-Fri)</p>
                    <p className="text-sm mb-2"><span className="font-medium">Location:</span> Science Building, 2nd Floor</p>
                    <p className="text-sm mb-4"><span className="font-medium">Features:</span> STEM resources, 3D printing lab</p>
                    <Button size="sm" variant="outline">View Map</Button>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Study Spaces Available Now</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-3 rounded-lg border">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">Quiet Zone</h4>
                        <p className="text-sm text-muted-foreground">Main Library, 3rd Floor</p>
                      </div>
                      <span className="text-sm px-2 py-1 bg-green-100 text-green-800 rounded-full">12 Spots</span>
                    </div>
                  </div>
                  
                  <div className="p-3 rounded-lg border">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">Group Study Room #3</h4>
                        <p className="text-sm text-muted-foreground">Main Library, 2nd Floor</p>
                      </div>
                      <span className="text-sm px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">1 Room</span>
                    </div>
                  </div>
                  
                  <div className="p-3 rounded-lg border">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">Computer Lab</h4>
                        <p className="text-sm text-muted-foreground">Main Library, 1st Floor</p>
                      </div>
                      <span className="text-sm px-2 py-1 bg-red-100 text-red-800 rounded-full">Full</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="online">
          <Card>
            <CardHeader>
              <CardTitle>Online Learning Resources</CardTitle>
              <CardDescription>Digital materials to support your studies</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="border border-blue-100 bg-blue-50/50">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-zen-blue" />
                      <CardTitle className="text-lg">E-Library Access</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4">Access thousands of e-books, journals, and research papers with your student credentials.</p>
                    <Button size="sm">Access E-Library</Button>
                  </CardContent>
                </Card>
                
                <Card className="border border-green-100 bg-green-50/50">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <LinkIcon className="h-5 w-5 text-zen-green" />
                      <CardTitle className="text-lg">Learning Platforms</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4">Free access to premium learning platforms like Coursera, LinkedIn Learning, and more.</p>
                    <Button size="sm">Browse Platforms</Button>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Popular Resources</h3>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg border flex items-center gap-3">
                    <FileText className="h-5 w-5 text-zen-purple" />
                    <div>
                      <h4 className="font-medium">Past Exam Papers</h4>
                      <p className="text-sm text-muted-foreground">Access previous years' exam papers for all courses</p>
                    </div>
                  </div>
                  
                  <div className="p-3 rounded-lg border flex items-center gap-3">
                    <Map className="h-5 w-5 text-zen-blue" />
                    <div>
                      <h4 className="font-medium">Research Databases</h4>
                      <p className="text-sm text-muted-foreground">Search specialized academic databases</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="tutoring">
          <Card>
            <CardHeader>
              <CardTitle>Tutoring Services</CardTitle>
              <CardDescription>Get help with your courses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>Book a session with one of our qualified tutors or join a group tutoring session.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">One-on-One Tutoring</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm mb-4">Book a personalized tutoring session tailored to your specific needs and questions.</p>
                      <Button>Schedule Session</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Group Tutoring</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm mb-4">Join subject-specific group sessions with other students to learn collaboratively.</p>
                      <Button>View Schedule</Button>
                    </CardContent>
                  </Card>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Available Tutors</h3>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg border">
                      <div className="flex justify-between">
                        <div>
                          <h4 className="font-medium">Dr. Sarah Johnson</h4>
                          <p className="text-sm text-muted-foreground">Mathematics, Statistics</p>
                          <div className="flex items-center mt-1">
                            <div className="flex">
                              {Array(5).fill(0).map((_, i) => (
                                <span key={i} className="text-yellow-400">★</span>
                              ))}
                            </div>
                            <span className="text-xs ml-2">(24 reviews)</span>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">Book</Button>
                      </div>
                    </div>
                    
                    <div className="p-3 rounded-lg border">
                      <div className="flex justify-between">
                        <div>
                          <h4 className="font-medium">Prof. Michael Chen</h4>
                          <p className="text-sm text-muted-foreground">Computer Science, Programming</p>
                          <div className="flex items-center mt-1">
                            <div className="flex">
                              {Array(5).fill(0).map((_, i) => (
                                <span key={i} className={i < 4 ? "text-yellow-400" : "text-gray-300"}>★</span>
                              ))}
                            </div>
                            <span className="text-xs ml-2">(18 reviews)</span>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">Book</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="campus">
          <Card>
            <CardHeader>
              <CardTitle>Campus Services</CardTitle>
              <CardDescription>Support services available on campus</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Writing Center</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-2"><span className="font-medium">Hours:</span> 10:00 AM - 4:00 PM (Mon-Fri)</p>
                    <p className="text-sm mb-2"><span className="font-medium">Location:</span> Humanities Building, Room 203</p>
                    <p className="text-sm mb-4"><span className="font-medium">Services:</span> Essay reviews, writing help</p>
                    <Button size="sm">Make Appointment</Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Technology Help Desk</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-2"><span className="font-medium">Hours:</span> 8:00 AM - 6:00 PM (Mon-Fri)</p>
                    <p className="text-sm mb-2"><span className="font-medium">Location:</span> Student Center, 1st Floor</p>
                    <p className="text-sm mb-4"><span className="font-medium">Services:</span> Tech support, software help</p>
                    <Button size="sm">Get Help</Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Counseling Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-2"><span className="font-medium">Hours:</span> 9:00 AM - 5:00 PM (Mon-Fri)</p>
                    <p className="text-sm mb-2"><span className="font-medium">Location:</span> Health Center, Wing B</p>
                    <p className="text-sm mb-4"><span className="font-medium">Services:</span> Mental health support</p>
                    <Button size="sm">Schedule Consultation</Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Resources;
