import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { gstyles } from './src/utils/global-styles'
import {
  MontserratAlternates_100Thin,
  MontserratAlternates_100Thin_Italic,
  MontserratAlternates_200ExtraLight,
  MontserratAlternates_200ExtraLight_Italic,
  MontserratAlternates_300Light,
  MontserratAlternates_300Light_Italic,
  MontserratAlternates_400Regular,
  MontserratAlternates_400Regular_Italic,
  MontserratAlternates_500Medium,
  MontserratAlternates_500Medium_Italic,
  MontserratAlternates_600SemiBold,
  MontserratAlternates_600SemiBold_Italic,
  MontserratAlternates_700Bold,
  MontserratAlternates_700Bold_Italic,
  MontserratAlternates_800ExtraBold,
  MontserratAlternates_800ExtraBold_Italic,
  MontserratAlternates_900Black,
  MontserratAlternates_900Black_Italic,
} from '@expo-google-fonts/montserrat-alternates'
import {
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from '@expo-google-fonts/roboto'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import { NavigationContainer } from '@react-navigation/native'
import Players from './src/screens/players'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faHouse,
  faFutbolBall,
  faBars,
  faPeopleCarry,
} from '@fortawesome/free-solid-svg-icons'
import { ClubList } from './src/components/club-list/club-list'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const Bar = createMaterialBottomTabNavigator()

import { store } from './src/state/store'
import { Provider } from 'react-redux'
import Home from './src/screens/home'

export default function App() {
  let [fontsLoaded, error] = useFonts({
    Regular: Roboto_400Regular,
    Bold: MontserratAlternates_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Bar.Navigator
            initialRouteName="Home"
            activeColor="#f0edf6"
            inactiveColor="#999999"
            barStyle={gstyles.bar}
          >
            <Bar.Screen
              name="Home"
              component={Home}
              options={{
                title: 'Home',
                tabBarColor: 'red',
                tabBarIcon: ({ focused }) => (
                  <FontAwesomeIcon
                    style={gstyles.iconStyle}
                    icon={faHouse}
                    size={focused ? 25 : 20}
                    color={focused ? '#fff' : '#999999'}
                  />
                ),
              }}
            />
            <Bar.Screen
              name="Players"
              component={Players}
              options={{
                title: 'Home',
                tabBarIcon: ({ focused }) => (
                  <FontAwesomeIcon
                    style={gstyles.iconStyle}
                    icon={faPeopleCarry}
                    size={focused ? 25 : 20}
                    color={focused ? '#fff' : '#999999'}
                  />
                ),
              }}
            />
          </Bar.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  )
}
