import { StyleSheet } from 'react-native'

export const gstyles = StyleSheet.create({
  bar: {
    backgroundColor: '#1b3257',
  },
  container: {
    width: '100%',

    padding: 15,
    marginVertical: 5,

    alignItems: 'center',
    borderRadius: 5,
    flex: 1,
  },

  iconStyle: {
    fontSize: 40,
    color: 'black',
  },

  container_PRIMARY_NORMAL: {
    backgroundColor: '#3B71F3',
  },
  container_PRIMARY_PRESSED: {
    backgroundColor: '#1b3257',
  },

  container_SECONDARY_NORMAL: {
    borderColor: '#3B71F3',
    borderWidth: 2,
  },
  container_SECONDARY_PRESSED: {
    borderColor: '#1b3257',
    borderWidth: 2,
  },

  container_TERTIARY: {},

  title: {
    color: 'white',
    fontFamily: 'Bold',
    alignSelf: 'flex-start',
    fontSize: 24,
  },

  text: {
    color: '#fff',
    fontFamily: 'Regular',
  },

  text_SECONDARY: {
    color: '#EEE',
  },

  text_TERTIARY: {
    color: 'gray',
  },
})
