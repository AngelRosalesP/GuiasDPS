import React from 'react';
import {View,Text, Button} from 'react-native';
import About from './About';

export default function Home(){
return(
<View>
<Text> Estamos en Home </Text>
<Button title="Ir a About" onPress={()=>{About}}></Button>
</View>
);
}