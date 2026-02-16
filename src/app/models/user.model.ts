export type UserStatus = 'active' | 'pending' | 'inactive';
export type UserRole = 'Admin' | 'Manager' | 'Support' | 'Viewer';

export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  avatar: string;
  joinDate: string;
}
