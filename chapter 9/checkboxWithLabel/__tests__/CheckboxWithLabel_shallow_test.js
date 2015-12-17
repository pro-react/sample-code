jest.autoMockOff();

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import ShallowTestUtils from 'react-shallow-testutils';

const shallowRenderer = TestUtils.createRenderer();
const CheckboxWithLabel = require('../CheckboxWithLabel');

describe('CheckboxWithLabel', () => {

  // Render a checkbox with label in the document
  shallowRenderer.render(<CheckboxWithLabel labelOn="On" labelOff="Off" />);

  let checkbox = shallowRenderer.getRenderOutput();
  const component = ShallowTestUtils.getMountedInstance(shallowRenderer);

  it('defaults to unchecked and Off label', () => {
    const expectedChildren = [
      <input type="checkbox" checked={false} onChange={component.onChange} />,
      "Off"
    ];
    expect(checkbox.props.children).toEqual(expectedChildren);
  });


  it('changes the label after click', () => {
    component.onChange();

    // Updates the render
    checkbox = shallowRenderer.getRenderOutput();

    expect(checkbox.props.children[1]).toEqual('On');
  });
});
