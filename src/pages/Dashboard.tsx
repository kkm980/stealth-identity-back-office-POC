/**
 * Dashboard Page
 * Main dashboard view with all feature tiles
 */

import { useTranslation } from 'react-i18next';
import { DashboardCard } from '../components/DashboardCard';
import {
  UserCog,
  Users,
  Settings,
  UserPlus,
  Search,
  FileText,
  Shield,
  FileCheck,
  Upload,
  Database,
  Activity,
  BarChart3,
  FileSearch,
  Clock,
} from 'lucide-react';

export const Dashboard = () => {
  const { t } = useTranslation();

  const tiles = [
    { id: 'roleManagement', icon: UserCog, labelKey: 'roleManagement', route: '/role-management' },
    { id: 'userGroupManagement', icon: Users, labelKey: 'userGroupManagement', route: '/user-group-management' },
    { id: 'configurationManagement', icon: Settings, labelKey: 'configurationManagement', route: '/configuration-management' },
    { id: 'enrollment', icon: UserPlus, labelKey: 'enrollment', route: '/enrollment' },
    { id: 'identification', icon: Search, labelKey: 'identification', route: '/identification' },
    { id: 'manageIdentity', icon: FileText, labelKey: 'manageIdentity', route: '/manage-identity' },
    { id: 'verification', icon: Shield, labelKey: 'verification', route: '/verification' },
    { id: 'rulesConfiguration', icon: FileCheck, labelKey: 'rulesConfiguration', route: '/rules-configuration' },
    { id: 'bulkImport', icon: Upload, labelKey: 'bulkImport', route: '/bulk-import' },
    { id: 'verificationStore', icon: Database, labelKey: 'verificationStore', route: '/verification-store' },
    { id: 'verificationStatus', icon: Activity, labelKey: 'verificationStatus', route: '/verification-status' },
    { id: 'identificationStatus', icon: FileSearch, labelKey: 'identificationStatus', route: '/identification-status' },
    { id: 'diagnosticsTool', icon: BarChart3, labelKey: 'diagnosticsTool', route: '/diagnostics-tool' },
    { id: 'pendingUpload', icon: Clock, labelKey: 'pendingUpload', route: '/pending-upload' },
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        {/* <input
          type="text"
          placeholder={t('searchMenu')}
          className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        /> */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {tiles.map((tile) => (
          <DashboardCard
            key={tile.id}
            title={t(tile.labelKey)}
            icon={tile.icon}
            route={tile.route}
          />
        ))}
      </div>
    </div>
  );
};
