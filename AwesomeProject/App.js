/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  Button,
  StyleSheet,
  Text,
  ImageBackground,
  View,
  Linking,
  TextInput,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */


const App = () => {


  return (
    <View style = {styles.Body}>
        
            <Text style = {[styles.Text,styles.setColorWhite]}>
                MY READER
             </Text>
             <TextInput style = {styles.input}>

            </TextInput>
            <Button title='login' onPress={() => {Linking.openURL('#')}}></Button>
            
        
            
        

    </View>
        
    
  );
};

const styles = StyleSheet.create({
  Body: {
    
    flex: 1,
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor: 'blue'


  },
   Text: {
    
    fontSize : 30,
    fontWeight: 'bold',
    padding : 30,  
    
  },
  setColorWhite : {
    color: '#ffffff'
  },
  image: {
    flex: 1,
    justifyContent: "center"
    
  },
  input: {
    justifyContent: "center",
    borderColor: 'white',
    
    backgroundColor: 'white',
    padding: '10',

  },
  
});

export default App;
