
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface StudySpaceCardProps {
  name: string;
  location: string;
  available: boolean;
  type: 'individual' | 'group';
  openUntil: string;
  occupancy: number;
  capacity: number;
}

const StudySpaceCard: React.FC<StudySpaceCardProps> = ({
  name,
  location,
  available,
  type,
  openUntil,
  occupancy,
  capacity,
}) => {
  return (
    <Card className="overflow-hidden">
      <div className="h-32 bg-zen-gray relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-muted-foreground">Space Image</span>
        </div>
        <Badge
          className={`absolute top-2 right-2 ${
            available ? 'bg-green-500' : 'bg-red-500'
          }`}
          variant="secondary"
        >
          {available ? 'Available' : 'Full'}
        </Badge>
        <Badge
          className="absolute top-2 left-2"
          variant="outline"
        >
          {type === 'individual' ? 'Quiet Space' : 'Group Space'}
        </Badge>
      </div>
      <CardHeader className="py-3">
        <CardTitle className="text-lg">{name}</CardTitle>
      </CardHeader>
      <CardContent className="pb-4 pt-0">
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>Open until {openUntil}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span>
              {occupancy}/{capacity} occupied
            </span>
          </div>
          <div className="mt-4 pt-3 border-t flex justify-end">
            <Button size="sm">Check In</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudySpaceCard;
