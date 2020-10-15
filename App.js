import { StatusBar } from 'react-native'
import React from 'react'

import Routes from './src/routes'

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#151515" />
      <Routes />
    </>
  )
}
