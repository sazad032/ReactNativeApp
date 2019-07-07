import React from 'react';
import {View,Text} from 'react-native';

const HomePage = () => {
  const {red} = styles;  
    
  return (
      <Text style={red}>Test</Text>;
   );
};


const styles = {
  textStyle: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
};


export default HomePage;