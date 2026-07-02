import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.douban.frodo',
  name: '豆瓣',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '扭动手机',
      fastQuery: true,
      rules: [
        {
          key: 1,
          activityIds: ['.activity.SplashActivity'],
          matches:
            'FrameLayout[visibleToUser=true][clickable=true][vid="menu_notification"]',
        },
      ],
    },
  ],
});
