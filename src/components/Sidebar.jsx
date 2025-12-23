import React from 'react';
import {
    LayoutDashboard,
    Box,
    AlertCircle,
    Settings,
    FileText,
    Users,
    FileBarChart,
    Headphones,
    LogOut,
    ChevronDown
} from 'lucide-react';

// Importing assets directly to ensure Vite bundles them
import dashboardIcon from '../assets/dashbpoard.png'; // Note: Typo in filename on disk
import assetIcon from '../assets/assest.png'; // Note: Typo in filename on disk
import incidentIcon from '../assets/insident.png'; // Note: Typo in filename on disk
import settingsIcon from '../assets/settings.png';
import messageIcon from '../assets/message.png';
import usersIcon from '../assets/users.png';
import reportIcon from '../assets/report.png';
import logo from '../assets/logo.png';

export function Sidebar({ isOpen, onClose }) {
    const menuItems = [
        { name: 'Dashboard', icon: dashboardIcon },
        { name: 'Assets', icon: assetIcon },
        { name: 'Incidents', icon: incidentIcon },
        { name: 'Services', icon: settingsIcon },
        { name: 'Request', icon: messageIcon },
        { name: 'Users', icon: usersIcon },
        { name: 'Reports', icon: reportIcon, active: true },
    ];

    return (
        <>
            {/* Mobile Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <aside className={`
                fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white flex flex-col font-sans transition-transform duration-300 ease-in-out
                md:translate-x-0 md:static md:inset-auto md:flex shrink-0
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                <div className="pt-7">
                    {/* Logo area */}
                    <div className="flex items-center justify-between">
                        <img src={logo} alt="Logo" className='m-auto h-12 w-20' />
                        {/* Close button for mobile */}
                        <button onClick={onClose} className="md:hidden text-slate-400 hover:text-white">
                            <LogOut size={20} className="rotate-180" /> {/* Using LogOut icon reversed as a close/back indicator or X if preferred needed */}
                        </button>
                    </div>
                </div>

                <nav className="flex-1 space-y-1 px-4 mt-8 flex-grow-0">
                    {menuItems.map((item) => (
                        <div
                            key={item.name}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${item.active
                                ? 'bg-white/10 text-white font-semibold'
                                : 'text-slate-400 hover:bg-white/5 hover:text-white'
                                }`}
                        >
                            <img src={item.icon} alt={item.name} className="w-4 h-4" />
                            <span className="text-sm font-medium">{item.name}</span>
                            {(item.name === 'Assets' || item.name === 'Users' || item.name === 'Reports') && (
                                <ChevronDown size={16} className="ml-auto" />
                            )}
                        </div>
                    ))}
                </nav>

                {/* Pill shaped buttons with specific gap, centered, same width */}
                <div className="px-6 mt-12 space-y-4">
                    <button className="flex items-center gap-3 px-4 py-2.5 text-slate-200 hover:text-white w-full justify-center rounded-full border border-slate-600 hover:bg-white/5 transition-colors">
                        <Headphones size={18} />
                        <span className="text-sm font-medium">Contact us</span>
                    </button>
                    <button className="flex items-center gap-3 px-4 py-2.5 text-slate-200 hover:text-white w-full justify-center rounded-full border border-slate-600 hover:bg-white/5 transition-colors">
                        <LogOut size={18} />
                        <span className="text-sm font-medium">Log Out</span>
                    </button>
                </div>
            </aside>
        </>
    );
}

