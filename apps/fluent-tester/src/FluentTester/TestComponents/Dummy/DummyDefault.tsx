import { Dummy } from '@fluentui-react-native/dummy';
import * as React from 'react';
import { View } from 'react-native';
import { RasterImageIconProps } from '@fluentui-react-native/icon';

export const DummyDefault: React.FunctionComponent = () => {
  const rasterChessProps: RasterImageIconProps = { src: { uri: 'https://static.thenounproject.com/png/2960386-200.png' } };
  const imageProp = { rasterImageSource: rasterChessProps, color: 'blue' };

  const fontBuiltInProps = {
    fontFamily: 'Arial',
    codepoint: 0x2663,
    fontSize: 32,
  };
  const optionalImage = { fontSource: fontBuiltInProps, color: 'red' };
  return (
    <View>
      <Dummy />
      <Dummy text="Text added as prop" textSize="large" />
      <Dummy text="Text and Image as prop" image={imageProp} />
      <Dummy text="Text and both Images as prop" image={imageProp} image2={optionalImage} />
    </View>
  );
};
