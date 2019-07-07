import React, {Component} from 'react';
import {Alert, Platform, StyleSheet, Text, View,ImageBackground ,Picker,
       Image, Button} from 'react-native';


export default class Welcome extends Component<Props> {

    constructor(props){
        super(props);

        this.state ={
            citySelection: 'ottawa',
            mealSelection: 'breakfast'
        }
    }

    static navigationOptions = {
      title: 'Welcome'
    };

    onClickAlert = () => {
      if(this.state.citySelection == 'ottawa' && this.state.mealSelection == 'lunch'){
            this.props.navigation.navigate('resturantList')
        }
    }


  render() {

    const {navigate} = this.props.navigation;

    return (
      <ImageBackground source={require('./assets/Food-Pictures.jpg')} style={styles.container}>
      <View style={styles.container}>

        <View style={{flexDirection: 'row', justifyContent: 'center', margin:10}}>
        <Image style={{width:150, height:150, resizeMode:'contain'}}
          source={require('./assets/logo.png')}
        />
        </View>

        <View style={styles.pickerStyle}>
        <Picker
          selectedValue={this.state.citySelection}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({citySelection: itemValue})
          }>
          <Picker.Item label="Ottawa" value="ottawa" />
          <Picker.Item label="Toronto" value="toronto" />
        </Picker>
        </View>

        <View style={styles.pickerStyle}>
        <Picker
          selectedValue={this.state.mealSelection}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({mealSelection: itemValue})
          }>
          <Picker.Item label="Breakfast" value="breakfast" />
          <Picker.Item label="Lunch" value="lunch" />
          <Picker.Item label="Dinner" value="dinner" />
        </Picker>
        </View>

        <View style={{justifyContent:'center', margin:10}}>
            <Button onPress={this.onClickAlert} title='Show Restaurants' color='#E75480'></Button>
        </View>

      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,182,193,.7)'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  pickerStyle:{
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    borderWidth: 1,
    backgroundColor: 'aliceblue'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttonStyle: {
    color: 'green',
    padding: 10,
    borderRadius: 16
  },
});
