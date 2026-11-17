import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RoleSelector from './pages/RoleSelector';
import DashboardLayout from './features/dashboard/layout/DashboardLayout';
import DashboardOverview from './features/dashboard/pages/DashboardOverview';
import { mockUsers } from './types/user.types';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/role-select" element={<RoleSelector />} />
        
        <Route path="/dashboard/prospect" element={<DashboardLayout userRole="prospect" userName={mockUsers.prospect.name} />}>
          <Route index element={<DashboardOverview role="prospect" userName={mockUsers.prospect.name} />} />
        </Route>
        
        <Route path="/dashboard/client" element={<DashboardLayout userRole="client" userName={mockUsers.client.name} />}>
          <Route index element={<DashboardOverview role="client" userName={mockUsers.client.name} />} />
        </Route>
        
        <Route path="/dashboard/admin" element={<DashboardLayout userRole="admin" userName={mockUsers.admin.name} />}>
          <Route index element={<DashboardOverview role="admin" userName={mockUsers.admin.name} />} />
        </Route>
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;