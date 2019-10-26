import React,{useState} from 'react';
import Component from 'styled-components/native'
import firebase from 'react-native-firebase'
import {
  Alert,ActivityIndicator
} from 'react-native';

const ButtonView = Component.TouchableOpacity`
  width: 80%;
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 50px;
  justify-content: center;
  background-color: #225DF5;
`
const Label = Component.Text`
  color: #fff;
  font-size: 18px;
  text-align: center;
  font-weight:bold
`

const Indicator=Component.ActivityIndicator`

`

const Button = ({first,last,email,phone,address,call}) => {
  
  const [load, Setload] = useState(false)

  const handleChange = (first,last,email,phone,address) => {
    Setload(true)
      if(first===''||last===''||email===''||phone===''||address==='')
      {
        Alert.alert("Please Check All Fields")
        Setload(false)
      }
      else
      {
        if(email===false)
      {
        Alert.alert("INVALID EMAIL")
        Setload(false)
      }
        else
        {
          if(phone===false)
        {
          Alert.alert("INVALID PHONE NUMBER")
          Setload(false)
        }
        else
        {firebase.firestore().collection("TODOTABLE").add({
            firstname:first,
            last:last,
            email:email,
            phone:phone,
            address:address
          })
          .then((res)=>{ 
            Setload(false) 
            call("NAVIGATION")
          })
          .catch((es)=>{
            Setload(false)
          })}
        }}
      }   

return(
  load===true?<ActivityIndicator/>:
  <ButtonView
  onPress={handleChange.bind(this,first,last,email,phone,address)}
  > 
      <Label>REGISTER</Label>
   </ButtonView>
)
}
export default Button
