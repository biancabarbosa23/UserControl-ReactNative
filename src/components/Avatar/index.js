import React, { useState } from 'react'
import { StyleSheet, View, Image, Animated } from 'react-native'

export default function Header() {
  return (
    <View style={styles.header}>
      <Image
        style={styles.imageUser}
        source={require('../../../assets/ImageUserExample.jpg')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    marginTop: 10,
    backgroundColor: '#ffff',
    maxHeight: 130,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  imageUser: {
    width: 110,
    height: 110,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#131313',
  },
})
