
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Users, Clock } from 'lucide-react';

interface StudySpaceCardProps {
  name: string;
  location: string;
  available: boolean;
  type: 'individual' | 'group';
  openUntil: string;
  occupancy: number;
  capacity: number;
  facilities?: string[];
}

const StudySpaceCard: React.FC<StudySpaceCardProps> = ({
  name,
  location,
  available,
  type,
  openUntil,
  occupancy,
  capacity,
  facilities
}) => {
  const occupancyPercentage = Math.round((occupancy / capacity) * 100);
  
  return (
    <Card className={`overflow-hidden ${!available ? 'opacity-70' : ''}`}>
      <CardContent className="p-0">
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-medium">{name}</h3>
              <p className="text-sm text-muted-foreground">{location}</p>
            </div>
            <Badge variant={available ? "outline" : "secondary"}>
              {available ? 'Available' : 'Full'}
            </Badge>
          </div>
          
          <div className="flex items-center gap-2 text-sm mt-3">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>Open until {openUntil}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm mt-1">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span>{occupancy}/{capacity} spaces ({occupancyPercentage}% full)</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm mt-1">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span>{type === 'individual' ? 'Individual Study' : 'Group Study'}</span>
          </div>
          
          {facilities && facilities.length > 0 && (
            <div className="mt-3">
              <div className="flex flex-wrap gap-1">
                {facilities.map((facility, index) => (
                  <Badge key={index} variant="secondary" className="text-xs font-normal">
                    {facility}
                  </Badge>
                ))}
              </div>
            </div>
          )}
          
          <div className="mt-4">
            <Button disabled={!available} className="w-full">
              {available ? 'Reserve Space' : 'Join Waitlist'}
            </Button>
          </div>
        </div>
        
        <div className="h-2 bg-muted">
          <div 
            className={`h-full ${occupancyPercentage >= 90 ? 'bg-destructive' : 'bg-primary'}`}
            style={{ width: `${occupancyPercentage}%` }}
          ></div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudySpaceCard;
