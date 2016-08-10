import React from 'react';
let Comment = require('./commentComponent.jsx');

class CommentList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let commentNodes = this.props.data.map((comment) => {
        return (
          <Comment author={comment.author} content={comment.content} date={comment.date} />
        )
      });

    return (
      <div>
        {commentNodes}
      </div>
    )
  }
}

module.exports = CommentList;
