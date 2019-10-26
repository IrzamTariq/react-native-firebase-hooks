import Component from 'styled-components/native';

export const Input = Component.TextInput`
  font-size:15px;
  width:80%
`

export const InputView =Component.View`
  height:50px
  width: 80%;
  border-radius: 50px;
  border: 1px solid #225DF5;
  background-color:#ffffff; 
  margin: 10px;
  flex-direction:row
`

export const IconView =Component.View`
  height:50px;
  width:50px;
  justify-content:center;
  align-items:center;
  background-color:transparent; 
`
