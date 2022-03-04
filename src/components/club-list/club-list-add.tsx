import { Alert, GestureResponderEvent, Image, Text, View } from 'react-native'
import { TouchableHighlight, FlatList } from 'react-native-gesture-handler'
import React, { useRef, useState } from 'react'
import { AppState, Club, ClubListState, Country } from '../../state/types'
import CustomButton from '../custom-button'
import CustomInput from '../custom-input'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { addClub } from '../../state/club-list/actions'
import { gstyles } from '../../utils/global-styles'
import { styles } from './styles'

// // Get countries list from modules world_countries_ist
import countries from '../../assets/node_modules/world_countries_lists/data/countries/fr/countries.json'
import images from '../../assets/node_modules/world_countries_lists/data/flags/16x16/flags-16x16.json'
import CustomImagePicker from '../custom-image-picker'
import { StackNavigationProp } from '@react-navigation/stack'

interface Props {
  navigation: StackNavigationProp<any, any>
  clubList: ClubListState
  onAddClub: (club: Club) => void
}

const ClubListAdd = ({
  navigation,
  clubList,
  onAddClub,
}: Props): JSX.Element => {
  // Custom validation rules
  // Check if the entered country is an existing country:

  const isCountry = (country: string): boolean => {
    return countries.some(
      (item: Country) => item.name.toUpperCase() == country.toUpperCase()
    )
  }
  const isClubUnique = (club: string): boolean => {
    return !clubList.some(
      (item: Club) => item.name.toUpperCase() == club.toUpperCase()
    )
  }

  // For the country's dropdown list selector:
  // If we click on a country suggestion
  // and that there's another button (e.g: image picker button),
  // the button behind is pressed after the suggestion is pressed.
  // Hence, a debounce time is needed to prevent clicking on the button behind.
  const DEBOUNCE_TIME = 100

  interface Fields {
    name: string
    logo: string
    country: string
  }

  const {
    control,
    handleSubmit,
    //formState: { errors },
    setValue,
  } = useForm<Fields>()

  const onSubmit = (data: Fields) => {
    if (data && data.country) {
      // get the country code corresponding to the country name
      const alpha2 = countries.filter((item: Country) => {
        return item.name.toUpperCase() == data.country.toUpperCase()
      })[0].alpha2

      if (typeof alpha2 !== 'undefined') {
        onAddClub({
          name: data.name,
          logo: { uri: data.logo },
          country: alpha2,
        } as Club)
      } else {
        onAddClub({
          name: data.name,
          logo: { uri: data.logo },
          country: 'fr',
        } as Club)
      }
      Alert.alert('Succès', 'Le club a été crée !', [
        {
          text: 'OK',
          onPress: () => navigation.goBack(),
          style: 'cancel',
        },
      ])
    }
  }

  const onPressHandler = (func: Function) => {
    if (!searching.current) {
      func()
    }
  }

  // For the country search bar filter, we use a filetered list
  // that show countries suggestions
  const [filteredCountries, setFilteredCountries] = useState(countries)
  const [searchingMenu, setSearchingMenu] = useState(false)
  const searching = useRef(false)
  const [shownCountry, setShownCountry] = useState<Country | undefined>(
    undefined
  )

  const ItemSeparatorView = () => {
    return <View style={gstyles.listItem_separator} />
  }

  const ItemView = ({
    item,
    onPress,
  }: {
    item: Country
    onPress: ((event: GestureResponderEvent) => void) & (() => void)
  }) => {
    return (
      <TouchableHighlight
        underlayColor="#c8c8c8"
        onPress={onPress}
        style={[
          gstyles.listItem_PRESSABLE,
          {
            borderRadius: 0,
            marginLeft: 0,
            width: '100%',
            borderBottomWidth: 1,
          },
        ]}
      >
        <Text style={gstyles.text_black}>
          <Image
            style={gstyles.logo_S}
            source={{ uri: images[item.alpha2 as keyof typeof images] }}
          />
          &nbsp;&nbsp;
          {item.name}
        </Text>
      </TouchableHighlight>
    )
  }
  const searchFilter = (text: string) => {
    let oneCountryFound = false
    if (text) {
      searching.current = true
      setSearchingMenu(true)

      const newData = countries.filter((item: Country) => {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase()
        const textData = text.toUpperCase()
        return itemData.indexOf(textData) > -1
      })

      // If there's only one suggestion
      // and the entered country is equal to it
      // show the corresponding country
      if (newData.length == 1) {
        if (newData[0].name.toUpperCase() == text.toUpperCase()) {
          setShownCountry(newData[0])
          // hide the dropdown menu
          searching.current = false
          setSearchingMenu(false)

          oneCountryFound = true
        }
      }
      // If the entered country hasn't any suggestion,
      // hide the dropdown menu
      else if (newData.length == 0) {
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
    if (!oneCountryFound)
      if (typeof shownCountry != 'undefined') {
        setShownCountry(undefined)
      }
  }

  return (
    <View style={gstyles.container}>
      <Text style={gstyles.label}>Nom</Text>
      <CustomInput
        control={control}
        name={'name'}
        placeholder={'Entrer un nom de club'}
        rules={{
          required: 'Le nom du club est requis',
          minLength: {
            value: 3,
            message: 'Le nom doit faire au moins 3 caractères',
          },
          maxLength: {
            value: 25,
            message: 'Le nom doit faire moins de 25 caractères',
          },
          validate: {
            isUnique: (value) =>
              isClubUnique(value) || 'Ce nom est déjà utilisé',
          },
        }}
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
          rules={{
            required: 'Le pays du club est requis',
            validate: {
              checkCountry: (value) =>
                isCountry(value) || "Le pays saisi n'est pas valide",
            },
          }}
          onChangeHandler={(text: string) => searchFilter(text)}
          onBlurHandler={() => {
            searching.current = false
            setSearchingMenu(false)
          }}
        />

        {searchingMenu && (
          <View style={[styles.container_DROPDOWN, gstyles.shadowProp]}>
            <View style={[styles.subContainer_DROPDOWN, { flex: 1 }]}>
              <FlatList
                data={filteredCountries}
                keyExtractor={(item, index) => index.toString()}
                //ItemSeparatorComponent={ItemSeparatorView}
                style={{ width: '100%' }}
                renderItem={({ item }: { item: Country }) => (
                  <ItemView
                    item={item}
                    onPress={() => {
                      setValue('country', item.name)
                      setShownCountry(item)

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

      {shownCountry ? (
        <Text style={gstyles.text_black}>
          <Image
            style={gstyles.logo_S}
            source={{ uri: images[shownCountry.alpha2 as keyof typeof images] }}
          />
          &nbsp;&nbsp;
          {shownCountry.name}
        </Text>
      ) : null}

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
