import type { SettingsData } from 'factorio:common';
import { StringSettingDefinition } from 'factorio:settings';

declare const data: SettingsData;

data.extend([
  {
    allowed_values: ['default', 'harmony-os'],
    default_value: 'harmony-os',
    name: 'better-chinese-fonts-family',
    setting_type: 'startup',
    type: 'string-setting',
  } satisfies StringSettingDefinition,
]);
