
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PlannerDiagram = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold">Study Planner Interface - Design Diagram</h1>
      
      {/* Overview diagram */}
      <Card>
        <CardHeader>
          <CardTitle>Interface Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed p-6 rounded-lg">
            <div className="flex justify-between items-center border-b pb-4 mb-4">
              <div className="font-bold text-lg text-blue-600">Study Planner</div>
              <div className="bg-purple-600 text-white rounded-md px-3 py-1 text-sm flex items-center">
                <span className="mr-1">+</span> Add Study Session
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {/* Left column - calendar */}
              <div className="col-span-1 border rounded-lg p-3 bg-white">
                <div className="text-sm font-semibold border-b pb-1 mb-2">Calendar</div>
                <div className="grid grid-cols-7 gap-1 text-xs text-center">
                  <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
                  <div className="p-1">1</div>
                  <div className="p-1">2</div>
                  <div className="p-1">3</div>
                  <div className="p-1">4</div>
                  <div className="p-1">5</div>
                  <div className="p-1 bg-purple-100">6</div>
                  <div className="p-1 border border-purple-500 bg-purple-50">7</div>
                  <div className="p-1 bg-purple-100">8</div>
                  <div className="p-1">9</div>
                  <div className="p-1 bg-purple-100">10</div>
                </div>
                <div className="mt-4 space-y-1 text-xs">
                  <div className="font-semibold">Legend:</div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-purple-100"></div>
                    <span>Has events</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full border border-purple-500"></div>
                    <span>Today</span>
                  </div>
                </div>
              </div>
              
              {/* Right column - events */}
              <div className="col-span-2 border rounded-lg p-3 bg-white">
                <div className="text-sm font-semibold border-b pb-1 mb-2">
                  Wednesday, April 7, 2025
                </div>
                
                {/* Event cards */}
                <div className="space-y-3">
                  <div className="border rounded p-2 bg-gray-50">
                    <div className="flex justify-between items-start mb-1">
                      <div className="font-semibold text-sm">Database Study Group</div>
                      <div className="bg-purple-100 text-purple-800 rounded px-2 text-xs">Group</div>
                    </div>
                    <div className="space-y-1 text-xs">
                      <div>🕒 14:00 - 16:00</div>
                      <div>📌 Library Study Room 2</div>
                      <div>📝 Prepare questions on SQL queries</div>
                    </div>
                    <div className="mt-2 text-right">
                      <div className="inline-block border border-gray-300 rounded px-2 py-0.5 text-xs">Edit</div>
                    </div>
                  </div>
                  
                  <div className="border rounded p-2 bg-gray-50">
                    <div className="flex justify-between items-start mb-1">
                      <div className="font-semibold text-sm">Essay Writing</div>
                      <div className="border border-gray-400 rounded px-2 text-xs">Personal</div>
                    </div>
                    <div className="space-y-1 text-xs">
                      <div>🕒 17:00 - 19:00</div>
                      <div>📌 Library Quiet Zone</div>
                      <div>📝 Complete literature review section</div>
                    </div>
                    <div className="mt-2 text-right">
                      <div className="inline-block border border-gray-300 rounded px-2 py-0.5 text-xs">Edit</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Dialog mockup */}
            <div className="mt-6 border-t pt-4">
              <div className="text-xs text-gray-500 mb-2">Dialog for adding/editing events:</div>
              <div className="border-2 w-80 mx-auto rounded-lg p-3 bg-white shadow-sm">
                <div className="font-semibold border-b pb-1 mb-2">Add New Study Session</div>
                <div className="space-y-2 text-xs">
                  <div>
                    <div className="font-medium">Title</div>
                    <div className="border rounded h-6 bg-gray-50"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <div className="font-medium">Date</div>
                      <div className="border rounded h-6 bg-gray-50"></div>
                    </div>
                    <div>
                      <div className="font-medium">Course</div>
                      <div className="border rounded h-6 bg-gray-50"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <div className="font-medium">Start Time</div>
                      <div className="border rounded h-6 bg-gray-50"></div>
                    </div>
                    <div>
                      <div className="font-medium">End Time</div>
                      <div className="border rounded h-6 bg-gray-50"></div>
                    </div>
                  </div>
                  <div className="mt-2 flex justify-end gap-2">
                    <div className="border rounded px-2 py-0.5">Cancel</div>
                    <div className="bg-purple-600 text-white rounded px-2 py-0.5">Add</div>
                  </div>
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
                  <span className="block font-semibold mb-1">Calendar Highlighting</span>
                  <div className="text-sm">
                    Dates with events are clearly highlighted, and today's date is distinctly marked
                  </div>
                </div>
                <div className="flex-1 border rounded p-3 bg-gray-50">
                  <span className="block font-semibold mb-1">Event Cards</span>
                  <div className="text-sm">
                    All key information (time, location, description) is immediately visible
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-bold text-green-600 mb-2">Feedback</h3>
              <div className="flex gap-4">
                <div className="flex-1 border rounded p-3 bg-gray-50">
                  <span className="block font-semibold mb-1">Selected Date</span>
                  <div className="text-sm">
                    The currently selected date is clearly highlighted in the calendar
                  </div>
                </div>
                <div className="flex-1 border rounded p-3 bg-gray-50">
                  <span className="block font-semibold mb-1">Event Type Badges</span>
                  <div className="text-sm">
                    Color-coded badges provide immediate feedback on event type
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-bold text-orange-600 mb-2">Affordance</h3>
              <div className="flex gap-4">
                <div className="flex-1 border rounded p-3 bg-gray-50">
                  <span className="block font-semibold mb-1">Clickable Calendar</span>
                  <div className="text-sm">
                    Calendar dates are visually designed to appear clickable
                  </div>
                </div>
                <div className="flex-1 border rounded p-3 bg-gray-50">
                  <span className="block font-semibold mb-1">Add Button</span>
                  <div className="text-sm">
                    Prominently placed button suggests ability to add new events
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-bold text-purple-600 mb-2">Consistency</h3>
              <div className="flex gap-4">
                <div className="flex-1 border rounded p-3 bg-gray-50">
                  <span className="block font-semibold mb-1">Event Layout</span>
                  <div className="text-sm">
                    All event cards follow identical layout pattern for recognition
                  </div>
                </div>
                <div className="flex-1 border rounded p-3 bg-gray-50">
                  <span className="block font-semibold mb-1">Color Coding</span>
                  <div className="text-sm">
                    Consistent color scheme used throughout (purple for highlights)
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

export default PlannerDiagram;
