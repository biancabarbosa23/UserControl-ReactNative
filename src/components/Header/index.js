import React, { useState } from 'react'
import { StyleSheet, View, Image, Animated } from 'react-native'

export default function Header() {
  const { scrollY, setScrollY } = useState(new Animated.Value(0))

  return (
    <View style={styles.divLogo}>
      <Image
        source={require('../../../assets/Mind-Branco.png')}
        style={{ width: 200, height: 55 }}
        resizeMode="contain"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  divLogo: {
    flex: 1,
    maxHeight: 70,
    paddingTop: 15,
    minWidth: '100%',
    alignItems: 'center',
    backgroundColor: '#191919',
    padding: 6,
  },
})
