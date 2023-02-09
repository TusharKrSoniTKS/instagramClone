 import React from 'react'
 import {Text,View,Button} from 'react-native'
 
 export default function Landing(navigator) {
   return (
     <View style={{flex: 1, justifyContent: 'center'}}>
            <Button
            title='Register'
            onPress={()=>NavigationPreloadManager.navigate("Register ") }/>

<Button
            title='Login'
            onPress={()=>NavigationPreloadManager.navigate("Login ") }/>

     </View>
   )
 }
 