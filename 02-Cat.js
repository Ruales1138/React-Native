import React, { useState } from "react";
import { Text, TextInput, View, Image, Button } from "react-native";

const Cat = (props) => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Text>I am {props.name}!, and I am {isHungry? 'hungry' : 'full'}!</Text>
      <Button
        onPress={() => setIsHungry(false)}
        disabled={!isHungry}
        title={isHungry? 'Pour me some milk, please!' : 'Tank you!'}
      />
      <Button
        onPress={() => setIsHungry(true)}
        title="Refresh"
      />
    </View>
  )
};

const Cafe = () => {
  return (
    <>
      <Cat name='David'/>
      <Cat name='Spider-Man'/>
      <Cat name='Steve Rogers'/>
    </>
  )
};

export default Cafe;
