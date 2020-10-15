import React from 'react'
import { SafeAreaView, StyleSheet, View, Image } from 'react-native'

export default function Header() {
  return (
    <View style={styles.divLogo}>
      <Image
        style={{ width: 200, height: 50 }}
        resizeMode="contain"
        source={require('../../../assets/Mind-Branco.png')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  divLogo: {
    paddingTop: 15,
    backgroundColor: '#191919',
    alignItems: 'center',
    minWidth: '100%',
  },
})
