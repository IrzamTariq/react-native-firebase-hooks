import React from 'react';
import Icons from './IconImage'
import Component from 'styled-components/native';
const SocialLogin = () => (
  <Layer>
      <Icons
      color='#3C5A99'
      iconname="facebook"/>
      <Icons
      color="#33CCFF"
      iconname="twitter"/>
      <Icons
      color="gray"
      iconname="instagram"/>
  </Layer>
)


const Layer = Component.View`
flex-direction: row;
align-items:center;
justify-content:center;
height:50;
width:100%
`

export default SocialLogin;

