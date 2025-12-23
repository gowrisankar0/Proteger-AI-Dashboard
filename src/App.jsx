import React from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { PageHeader } from './components/PageHeader';
import { InstituteCard } from './components/dashboard/InstituteCard';
import { DonutChartCard } from './components/dashboard/DonutChartCard';
import { IncidentBarChartCard } from './components/dashboard/BarChartCard';
import { StatCard } from './components/dashboard/StatCard';
import { DepartmentBarChart } from './components/dashboard/ChartSection';
import { RibbonCard } from './components/dashboard/RibbonCard';
import { DepartmentCard } from './components/dashboard/DepartmentCard';

// Data for charts
const INCIDENT_DATA = [
  { name: 'Neurology', open: 2, closed: 5 },
  { name: 'Radiology', open: 9, closed: 0 },
  { name: 'Cardiology', open: 4, closed: 5 },
  { name: 'Gynacology', open: 4, closed: 4 },
];

const WORK_ORDER_DATA = [
  { name: 'Neonatal intensive care', open: 2, closed: 5 },
  { name: 'Radiology', open: 3, closed: 6 },
  { name: 'Neurology', open: 6, closed: 5 },
];

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-800">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden h-screen bg-[#F8F9FA]">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 scrollbar-hide">
          <PageHeader />

          
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          

            <InstituteCard />
            <DonutChartCard />
            <IncidentBarChartCard />
            <div className="flex-1 hidden lg:block">
              <RibbonCard title="Total Asset" value="200" colorClass="bg-[#F44771]" />
            </div>




            
            <div className="flex flex-col gap-6">
              <div className="h-full">

              </div>
              
            </div>
          </div>

    
          <div className="md:hidden flex flex-col space-y-4">
            <RibbonCard title="Total Asset" value="200" colorClass="bg-[#F44771]" />
            <RibbonCard title="Not working Asset" value="100" colorClass="bg-[#FF9F43]" />
            <RibbonCard title="Total Downtime" value="35 mins 21 sec" colorClass="bg-[#6658dd]" />
          </div>

        
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard title="Check outs" items={[
              { label: 'Checked In', value: '0' },
              { label: 'Checked Out', value: '25' }
            ]} />
            <StatCard title="Incidents" items={[
              { label: 'Incidents', value: '22 Reported' },
              { label: 'Total Downtime', value: '12 mins 10 sec' },
              { label: 'Closed', value: '19' },
              { label: 'Open', value: '3' },
              { label: 'Budget spent', value: '₹ 3,00,000', valueColor: 'text-emerald-500' }
            ]} />
            <StatCard title="Work Order" items={[
              { label: 'Work order', value: '17 requested' },
              { label: 'Closed', value: '14' },
              { label: 'Open', value: '3' },
              { label: 'Budget spent', value: '₹ 3,00,000', valueColor: 'text-emerald-500' }
            ]} />
          </div>

          {/* 5. Department Bar Charts */}
          <div className="space-y-4 md:space-y-6">
            <DepartmentBarChart
              title="Incident Reported - 15"
              data={INCIDENT_DATA}
              colors={{ open: '#56ABF8', closed: '#56ABF8' }}
            />
            <DepartmentBarChart
              title="Work Order Reported - 20"
              data={WORK_ORDER_DATA}
              colors={{ open: '#1E3A8A', closed: '#1E3A8A', closedLabel: 'white' }}
            />
          </div>

          {/* 6. Departments List */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-3 shadow-md">
              
              <DepartmentCard name="Anesthesiology" color="bg-[#56ABF8]" />
              <DepartmentCard name="Radiology" color="bg-[#56ABF8]" />
            </div>
            <div className="bg-white rounded-xl p-3 shadow-md">

              <DepartmentCard name="Dermatology" color="bg-[#1E3A8A]" />
              <DepartmentCard name="Gynacology" color="bg-[#1E3A8A]" />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;
