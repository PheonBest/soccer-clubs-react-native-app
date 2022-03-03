import { GestureResponderEvent, Image, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { AppState, Club, ClubListState, Country } from '../../state/types'
import CustomButton from '../custom-button'
import CustomInput from '../custom-input'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { addClub } from '../../state/club-list/actions'
import { gstyles } from '../../utils/global-styles'

import { TouchableOpacity, FlatList } from 'react-native-gesture-handler'
import { styles } from './styles'

// // Get countries list from modules world_countries_ist
import countries from '../../assets/node_modules/world_countries_lists/data/countries/fr/countries.json'
import images from '../../assets/node_modules/world_countries_lists/data/flags/16x16/flags-16x16.json'
import CustomImagePicker from '../custom-image-picker'

interface Props {
  clubList: ClubListState
  onAddClub: (club: Club) => void
}

const ClubListAdd = ({ clubList, onAddClub }: Props): JSX.Element => {
  // For the country's dropdown list selector:
  // If we click on a country suggestion
  // and that there's another button (e.g: image picker button),
  // the button behind is pressed after the suggestion is pressed.
  // Hence, a debounce time is needed to prevent clicking on the button behind.
  const DEBOUNCE_TIME = 100

  const {
    control,
    handleSubmit,
    //formState: { errors },
    setValue,
  } = useForm<Club>()

  const onSubmit = (data: Club) => {
    if (data && data.country) {
      const alpha2 = countries.filter((item: Country) => {
        return item.name.toUpperCase() == data.country.toUpperCase()
      })[0].alpha2
      if (typeof alpha2 !== 'undefined') {
        onAddClub({ name: data.name, logo: data.logo, country: alpha2 } as Club)
      } else {
        onAddClub({ name: data.name, logo: data.logo, country: 'fr' } as Club)
      }
    }
  }

  const onPressHandler = (func: Function) => {
    console.log(searching.current)
    if (!searching.current) {
      func()
    }
  }

  // For the country search bar filter, we use a filetered list
  // that show countries suggestions
  const [filteredCountries, setFilteredCountries] = useState(countries)
  const [searchingMenu, setSearchingMenu] = useState(false)
  const searching = useRef(false)

  const ItemSeparatorView = () => {
    return <View style={styles.countrySeparator} />
  }
  const ItemView = ({
    item,
    onPress,
  }: {
    item: Country
    onPress: ((event: GestureResponderEvent) => void) & (() => void)
  }) => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.countryItem}>
        <Text style={gstyles.text_black}>
          <Image
            style={gstyles.logo_SMALL}
            source={{ uri: images[item.alpha2 as keyof typeof images] }}
          />
          &nbsp;&nbsp;
          {item.name}
        </Text>
      </TouchableOpacity>
    )
  }
  const searchFilter = (text: string) => {
    if (text) {
      searching.current = true
      setSearchingMenu(true)

      const newData = countries.filter((item: Country) => {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase()
        const textData = text.toUpperCase()
        return itemData.indexOf(textData) > -1
      })
      if (newData.length == 0) {
        searching.current = false
        setSearchingMenu(false)
      } else {
        setFilteredCountries(newData)
      }
    } else {
      searching.current = false
      setSearchingMenu(false)

      setFilteredCountries(countries)
    }
  }

  return (
    <View style={gstyles.container}>
      <Text style={gstyles.label}>Nom</Text>
      <CustomInput
        control={control}
        name={'name'}
        placeholder={'Entrer un nom de club'}
        rules={{ required: 'Le nom du club est requis' }}
      />

      {/*For the country's dropdown list, we use absolute positionning.
        Absolute positioning is always relative to the parent.
        Hence we group country's textInput and country's dropdown list.
      */}
      <Text style={gstyles.label}>Pays</Text>

      <View
        style={[
          gstyles.container_NO_PADDING,
          {
            zIndex: 1,
            elevation: 1,
          },
        ]}
      >
        <CustomInput
          control={control}
          name={'country'}
          placeholder={'Entrer un pays'}
          rules={{ required: 'Le pays du club est requis' }}
          onChangeHandler={(text: string) => searchFilter(text)}
          onBlurHandler={() => {
            searching.current = false
            setSearchingMenu(false)
          }}
        />

        {searchingMenu && (
          <View style={[styles.container_DROPDOWN, styles.shadowProp]}>
            <View style={[styles.subContainer_DROPDOWN]}>
              <FlatList
                data={filteredCountries}
                keyExtractor={(item, index) => index.toString()}
                style={{ width: '100%' }}
                ItemSeparatorComponent={ItemSeparatorView}
                renderItem={({ item }: { item: Country }) => (
                  <ItemView
                    item={item}
                    onPress={() => {
                      console.log(item.name)
                      setValue('country', item.name)

                      // close the dropdown menu immediately
                      setSearchingMenu(false)
                      // Prevent any button click for DEBOUNCE_TIME's duration
                      setTimeout(
                        () => (searching.current = false),
                        DEBOUNCE_TIME
                      )
                    }}
                  />
                )}
              />
            </View>
          </View>
        )}
      </View>

      <Text style={gstyles.label}>Logo</Text>
      <CustomImagePicker
        control={control}
        name={'logo'}
        rules={{ required: 'Le logo du club est requis' }}
        onPressHandler={onPressHandler}
        setValue={setValue}
      />
      <CustomButton
        onPress={() => onPressHandler(handleSubmit(onSubmit))}
        type="SECONDARY"
        text="ENREGISTRER"
      />
    </View>
  )
}

const mapStateToProps = (state: AppState) => ({
  clubList: state.clubList,
})

// maps all the action creators with the dispatch method
// and passes them to the component
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onAddClub: (club: Club) => {
    dispatch(addClub(club))
  },
})

// Define the connector
export default connect(mapStateToProps, mapDispatchToProps)(ClubListAdd)
