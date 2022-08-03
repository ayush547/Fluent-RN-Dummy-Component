import * as React from 'react';
import { DUMMY_TESTPAGE } from './consts';
import { DummyDefault } from './DummyDefault';
import { Test, TestSection, PlatformStatus } from '../Test';

const dummySections: TestSection[] = [
  {
    name: 'Dummy Page',
    testID: DUMMY_TESTPAGE,
    component: DummyDefault,
  },
];

export const DummyTest: React.FunctionComponent = () => {
  const status: PlatformStatus = {
    win32Status: 'Beta',
    uwpStatus: 'Experimental',
    iosStatus: 'Experimental',
    macosStatus: 'Beta',
    androidStatus: 'Backlog',
  };

  const description = 'component-description';

  return <Test name="Dummy Test" description={description} sections={dummySections} status={status}></Test>;
};
