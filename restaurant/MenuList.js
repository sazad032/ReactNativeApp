import React, {Component} from 'react';
import {Alert, Platform, StyleSheet, Text, View,ImageBackground ,Picker,
       Image, Button, FlatList} from 'react-native';
import CocoListData from './CocoListData'

class FlatListItem extends Component{

  constructor(props){
      super(props);

      this.state ={
          itemList: []
      }
  }

  btnAdd = () => {
    this.props.handler(parseInt(this.props.item.price), 1, true, this.props.item.key)
    this.state.itemList.push(this.props.item.key)
    console.log(this.state.itemList)
  }

  btnRemove = () => {
    if(this.state.itemList.length !== 0) {
      this.props.handler(parseInt(this.props.item.price)*-1, -1, false, this.props.item.key)
      this.state.itemList.pop()
      console.log(this.state.itemList)
    }
  }

  render(){
    return(
      <View style = {{flex:1, borderWidth: 1 , margin: 5,  flexDirection: 'row'}}>
          <Image source={{uri: this.props.item.imageUrl}}
            style= {{width:100,height:100,margin:5}}
          >

          </Image>

          <View style={{flex:1, padding: 5,flexDirection:'column'}}>
              <Text style={{fontSize: 20}}>{this.props.item.key}</Text>
              <Text style={{fontSize: 15}}>${this.props.item.price}</Text>
          </View>

          <View style={{flex:1, flexDirection:'column', alignItems: 'flex-end', margin:10}}>
              <Button onPress={this.btnAdd} style={{marginBottom: 10}} title='Add'></Button>
              <Text style={{margin: 1}}></Text>
              <Button onPress={this.btnRemove} title='Remove' color='#B22222'></Button>
          </View>

      </View>
    );

  }
}



export default class MenuList extends React.Component{

 static navigationOptions = {
   title: 'Coconut Lagoon'
 };

 constructor(props){
     super(props);

     this.state ={
         total: 0,
         numItems: 0,
         listItems: []
     }

     this.handler = this.handler.bind(this)
 }

 onPressOrder = () => {
         this.props.navigation.navigate('orderPage',{
           total: this.state.total,
           numItems:this.state.numItems,
           listItems:this.state.listItems
         })
 }

 handler(n, m, t, s){
   this.setState({
     total: this.state.total + n,
     numItems: this.state.numItems + m
   })
   if(t) {
     this.state.listItems.push(s)
   }
   else {
     this.state.listItems.splice(this.state.listItems.indexOf(s), 1)
   }
 }

 render(){
   const {navigate} = this.props.navigation;

   return(

    <View>
         <FlatList
         data={CocoListData}
         renderItem={({item,index}) => {
           //console.log(`Item = ${JSON.stringify(item)}, Index ${index}`);
           return (<FlatListItem item={item} index={index} handler={this.handler}>

                  </FlatListItem>);
         }}>
         </FlatList>

         <Text style = {{fontSize:20}}> Total Price: {this.state.total !== 0 ? this.state.total: null}</Text>
         <Text style = {{fontSize:20}}> Items Added: {this.state.numItems !== 0 ? this.state.numItems: null}</Text>


         <View style={{justifyContent:'center', margin:10}}>
             <Button onPress={this.onPressOrder} title='Go to Cart' color='#E75480'></Button>
         </View>

     </View>



   );
 }

}
