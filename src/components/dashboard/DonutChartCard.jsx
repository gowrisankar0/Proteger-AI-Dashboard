import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const PIE_DATA = [
    { name: 'Working Assets', value: 80, color: '#3b82f6' },
    { name: 'Not working Assets', value: 10, color: '#ef4444' },
    { name: 'Discarded', value: 10, color: '#93c5fd' },
];

export function DonutChartCard() {
    return (
        <div className="bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex flex-col h-full max-h-[220px] relative">
            <div className="font-bold text-slate-800 text-sm md:text-base text-center mb-2">Monthly Report</div>

            <div className="flex items-center justify-center gap-4 flex-1">
                {/* Chart Circle */}
                <div className="h-28 w-28 relative">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={PIE_DATA}
                                innerRadius={35}
                                outerRadius={55}
                                paddingAngle={0}
                                dataKey="value"
                                stroke="none"
                                startAngle={90}
                                endAngle={-270}
                            >
                                {PIE_DATA.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                {/* Legend */}
                <div className="space-y-2">
                    {PIE_DATA.map((item) => (
                        <div key={item.name} className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ backgroundColor: item.color }}></div>
                            <span className="text-xs text-slate-600 font-medium">{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Floating Pill */}
            <div className="flex justify-center mt-2">
                <span className="bg-slate-900 text-white text-[10px] font-medium px-3 py-1 rounded-md shadow-sm">
                    Total Working Assets - 7
                </span>
            </div>
        </div>
    );
}
