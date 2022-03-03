import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  list: {},
  listItem: {},
  playerItem: {
    paddingLeft: 10,
    backgroundColor: '#FFF',
    borderBottomColor: '#c8c8c8',
    borderBottomWidth: 1,
  },
  countrySeparator: { height: 0.7, width: '100%', backgroundColor: '#c8c8c8' },
  countryItem: { marginLeft: 10 },
  container_DROPDOWN: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: '90%',
    flexDirection: 'row',
  },
  subContainer_DROPDOWN: {
    backgroundColor: '#FFF',
    borderWidth: 1.5,
    paddingTop: 10,
    // marginHorizontal: 20,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 25,
    width: '100%',

    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  itemView: {
    // marginHorizontal: '10%',
    backgroundColor: 'white',
    height: 30,
    width: '90%',
    marginBottom: 10,
    justifyContent: 'center',
    borderRadius: 4,
  },
  itemText: {
    color: 'black',
    // paddingHorizontal: 10,
  },
  noResultView: {
    alignSelf: 'center',
    // margin: 20,
    height: 100,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  noResultText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
})
