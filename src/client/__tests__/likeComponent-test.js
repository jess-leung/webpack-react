import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

jest.unmock('../app/components/likeComponent.jsx');


describe('Test component', () => {
  var Like;

  beforeEach(() => {
      Like = require('../app/components/likeComponent.jsx');
  });

  it('should exist', () => {
      var like = TestUtils.renderIntoDocument(<Like />);

      expect(TestUtils.isCompositeComponent(like)).toBeTruthy();
  });
});
