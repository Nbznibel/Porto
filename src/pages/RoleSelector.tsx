import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../global/components/ui';
import type { UserRole } from '../types/user.types';

const RoleSelector = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);

  const handleLogin = () => {
    if (selectedRole) {
      navigate(`/dashboard/${selectedRole}`);
    }
  };

  const roles: { role: UserRole; label: string; description: string }[] = [
    { role: 'prospect', label: 'Prospect', description: 'Browse services and contact for quotes' },
    { role: 'client', label: 'Client', description: 'Manage your projects and billing' },
    { role: 'admin', label: 'Admin', description: 'Full access to manage users and analytics' },
  ];

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">Select Role</h1>
          <p className="text-gray-400 mt-2">Choose a role to access the dashboard</p>
        </div>

        <div className="space-y-4 mb-8">
          {roles.map(({ role, label, description }) => (
            <button
              key={role}
              onClick={() => setSelectedRole(role)}
              className={`w-full p-4 rounded-xl border text-left transition-all ${
                selectedRole === role
                  ? 'bg-primary-900/30 border-primary-500'
                  : 'bg-slate-800 border-slate-700 hover:border-slate-600'
              }`}
            >
              <p className="text-lg font-medium text-white">{label}</p>
              <p className="text-sm text-gray-400">{description}</p>
            </button>
          ))}
        </div>

        <Button
          onClick={handleLogin}
          className="w-full"
          disabled={!selectedRole}
        >
          Enter Dashboard
        </Button>

        <div className="mt-6 text-center">
          <Link to="/" className="text-gray-400 hover:text-primary-400 text-sm">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoleSelector;