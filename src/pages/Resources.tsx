import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Heart, Brain, Clock, Users, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

// This is a placeholder for the actual Resources page
// You can expand on this as needed
const Resources = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Learning Resources</h1>
      
      <Tabs defaultValue="all">
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Resources</TabsTrigger>
          <TabsTrigger value="textbooks">Textbooks</TabsTrigger>
          <TabsTrigger value="articles">Articles</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-6">
          <ResourceCard
            title="Introduction to Psychology"
            description="A comprehensive introduction to the field of psychology."
            type="Textbook"
            icon={<Brain className="h-5 w-5" />}
            stats={[
              { icon: <Clock className="h-4 w-4" />, value: "8 hours" },
              { icon: <Users className="h-4 w-4" />, value: "250+ users" },
            ]}
          />
          
          <ResourceCard
            title="Advanced Calculus: Theory and Practice"
            description="In-depth exploration of calculus concepts with practical examples."
            type="Textbook"
            icon={<BookOpen className="h-5 w-5" />}
            stats={[
              { icon: <Clock className="h-4 w-4" />, value: "12 hours" },
              { icon: <Users className="h-4 w-4" />, value: "180+ users" },
            ]}
          />
          
          <ResourceCard
            title="Emotional Intelligence in Academic Success"
            description="Article exploring the role of emotional intelligence in student success."
            type="Article"
            icon={<Heart className="h-5 w-5" />}
            stats={[
              { icon: <Clock className="h-4 w-4" />, value: "25 min read" },
              { icon: <Users className="h-4 w-4" />, value: "500+ users" },
            ]}
          />
        </TabsContent>
        
        <TabsContent value="textbooks" className="space-y-6">
          <ResourceCard
            title="Introduction to Psychology"
            description="A comprehensive introduction to the field of psychology."
            type="Textbook"
            icon={<Brain className="h-5 w-5" />}
            stats={[
              { icon: <Clock className="h-4 w-4" />, value: "8 hours" },
              { icon: <Users className="h-4 w-4" />, value: "250+ users" },
            ]}
          />
          
          <ResourceCard
            title="Advanced Calculus: Theory and Practice"
            description="In-depth exploration of calculus concepts with practical examples."
            type="Textbook"
            icon={<BookOpen className="h-5 w-5" />}
            stats={[
              { icon: <Clock className="h-4 w-4" />, value: "12 hours" },
              { icon: <Users className="h-4 w-4" />, value: "180+ users" },
            ]}
          />
        </TabsContent>
        
        <TabsContent value="articles" className="space-y-6">
          <ResourceCard
            title="Emotional Intelligence in Academic Success"
            description="Article exploring the role of emotional intelligence in student success."
            type="Article"
            icon={<Heart className="h-5 w-5" />}
            stats={[
              { icon: <Clock className="h-4 w-4" />, value: "25 min read" },
              { icon: <Users className="h-4 w-4" />, value: "500+ users" },
            ]}
          />
        </TabsContent>
        
        <TabsContent value="videos" className="space-y-6">
          <ResourceCard
            title="Quantum Physics Explained"
            description="Video series breaking down complex quantum physics concepts."
            type="Video Series"
            icon={<Brain className="h-5 w-5" />}
            stats={[
              { icon: <Clock className="h-4 w-4" />, value: "4 hours" },
              { icon: <Users className="h-4 w-4" />, value: "320+ users" },
            ]}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

interface ResourceCardProps {
  title: string;
  description: string;
  type: string;
  icon: React.ReactNode;
  stats: Array<{
    icon: React.ReactNode;
    value: string;
  }>;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ title, description, type, icon, stats }) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription className="mt-2">{description}</CardDescription>
          </div>
          <Badge className="ml-2">{type}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-muted rounded-full">
              {icon}
            </div>
            <div className="flex space-x-4">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center space-x-1">
                  {stat.icon}
                  <span className="text-sm text-muted-foreground">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex space-x-2">
            <Button size="sm" variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
            <Button size="sm">
              <ExternalLink className="h-4 w-4 mr-2" />
              Open
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Resources;
