import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
let sd = require('skin-deep');
let Like = require('../app/components/likeComponent.jsx');

jest.unmock('../app/components/likeComponent.jsx');

describe('Like Component', () => {
  let tree;

  beforeEach(() => {
    tree = sd.shallowRender(<Like />);
  });

  describe('Rendering', () => {
    it('should render the number of likes and a button', () => {
      let likeButton = tree.subTree('button');
      let likeNumberText = tree.subTree('p');
      expect(likeButton.text()).toEqual('Like');
      expect(likeNumberText.text()).toEqual('Likes: 0');
    });
  });

  describe('OnLike', () => {
    it('should update number of likes onLike', () => {
      const instance = tree.getMountedInstance();
      instance.onLike();
      expect(instance.state).toEqual({likesCount: 1});
    });
  });

  describe('Event handlers', () => {
    it('should increase number of likes onClick', () => {
      let likeButton = tree.subTree('button');
      likeButton.props.onClick({ preventDefault() {} });
      expect(tree.getMountedInstance().state).toEqual({likesCount: 1});
    });
  });
});
