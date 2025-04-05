
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ToggleGroup, 
  ToggleGroupItem 
} from '@/components/ui/toggle-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Search, MapPin, Users, Clock, Check } from 'lucide-react';
import StudySpaceCard from '@/components/dashboard/StudySpaceCard';

const spaces = [
  {
    id: 1,
    name: 'Library Quiet Zone',
    location: 'Main Library, 2nd Floor',
    available: true,
    type: 'individual' as const,
    openUntil: '20:00',
    occupancy: 12,
    capacity: 30,
    facilities: ['Power outlets', 'Wi-Fi', 'Desk lamps']
  },
  {
    id: 2,
    name: 'Humanities Study Room',
    location: 'Humanities Building, Room 105',
    available: true,
    type: 'group' as const,
    openUntil: '18:00',
    occupancy: 3,
    capacity: 8,
    facilities: ['Whiteboard', 'Projector', 'Wi-Fi']
  },
  {
    id: 3,
    name: 'Science Building Carrels',
    location: 'Science Building, 3rd Floor',
    available: true,
    type: 'individual' as const,
    openUntil: '22:00',
    occupancy: 18,
    capacity: 20,
    facilities: ['Power outlets', 'Wi-Fi', 'Desk lamps']
  },
  {
    id: 4,
    name: 'Student Center Meeting Room',
    location: 'Student Center, 1st Floor',
    available: false,
    type: 'group' as const,
    openUntil: '21:00',
    occupancy: 10,
    capacity: 10,
    facilities: ['Whiteboard', 'TV Screen', 'Wi-Fi', 'Refreshments nearby']
  },
  {
    id: 5,
    name: 'Law Building Study Lounge',
    location: 'Law Building, Ground Floor',
    available: true,
    type: 'individual' as const,
    openUntil: '19:00',
    occupancy: 5,
    capacity: 15,
    facilities: ['Power outlets', 'Wi-Fi', 'Comfortable seating']
  },
  {
    id: 6,
    name: 'Engineering Group Lab',
    location: 'Engineering Building, Room 203',
    available: true,
    type: 'group' as const,
    openUntil: '21:00',
    occupancy: 4,
    capacity: 12,
    facilities: ['Computers', 'Whiteboards', 'Wi-Fi', 'Technical equipment']
  }
];

const StudySpaces = () => {
  const [spaceType, setSpaceType] = useState<string>("all");
  const [availableOnly, setAvailableOnly] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [building, setBuilding] = useState<string>("");
  const [capacity, setCapacity] = useState<number[]>([1]);

  const filteredSpaces = spaces.filter(space => {
    // Filter by availability
    if (availableOnly && !space.available) return false;
    
    // Filter by type
    if (spaceType !== "all" && space.type !== spaceType) return false;
    
    // Filter by search term
    if (searchTerm && !space.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !space.location.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    
    // Filter by building
    if (building && !space.location.includes(building)) return false;
    
    // Filter by capacity
    if (capacity[0] > space.capacity) return false;
    
    return true;
  });

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Find Study Spaces</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Filter Options</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <Label htmlFor="search">Search</Label>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="search"
                  placeholder="Search by name or location..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div>
              <Label>Space Type</Label>
              <ToggleGroup type="single" variant="outline" className="justify-start" value={spaceType} onValueChange={(value) => value && setSpaceType(value)}>
                <ToggleGroupItem value="all">All</ToggleGroupItem>
                <ToggleGroupItem value="individual">Individual</ToggleGroupItem>
                <ToggleGroupItem value="group">Group</ToggleGroupItem>
              </ToggleGroup>
            </div>
            
            <div>
              <Label htmlFor="building">Building</Label>
              <Select value={building} onValueChange={setBuilding}>
                <SelectTrigger id="building">
                  <SelectValue placeholder="Select building" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Buildings</SelectItem>
                  <SelectItem value="Library">Library</SelectItem>
                  <SelectItem value="Humanities">Humanities</SelectItem>
                  <SelectItem value="Science">Science</SelectItem>
                  <SelectItem value="Student Center">Student Center</SelectItem>
                  <SelectItem value="Law">Law</SelectItem>
                  <SelectItem value="Engineering">Engineering</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label>Minimum Capacity</Label>
              <Slider
                defaultValue={[1]}
                max={20}
                step={1}
                value={capacity}
                onValueChange={setCapacity}
                className="py-4"
              />
              <div className="text-sm text-muted-foreground">{capacity[0]} {capacity[0] === 1 ? 'person' : 'people'}</div>
            </div>
          </div>
          
          <div className="flex items-center mt-4">
            <Button variant="outline" size="sm" className={`flex items-center gap-2 ${availableOnly ? 'bg-primary/10' : ''}`} onClick={() => setAvailableOnly(!availableOnly)}>
              {availableOnly && <Check className="h-4 w-4" />}
              Show available only
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <div>
        <h2 className="text-xl font-semibold mb-4">Results ({filteredSpaces.length})</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSpaces.map((space) => (
            <StudySpaceCard key={space.id} {...space} />
          ))}
          {filteredSpaces.length === 0 && (
            <div className="col-span-full py-10 text-center text-muted-foreground">
              No study spaces match your filters. Try adjusting your search criteria.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudySpaces;
