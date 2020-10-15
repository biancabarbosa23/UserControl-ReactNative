import React, { useState, useEffect } from 'react'
import { View, Text, AsyncStorage } from 'react-native'

import Header from '../../components/Header'

export default function Dashboard({ navigation }) {
  useEffect(() => {
    checkToken()
  }, [])

  async function checkToken() {
    const token = await AsyncStorage.getItem('@CodeApi:token')
    const user = JSON.parse(await AsyncStorage.getItem('@CodeApi:user'))
    console.log(user)
    if (!token) navigation.navigate('Login')
  }

  return (
    <View>
      <Text> ADM</Text>
    </View>
  )
}
