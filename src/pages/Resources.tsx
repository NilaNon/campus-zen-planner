
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useAcademicResources, useWellnessResources, useCommunityResources } from '@/hooks/useResources';
import { BookOpen, Download, ExternalLink, Calendar, MapPin } from 'lucide-react';

const Resources = () => {
  const [activeTab, setActiveTab] = useState('academic');
  const { data: academicResources, isLoading: loadingAcademic } = useAcademicResources();
  const { data: wellnessResources, isLoading: loadingWellness } = useWellnessResources();
  const { data: communityResources, isLoading: loadingCommunity } = useCommunityResources();

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'document':
        return <BookOpen className="h-4 w-4" />;
      case 'link':
        return <ExternalLink className="h-4 w-4" />;
      case 'event':
        return <Calendar className="h-4 w-4" />;
      default:
        return <BookOpen className="h-4 w-4" />;
    }
  };

  const getTabResources = () => {
    switch (activeTab) {
      case 'academic':
        return academicResources || [];
      case 'wellness':
        return wellnessResources || [];
      case 'community':
        return communityResources || [];
      default:
        return [];
    }
  };

  const isLoading = () => {
    switch (activeTab) {
      case 'academic':
        return loadingAcademic;
      case 'wellness':
        return loadingWellness;
      case 'community':
        return loadingCommunity;
      default:
        return false;
    }
  };

  const resources = getTabResources();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Student Resources</h1>
      </div>

      <Tabs defaultValue="academic" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="academic">Academic</TabsTrigger>
          <TabsTrigger value="wellness">Wellness</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
        </TabsList>
        
        <TabsContent value="academic" className="space-y-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {isLoading() ? (
              Array.from({ length: 3 }).map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <CardHeader className="h-24 bg-muted" />
                  <CardContent className="space-y-2 py-4">
                    <div className="h-4 bg-muted rounded" />
                    <div className="h-4 bg-muted rounded w-2/3" />
                  </CardContent>
                </Card>
              ))
            ) : (
              resources.map((resource) => (
                <Card key={resource.id}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline">{resource.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-4 pt-0">
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{resource.location}</span>
                      </div>
                      <Button size="sm" className="w-full mt-2">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="wellness" className="space-y-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {isLoading() ? (
              <div>Loading wellness resources...</div>
            ) : (
              resources.map((resource) => (
                <Card key={resource.id}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline">{resource.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-4 pt-0">
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{resource.location}</span>
                      </div>
                      <Button size="sm" className="w-full mt-2">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="community" className="space-y-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {isLoading() ? (
              <div>Loading community resources...</div>
            ) : (
              resources.map((resource) => (
                <Card key={resource.id}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline">{resource.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-4 pt-0">
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{resource.location}</span>
                      </div>
                      <Button size="sm" className="w-full mt-2">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Resources;
