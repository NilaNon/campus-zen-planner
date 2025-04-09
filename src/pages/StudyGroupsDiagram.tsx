
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const StudyGroupsDiagram = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold">Study Groups Interface - Design Diagram</h1>
      
      {/* Overview diagram */}
      <Card>
        <CardHeader>
          <CardTitle>Interface Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed p-6 rounded-lg">
            <div className="flex justify-between items-center border-b pb-4 mb-4">
              <div className="font-bold text-lg text-blue-600">Study Groups</div>
              <div className="bg-purple-600 text-white rounded-md px-3 py-1 text-sm flex items-center">
                <span className="mr-1">+</span> Create Group
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 border p-2 rounded-md bg-gray-50 mb-4">
              <div className="col-span-1 bg-blue-100 rounded p-2 text-center">My Groups Tab</div>
              <div className="col-span-1 bg-gray-200 rounded p-2 text-center">Find Groups Tab</div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="border rounded-lg p-3 bg-white">
                <div className="text-sm border-b pb-1 mb-2 flex justify-between">
                  <span className="font-semibold">Group Card 1</span>
                  <span className="bg-purple-100 text-purple-800 rounded px-2 text-xs">Joined</span>
                </div>
                <div className="space-y-1 text-xs">
                  <div>📅 Meeting info</div>
                  <div>📌 Location</div>
                  <div>👥 Members (4)</div>
                  <div>📚 Topics: [SQL] [ER Diagrams]</div>
                </div>
                <div className="mt-2 text-right">
                  <div className="inline-block bg-blue-500 text-white rounded px-2 py-1 text-xs">Message</div>
                </div>
              </div>
              
              <div className="border rounded-lg p-3 bg-white">
                <div className="text-sm border-b pb-1 mb-2 flex justify-between">
                  <span className="font-semibold">Group Card 2</span>
                  <span className="bg-purple-100 text-purple-800 rounded px-2 text-xs">Joined</span>
                </div>
                <div className="space-y-1 text-xs">
                  <div>📅 Meeting info</div>
                  <div>📌 Location</div>
                  <div>👥 Members (5)</div>
                  <div>📚 Topics: [Literature] [Essays]</div>
                </div>
                <div className="mt-2 text-right">
                  <div className="inline-block bg-blue-500 text-white rounded px-2 py-1 text-xs">Message</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Design principles */}
      <Card>
        <CardHeader>
          <CardTitle>Annotations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-4 py-2">
              <p className="font-semibold text-blue-600">Visibility:</p>
              <p>Clear separation between "My Groups" and "Find Groups" sections with visual highlighting of active tab. Color-coded badges clearly indicate "Joined" vs "Open" status.</p>
            </div>
            
            <div className="border-l-4 border-green-600 pl-4 py-2">
              <p className="font-semibold text-green-600">Feedback:</p>
              <p>Buttons change appearance on hover and provide visual confirmation. Action confirmation appears as temporary toast messages.</p>
            </div>
            
            <div className="border-l-4 border-purple-600 pl-4 py-2">
              <p className="font-semibold text-purple-600">Consistency:</p>
              <p>All group cards follow identical layout pattern for recognition. Consistent icons used for meeting time, location, and members.</p>
            </div>
            
            <div className="border-l-4 border-orange-600 pl-4 py-2">
              <p className="font-semibold text-orange-600">Constraints:</p>
              <p>Group creation requires explicit confirmation, preventing accidental actions. Users can only view one section at a time, focusing attention.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudyGroupsDiagram;
