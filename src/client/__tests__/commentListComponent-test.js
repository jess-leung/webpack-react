import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
let sd = require('skin-deep');
let CommentList = require('../app/components/commentListComponent.jsx');

jest.unmock('../app/components/commentListComponent.jsx');

describe('Comment List Component', () => {
  let tree;
  let comments = [
    {
      content: 'this is a comment',
      author: 'user1',
      date: '12/3/12'
    }, {
      content: 'this is another comment',
      author: 'user2',
      date: '12/4/12'
    }];

  beforeEach(() => {
    tree = sd.shallowRender(<CommentList data={comments} />);
  });

  describe('Rendering', () => {
    it('should render a list of comments', () => {
      let renderedComments = tree.everySubTree('Comment');
      expect(renderedComments.length).toBe(2);
    });
  });
});
