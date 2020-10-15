import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Login from './pages/authenticate/Login'
import Register from './pages/authenticate/Register'
import DashboardUser from './pages/user/Dashboard'
import DashboardAdm from './pages/admin/Dashboard'
import ProfileUser from './pages/user/Profile'

const Routes = createAppContainer(
  createStackNavigator(
    {
      Login: {
        screen: Login,
        navigationOptions: {
          title: 'Login',
        },
      },
      Register: {
        screen: Register,
        navigationOptions: {
          title: 'Registrar',
        },
      },
      DashboardUser: {
        screen: DashboardUser,
        navigationOptions: {
          title: 'Home',
        },
      },
      ProfileUser: {
        screen: ProfileUser,
        navigationOptions: {
          title: 'Profile',
        },
      },
      DashboardAdm: {
        screen: DashboardAdm,
        navigationOptions: {
          title: 'Home',
        },
      },
    },

    {
      defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerBackTitleVisible: false,
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
        },
        headerShown: false,
      },
    }
  )
)

export default Routes
