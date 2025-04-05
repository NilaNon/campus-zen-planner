
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Users, Plus, BookOpen } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const myGroups = [
  {
    id: 1,
    name: 'Database Management',
    course: 'CSC302',
    nextMeeting: 'Today, 15:00 - 17:00',
    location: 'Library Study Room 2',
    members: 4,
    topics: ['SQL Queries', 'Normalization', 'ER Diagrams']
  },
  {
    id: 2,
    name: 'Literary Analysis Group',
    course: 'ENG201',
    nextMeeting: 'Thu, 9 Apr, 14:00 - 16:00',
    location: 'Humanities Building, Room 105',
    members: 5,
    topics: ['19th Century Literature', 'Critical Analysis', 'Essay Structure']
  }
];

const availableGroups = [
  {
    id: 3,
    name: 'Calculus Study Group',
    course: 'MAT201',
    nextMeeting: 'Wed, 8 Apr, 10:00 - 12:00',
    location: 'Science Building, Room 303',
    members: 3,
    maxMembers: 6,
    topics: ['Differential Equations', 'Integration', 'Applications']
  },
  {
    id: 4,
    name: 'Research Methods',
    course: 'SOC305',
    nextMeeting: 'Fri, 10 Apr, 13:00 - 15:00',
    location: 'Social Sciences Building, Room 205',
    members: 4,
    maxMembers: 6,
    topics: ['Qualitative Methods', 'Survey Design', 'Data Analysis']
  },
  {
    id: 5,
    name: 'Psychology Study Circle',
    course: 'PSY201',
    nextMeeting: 'Mon, 13 Apr, 14:00 - 16:00',
    location: 'Humanities Building, Room 108',
    members: 5,
    maxMembers: 8,
    topics: ['Developmental Psychology', 'Research Methods', 'Case Studies']
  }
];

interface GroupCardProps {
  group: typeof myGroups[0] | typeof availableGroups[0];
  type: 'my' | 'available';
}

const GroupCard: React.FC<GroupCardProps> = ({ group, type }) => {
  const { toast } = useToast();
  
  const handleAction = () => {
    if (type === 'my') {
      toast({
        title: "Message sent",
        description: `You've messaged the ${group.name} group.`,
      });
    } else {
      toast({
        title: "Request sent",
        description: `Your request to join ${group.name} has been sent.`,
      });
    }
  };
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{group.name}</CardTitle>
            <CardDescription>Course: {group.course}</CardDescription>
          </div>
          <Badge>{type === 'my' ? 'Joined' : 'Open'}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>{group.nextMeeting}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span>{group.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span>
              {group.members} members
              {type === 'available' && (group as typeof availableGroups[0]).maxMembers && 
                ` (${(group as typeof availableGroups[0]).maxMembers} max)`}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-muted-foreground" />
            <div className="flex flex-wrap gap-1">
              {group.topics.map((topic, index) => (
                <Badge key={index} variant="outline" className="font-normal text-xs">
                  {topic}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Button onClick={handleAction}>
            {type === 'my' ? 'Message Group' : 'Request to Join'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const StudyGroups = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Study Groups</h1>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Create Group
        </Button>
      </div>
      
      <Tabs defaultValue="my-groups">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="my-groups">My Groups</TabsTrigger>
          <TabsTrigger value="find-groups">Find Groups</TabsTrigger>
        </TabsList>
        
        <TabsContent value="my-groups" className="mt-0">
          {myGroups.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {myGroups.map((group) => (
                <GroupCard key={group.id} group={group} type="my" />
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-10">
                <Users className="h-10 w-10 text-muted-foreground mb-3" />
                <h3 className="text-lg font-medium mb-1">No groups yet</h3>
                <p className="text-muted-foreground text-center mb-4">
                  You haven't joined any study groups yet.
                </p>
                <Button>Find Groups to Join</Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>
        
        <TabsContent value="find-groups" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {availableGroups.map((group) => (
              <GroupCard key={group.id} group={group} type="available" />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StudyGroups;
