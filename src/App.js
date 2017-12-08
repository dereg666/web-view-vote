import React, { Component } from 'react';
import Row from './Row';
import './App.css';
import { setTimeout } from 'core-js/library/web/timers';

let loaded = false;
let psid = '';

window.extAsyncInit = function() {
  loaded = true;
  console.log('loaded');
};

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
      id: '',
      lists: [],
      title: '',
      loaded: false,
    };
    this.checkItem = this.checkItem.bind(this);
    this.tick = this.tick.bind(this);
  }
  componentWillMount() {
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.com/en_US/messenger.Extensions.js";
      fjs.parentNode.insertBefore(js, fjs);
      console.log(js);
    }(document, 'script', 'Messenger'));
  }
  componentDidMount() {
    this.tick();
  }
  checkItem(index) {
    const temp = this.state.lists;
    temp[index].isCheck = !temp[index].isCheck;
    this.setState({ lists: temp });
  }
  tick() {
    console.log('tick');
    if (!this.state.loaded && !loaded) {
      setTimeout(this.tick, 100);
    } else if (!this.state.loaded && loaded) {
      window.MessengerExtensions.getContext('1880522122260765', function success(thread_context) {
        console.log(thread_context.psid);
        psid = thread_context.psid;
      },
      function error(err) {
        // error
      });
      if (psid !== '') {
        fetch(`/api/reqList/${psid}`)
          .then(response => response.json())
          .then((data) => {
            this.setState({ title: data.title });
            this.setState({ lists: data.lists });
          }).catch((error) => {
            console.log('request failed', error);
          });
        this.setState({ id : psid, loaded: true });
      } else {
        setTimeout(this.tick, 100);
      }
    }
  }
  render() {
    return (
      <div>
        {this.state.lists.length > 0 ?
          <div className="App">
            <div className="rowItem">
              <div className="rowText titleName">{this.state.title}</div>
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
          </div> : null
        }
      </div>
    );
  }
}

export default App;
