export type UserRole = 'prospect' | 'client' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export const mockUsers: Record<UserRole, User> = {
  prospect: {
    id: '1',
    name: 'John Prospect',
    email: 'prospect@example.com',
    role: 'prospect',
  },
  client: {
    id: '2',
    name: 'Jane Client',
    email: 'client@example.com',
    role: 'client',
  },
  admin: {
    id: '3',
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'admin',
  },
};