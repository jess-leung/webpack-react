import React from 'react';

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = {likesCount: 0};
    this.onLike = this.onLike.bind(this);
  }

  onLike() {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }

  render() {
    return (
      <div>
        <p>Likes: <span>{this.state.likesCount}</span></p>
        <button onClick={this.onLike}>Like</button>
      </div>
    );
  }
}

module.exports = Like;
