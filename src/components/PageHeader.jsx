import React from 'react';
import { Calendar, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import titleImage from '../assets/title.png';

export function PageHeader() {
    return (
        <div className="bg-white rounded-xl md:py-10 py-6 shadow-md border border-gray-100 flex flex-col px-4 md:block relative">

            
            <div className="hidden md:flex items-center absolute left-4 top-1/2 -translate-y-1/2">
                <img src={titleImage} alt="Vajra" className='h-8 w-auto' />
            </div>

            
            <div className="hidden md:block mb-4 md:mb-0 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 text-center md:text-left">
                <h2 className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight">Monthly Report</h2>
            </div>

            
            <div className="flex items-center justify-between md:justify-end gap-3 w-full md:w-auto md:absolute md:right-4 md:top-1/2 md:-translate-y-1/2">

                
                <div className="flex items-center gap-2 bg-white border border-gray-300 px-3 py-1.5 rounded-full cursor-pointer hover:bg-gray-50 shadow-sm transition-colors group">
                    <ChevronLeft size={16} className="text-slate-400 group-hover:text-slate-600" />
                    <span className="text-sm font-medium text-slate-600 whitespace-nowrap">June 2025</span>
                    <Calendar size={14} className="text-slate-400" />
                    <ChevronRight size={16} className="text-slate-400 group-hover:text-slate-600" />
                </div>

                
                <button className="flex items-center gap-2 bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-600 shadow-sm transition-colors text-sm font-medium whitespace-nowrap">
                    <span>Download PDF</span>
                    <Download size={14} />
                </button>
            </div>
        </div>
    );
}
