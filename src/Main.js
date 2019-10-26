import React,{useState} from 'react';
import {
  ScrollView,
  View,Text,Alert
} from 'react-native';
import Component from 'styled-components/native';
import Header from '../Component/Header';
import {Input,InputView,IconView} from '../Component/Input';
import Button from '../Component/Button';
import OrLayer from '../Component/OrLayer';
import SocialLogin from '../Component/SocialLogin';
import {Validation} from '../Fun/Validation';
import ICON from 'react-native-vector-icons/FontAwesome';
import IONIC from 'react-native-vector-icons/Ionicons';


const Container = Component.View`
width: 100%;
height: 100%;
align-items:center;
background-color: #ffffff;
`

const App = ({Navi}) => {
  const [firstname, Setfirst] = useState('')
  const [lastname, SetLast] = useState('')
  const [EmailID, SetEmail] = useState('')
  const [PhoneNumber, SetNum] = useState('')
  const [Address, SetAddress] = useState('')
  const call = (res) => {
    Alert.alert("Data SuccessFully Uploaded")
    Setfirst('')
    SetLast('')
    SetEmail('')
    SetNum('')
    SetAddress('')
    Navi("ASD")
      }

const Valid=(text,type,Set)=>{
    Validation(text,type)
    Set(Validation(text,type))
}
      
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <Container>
      <Header/>
      <InputView>

      <IconView>
          <ICON name="user-circle-o" size={28} color="#225DF5"/>
      </IconView>
      <Input
            onChangeText={(text)=>Valid(text,"FirstName",Setfirst)}
            value={firstname}
            placeholder="First name"
            placeholderTextColor="#225DF5"
            style={{color:'#225DF5'}}
          />
      </InputView>

      <InputView>
      <IconView>
          <ICON name="user-circle" size={28} color="#225DF5"/>
      </IconView>
          <Input
            onChangeText={(text)=>Valid(text,"FirstName",SetLast)}
            value={lastname}
            placeholder="Last name"
            placeholderTextColor="#225DF5"
            style={{color:'#225DF5'}}
          />
      </InputView>
      
      <InputView>
      <IconView>
      <IONIC name="ios-mail" size={28} color="#225DF5"/>
      </IconView>
          <Input
            onChangeText={(text)=>Valid(text,"Email",SetEmail)}
            // value={EmailID}
            placeholder="Email"
            keyboardType="email-address"
            placeholderTextColor="#225DF5"
            style={{color:'#225DF5'}}
          />
      </InputView>
      
      <InputView>
      <IconView>
      <IONIC name="ios-call" size={28} color="#225DF5"/>
      </IconView>
          <Input
            onChangeText={(text)=>Valid(text,"PhoneNumber",SetNum)}
            placeholder="Phone"
            keyboardType="phone-pad"
            placeholderTextColor="#225DF5"
            style={{color:'#225DF5'}}
          />
      </InputView>
      
      <InputView>
      <IconView>
          <ICON name="address-card" size={28} color="#225DF5"/>
      </IconView>
          <Input
            onChangeText={(text)=>Valid(text,"Check",SetAddress)}
            value={Address}
            placeholder="Address"
            placeholderTextColor="#225DF5"
            style={{color:'#225DF5'}}
          />
      </InputView>
          <Button
          first={firstname}
          last={lastname}
          email={EmailID}
          phone={PhoneNumber}
          address={Address}
          call={call.bind(this)}
          />
          <OrLayer/>
          <SocialLogin/>
    </Container>
    </ScrollView>
  );
};


export default App;
