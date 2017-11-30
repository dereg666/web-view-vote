import React, { Component } from 'react';
import Row from './Row';
import './App.css';

const testdata = [
  {
    isCheck: false,
    itemName: 'QAQ',
  },
  {
    isCheck: false,
    itemName: 'Ssd',
  },
  {
    isCheck: false,
    itemName: 'Chdjsj',
  },
  {
    isCheck: false,
    itemName: 'Djxjxif',
  },
  {
    isCheck: false,
    itemName: '安安安',
  },
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      lists: testdata,
    };
    this.checkItem = this.checkItem.bind(this);
  }
  checkItem(index) {
    const temp = this.state.lists;
    temp[index].isCheck = !temp[index].isCheck;
    this.setState({ lists: temp });
  }
  render() {
    return (
      <div className="App">
        <div className="rowItem">
          <div className="rowText titleName">Bbmmvcc</div>
        </div>
        <div>
          {this.state.lists.map((it, index) => (<Row
            index={index}
            data={it}
            check={this.checkItem}
          />))}
        </div>
        <div className="buttonContainer">
          <button className="submitButton">Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
