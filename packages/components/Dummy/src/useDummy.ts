import { DummyProps } from './Dummy.types';
import { SvgIconProps } from '@fluentui-react-native/icon';

export const useDummy = (props: DummyProps): DummyProps => {
  const svgUriProps: SvgIconProps = {
    uri: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Example.svg',
    viewBox: '0 0 1000 1000',
  };
  const imageProp = { svgSource: svgUriProps, color: 'red' };
  const { text = 'Default text', image = imageProp, image2, ...rest } = props;

  // write your code here

  return {
    text,
    image,
    image2,
    ...rest,
  };
};
