import React, { Component } from 'react';
import Todolistapp from './components/Todolistapp';
import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)

const decor = {
  textDecoration: 'underline',
  textAlign: 'center',
  color: 'antiquewhite'
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: [],
      field1: ''
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);

  };
  handleChange(e) {
    this.setState({field1: e.target.value});
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const field = {
      text: this.state.field1,
      id: Date.now()
    };
    this.setState(state => ({
      input: state.input.concat(field),
      field1: ''
      }))
    }

  render() {
    return(
      <div className="mui-container-fluid">
      <div className="column">
      <div className="mui-row">
      <div className="mui-col-md-6 mui-col-md-offset-3">
      <h2>
      <div className="content" style={decor}>TODO APPLICATION</div>
      </h2>
      <form className="mui-form">
        <div className="mui-textfield">
        <input type="text" value={this.state.field1} onChange={this.handleChange} />
        </div>
        <button className="mui-btn mui-btn--raised" tabIndex="0" onClick={this.handleSubmit}>Add</button>
        </form>
      </div>
      </div>
      </div>
      <Todolistapp list={this.state.input} />
      </div>
      );
  }
}

export default App;