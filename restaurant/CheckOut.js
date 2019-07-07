import React, {Component} from 'react';
import {Alert, Platform, StyleSheet, Text, View,ImageBackground ,Picker,
       Image, Button, TextInput,ScrollView} from 'react-native';

export default class CheckOut extends Component<Props>{


 static navigationOptions = {
   title: 'Check Out'
 };

 constructor(props){
     super(props);
 }


 render(){
   const {navigate} = this.props.navigation;
   const scrollEnabled = true;
   return(
     <ScrollView style={{flex:1}} scrollEnabled={scrollEnabled} >
     <View>
     <View style={{justifyContent:'center', flexDirection: 'column', margin: 10}}>
      <Text style={{fontSize:20}} >Cardholder Name*: </Text>
      <TextInput style={{borderWidth:1, fontSize:20}}/>
      <Text style={{fontSize:20}} keyboardType='numeric'>Card Number*: </Text>
      <TextInput style={{borderWidth:1, fontSize:20}}/>
      <Text style={{fontSize:20}} keyboardType='numeric'>Expiry Date (MMYY)*:</Text>
      <TextInput style={{borderWidth:1, fontSize:20}}/>
      <Text style={{fontSize:20}} maxLength={3} keyboardType='numeric'>CVV*:</Text>
      <TextInput style={{borderWidth:1, fontSize:20}}/>
      <Text style={{fontSize:20}} keyboardType='numeric'>Street Number*:</Text>
      <TextInput style={{borderWidth:1, fontSize:20}}/>
      <Text style={{fontSize:20}} keyboardType='numeric'>Street Name*:</Text>
      <TextInput style={{borderWidth:1, fontSize:20}}/>
      <Text style={{fontSize:20}} keyboardType='numeric'>City*:</Text>
      <TextInput style={{borderWidth:1, fontSize:20}}/>
      <Text style={{fontSize:20}} keyboardType='numeric'>Postal Code*:</Text>
      <TextInput style={{borderWidth:1, fontSize:20}}/>
    </View>

     </View>
     </ScrollView>
   );
 }
}
