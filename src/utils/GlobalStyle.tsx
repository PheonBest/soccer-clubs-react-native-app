import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  CustomFont: {
    fontFamily: 'Roboto-Black',
  },
  container: {
    width: '100%',

    padding: 15,
    marginVertical: 5,

    alignItems: 'center',
    borderRadius: 5,
  },

  container_PRIMARY_NORMAL: {
    backgroundColor: '#3B71F3',
  },
  container_PRIMARY_PRESSED: {
    backgroundColor: '#0000b5',
  },

  container_SECONDARY_NORMAL: {
    borderColor: '#3B71F3',
    borderWidth: 2,
  },
  container_SECONDARY_PRESSED: {
    borderColor: '#0000b5',
    borderWidth: 2,
  },

  container_TERTIARY: {},

  text: {
    fontWeight: 'bold',
    color: 'white',
  },

  text_SECONDARY: {
    color: '#3B71F3',
  },

  text_TERTIARY: {
    color: 'gray',
  },
})
