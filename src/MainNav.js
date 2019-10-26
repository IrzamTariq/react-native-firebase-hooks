import React, {Component} from 'react';
import Main from './Main'

export default class MainNav extends Component {

    Navigation=(res)=>{
        this.props.navigation.navigate('Detail' ,{first:'IRzam',last:'Last',
            Email:'Email',Phone:'Phone',Address:'Address'})
            console.warn(res)
    }

  render() {
    return (
      <Main Navi={this.Navigation.bind(this)}/>
    );
  }
}
