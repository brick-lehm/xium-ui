import type { PlanCatalogs } from './pricing.type';

import { CONFIG } from '../../../../global-config';

export const CatalogsMock: PlanCatalogs = {

  plans: [
    {
      planId: 'standard',
      planTitle: 'Standard',
      price: 69,
      features: [
        '30ユーザー数',
        '5プロジェクト',
        'ストレージ（容量）： 1GB',
        'コミュニティサポート',
      ],
      options: [
        'カンバンボード',
        'ファイル共有',
      ],
      icons: [
        `${CONFIG.assetsDir}/assets/icons/platforms/ic-js.svg`,
      ]
    },
    {
      planId: 'plus',
      planTitle: 'Plus',
      price: 129,
      features: [
        '30ユーザー数',
        '5プロジェクト',
        'ストレージ（容量）： 1GB',
        'コミュニティサポート',
      ],
      options: [
        'カンバンボード',
        'ファイル共有',
        'バーンダウンチャート',
        '親子課題'
      ],
      icons: [
        `${CONFIG.assetsDir}/assets/icons/platforms/ic-js.svg`,
        `${CONFIG.assetsDir}/assets/icons/platforms/ic-ts.svg`,
      ]
    },
    {
      planId: 'pro',
      planTitle: 'Pro',
      price: 599,
      features: [
        '30ユーザー数',
        '5プロジェクト',
        'ストレージ（容量）： 1GB',
        'コミュニティサポート',
      ],
      options: [
        'カンバンボード',
        'ファイル共有',
        'バーンダウンチャート',
        '親子課題',
        'モバイルアプリ',
      ],
      icons: [
        `${CONFIG.assetsDir}/assets/icons/platforms/ic-js.svg`,
        `${CONFIG.assetsDir}/assets/icons/platforms/ic-ts.svg`,
        `${CONFIG.assetsDir}/assets/icons/platforms/ic-figma.svg`,
      ],
    },
  ],
};
