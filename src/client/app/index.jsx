import React from 'react';
import {render} from 'react-dom';
import Like from './components/likeComponent.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <p>Testing</p>
        <Like />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
