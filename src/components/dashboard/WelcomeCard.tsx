
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const WelcomeCard = () => {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  
  let greeting = "Good morning";
  if (hours >= 12 && hours < 17) {
    greeting = "Good afternoon";
  } else if (hours >= 17) {
    greeting = "Good evening";
  }

  return (
    <Card className="bg-gradient-to-r from-zen-blue to-zen-purple text-white">
      <CardHeader>
        <CardTitle className="text-2xl">{greeting}, Tshegofatso!</CardTitle>
        <CardDescription className="text-white/80">Let's have a productive study session today</CardDescription>
      </CardHeader>
      <CardContent>
        <p>You have 2 upcoming tasks and 1 study group meeting today.</p>
      </CardContent>
    </Card>
  );
};

export default WelcomeCard;
