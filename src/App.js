import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { BlogProvider } from './context/BlogContext';
import List from './pages/List';
import Show from './pages/Show';
import Tulis from './pages/Tulis';


const Stack = createStackNavigator()

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="List" 
        component={List} 
        options={{
          title:"Catatan",
          headerTitleAlign:'center',
          // headerRight:()=>{
          //   return <Ionicons
          //   name="create"
          //   size={30}
          //   color="green"
          //   style={{marginRight:10}}/>
          // }
        }}
        />
        <Stack.Screen 
        name="Show" 
        component={Show}
        options={{
          title:"Catatan saya",
          headerTitleAlign:'center',
        }}
         />
        <Stack.Screen name="Tulis" component={Tulis} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ()=>{
  return<BlogProvider>
    <App/>
  </BlogProvider>
}




