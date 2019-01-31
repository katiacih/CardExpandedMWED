import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {colorsPalette} from '../../assets/colorsPalette';
import { Feather } from '@expo/vector-icons';

/**
 * Render default Card.
 * @props {@expo/vector-icons} icon -
 * @props {string} title - titleCard.
 * @props {string} text - textContent.
 * @props {string} bgColor - backgroundColor.
 * @props {string} bgTextColor - color texts.
 * @props {function}  onPressEvent();
 */

class CardWithButton extends React.PureComponent {
  render() {
    const { icon, title, text, bgColor, bgTextColor }  = this.props;
    return (
        <TouchableOpacity style= { [styles.card, {
          backgroundColor: bgColor ? bgColor:colorsPalette.transparentMocha, 
        }] }
          activeOpacity={0.5}
          onPress={ this.props.onPressEvent ? this.props.onPressEvent : null }
        >
          <View style={ styles.iconContainer }>
            {
              icon ? icon
              : <Feather
                name='plus-circle'
                size={40}
                color= {colorsPalette.textWhite}
                />
            }
            
          </View>
          <View style={ styles.textsContainer }>
            <Text style={[ styles.title ,
              {
                color: bgTextColor ? bgTextColor : colorsPalette.textWhite,
              }
              ]}
            >{ title ? title : 'Card with Button'}</Text>
            <Text style={[ styles.textContent, {
              color: bgTextColor ? bgTextColor : colorsPalette.textWhite,
            }]}
            >{
              text ? text :
              'Tap here to create a new thing'}</Text>
          </View>

        </TouchableOpacity>
        
    );
  }
}

const ShowIcon = ({ icon }) => {
  return (
    icon 
    ? icon
    : <Feather
      name='plus-circle'
      size={40}
      color= {colorsPalette.textWhite}
    />
  )
}

const styles = StyleSheet.create({
  card: {
    height: 116,
    padding: 8,
    width: 344,  
    flexDirection: 'row',
    margin: 8,
    
  },
  iconContainer: {
    height: '100%',
    width: '25%',  
    justifyContent: 'center',
    alignItems: 'center',

  },
  textsContainer:{
    // backgroundColor: colorsPalette.primaryDark,
    height: '100%',
    width: '75%', 
    flexDirection: 'column',
    justifyContent: 'center',

  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 4,

  },
  textContent: {
    fontSize: 14,
    fontWeight: '300',
    paddingLeft: 4,
    flexWrap: 'wrap'

  }
});

export default CardWithButton;