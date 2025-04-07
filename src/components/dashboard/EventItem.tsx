
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Users, MapPin } from 'lucide-react';

interface EventItemProps {
  event: {
    id: string;
    title: string;
    type: 'group' | 'deadline' | 'personal';
    date: string;
    time: string;
    location?: string;
    participants?: number;
    course?: string;
  };
}

const EventItem: React.FC<EventItemProps> = ({ event }) => {
  return (
    <div className="flex items-start gap-3 p-3 border-b last:border-0">
      <div className="mt-1">
        {event.type === 'group' && (
          <div className="bg-blue-100 p-2 rounded-md">
            <Users className="w-4 h-4 text-blue-600" />
          </div>
        )}
        {event.type === 'deadline' && (
          <div className="bg-red-100 p-2 rounded-md">
            <Clock className="w-4 h-4 text-red-600" />
          </div>
        )}
        {event.type === 'personal' && (
          <div className="bg-green-100 p-2 rounded-md">
            <Calendar className="w-4 h-4 text-green-600" />
          </div>
        )}
      </div>
      <div className="flex-1">
        <div className="font-medium">{event.title}</div>
        <div className="text-xs text-muted-foreground flex flex-wrap gap-2 mt-1">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" /> {event.date}, {event.time}
          </span>
          
          {event.location && (
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" /> {event.location}
            </span>
          )}
          
          {event.participants && (
            <span className="flex items-center gap-1">
              <Users className="w-3 h-3" /> {event.participants} participants
            </span>
          )}
          
          {event.course && (
            <Badge variant="outline" className="text-xs py-0">
              {event.course}
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventItem;
