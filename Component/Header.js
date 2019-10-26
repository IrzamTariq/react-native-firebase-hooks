import React from 'react'
import Component from 'styled-components/native'

const ImageBackground = Component.ImageBackground`
  display: flex;
  height: 190px;
  width:100%
  align-items: center;
  justify-content: center;
  margin-bottom:35px;
`

const Header = () => (
  <ImageBackground source={require('../assets/header.png')}>
  </ImageBackground>
)

export default Header
