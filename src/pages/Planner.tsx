
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar as CalendarIcon, Clock, BookOpen, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

// Mock data for calendar events
const events = [
  { 
    id: 1, 
    title: 'Essay Writing', 
    type: 'personal', 
    date: new Date(2025, 3, 6),
    startTime: '15:00',
    endTime: '17:00',
    course: 'ENG201',
    notes: 'Complete literature review section'
  },
  { 
    id: 2, 
    title: 'Database Study Group', 
    type: 'group', 
    date: new Date(2025, 3, 7),
    startTime: '14:00',
    endTime: '16:00',
    course: 'CSC302',
    notes: 'Prepare questions on SQL queries'
  },
  { 
    id: 3, 
    title: 'Exam Revision', 
    type: 'personal', 
    date: new Date(2025, 3, 10),
    startTime: '09:00',
    endTime: '12:00',
    course: 'MAT201',
    notes: 'Focus on integration techniques'
  },
  { 
    id: 4, 
    title: 'Assignment Deadline', 
    type: 'deadline', 
    date: new Date(2025, 3, 12),
    dueTime: '23:59',
    course: 'CSC302',
    notes: 'Submit via online portal'
  }
];

const Planner = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(new Date(2025, 3, 7)); // April 7, 2025
  const [showAddDialog, setShowAddDialog] = useState(false);
  
  // Get events for the selected date
  const selectedDateEvents = events.filter(event => 
    date && event.date.getDate() === date.getDate() && 
    event.date.getMonth() === date.getMonth() && 
    event.date.getFullYear() === date.getFullYear()
  );
  
  // Function to get event dates for highlighting in calendar
  const eventDates = events.map(event => event.date);
  
  // Function to add a new event
  const handleAddEvent = () => {
    setShowAddDialog(false);
    toast({
      title: "Event added",
      description: "Your study session has been added to your calendar.",
    });
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Study Planner</h1>
        <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
          <DialogTrigger asChild>
            <Button>Add Study Session</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Study Session</DialogTitle>
              <DialogDescription>
                Create a new study session for your calendar.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="E.g., Essay Writing, Exam Revision" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date">Date</Label>
                  <div className="relative">
                    <CalendarIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input id="date" placeholder="Select date" className="pl-8" defaultValue={date?.toLocaleDateString()} />
                  </div>
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
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="start-time">Start Time</Label>
                  <Input id="start-time" type="time" />
                </div>
                <div>
                  <Label htmlFor="end-time">End Time</Label>
                  <Input id="end-time" type="time" />
                </div>
              </div>
              <div>
                <Label htmlFor="type">Session Type</Label>
                <Select defaultValue="personal">
                  <SelectTrigger id="type">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="personal">Personal Study</SelectItem>
                    <SelectItem value="group">Group Study</SelectItem>
                    <SelectItem value="deadline">Deadline</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="notes">Notes</Label>
                <Input id="notes" placeholder="Any additional details" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowAddDialog(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddEvent}>Add to Calendar</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="mx-auto"
              modifiersStyles={{
                today: {
                  fontWeight: 'bold',
                  color: 'hsl(var(--primary))',
                  border: '1px solid hsl(var(--primary))'
                }
              }}
              modifiers={{
                booked: eventDates
              }}
              modifiersClassNames={{
                booked: 'bg-zen-purple/20 text-foreground font-medium'
              }}
            />
          </CardContent>
        </Card>
        
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>
              {date?.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {selectedDateEvents.length > 0 ? (
              <div className="space-y-4">
                {selectedDateEvents.map((event) => (
                  <div key={event.id} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium">{event.title}</h3>
                        <p className="text-sm text-muted-foreground">Course: {event.course}</p>
                      </div>
                      <Badge
                        variant={
                          event.type === 'personal' ? 'outline' : 
                          event.type === 'group' ? 'default' : 'destructive'
                        }
                      >
                        {event.type === 'personal' ? 'Personal' : 
                         event.type === 'group' ? 'Group' : 'Deadline'}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm mt-3">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>
                        {event.type === 'deadline' ? 
                          `Due by ${event.dueTime}` : 
                          `${event.startTime} - ${event.endTime}`}
                      </span>
                    </div>
                    
                    {event.notes && (
                      <div className="flex items-start gap-2 text-sm mt-1">
                        <BookOpen className="h-4 w-4 text-muted-foreground mt-0.5" />
                        <span>{event.notes}</span>
                      </div>
                    )}
                    
                    <div className="flex justify-end mt-3">
                      <Button size="sm" variant="outline" className="flex items-center gap-1">
                        <Edit className="h-3 w-3" />
                        Edit
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground mb-4">No study sessions or deadlines for this day</p>
                <Button variant="outline" onClick={() => setShowAddDialog(true)}>
                  Add Study Session
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Planner;
