import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.estrongs.android.pop',
  name: 'ES文件管理器',
  groups: [
    {
      key: 1,
      name: '内置广告',
      desc: '',
      fastQuery: true,
      rules: [
        {
          key: 1,
          activityIds: ['.view.FileExplorerActivity'],
          matches: 'ImageView[id*="ad"][desc="关闭"]',
        },
      ],
    },
  ],
});
