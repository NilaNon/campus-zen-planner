
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Users, Plus, BookOpen, Search, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

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
    <Card className="group hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{group.name}</CardTitle>
            <CardDescription>Course: {group.course}</CardDescription>
          </div>
          <Badge className={type === 'my' ? 'bg-zen-purple' : 'bg-green-500'}>
            {type === 'my' ? 'Joined' : 'Open'}
          </Badge>
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
          <Button 
            onClick={handleAction}
            className={type === 'my' ? 'bg-primary' : 'bg-zen-purple'}
          >
            {type === 'my' ? 'Message Group' : 'Request to Join'}
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const CreateGroupDialog = () => {
  const { toast } = useToast();
  const [showDialog, setShowDialog] = useState(false);
  
  const handleCreate = () => {
    setShowDialog(false);
    toast({
      title: "Group created",
      description: "Your study group has been created successfully.",
    });
  };
  
  return (
    <Dialog open={showDialog} onOpenChange={setShowDialog}>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2 bg-zen-purple hover:bg-zen-purple/90">
          <Plus className="h-4 w-4" />
          Create Group
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Create New Study Group</DialogTitle>
          <DialogDescription>
            Fill in the details to create a new study group and invite your classmates.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <Label htmlFor="name">Group Name</Label>
              <Input id="name" placeholder="E.g., Calculus Study Group" />
            </div>
            <div>
              <Label htmlFor="course">Course</Label>
              <Select>
                <SelectTrigger id="course">
                  <SelectValue placeholder="Select course" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="CSC302">CSC302 - Database Systems</SelectItem>
                  <SelectItem value="ENG201">ENG201 - Literature</SelectItem>
                  <SelectItem value="MAT201">MAT201 - Calculus</SelectItem>
                  <SelectItem value="PSY201">PSY201 - Psychology</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="max-members">Maximum Members</Label>
              <Select defaultValue="6">
                <SelectTrigger id="max-members">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3">3 members</SelectItem>
                  <SelectItem value="4">4 members</SelectItem>
                  <SelectItem value="5">5 members</SelectItem>
                  <SelectItem value="6">6 members</SelectItem>
                  <SelectItem value="8">8 members</SelectItem>
                  <SelectItem value="10">10 members</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div>
            <Label htmlFor="topics">Topics (comma separated)</Label>
            <Input id="topics" placeholder="E.g., Integration, Calculus, Math" />
          </div>
          
          <div>
            <Label htmlFor="description">Group Description</Label>
            <Textarea 
              id="description" 
              placeholder="Describe the purpose and goals of your study group"
              rows={3}
            />
          </div>
          
          <div>
            <Label>Meeting Details</Label>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <Input placeholder="Date (e.g., Wed, Apr 8)" />
              <Input placeholder="Time (e.g., 14:00 - 16:00)" />
              <Input className="col-span-2" placeholder="Location (e.g., Library Study Room 2)" />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setShowDialog(false)}>
            Cancel
          </Button>
          <Button onClick={handleCreate} className="bg-zen-purple hover:bg-zen-purple/90">
            Create Group
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const StudyGroups = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredGroups = availableGroups.filter(group => 
    group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    group.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
    group.topics.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold bg-gradient-to-r from-zen-blue to-zen-purple bg-clip-text text-transparent">Study Groups</h1>
        <CreateGroupDialog />
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
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, course, or topic..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          {filteredGroups.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredGroups.map((group) => (
                <GroupCard key={group.id} group={group} type="available" />
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <Search className="h-10 w-10 text-muted-foreground mb-3 mx-auto" />
              <h3 className="text-lg font-medium mb-1">No groups found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or create a new group.
              </p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StudyGroups;
