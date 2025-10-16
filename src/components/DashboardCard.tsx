/**
 * DashboardCard Component
 * Reusable card component for dashboard tiles with icon and title
 */

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
// import { setCurrentModule } from '../store/selectedModuleSlice';
// import { useDispatch } from 'react-redux';

interface DashboardCardProps {
  title: string;
  icon: LucideIcon;
  route: string;
}

export const DashboardCard = ({ title, icon: Icon, route }: DashboardCardProps) => {

  // const dispatch = useDispatch();

  // const handleSelectModule = (module: string) => {
  //   dispatch(setCurrentModule(module));
  // };

  return (
    <Link to={route} 
    // onClick={()=>handleSelectModule(title)}
    >
      <motion.div
        whileHover={{ scale: 1.03, y: -5 }}
        whileTap={{ scale: 0.98 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center justify-center gap-4 min-h-[160px] cursor-pointer border border-gray-100 dark:border-gray-700"
      >
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="text-blue-600 dark:text-blue-400"
        >
          <Icon size={48} strokeWidth={1.5} />
        </motion.div>
        <h3 className="text-gray-800 dark:text-gray-200 text-center text-sm font-medium">
          {title}
        </h3>
      </motion.div>
    </Link>
  );
};
