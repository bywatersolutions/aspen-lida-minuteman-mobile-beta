import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../../context/initialContext';
import TabNavigator from '../tab/TabNavigator';
import { DrawerContent } from './DrawerContent';

const Drawer = createDrawerNavigator();

const AccountDrawer = () => {
     const { theme, colorMode } = React.useContext(ThemeContext);
     const insets = useSafeAreaInsets();
     const screenBackgroundColor = colorMode === 'light' ? theme['colors']['warmGray']['50'] : theme['colors']['coolGray']['800'];
     return (
          <Drawer.Navigator
               initialRouteName="TabsNavigator"
               screenOptions={{
                    drawerType: 'front',
                    drawerHideStatusBarOnOpen: true,
                    drawerPosition: 'left',
                    headerShown: false,
                    backBehavior: 'none',
                    lazy: false,
                    drawerStyle: {
                         backgroundColor: screenBackgroundColor,
                         paddingBottom: Platform.OS === 'android' ? insets.bottom : 0,
                    },
               }}
               drawerContent={(props) => <DrawerContent {...props} />}>
               <Drawer.Screen
                    name="TabsNavigator"
                    component={TabNavigator}
                    screenOptions={{
                         headerShown: false,
                         lazy: false,
                    }}
                    options={({ props }) => ({
                         params: { ...props },
                    })}
               />
          </Drawer.Navigator>
     );
};

export default AccountDrawer;
