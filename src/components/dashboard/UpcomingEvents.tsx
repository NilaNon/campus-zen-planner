
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Users, MapPin } from 'lucide-react';

const events = [
  {
    title: 'Database Study Group',
    type: 'group',
    date: 'Today',
    time: '15:00 - 17:00',
    location: 'Library Study Room 2',
    participants: 4
  },
  {
    title: 'Essay Deadline: Literature Review',
    type: 'deadline',
    date: 'Tomorrow',
    time: '23:59',
    course: 'ENG201'
  },
  {
    title: 'Mathematics Revision',
    type: 'personal',
    date: 'Wed, 8 Apr',
    time: '14:00 - 16:00',
    location: 'Humanities Quiet Room'
  }
];

const EventItem = ({ event }: { event: typeof events[0] }) => {
  return (
    <div className="py-3 border-b last:border-b-0">
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-medium">{event.title}</h4>
        <Badge variant={event.type === 'group' ? 'default' : event.type === 'deadline' ? 'destructive' : 'outline'}>
          {event.type === 'group' ? 'Group' : event.type === 'deadline' ? 'Deadline' : 'Personal'}
        </Badge>
      </div>
      <div className="flex flex-col gap-1 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Calendar className="h-3.5 w-3.5" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-3.5 w-3.5" />
          <span>{event.time}</span>
        </div>
        {(event.type === 'group' || event.type === 'personal') && (
          <div className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5" />
            <span>{event.location}</span>
          </div>
        )}
        {event.type === 'group' && (
          <div className="flex items-center gap-2">
            <Users className="h-3.5 w-3.5" />
            <span>{event.participants} participants</span>
          </div>
        )}
        {event.type === 'deadline' && event.course && (
          <div className="flex items-center gap-2">
            <span className="font-medium">Course: {event.course}</span>
          </div>
        )}
      </div>
    </div>
  );
};

const UpcomingEvents = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Events</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="divide-y">
          {events.map((event, index) => (
            <EventItem key={index} event={event} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UpcomingEvents;
