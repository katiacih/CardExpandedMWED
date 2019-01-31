import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CardDefault from './src/Cards/CardDefault';
import CardWithButton from './src/Cards/CardWithButton';
import CardWithTwoButton from './src/Cards/CardWithTwoButton';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      setText: '',
      showText: false,  
    };
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
        <CardDefault
          title='titleCard'
          bgTextColor = 'black'
        />
        <CardWithButton
          onPressEvent = { () => this.onPressCardComponent('pressed CardWithButton') }
        />

        <CardWithTwoButton
           onPressLeftButton = { () => this.onPressCardComponent('pressed buttonLeft in CardWithTwoButton') }
           onPressRightButton = { () => this.onPressCardComponent('pressed buttonRight in CardWithTwoButton') }
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
