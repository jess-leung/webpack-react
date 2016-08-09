import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
let sd = require('skin-deep');
let Comment = require('../app/components/commentComponent.jsx');

jest.unmock('../app/components/commentComponent.jsx');

describe('Comment component', () => {
  let tree;

  beforeEach(() => {
    tree = sd.shallowRender(<Comment author='user1' date='12/3/16' content='this is a comment'/>);
  });

  describe('Rendering', () => {
    it('should display the date and author of the comment', () => {
      let commentAuthor = tree.subTree('.commentAuthor');
      let commentDate = tree.subTree('.commentDate');
      let commentContent = tree.subTree('.commentContent');

      expect(commentAuthor.text()).toEqual('user1');
      expect(commentDate.text()).toEqual('12/3/16');
      expect(commentContent.text()).toEqual('this is a comment');
    });
  });

});
