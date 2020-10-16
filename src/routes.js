import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Login from './pages/authenticate/Login'
import Register from './pages/authenticate/Register'
import DashboardUser from './pages/user/Dashboard'
import ProfileMe from './pages/user/Profile'
import DashboardAdm from './pages/admin/Dashboard'
import UserList from './pages/admin/UserList'
import ProfileUser from './pages/admin/ProfileUser'

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
      ProfileMe: {
        screen: ProfileMe,
        navigationOptions: {
          title: 'Profile',
        },
      },
      DashboardAdm: {
        screen: DashboardAdm,
        navigationOptions: {
          title: 'Dashboard',
        },
      },
      UserList: {
        screen: UserList,
        navigationOptions: {
          title: 'List',
        },
      },
      ProfileUser: {
        screen: ProfileUser,
        navigationOptions: {
          title: 'Profile',
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
