
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
          <CardTitle>Applied Design Principles</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-bold text-blue-600 mb-2">Visibility</h3>
              <div className="flex gap-4">
                <div className="flex-1 border rounded p-3 bg-gray-50">
                  <span className="block font-semibold mb-1">Tab Navigation</span>
                  <div className="text-sm">
                    Clear separation between "My Groups" and "Find Groups" sections with visual highlighting of active tab
                  </div>
                </div>
                <div className="flex-1 border rounded p-3 bg-gray-50">
                  <span className="block font-semibold mb-1">Status Badges</span>
                  <div className="text-sm">
                    Color-coded badges clearly indicate "Joined" vs "Open" status
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-bold text-green-600 mb-2">Feedback</h3>
              <div className="flex gap-4">
                <div className="flex-1 border rounded p-3 bg-gray-50">
                  <span className="block font-semibold mb-1">Interactive Elements</span>
                  <div className="text-sm">
                    Buttons change appearance on hover and provide visual confirmation
                  </div>
                </div>
                <div className="flex-1 border rounded p-3 bg-gray-50">
                  <span className="block font-semibold mb-1">Toast Notifications</span>
                  <div className="text-sm">
                    Action confirmation appears as temporary toast messages
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-bold text-purple-600 mb-2">Consistency</h3>
              <div className="flex gap-4">
                <div className="flex-1 border rounded p-3 bg-gray-50">
                  <span className="block font-semibold mb-1">Card Layout</span>
                  <div className="text-sm">
                    All group cards follow identical layout pattern for recognition
                  </div>
                </div>
                <div className="flex-1 border rounded p-3 bg-gray-50">
                  <span className="block font-semibold mb-1">Iconography</span>
                  <div className="text-sm">
                    Consistent icons used for meeting time, location, members
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-bold text-orange-600 mb-2">Constraints</h3>
              <div className="flex gap-4">
                <div className="flex-1 border rounded p-3 bg-gray-50">
                  <span className="block font-semibold mb-1">Dialog Confirmation</span>
                  <div className="text-sm">
                    Group creation requires explicit confirmation, preventing accidental actions
                  </div>
                </div>
                <div className="flex-1 border rounded p-3 bg-gray-50">
                  <span className="block font-semibold mb-1">Tab Interface</span>
                  <div className="text-sm">
                    Users can only view one section at a time, focusing attention
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudyGroupsDiagram;
