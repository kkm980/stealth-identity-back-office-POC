/**
 * Type definitions for the application
 * Contains interfaces and types used throughout the app
 */

export interface DashboardTile {
  id: string;
  title: string;
  icon: string;
  route: string;
}

export type Modules =
    'Home'
  | 'Role Management'
  | 'User Group Management'
  | 'Configuration Management'
  | 'Enrollment'
  | 'Identification'
  | 'Manage Identity'
  | 'Reports'
  | 'Verification'
  | 'Rules Configuration'
  | 'Bulk Import'
  | 'Verification Store'
  | 'Verification Status'
  | 'Identification Status'
  | 'Diagnostics Tool'
  | 'Pending Upload';

export type Theme = 'light' | 'dark';

export type Language = 'en' | 'es' | 'fr';
