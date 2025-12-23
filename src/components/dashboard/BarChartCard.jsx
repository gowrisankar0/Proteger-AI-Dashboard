import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const COLOR_OPEN = "#1e40af"; 
const COLOR_CLOSED = "#60a5fa"; 

const INCIDENT_BAR_DATA = [
    { name: 'Incidents', open: 14, closed: 7 }, 
    { name: 'Work Order', open: 6, closed: 15 }, 
    { name: 'Check outs', open: 0, closed: 25 }, 
];

export function IncidentBarChartCard() {
    return (
        <div className="bg-white p-3 rounded-xl shadow-lg border border-gray-100 h-full max-h-[220px] flex flex-col">
            <div className="flex-1 w-full min-h-[160px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={INCIDENT_BAR_DATA}
                        margin={{ top: 20, right: 10, left: -20, bottom: 0 }}
                        barSize={16}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 11, fill: '#64748b', dy: 10 }}
                            interval={0}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 11, fill: '#64748b' }}
                            domain={[0, 30]}
                            ticks={[0, 7, 14, 21, 28]}
                        />
                        <Tooltip
                            cursor={{ fill: '#f8fafc' }}
                            contentStyle={{ fontSize: '12px', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        />
                        <Legend
                            iconType="square"
                            iconSize={8}
                            verticalAlign="top"
                            align="right"
                            wrapperStyle={{ fontSize: '10px', paddingBottom: '20px' }}
                        />
                    
                        <Bar dataKey="open" fill={COLOR_OPEN} name="Open" stackId="shouldStack" />
                        <Bar
                            dataKey="closed"
                            fill={COLOR_CLOSED}
                            name="Closed"
                            stackId="shouldStack"
                            radius={[4, 4, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
