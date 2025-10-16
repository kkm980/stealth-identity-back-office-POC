/**
 * Bulk Import Page
 * Page for bulk data import
 */

import { useTranslation } from 'react-i18next';
import { Upload } from 'lucide-react';

export const BulkImport = () => {
  const { t } = useTranslation();

  return (
    <div className="p-6">
      <div className="flex items-center gap-4 mb-6">
        <Upload size={32} className="text-blue-600 dark:text-blue-400" />
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
          {t('bulkImport')}
        </h1>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <p className="text-gray-600 dark:text-gray-400">
          This is the Bulk Import page. Content will be implemented here.
        </p>
      </div>
    </div>
  );
};
