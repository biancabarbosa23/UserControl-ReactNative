import React from 'react'
import { SafeAreaView, StyleSheet, View, Image } from 'react-native'

export default function Header() {
  return (
    <SafeAreaView>
      <View style={styles.divLogo}>
        <Image
          style={styles.logo}
          source={require('../../../assets/Mind-Branco.png')}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  divLogo: {
    backgroundColor: '#191919',
  },
})
