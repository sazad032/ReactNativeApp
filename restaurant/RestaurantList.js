import React, {Component} from 'react';
import {Alert, Platform, StyleSheet, Text, View,ImageBackground ,Picker,
       Image, TouchableOpacity, Button, FlatList} from 'react-native';
import flatListData from './flatList'

class FlatListItem extends Component<Props>{

  press = () => {
    if(this.props.item.key == 'Coconut Lagoon'){
      this.props.navigate.navigate('menuList');
    }

  }

  render(){

    return(


      <View >
          <TouchableOpacity  onPress={this.press} style = {{flex:1, borderWidth: 1 , margin: 5,  flexDirection: 'row'}}>
          <Image source={{uri: this.props.item.imageUrl}}
            style= {{width:50,height:50,margin:5}}
          >

          </Image>

          <View style={{flex:1, padding: 5,flexDirection:'column'}}>
              <Text>{this.props.item.key}</Text>
              <Text>{this.props.item.cuisine}</Text>
          </View>

          </TouchableOpacity>
      </View>
    );

  }
}



export default class RestaurantList extends Component<Props>{

 static navigationOptions = {
   title: 'Restaurant List'
 };

 constructor(props){
     super(props);
 }


 render(){
   const {navigate} = this.props.navigation;

   return(
     <View>
     <View style={{justifyContent:'center', flexDirection: 'row', margin: 10}}>
         <Text>Here are a list of few Restaurants</Text>

    </View>
    <View>
         <FlatList
         data={flatListData}
         renderItem={({item,index}) => {
           //console.log(`Item = ${JSON.stringify(item)}, Index ${index}`);
           return (<FlatListItem item={item} index={index} navigate = {this.props.navigation}>

                  </FlatListItem>);
         }}>
         </FlatList>

         

     </View>
     </View>
   );
 }
}
