import { LogBox, Text, View } from 'react-native'
import { gstyles } from './src/utils/global-styles'
import { MontserratAlternates_700Bold } from '@expo-google-fonts/montserrat-alternates'
import { Roboto_400Regular } from '@expo-google-fonts/roboto'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import { NavigationContainer } from '@react-navigation/native'
// free icon library:
// https://fontawesome.com/v6/search?m=free
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { store } from './src/state/store'
import { Provider } from 'react-redux'
import Home from './src/screens/home'
import Splash from './src/screens/splash'
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack'
import clubListAdd from './src/components/club-list/club-list-add'
import ClubListItem from './src/components/club-list/club-list-item'
import React from 'react'
import { StoriesLoader } from './src/utils/stories-loader'
import PlayerListItem from './src/components/player-list/player-list-item'

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
])
LogBox.ignoreLogs(['Remote debugger'])

const RootStack = createStackNavigator()

interface Props {
  navigation: StackNavigationProp<any, any>
}

function HomeTabs({ navigation }: Props) {
  return (
    <>
      <View
        style={[
          gstyles.container,
          gstyles.container_PRIMARY_NORMAL,
          { height: 70, marginTop: 0, paddingTop: 25 },
        ]}
      >
        <Text style={gstyles.title_LEFT}>Sportyma</Text>
      </View>

      <Home navigation={navigation} />
    </>
  )
}
export default function App() {
  let [fontsLoaded] = useFonts({
    Regular: Roboto_400Regular,
    Bold: MontserratAlternates_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }
  // @ts-ignore
  return (
    <Provider store={store}>
      <StoriesLoader />

      <SafeAreaProvider>
        <NavigationContainer>
          <RootStack.Navigator
            initialRouteName="Splash"
            screenOptions={{
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#0080ff',
              },
              headerTintColor: '#ffffff',
              headerTitleStyle: {
                fontSize: 25,
                fontWeight: 'bold',
              },
              headerShown: false,
            }}
          >
            <RootStack.Screen name="Splash" component={Splash} />

            <RootStack.Screen name="My Tasks" component={HomeTabs} />

            <RootStack.Screen
              name="ClubListAdd"
              component={clubListAdd}
              options={{ headerShown: true }}
            />

            <RootStack.Screen
              name="ClubListItem"
              component={ClubListItem}
              options={{ headerShown: true }}
            />

            <RootStack.Screen
              name="PlayerListItem"
              component={PlayerListItem}
              options={{ headerShown: true }}
            />
          </RootStack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  )
}
