import React, { useEffect, useState, useMemo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { SignIn } from './screen/signInScreen'
import { SignUp } from './screen/signUpScreen'
import { Splash } from './screen/splashScreen'

const AuthStack = createStackNavigator();

const App = () =>{
  const [isLoading, setIsLoading] = useState(true);
  
  //mengatur waktu splashscreen selama 1 detik
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  //jika loading true maka mengeksekusi fungi Splash
  if (isLoading) {
    return <Splash />;
  }

  return(
    // <NavigationContainer>
    //   <AuthStack.Navigator>
    //     <AuthStack.Screen name="SignUp" component={SignUp} 
    //     options= {{
    //       title: ' ',
    //       headerStyle: {
    //         backgroundColor: 'white',
    //         borderBottomColor: 'white'
    //       }, 
    //     }} />
    //     <AuthStack.Screen name="SignIn" component={SignIn} 
    //     options= {{
    //       title: ' ',
    //       headerStyle: {
    //         backgroundColor: 'white',
    //         borderBottomColor: 'white'
    //       }, 
    //     }} />
    //   </AuthStack.Navigator>
    // </NavigationContainer>
    <View>
      <Text>test</Text>
    </View>
  ) 
}

export default App;
