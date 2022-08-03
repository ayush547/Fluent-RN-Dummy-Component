import { dummy, DummyTokens, DummySlotProps, DummyProps } from './Dummy.types';
import { Theme, UseStylingOptions, buildProps } from '@fluentui-react-native/framework';
import { borderStyles, layoutStyles } from '@fluentui-react-native/tokens';
import { defaultDummyTokens } from './DummyTokens';

export const dummyStates: (keyof DummyTokens)[] = ['small', 'medium', 'large'];

export const stylingSettings: UseStylingOptions<DummyProps, DummySlotProps, DummyTokens> = {
  tokens: [defaultDummyTokens, dummy],
  states: dummyStates,
  slotProps: {
    root: buildProps(
      (tokens: DummyTokens, theme: Theme) => ({
        style: {
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          alignSelf: 'flex-start',
          justifyContent: 'center',
          backgroundColor: tokens.backgroundColor,
          ...borderStyles.from(tokens, theme),
          ...layoutStyles.from(tokens, theme),
        },
      }),
      ['backgroundColor', ...borderStyles.keys, ...layoutStyles.keys],
    ),
    text: buildProps(
      (tokens: DummyTokens) => {
        return {
          style: {
            color: tokens.color,
          },
        };
      },
      ['color'],
    ),
    image: buildProps(
      (tokens: DummyTokens) => {
        return {
          style: {
            color: tokens.color,
          },
          height: 100,
          width: 100,
        };
      },
      ['color'],
    ),
    optionalImage: buildProps(
      (tokens: DummyTokens) => {
        return {
          style: {
            color: tokens.color,
          },
          height: 50,
          width: 50,
        };
      },
      ['color'],
    ),
  },
};
