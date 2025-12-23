import React from 'react';

export function StatCard({ title, items }) {
    return (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-md flex flex-col h-full p-0">
            
            <div className="bg-[#D4EBFF] border-b border-blue-100 px-3 py-2">
                <h3 className="font-bold text-slate-800 text-lg">{title}</h3>
            </div>

            
            <div className=" space-y-4 flex-1 px-3 py-3">
                {items.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center text-sm">
                        <span className="font-bold text-slate-800">{item.label}</span>
                        <span className={`font-medium ${item.valueColor ? item.valueColor : 'text-slate-600'}`}>
                            {item.value}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}
