import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.fcbox.hiveconsumer',
  name: '丰巢',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '',
      fastQuery: true,
      rules: [
        {
          key: 1,
          matches: 'FrameLayout[vid="fl_container"] >5 FrameLayout > View',
        },
      ],
    },
  ],
});
