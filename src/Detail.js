import React from 'react';
import {StyleSheet,View,Dimensions,Text,TouchableOpacity} from 'react-native';
import Component from 'styled-components/native'

const Detail = ({first,last,Email,Phone,Address}) => {
    return (
        <ScreenView>
            <BackView >
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Main')}>
                <BackText >Back</BackText>
                </TouchableOpacity>
            </BackView>
            <InfoText>{first}</InfoText>
            <InfoText>{last}</InfoText>
            <InfoText>{Email}</InfoText>
            <InfoText>{Phone}</InfoText>
            <InfoText>{Address}</InfoText>
    </ScreenView>
    );
  }

const ScreenView = Component.View`

width:100%;
align-items:center;
background-color:#ffffff;
height:100%
`
const BackView = Component.View`

height:50px
width:100%;
`

const InfoText = Component.Text`

padding:10px;
color:#3C5A99;
font-size:24px;
font-weight:bold
`

const BackText = Component.Text`
padding:10px;
color:#3C5A99;
fontSize:18;
fontWeight:bold;
`


const styles = StyleSheet.create({
    pad: {
        padding:10,color:'#3C5A99',fontSize:24,fontWeight:'bold'
      },
      Screen:{
      },
      Back:{
        padding:10,color:'#3C5A99',fontSize:18,fontWeight:'bold'
      }
  });

  export default Detail;