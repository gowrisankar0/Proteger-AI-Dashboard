import React from 'react';
import { LayoutGrid, ArrowRight, ChevronDown, Bell, Menu } from 'lucide-react';
import titleImage from '../assets/logo.png';

export function Header({ onMenuClick }) {
    return (
        <header className="md:h-16 h-auto md:bg-[#F4F6F6] bg-[#0B1739] border-gray-200 flex flex-col md:flex-row md:items-center justify-between px-6 sticky top-0 z-20 font-sans shadow-md md:shadow-none transition-all py-4 md:py-0">
            {/* Mobile View Structure */}
            <div className="md:hidden flex flex-col w-full gap-4">
                <div className="flex items-center justify-between w-full">
                    <img src={titleImage} alt="Vajra" className="h-6 w-auto" />
                    <button className="text-white" onClick={onMenuClick}>
                        <Menu size={24} />
                    </button>
                </div>
                <h1 className="text-xl font-bold text-white">Monthly Report</h1>
            </div>

            {/* Desktop View Structure */}
            <div className="hidden md:flex items-center gap-4">
                <div className="flex items-center gap-2 text-lg font-medium">
                    <button className="hover:bg-slate-100 p-1 rounded-full bg-white">
                        <ArrowRight className="rotate-180 text-blue-400" size={20} />
                    </button>
                    <span className="font-bold text-slate-800">Reports</span>
                    <span className="text-slate-400">/</span>
                    <span className="text-blue-500">Bio Medical</span>
                </div>
            </div>

            <div className="hidden md:flex items-center gap-4">
                <div className="hidden md:flex items-center gap-2 bg-white px-3 py-1.5 rounded-full">
                    <span className="w-6 h-6 bg-slate-800 text-white text-[10px] flex items-center justify-center rounded-full">NB</span>
                    <span className="text-xs font-medium text-slate-600">Non Bio Medical</span>
                </div>

                <div className="hidden md:flex items-center gap-2 bg-white px-3 py-1.5 rounded-full cursor-pointer">
                    <span className="text-sm text-slate-600 font-medium">Vijayanagar</span>
                    <ChevronDown size={14} className="text-black" />
                </div>

                <div className="flex items-center gap-3 border-l border-gray-200 pl-4 ml-2">
                    <button className="p-2 hover:bg-slate-100 rounded-full text-slate-500">
                        <LayoutGrid size={20} />
                    </button>
                    <button className="p-2 hover:bg-slate-100 rounded-full text-slate-500 relative">
                        <Bell size={20} />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>
                    <button className="w-8 h-8 bg-slate-800 text-white rounded-full flex items-center justify-center text-sm font-medium">
                        A
                    </button>
                </div>
            </div>
        </header>
    );
}
