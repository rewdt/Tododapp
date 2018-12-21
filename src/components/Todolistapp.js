import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Todolistapp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value : '',
    }
    this.clickRemove = this.clickRemove.bind(this);
  }

  clickRemove(e, id) {
    this.props.list.forEach(element => {
      const index = this.props.list.indexOf(element)
      const a = this.props.list[index];
        if(a.id === id) {
          delete this.props.list[index]
          this.setState({value: this.props.list })
        }
    });
  }
 
  render() {
    const record = this.props.list;

    return (
      <div>
        {record.map(records => (
          <li className="mui-panel panel"
           style={{listStyleType:'none'}} 
           key={records.id}>{records.text}
           <FontAwesomeIcon icon="trash" className="iconstyle"
           onClick={e => this.clickRemove(e, records.id )} />
           </li>
        ))}
      </div>
    )
  }
}

export default Todolistapp;