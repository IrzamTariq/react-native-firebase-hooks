import React from 'react'
import Component from 'styled-components/native';
const OrLayer = () => (
  <Layer>
      <View />
      <Text >OR</Text>
      <View/>
  </Layer>
)
const View = Component.View`
  height: 1px;
  width: 35%;
  margin:5px;
  background-color:#225DF5; 
`
const Text = Component.Text`
padding:5px
color:#235EF5;
`

const Layer = Component.View`
flex-direction: row;
margin:20px;
justify-content:center;
align-items:center;
height:20px;
background-color:transparent
`

export default OrLayer;