import { ViewProps } from 'react-native';
import { TextProps } from '@fluentui-react-native/experimental-text';
import { IBorderTokens, IColorTokens, LayoutTokens } from '@fluentui-react-native/tokens';
import { IconProps } from '@fluentui-react-native/icon';

export const dummy = 'Dummy';
export type TextSize = 'small' | 'medium' | 'large';

export interface DummyTokens extends LayoutTokens, IBorderTokens, IColorTokens {
  small?: DummyTokens;
  medium?: DummyTokens;
  large?: DummyTokens;
}

export interface DummyProps {
  text: string;
  textSize?: TextSize;
  image: IconProps;
  image2?: IconProps;
}

export interface DummySlotProps {
  root: ViewProps;
  text: TextProps;
  image: IconProps;
  optionalImage: IconProps;
}

export interface DummyType {
  props: DummyProps;
  tokens: DummyTokens;
  slotProps: DummySlotProps;
}
