import React from 'react';
import { ArrowRight } from 'lucide-react';

export function DepartmentCard({ name, color = "bg-[#4CABFF]", headingColor = 'text-white' }) {
    // Exact data from the image for the first 3 cards, and 4th card differs
    const assetsPrototype = [
        { name: 'Strecher', code: 'A001234', start: '21-08-2025', clear: '26-08-2025' },
        { name: 'Strecher', code: 'A001234', start: '21-08-2025', clear: '26-08-2025' },
        { name: 'Strecher', code: 'A001234', start: '21-08-2025', clear: '26-08-2025' },
        { name: 'CT scan', code: 'A001234', start: '18-06-2025', clear: '19-06-2025' },
    ];

    return (
        <div className="mb-2 font-poppins bg-white rounded-xl">
            {/* 1. Standalone Blue Header Card - Fully rounded */}
            <div className={`${color} rounded-xl px-6 py-5 flex flex-col md:flex-row justify-between items-start md:items-center text-white shadow-sm`}>
                <div className="space-y-1">
                    {(name == "Anesthesiology" || name === "Dermatology") &&
                        <div className="text-[13px] font-medium opacity-90 tracking-wide">Incident Reported per department</div>
                    }
                    <div className="text-xl font-bold flex items-center gap-2">
                        Department : <span className="font-medium font-poppins">{name}</span>
                    </div>
                </div>

                {(name == "Anesthesiology" || name == "Dermatology") && <div className="flex flex-col  gap-1 text-left mt-4 md:mt-0 font-poppins">
                    <div className="flex items-center gap-4 text-[13px]">
                        <div>
                            <span className="font-bold opacity-90">Incidents Reported : </span>
                            <span className="font-medium text-base">5</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 text-[13px]">
                        <div>
                            <span className="font-bold opacity-90">Incidents Open : </span>
                            <span className="font-medium text-base">20</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 text-[13px]">
                        <div>
                            <span className="font-bold opacity-90">Total Downtime : </span>
                            <span className="font-medium text-base">7 min 22 sec</span>
                        </div>
                    </div>
                </div>}
            </div>

            {/* 2. Separate Grid of Cards - No enclosing white box, just floating cards */}
            <div className="mt-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {assetsPrototype.map((asset, index) => (
                        <div key={index} className="bg-white rounded-xl p-6 shadow-md border-none relative">
                            {/* Arrow utility - Top Right Corner */}
                            <button className="absolute top-0 right-0 bg-[#D9D9D9] w-10 h-10 rounded-tr-xl rounded-bl-xl hover:bg-slate-300 transition-colors flex items-center justify-center">
                                <ArrowRight size={18} className="text-black" strokeWidth={2} />
                            </button>

                            {/* Content */}
                            <div className="space-y-4 mt-1">
                                <div className="flex items-baseline text-[13px]">
                                    <span className="font-bold text-slate-900 w-24 shrink-0">Asset name</span>
                                    <span className="text-slate-900 font-medium">:  {asset.name}</span>
                                </div>
                                <div className="flex items-baseline text-[13px]">
                                    <span className="font-bold text-slate-900 w-24 shrink-0">Asset code</span>
                                    <span className="text-slate-900 font-medium">:  {asset.code}</span>
                                </div>
                                <div className="flex items-baseline text-[13px]">
                                    <span className="font-bold text-slate-900 w-24 shrink-0">Start Date</span>
                                    <span className="text-slate-900 font-medium">:  {asset.start}</span>
                                </div>
                                <div className="flex items-baseline text-[13px]">
                                    <span className="font-bold text-slate-900 w-24 shrink-0">Clear Date</span>
                                    <span className="text-slate-900 font-medium">:  {asset.clear}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
