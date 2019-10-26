import React, {Component} from 'react';
import Detail from './Detail'

export default class DetailNav extends Component {

  render() {
      
    const {first,last,Email,Phone,Address}=this.props.navigation.state.params;
    return (
      <Detail 
      first={first}
      last={last}
      Email={Email}
      Phone={Phone}
      Address={Address}/>
    );
  }
}
