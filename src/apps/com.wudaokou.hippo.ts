import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.wudaokou.hippo',
  name: '盒马',
  groups: [
    {
      key: 1,
      name: '会员',
      desc: '',
      fastQuery: true,
      rules: [
        {
          key: 1,
          activityIds: ['.launcher.splash.SplashActivity'],
          matches: 'Button[desc="关闭弹窗"]',
        },
      ],
    },
  ],
});
