import React from 'react';

export function RibbonCard({ title, value, colorClass }) {
    return (
        <div className={`${colorClass} relative px-6 py-8 rounded-xl text-white overflow-hidden shadow-sm flex flex-col justify-center min-h-[140px]`}>
            
            <div className="absolute right-0 top-0 h-full w-2/3 overflow-hidden pointer-events-none">
            
                <div className="absolute -right-2 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-[1px]"></div>
                <div className="absolute -right-2 -bottom-10 w-48 h-48 border border-white/20 rounded-full"></div>

            
                <div className="absolute right-12 -top-6 w-36 h-36 bg-white/5 rounded-full blur-[1px]"></div>
                <div className="absolute right-12 -top-6 w-36 h-36 border border-white/10 rounded-full"></div>
            </div>

            <div className="relative z-10 font-sans">
                <h3 className="text-lg font-bold opacity-90 tracking-wide">{title}</h3>
                <p className="text-3xl font-bold mt-2">{value}</p>
            </div>
        </div>
    );
}
