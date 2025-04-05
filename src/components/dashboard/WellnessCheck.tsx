
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, Coffee, HeartPulse } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';

const WellnessCheck = () => {
  const { toast } = useToast();
  const [stressLevel, setStressLevel] = useState<number | null>(null);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleStressSelect = (level: number) => {
    setStressLevel(level);
  };

  const handleSubmit = () => {
    if (stressLevel === null) return;
    
    setShowThankYou(true);
    toast({
      title: "Wellness check recorded",
      description: "Thank you for checking in! Wellness resources are available in the Resources tab.",
    });
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2">
          <HeartPulse className="text-red-500" />
          <span>Wellness Check</span>
        </CardTitle>
        <CardDescription>How are you feeling today?</CardDescription>
      </CardHeader>
      <CardContent>
        {!showThankYou ? (
          <>
            <div className="mb-4">
              <Label htmlFor="stress-level" className="mb-2 block">
                Current stress level:
              </Label>
              <div className="flex justify-between gap-2 mt-2">
                {[1, 2, 3, 4, 5].map((level) => (
                  <Button
                    key={level}
                    type="button"
                    variant={stressLevel === level ? "default" : "outline"}
                    className={`flex-1 ${
                      stressLevel === level ? "bg-primary" : ""
                    }`}
                    onClick={() => handleStressSelect(level)}
                  >
                    {level}
                  </Button>
                ))}
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>Low Stress</span>
                <span>High Stress</span>
              </div>
            </div>
            <Button 
              className="w-full mt-2" 
              onClick={handleSubmit}
              disabled={stressLevel === null}
            >
              Submit
            </Button>
          </>
        ) : (
          <div className="py-2 text-center">
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-zen-green/20 flex items-center justify-center">
                <Brain className="w-8 h-8 text-zen-green" />
              </div>
            </div>
            <h3 className="text-lg font-medium mb-1">Thank you for checking in!</h3>
            <p className="text-muted-foreground text-sm mb-3">
              {stressLevel && stressLevel > 3 
                ? "Remember to take breaks and practice self-care." 
                : "You're doing well! Keep up the good work."}
            </p>
            <div className="bg-muted p-3 rounded-lg">
              <div className="flex items-center gap-3">
                <Coffee className="text-amber-500" />
                <div className="text-sm">
                  <span className="block font-medium">Wellness tip:</span>
                  <span className="text-muted-foreground">Take a 5-minute breather between study sessions.</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default WellnessCheck;
