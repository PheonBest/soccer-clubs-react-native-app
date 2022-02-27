import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ClubList } from '../components/club-list/club-list'
import { gstyles } from '../utils/global-styles'

interface Props {}

export default function Home({}: Props): JSX.Element {
  return (
    <>
      <View style={[gstyles.container, gstyles.container_PRIMARY_NORMAL]}>
        <Text style={gstyles.title}>Sportyma</Text>
      </View>
      <ClubList />
    </>
  )
}

const styles = StyleSheet.create({})
