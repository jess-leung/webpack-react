import React from 'react';

class Comment extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="commentAuthor">{this.props.author}</div>
        <div className="commentDate">{this.props.date}</div>
        <div className="commentContent">{this.props.content}</div>
      </div>
    );
  }
}

module.exports = Comment;
