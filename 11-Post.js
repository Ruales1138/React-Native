import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button, TextInput } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} options={{title: 'Overview'}}/>
        <Stack.Screen name='CreatePost' component={CreatePostScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

function HomeScreen({ navigation, route }) {
  useEffect(() => {
    if(route.params?.post) {
      console.log(route.params.post)
    }
  }, [route.params?.post]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title='Create post' onPress={() => navigation.navigate('CreatePost')}/>
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
    </View>
  )
};

function CreatePostScreen({ navigation, route }) {
  const [postText, setPostText] = useState('');

  return (
    <View>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title='Done'
        onPress={() => {
          navigation.navigate({
            name: 'Home',
            params: {post: postText},
            merge: true
          })
        }}
      />
    </View>
  )
};