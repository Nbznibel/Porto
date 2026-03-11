import { Link } from 'react-router-dom';
import { Button } from '../../../global/components/ui';
import type { UserRole } from '../../../types/user.types';

interface DashboardOverviewProps {
  role: UserRole;
  userName: string;
}

const DashboardOverview = ({ role, userName }: DashboardOverviewProps) => {
  const getStats = () => {
    switch (role) {
      case 'prospect':
        return [
          { label: 'Available Services', value: '12', icon: 'M4 6h16M4 10h16M4 14h16M4 18h16' },
          { label: 'New Messages', value: '3', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
        ];
      case 'client':
        return [
          { label: 'Active Projects', value: '4', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
          { label: 'Pending Invoices', value: '2', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
          { label: 'Open Tickets', value: '1', icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z' },
        ];
      case 'admin':
        return [
          { label: 'Total Users', value: '156', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
          { label: 'Active Projects', value: '28', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
          { label: 'Revenue (MTD)', value: '$12,450', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
        ];
    }
  };

  const stats = getStats();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Welcome back, {userName}!</h1>
        <p className="text-gray-400 mt-1">Here's what's happening with your account.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary-900/50 flex items-center justify-center border border-primary-700">
                <svg className="w-6 h-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {role === 'prospect' && (
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <h2 className="text-lg font-semibold text-white mb-4">Recommended Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['Web Development', 'Mobile App', 'UI/UX Design', 'API Integration'].map((service) => (
              <div key={service} className="p-4 bg-slate-700/50 rounded-lg border border-slate-600">
                <p className="text-white font-medium">{service}</p>
                <Link to="/dashboard/services">
                  <Button variant="outline" size="sm" className="mt-2">
                    Learn More
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {role === 'client' && (
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <h2 className="text-lg font-semibold text-white mb-4">Recent Projects</h2>
          <div className="space-y-3">
            {['E-Commerce Platform', 'Dashboard Redesign', 'API Integration'].map((project) => (
              <div key={project} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                <div>
                  <p className="text-white font-medium">{project}</p>
                  <p className="text-sm text-gray-400">In Progress</p>
                </div>
                <span className="px-3 py-1 text-xs font-medium bg-primary-900/50 text-primary-300 rounded-full border border-primary-700">
                  Active
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {role === 'admin' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <h2 className="text-lg font-semibold text-white mb-4">User Activity</h2>
            <div className="space-y-3">
              {['New signups today', 'Active users this week', 'Pending approvals'].map((item) => (
                <div key={item} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                  <span className="text-gray-300">{item}</span>
                  <span className="text-primary-400 font-medium">{Math.floor(Math.random() * 20) + 1}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <h2 className="text-lg font-semibold text-white mb-4">Quick Actions</h2>
            <div className="space-y-2">
              <Link to="/dashboard/users">
                <Button variant="outline" className="w-full justify-start">Manage Users</Button>
              </Link>
              <Link to="/dashboard/admin-projects">
                <Button variant="outline" className="w-full justify-start">View All Projects</Button>
              </Link>
              <Link to="/dashboard/analytics">
                <Button variant="outline" className="w-full justify-start">View Analytics</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardOverview;