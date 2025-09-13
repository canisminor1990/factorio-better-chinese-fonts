import type { PrototypeData } from 'factorio:common';
import type { FontPrototype } from 'factorio:prototype';

declare const data: PrototypeData;

// Process all fonts based on font family setting
for (const [fontName, font] of Object.entries(data.raw.font)) {
  const fontChoice = settings.startup['better-chinese-fonts-family'].value as string;

  if (font) {
    const currentFont = data.raw.font[fontName];
    if (!currentFont) continue;

    switch (font.from) {
      case 'default': {
        currentFont.from = fontChoice;
        break;
      }
      case 'default-semibold': {
        currentFont.from = fontChoice + '-semibold';
        break;
      }
      case 'default-bold': {
        currentFont.from = fontChoice + '-bold';
        break;
      }
      case 'mono': {
        currentFont.from = fontChoice + '-mono';
        break;
      }
      case 'locale-pick': {
        currentFont.from = fontChoice + '-locale-pick';
        break;
      }
      case 'scenario-message-dialog': {
        currentFont.from = fontChoice + '-scenario-message-dialog';
        break;
      }
    }
  }
}

data.extend([
  {
    ...data.raw.font['default-dropdown']!,
    name: 'original-default-dropdown',
  },
  {
    from: 'harmony-os',
    name: 'harmony-os-dropdown',
    size: 14,
    type: 'font',
  } satisfies FontPrototype,
]);
