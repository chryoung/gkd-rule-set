import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 23333,
  name: 'gkd-rule-set',
  version: 0,
  author: 'chryoung',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/chryoung/gkd-rule-set',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
