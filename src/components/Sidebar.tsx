/**
 * Sidebar Component
 * Navigation sidebar with menu items and toggle functionality
 */

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { setCurrentModule } from '../store/selectedModuleSlice';
import { useDispatch } from 'react-redux';
import {
  Menu,
  LayoutDashboard,
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

interface MenuItem {
  id: string;
  icon: JSX.Element;
  labelKey: string;
  route: string;
}

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();
    const dispatch = useDispatch();

  const handleSelectModule = (module: string) => {
    dispatch(setCurrentModule(module));
  };

  const menuItems: MenuItem[] = [
    { id: 'dashboard', icon: <LayoutDashboard size={20} />, labelKey: 'dashboard', route: '/' },
    { id: 'roleManagement', icon: <UserCog size={20} />, labelKey: 'roleManagement', route: '/role-management' },
    { id: 'userGroupManagement', icon: <Users size={20} />, labelKey: 'userGroupManagement', route: '/user-group-management' },
    { id: 'configurationManagement', icon: <Settings size={20} />, labelKey: 'configurationManagement', route: '/configuration-management' },
    { id: 'enrollment', icon: <UserPlus size={20} />, labelKey: 'enrollment', route: '/enrollment' },
    { id: 'identification', icon: <Search size={20} />, labelKey: 'identification', route: '/identification' },
    { id: 'manageIdentity', icon: <FileText size={20} />, labelKey: 'manageIdentity', route: '/manage-identity' },
    { id: 'reports', icon: <BarChart3 size={20} />, labelKey: 'reports', route: '/reports' },
    { id: 'verification', icon: <Shield size={20} />, labelKey: 'verification', route: '/verification' },
    { id: 'rulesConfiguration', icon: <FileCheck size={20} />, labelKey: 'rulesConfiguration', route: '/rules-configuration' },
    { id: 'bulkImport', icon: <Upload size={20} />, labelKey: 'bulkImport', route: '/bulk-import' },
    { id: 'verificationStore', icon: <Database size={20} />, labelKey: 'verificationStore', route: '/verification-store' },
    { id: 'verificationStatus', icon: <Activity size={20} />, labelKey: 'verificationStatus', route: '/verification-status' },
    { id: 'identificationStatus', icon: <FileSearch size={20} />, labelKey: 'identificationStatus', route: '/identification-status' },
    { id: 'diagnosticsTool', icon: <BarChart3 size={20} />, labelKey: 'diagnosticsTool', route: '/diagnostics-tool' },
    { id: 'pendingUpload', icon: <Clock size={20} />, labelKey: 'pendingUpload', route: '/pending-upload' },
  ];

  return (
    <motion.aside
      initial={false}
      animate={{ width: isCollapsed ? '80px' : '240px' }}
      className="bg-blue-900 dark:bg-gray-900 text-white h-screen sticky top-0 transition-all duration-300 flex flex-col"
    >
      <div className="p-4 border-b border-blue-800 dark:border-gray-800">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full flex items-center justify-center p-2 bg-blue-800 dark:bg-gray-800 rounded-lg hover:bg-blue-700 dark:hover:bg-gray-700 transition-colors"
        >
          <Menu size={24} />
        </motion.button>
      </div>

      <nav className="flex-1 overflow-y-auto py-4">
        <AnimatePresence>
          {menuItems.map((item) => {
            const isActive = location.pathname === item.route;
            return (
              <Link key={item.id} to={item.route} onClick={()=>handleSelectModule(item.labelKey)}>
                <motion.div
                  whileHover={{ x: 5 }}
                  className={`flex items-center gap-3 px-4 py-3 mx-2 mb-1 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-800 dark:bg-gray-800'
                      : 'hover:bg-blue-800 dark:hover:bg-gray-800'
                  }`}
                >
                  <div className="flex-shrink-0">{item.icon}</div>
                  {!isCollapsed && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-sm whitespace-nowrap"
                    >
                      {t(item.labelKey)}
                    </motion.span>
                  )}
                </motion.div>
              </Link>
            );
          })}
        </AnimatePresence>
      </nav>
    </motion.aside>
  );
};
