import { StyleSheet } from 'react-native'

export const gstyles = StyleSheet.create({
  list: {},
  listItem_separator: {
    height: 0.7,
    width: '100%',
    backgroundColor: '#c8c8c8',
  },
  listItem_PRESSABLE: {
    marginHorizontal: 10,
    paddingLeft: 10,
    paddingVertical: 2,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    borderBottomColor: '#c8c8c8',
    borderBottomWidth: 0.8,
    borderRadius: 5,
  },
  listItem: {
    paddingLeft: 10,
    paddingVertical: 2,
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

  logo_S: {
    width: 16,
    height: 16,
  },
  logo_M: {
    width: 32,
    height: 32,
  },
  logo_L: {
    width: 64,
    height: 64,
  },
  logo_XL: {
    width: 150,
    height: 150,
    margin: 20,
    alignSelf: 'center',
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

  title: {
    fontFamily: 'Bold',
    color: 'white',
    fontSize: 24,
  },
  text: {
    fontFamily: 'Regular',
    color: 'white',
    fontSize: 18,
  },

  text_black: {
    fontFamily: 'Regular',
    color: 'black',
    fontSize: 18,
  },

  text_SECONDARY: {
    color: '#EEE',
  },

  text_TERTIARY: {
    color: 'gray',
  },

  alignment_LEFT: {
    alignSelf: 'flex-start',
  },
  alignment_RIGHT: {
    alignSelf: 'flex-end',
  },
  alignment_CENTERED: {
    alignSelf: 'center',
    textAlign: 'center',
  },

  table_TITLE: {
    color: '#666',
    fontFamily: 'Regular',
    fontSize: 18,
  },

  table_CELL: {
    color: '#000',
    fontFamily: 'Regular',
    fontSize: 16,
  },

  table_CELL_SMALL: {
    color: '#000',
    fontFamily: 'Regular',
    fontSize: 12,
  },

  table_CELL_BOLD: {
    color: '#000',
    fontFamily: 'Bold',
    fontSize: 16,
  },

  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  label: {
    color: '#000',
    fontFamily: 'Regular',
    alignSelf: 'flex-start',
    marginTop: 10,
    marginLeft: 10,
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
