import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export function DepartmentBarChart({ title, data, colors }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize(); 
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    
    const xAxisProps = isMobile
        ? { dataKey: "name", axisLine: false, tickLine: false, tick: { fontSize: 10, fill: '#64748b' }, interval: 0, height: 40 } 
        : { type: "number", hide: true };

    const yAxisProps = isMobile
        ? { hide: true } 
        : { dataKey: "name", type: "category", width: 180, tick: { fontSize: 11, fill: '#475569', fontWeight: 500 }, axisLine: false, tickLine: false };

    return (
        <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-slate-800 text-sm md:text-base">{title}</h3>
                {/* Custom Legend restored */}
                <div className="flex gap-4 text-[10px] font-medium">
                    <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: colors.open }}></div>
                        <span className="text-slate-600">Open</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: colors.closed }}></div>
                        <span className="text-slate-600">Closed</span>
                    </div>
                </div>
            </div>
            <div className="h-64 md:h-72">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        layout={isMobile ? "horizontal" : "vertical"}
                        data={data}
                        margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
                        barSize={isMobile ? 20 : 30}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={isMobile ? false : true} horizontal={isMobile ? true : false} stroke="#f1f5f9" />
                        <XAxis {...xAxisProps} />
                        <YAxis {...yAxisProps} />
                        <Tooltip
                            contentStyle={{ fontSize: '12px', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                            cursor={{ fill: 'transparent' }}
                        />
                        <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />

                        <Bar
                            dataKey="open"
                            fill={colors.open}
                            name="Open"
                            stackId="a"
                            radius={isMobile ? [0, 0, 0, 0] : [0, 0, 0, 0]}
                            barSize={40}
                        />
                        <Bar
                            dataKey="closed"
                            fill={colors.closed}
                            name="Closed"
                            stackId="a"
                            radius={isMobile ? [4, 4, 0, 0] : [0, 4, 4, 0]} 
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
