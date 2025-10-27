import type { Plan, Plans } from './pricing.type';

import { CONFIG } from '../../global-config';

export const plansMock: Plans = {
  common: [
    'Basic Analytics', '100 GB Storage', 'Basic Support'
  ],
  options: [
    'Custom Domain', 'SSL Certificate', 'Daily Backups',
    'SEO Tools', 'Marketing Integrations',
    'All Features', 'Unlimited Storage', '24/7 Dedicated Support'
  ],
  plans: [
    {
      planTitle: 'Standard',
      price: 69,
      allowOptions: [
        'Custom Domain', 'SSL Certificate', 'Daily Backups',
      ],
      icons: [
        `${CONFIG.assetsDir}/assets/icons/platforms/ic-js.svg`,
      ],
    },
    {
      planTitle: 'Plus',
      price: 129,
      allowOptions: [
        'Custom Domain', 'SSL Certificate', 'Daily Backups',
        'SEO Tools', 'Marketing Integrations',
      ],
      icons: [
        `${CONFIG.assetsDir}/assets/icons/platforms/ic-js.svg`,
        `${CONFIG.assetsDir}/assets/icons/platforms/ic-ts.svg`,
      ]
    },
    {
      planTitle: 'Pro',
      price: 599,
      allowOptions: [
        'Custom Domain', 'SSL Certificate', 'Daily Backups',
        'SEO Tools', 'Marketing Integrations',
        'All Features', 'Unlimited Storage', '24/7 Dedicated Support'
      ],
      icons: [
        `${CONFIG.assetsDir}/assets/icons/platforms/ic-js.svg`,
        `${CONFIG.assetsDir}/assets/icons/platforms/ic-ts.svg`,
        `${CONFIG.assetsDir}/assets/icons/platforms/ic-figma.svg`,
      ],
    },
  ]
};

