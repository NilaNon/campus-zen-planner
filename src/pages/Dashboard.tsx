
import React from 'react';
import WelcomeCard from '@/components/dashboard/WelcomeCard';
import QuickActions from '@/components/dashboard/QuickActions';
import UpcomingEvents from '@/components/dashboard/UpcomingEvents';
import WellnessCheck from '@/components/dashboard/WellnessCheck';
import StudySpaceCard from '@/components/dashboard/StudySpaceCard';

const Dashboard = () => {
  const nearbySpaces = [
    {
      name: 'Library Quiet Zone',
      location: 'Main Library, 2nd Floor',
      available: true,
      type: 'individual' as const,
      openUntil: '20:00',
      occupancy: 12,
      capacity: 30,
    },
    {
      name: 'Humanities Study Room',
      location: 'Humanities Building, Room 105',
      available: true,
      type: 'group' as const,
      openUntil: '18:00',
      occupancy: 3,
      capacity: 8,
    },
  ];

  return (
    <div className="space-y-6">
      <WelcomeCard />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <QuickActions />
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Nearby Study Spaces</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {nearbySpaces.map((space) => (
                <StudySpaceCard key={space.name} {...space} />
              ))}
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <WellnessCheck />
          <UpcomingEvents />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
