
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Users, CalendarPlus, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const QuickActions = () => {
  const actions = [
    {
      title: 'Find Study Space',
      icon: MapPin,
      description: 'Find available quiet spaces on campus',
      color: 'bg-blue-500',
      link: '/study-spaces'
    },
    {
      title: 'Join Study Group',
      icon: Users,
      description: 'Connect with peers for group study',
      color: 'bg-green-500',
      link: '/study-groups'
    },
    {
      title: 'Schedule Session',
      icon: CalendarPlus,
      description: 'Plan your study sessions',
      color: 'bg-purple-500',
      link: '/planner'
    },
    {
      title: 'Access Resources',
      icon: BookOpen,
      description: 'Find academic resources',
      color: 'bg-amber-500',
      link: '/resources'
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {actions.map((action) => (
          <Link key={action.title} to={action.link} className="block">
            <div className="flex items-start gap-4 p-4 rounded-lg border hover:bg-muted/50 transition-colors group">
              <div className={`${action.color} p-2 rounded-lg text-white`}>
                <action.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-sm group-hover:text-primary transition-colors">{action.title}</h3>
                <p className="text-muted-foreground text-sm">{action.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
};

export default QuickActions;
