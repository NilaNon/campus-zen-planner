
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Map, BookOpen, Globe, Video, FileText, Users, Lightbulb, ExternalLink, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Resources = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Academic Resources</h1>
      
      <Tabs defaultValue="all">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Resources</TabsTrigger>
          <TabsTrigger value="library">Library</TabsTrigger>
          <TabsTrigger value="online">Online</TabsTrigger>
          <TabsTrigger value="tutoring">Tutoring</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ResourceCard 
              title="Library Services"
              description="Access e-books, research databases, and academic journals."
              location="Main Library Building"
              icon={<BookOpen className="h-5 w-5" />}
              category="library"
            />
            
            <ResourceCard 
              title="Online Databases"
              description="JSTOR, IEEE, and other research databases for academic papers."
              icon={<Globe className="h-5 w-5" />}
              category="online"
              link="https://library.university.edu/databases"
            />
            
            <ResourceCard 
              title="Video Tutorials"
              description="Access to LinkedIn Learning and other educational video platforms."
              icon={<Video className="h-5 w-5" />}
              category="online"
              link="https://university.edu/video-resources"
            />
            
            <ResourceCard 
              title="Writing Center"
              description="Get help with essays, research papers, and other written assignments."
              location="Humanities Building, Room 203"
              icon={<FileText className="h-5 w-5" />}
              category="tutoring"
              hours="Mon-Fri: 9:00-17:00"
            />
            
            <ResourceCard 
              title="Peer Tutoring"
              description="Free peer tutoring services for most undergraduate courses."
              location="Student Center, 2nd Floor"
              icon={<Users className="h-5 w-5" />}
              category="tutoring"
              hours="Mon-Thu: 10:00-18:00, Fri: 10:00-15:00"
            />
            
            <ResourceCard 
              title="Academic Success Center"
              description="Workshops on study skills, time management, and academic planning."
              location="Administration Building, Room 105"
              icon={<Lightbulb className="h-5 w-5" />}
              category="tutoring"
              hours="Mon-Fri: 8:30-16:30"
            />
          </div>
        </TabsContent>
        
        <TabsContent value="library" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ResourceCard 
              title="Library Services"
              description="Access e-books, research databases, and academic journals."
              location="Main Library Building"
              icon={<BookOpen className="h-5 w-5" />}
              category="library"
            />
            
            <ResourceCard 
              title="Special Collections"
              description="Rare books, manuscripts, and university archives."
              location="Main Library Building, 3rd Floor"
              icon={<BookOpen className="h-5 w-5" />}
              category="library"
              hours="Mon-Fri: 10:00-16:00"
            />
            
            <ResourceCard 
              title="Media Center"
              description="Borrow cameras, recording equipment, and use editing software."
              location="Media Library, Ground Floor"
              icon={<Video className="h-5 w-5" />}
              category="library"
              hours="Mon-Sat: 9:00-20:00"
            />
          </div>
        </TabsContent>
        
        <TabsContent value="online" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ResourceCard 
              title="Online Databases"
              description="JSTOR, IEEE, and other research databases for academic papers."
              icon={<Globe className="h-5 w-5" />}
              category="online"
              link="https://library.university.edu/databases"
            />
            
            <ResourceCard 
              title="Video Tutorials"
              description="Access to LinkedIn Learning and other educational video platforms."
              icon={<Video className="h-5 w-5" />}
              category="online"
              link="https://university.edu/video-resources"
            />
            
            <ResourceCard 
              title="E-Book Collection"
              description="Thousands of academic e-books available for online reading."
              icon={<BookOpen className="h-5 w-5" />}
              category="online"
              link="https://library.university.edu/ebooks"
            />
          </div>
        </TabsContent>
        
        <TabsContent value="tutoring" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ResourceCard 
              title="Writing Center"
              description="Get help with essays, research papers, and other written assignments."
              location="Humanities Building, Room 203"
              icon={<FileText className="h-5 w-5" />}
              category="tutoring"
              hours="Mon-Fri: 9:00-17:00"
            />
            
            <ResourceCard 
              title="Peer Tutoring"
              description="Free peer tutoring services for most undergraduate courses."
              location="Student Center, 2nd Floor"
              icon={<Users className="h-5 w-5" />}
              category="tutoring"
              hours="Mon-Thu: 10:00-18:00, Fri: 10:00-15:00"
            />
            
            <ResourceCard 
              title="Academic Success Center"
              description="Workshops on study skills, time management, and academic planning."
              location="Administration Building, Room 105"
              icon={<Lightbulb className="h-5 w-5" />}
              category="tutoring"
              hours="Mon-Fri: 8:30-16:30"
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

interface ResourceCardProps {
  title: string;
  description: string;
  location?: string;
  icon: React.ReactNode;
  category: 'library' | 'online' | 'tutoring';
  hours?: string;
  link?: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  location,
  icon,
  category,
  hours,
  link
}) => {
  return (
    <Card>
      <CardHeader className="pb-2 flex flex-row items-start justify-between">
        <div className="flex items-center">
          <div className={`mr-3 p-2 rounded-full 
            ${category === 'library' ? 'bg-primary/10 text-primary' : 
              category === 'online' ? 'bg-secondary/10 text-secondary' : 
              'bg-accent/10 text-accent'}`}>
            {icon}
          </div>
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
        <Badge variant="outline">{category}</Badge>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">
          {description}
        </p>
        
        {location && (
          <div className="flex items-center text-sm text-muted-foreground mb-1">
            <Map className="h-4 w-4 mr-1" />
            <span>{location}</span>
          </div>
        )}
        
        {hours && (
          <div className="flex items-center text-sm text-muted-foreground mb-1">
            <Clock className="h-4 w-4 mr-1" />
            <span>{hours}</span>
          </div>
        )}
        
        {link && (
          <Button variant="outline" size="sm" className="mt-3 w-full" asChild>
            <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
              <ExternalLink className="h-4 w-4 mr-1" />
              Access Resource
            </a>
          </Button>
        )}
        
        {!link && (
          <Button variant="outline" size="sm" className="mt-3 w-full">
            Learn More
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default Resources;
