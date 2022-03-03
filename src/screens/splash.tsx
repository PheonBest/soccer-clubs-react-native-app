import { Text, View, Image, ImageBackground } from 'react-native'
import React, { useEffect } from 'react'
import { gstyles } from '../utils/global-styles'
import { StackNavigationProp } from '@react-navigation/stack'

interface Props {
  navigation: StackNavigationProp<any, any>
}

export default function Splash({ navigation }: Props): JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('My Tasks')
    }, 2000)
  }, [])

  return (
    <View style={[{ flex: 1 }, gstyles.container_PRIMARY_NORMAL]}>
      <ImageBackground
        source={require('../assets/images/stadium.jpg')}
        resizeMode="cover"
        style={gstyles.backgroundImage}
      >
        <Image
          style={gstyles.logo}
          source={require('../assets/images/trophee.png')}
        />
        <Text style={gstyles.title_LARGE_CENTERED}>SPORTYMA</Text>
      </ImageBackground>
    </View>
  )
}
