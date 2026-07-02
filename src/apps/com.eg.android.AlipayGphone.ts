import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  groups: [
    {
      key: 1,
      name: '小程序广告',
      desc: '跳过',
      fastQuery: true,
      rules: [
        {
          key: 1,
          matches: 'TextView[text*="跳过"]',
        },
      ],
    },
  ],
});
