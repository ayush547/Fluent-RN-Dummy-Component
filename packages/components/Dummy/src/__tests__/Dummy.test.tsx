import * as React from 'react';
import { Dummy } from '../Dummy';
import * as renderer from 'react-test-renderer';
import { checkRenderConsistency, checkReRender } from '@fluentui-react-native/test-tools';

describe('Dummy component tests', () => {
  it('Dummy default', () => {
    const tree = renderer.create(<Dummy>Your component</Dummy>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Dummy simple rendering does not invalidate styling', () => {
    checkRenderConsistency(() => <Dummy>Default Dummy</Dummy>, 2);
  });

  it('Dummy re-renders correctly', () => {
    checkReRender(() => <Dummy>Render twice</Dummy>, 2);
  });

  // Feel free to add more tests here
});
