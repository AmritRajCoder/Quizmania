import React, { useEffect } from 'react';
import { DrawerActions } from '@react-navigation/native';
import { DefaultTheme, Provider as PaperProvider, Appbar } from 'react-native-paper';
import {
   createDrawerNavigator,
   DrawerContentScrollView,
   DrawerItem,
} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';//for firebase

import BottomNav from "./BottomNav";//need to import


//level - 2 - import Dummy from '../screens/Dummy';


const theme = {//DOUBT DOUBT - ... - spread func - all default themes put. default themes are basic react themes
   ...DefaultTheme,
   roundness: 2,
   colors: {
      ...DefaultTheme.colors,
      primary: '#2B35E0',
      accent: '#3498db',
   },
};
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
   return (
      <DrawerContentScrollView {...props}>
         <DrawerItem
            label="Home"
            onPress={() => props.navigation.navigate("Home")}
         />

         <DrawerItem
            label="Social"
            onPress={() => props.navigation.navigate("Social")}
         />

         <DrawerItem
            label="Sign Out"
            labelStyle={{ color: "red" }}
            onPress={() => handleLogoutPress(props)}
         />
      </DrawerContentScrollView>
   );
}

async function handleLogoutPress(props) {
   try {
      await AsyncStorage.removeItem("loggedUserEmail");
      await AsyncStorage.removeItem("loggedUserId");

      console.log("successfully logged out");

      //redirecring to ladnding page
      props.navigation.push("Landing");//moving to that particular page
      //push to stack
   }
   catch (exception) {
      console.log("failed to log out");
   }
}

function DrawerNav({ navigation }) {
   useEffect(
      () =>
         navigation.addListener('beforeRemove', (e) => {//when back button is pressed
            // Prevent default behavior of leaving the screen
            e.preventDefault();
            console.log("back pressed");
         }),
      []
   );

   return (
      <PaperProvider theme={theme}>
         <Appbar.Header>
            <Appbar.Action icon="menu" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />{/*to open anything*/}
            <Appbar.Content title="Quiz App" />
         </Appbar.Header>

         <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>{/*all contents displayed.Props means all components, here it is BottomNav*/}
            <Drawer.Screen name="Home" component={BottomNav} />
         </Drawer.Navigator>
      </PaperProvider>
   )
}

export default DrawerNav;