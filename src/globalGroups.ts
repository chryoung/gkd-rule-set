import { defineGkdGlobalGroups } from '@gkd-kit/define';

export default defineGkdGlobalGroups([
  {
    key: 0,
    name: '开屏广告',
    fastQuery: true,
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    rules: [
      {
        key: 0,
        matches: ['[text*="跳过"][text.length<10][visibleToUser=true]'],
      },
    ],
  },
  {
    key: 1,
    name: '更新App',
    fastQuery: true,
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    rules: [
      {
        key: 0,
        matches: ['TextView[text="暂不更新"]'],
      },
    ],
  },
]);
