import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CardDefault from './src/Cards/CardDefault';
import CardWithButton from './src/Cards/CardWithButton';
import CardWithTwoButton from './src/Cards/CardWithTwoButton';
import CardShop from './src/Cards/CardShop';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      setText: '',
      showText: false, 
      valueCardShop: 3, 
    };
  }

  setplusValueCardShop = () => {
    let newValue = this.state.valueCardShop + 1 
    this.setState({ valueCardShop: newValue });
  }
  setminusValueCardShop = () => {
    let newValue = this.state.valueCardShop - 1 
    this.setState({ valueCardShop:  newValue });
  }

  onPressCardComponent = ( msg ) => {
    this.setState({ 
      setText: msg,
      showText: !this.state.showText
     });
  }
  render() {
    return (
      <View style={styles.container}>
        { this.state.showText ? <Text
          style ={{ fontSize: 14, fontWeight: 'bold' }}
        >{this.state.setText}</Text> : null }
        {/* <CardDefault
          title='titleCard'
          bgTextColor = 'black'
        />
        <CardWithButton
          onPressEvent = { () => this.onPressCardComponent('pressed CardWithButton') }
        />

        <CardWithTwoButton
           onPressLeftButton = { () => this.onPressCardComponent('pressed buttonLeft in CardWithTwoButton') }
           onPressRightButton = { () => this.onPressCardComponent('pressed buttonRight in CardWithTwoButton') }
        /> */}

        <CardShop
          price = '59.65'
          value = {this.state.valueCardShop}
          onPressMore = { () => this.onPressCardComponent('Pressed More in CardShop') }
          setplusValue = { () => this.setplusValueCardShop() }
          setminusValue = { () => this.setminusValueCardShop() }
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
