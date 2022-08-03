/** @jsx withSlots */
import * as React from 'react';
import { View } from 'react-native';
import { dummy, DummyType, DummyProps } from './Dummy.types';
import { Text } from '@fluentui-react-native/experimental-text';
import { stylingSettings } from './Dummy.styling';
import { compose, mergeProps, withSlots, UseSlots } from '@fluentui-react-native/framework';
import { useDummy } from './useDummy';
import { Icon } from '@fluentui-react-native/icon';

/**
 * A function which determines if a set of styles should be applied to the component given the current state and props of the dummy.
 *
 * @param layer The name of the state that is being checked for
 * @param userProps The props that were passed into the dummy
 * @returns Whether the styles that are assigned to the layer should be applied to the dummy
 */
export const dummyLookup = (layer: string, userProps: DummyProps): boolean => {
  return userProps[layer] || layer === userProps['textSize'] || (!userProps['textSize'] && layer === 'medium');
};

export const Dummy = compose<DummyType>({
  displayName: dummy,
  ...stylingSettings,
  slots: {
    root: View,
    //1. Decide which slots req and add those here and in SlotProps interface
    text: Text,
    image: Icon,
    optionalImage: Icon,
  },
  useRender: (userProps: DummyProps, useSlots: UseSlots<DummyType>) => {
    const dummyProps = useDummy(userProps);

    //2. Decide what props required and add them here if modications req and in Props interface
    //userProps now has icon and text as fields, but could have been extended instead if required
    const iconProps = dummyProps.image;
    const optionalIconProps = dummyProps.image2;

    const Slots = useSlots(userProps, (layer) => dummyLookup(layer, userProps));

    return (final: DummyProps, ...children: React.ReactNode[]) => {
      //3. Extracting props required for the sub components, leaving container's props in mergedProps
      const { text, image, image2, ...mergedProps } = mergeProps(dummyProps, final);
      //4. Create required styling
      return (
        //5. Render as required
        <Slots.root {...mergedProps}>
          <Slots.image {...iconProps} />
          {optionalIconProps && <Slots.optionalImage {...optionalIconProps} />}
          <Slots.text>{text}</Slots.text>
          {children}
        </Slots.root>
      );
    };
  },
});
