import React, { Component } from 'react';
import Row from './Row';
import './App.css';

const testdata = [
  {
    isCheck: false,
    itemName: 'haha',
  },
  {
    isCheck: false,
    itemName: 'haha2',
  },
  {
    isCheck: false,
    itemName: 'haha3',
  },
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      lists: testdata,
      temp: false,
    };
    this.checkItem = this.checkItem.bind(this);
  }
  checkItem() {
    this.setState({ temp: !this.state.temp });
  }
  render() {
    return (
      <div className="App">
        <div className="checkTitle">hello</div>
        <div>
          {this.state.lists.map((it, index) => <Row
            index={index}
            data={it}
            check={this.checkItem}
          />)}
        </div>
      </div>
    );
  }
}

export default App;
