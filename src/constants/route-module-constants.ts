export const routeLabelMap = {
  '/role-management': 'roleManagement',
  '/user-group-management': 'userGroupManagement',
  '/configuration-management': 'configurationManagement',
  '/enrollment': 'enrollment',
  '/identification': 'identification',
  '/manage-identity': 'manageIdentity',
  '/reports': 'reports', // ⚠️ was missing in your labelKey list, add if exists
  '/verification': 'verification',
  '/rules-configuration': 'rulesConfiguration',
  '/bulk-import': 'bulkImport',
  '/verification-store': 'verificationStore',
  '/verification-status': 'verificationStatus',
  '/identification-status': 'identificationStatus',
  '/diagnostics-tool': 'diagnosticsTool',
  '/pending-upload': 'pendingUpload',
} as const;

export type RouteLabelMap = typeof routeLabelMap;
export type RoutePath = keyof RouteLabelMap;
export type RouteLabel = RouteLabelMap[RoutePath];

