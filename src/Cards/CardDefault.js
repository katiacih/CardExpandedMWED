import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {colorsPalette} from '../../assets/colorsPalette';
import { Feather } from '@expo/vector-icons';

/**
 * Render default Card.
 * @props {@expo/vector-icons} icon -
 * @props {string} title - titleCard.
 * @props {string} text - textContent.
 * @props {string} bgColor - backgroundColor.
 * @props {string} bgTextColor - color texts.
 */


class CardDefault extends React.PureComponent {
  render() {
    const { icon, title, text, bgColor, bgTextColor }  = this.props;
    return (
        <View style= { [styles.card, {
          backgroundColor: bgColor ? bgColor:colorsPalette.secondaryLight, 
        }] }>
          <View style={ styles.iconContainer }>
            {
              icon ? icon
              : <Feather
                name='circle'
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
            >{ title ? title : 'Card Default'}</Text>
            <Text style={[ styles.textContent, {
              color: bgTextColor ? bgTextColor : colorsPalette.textWhite,
            }]}
            >{
              text ? text :
              'Vivamus vitae leo lorem. Ut mattis mattis auctor. Lorem, ipsum dolor.'}</Text>
          </View>

        </View>
        
    );
  }
}

const styles = StyleSheet.create({
  card: {
    height: 116,
    padding: 8,
    margin: 8,
    width: 344,  
    flexDirection: 'row',
    
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

export default CardDefault;