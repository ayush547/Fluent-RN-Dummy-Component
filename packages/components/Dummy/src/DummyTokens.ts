import { Theme } from '@fluentui-react-native/framework';
import { TokenSettings } from '@fluentui-react-native/use-styling';
import { DummyTokens } from './Dummy.types';

export const defaultDummyTokens: TokenSettings<DummyTokens, Theme> = (t: Theme) =>
  ({
    color: t.colors.brandBackground,
    borderColor: t.colors.brandBackground,
    small: {
      borderWidth: 1,
      padding: 10,
      borderRadius: 2,
      backgroundColor: 'red',
    },
    medium: {
      borderWidth: 2,
      borderRadius: 4,
      padding: 20,
      backgroundColor: 'violet',
    },
    large: {
      borderWidth: 4,
      borderRadius: 6,
      padding: 30,
      backgroundColor: 'green',
    },
  } as DummyTokens);
