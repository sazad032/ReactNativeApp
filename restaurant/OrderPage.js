import React, {Component} from 'react';
import {Alert, Platform, StyleSheet, Text, View,ImageBackground ,Picker,
       Image, Button} from 'react-native';

export default class OrderPage extends Component<Props>{

 onPressOrder = () => {
    this.props.navigation.navigate('checkout')
 }

 static navigationOptions = {
   title: 'Order Page'
 };

 constructor(props){
     super(props);
 }


 render(){
   const {navigation} = this.props;
   const {navigate} = this.props.navigation;
   const total = navigation.getParam('total','0');
   const listItems = navigation.getParam('listItems','');

   return(
     <View>
     <View style={{justifyContent:'center', flexDirection: 'column', margin: 10}}>
      <Text style = {{fontSize:20}}>Total: ${JSON.stringify(total)}</Text>
      <Text style = {{fontSize:20}}>Items Ordered: {JSON.stringify(listItems.join(", "))}</Text>
    </View>

    <View style={{justifyContent:'center', margin:10}}>
        <Button onPress={this.onPressOrder} title='Checkout' color='#E75480'></Button>
    </View>

     </View>
   );
 }
}
