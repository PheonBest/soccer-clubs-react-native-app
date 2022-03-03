import { StyleSheet } from 'react-native'

export const gstyles = StyleSheet.create({
  list: {},
  listItem: {
    paddingLeft: 10,
    backgroundColor: '#FFF',
    borderBottomColor: '#c8c8c8',
    borderBottomWidth: 1,
  },
  button_BOTTOM_RIGHT: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#3B71F3',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    right: 10,
    zIndex: 1,
    elevation: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    margin: 20,
    alignSelf: 'center',
  },
  logo_SMALL: {
    width: 16,
    height: 16,
  },
  logo_MEDIUM: {
    width: 32,
    height: 32,
  },
  logo_LARGE: {
    width: 64,
    height: 64,
  },
  bar: {
    backgroundColor: '#FFF',
  },
  container_NO_PADDING: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  container: {
    width: '100%',

    padding: 15,
    marginVertical: 5,

    alignItems: 'center',
    borderRadius: 5,
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
    backgroundColor: '#333',
  },
  container_SECONDARY_PRESSED: {
    backgroundColor: '#FFF',
    borderColor: '#333',
    borderWidth: 2,
  },

  text_PRIMARY_NORMAL: {
    color: '#fff',
    fontFamily: 'Regular',
  },
  text_PRIMARY_PRESSED: {
    color: '#fff',
    fontFamily: 'Regular',
  },

  text_SECONDARY_NORMAL: {
    color: '#fff',
    fontFamily: 'Regular',
  },
  text_SECONDARY_PRESSED: {
    color: '#000',
    fontFamily: 'Regular',
  },

  container_TERTIARY: {},

  title_LEFT: {
    color: 'white',
    fontFamily: 'Bold',
    alignSelf: 'flex-start',
    fontSize: 24,
  },
  title_CENTERED: {
    color: 'white',
    fontFamily: 'Bold',
    alignSelf: 'center',
    fontSize: 24,
  },
  title_LARGE_CENTERED: {
    color: 'white',
    fontFamily: 'Bold',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 24,
  },

  text: {
    color: '#fff',
    fontFamily: 'Regular',
  },

  text_black: {
    color: '#000',
    fontFamily: 'Regular',
  },

  table_TITLE: {
    color: '#666',
    fontFamily: 'Regular',
    fontSize: 20,
  },

  table_CELL: {
    color: '#000',
    fontFamily: 'Regular',
    fontSize: 16,
  },

  text_size_MEDIUM: {
    fontSize: 18,
  },

  label: {
    color: '#000',
    fontFamily: 'Regular',
    alignSelf: 'flex-start',
    marginTop: 10,
    marginLeft: 10,
  },

  text_SECONDARY: {
    color: '#EEE',
  },

  text_TERTIARY: {
    color: 'gray',
  },
  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1,
  },
  input: {
    backgroundColor: 'white',
    width: '100%',

    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 5,
  },
})
