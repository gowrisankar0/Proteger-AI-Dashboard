import React from 'react';
import { Building2, MapPin } from 'lucide-react';
import medicalIcon from '../../assets/medical.png';
import locationIcon from '../../assets/location.png';

export function InstituteCard() {
    return (
        <div className="bg-[#022A66] text-white p-4 rounded-xl flex flex-col justify-center space-y-2 shadow-sm h-full max-h-[220px]">
            <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg shrink-0">
                    <img src={medicalIcon} alt="Medical" className='w-10 h-10 object-contain' />
                </div>
                <div>
                    <h3 className="font-medium text-lg leading-tight">Sri siddhartha institute of medical science</h3>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="p-3  rounded-lg shrink-0">
                    <img src={locationIcon} alt="Location" className='w-10 h-10 object-contain' />
                </div>
                <div>
                    <p className="text-slate-300">Vijayanagar</p>
                </div>
            </div>
        </div>
    );
}
