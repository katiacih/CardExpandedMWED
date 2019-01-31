import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {colorsPalette} from '../../assets/colorsPalette';
import { Feather } from '@expo/vector-icons';

/**
 * Render default Card.
 * @props {string} title - titleCard.
 * @props {string} text - textContent.
 * @props {string} bgColor - backgroundColor.
 * @props {string} bgTextColor - color texts.
 * @props {function}  onPressLeftButton();
 * @props {function}  onPressRightButton();
 * @props {@expo/vector-icons} iconLeft -
 * @props {@expo/vector-icons} iconRight -
 */

class CardWithTwoButton extends React.PureComponent {
  render() {
    const { iconLeft, iconRight, title, text, bgColor, bgTextColor }  = this.props;
    return (
        <View style= { [styles.card, {
          backgroundColor: bgColor ? bgColor:colorsPalette.primaryMedium, 
        }] }
        >
          <View style={ styles.btnLeftContainer }>
            <TouchableOpacity
            onPress={ this.props.onPressLeftButton ? this.props.onPressLeftButton : null }
            >
              {
                iconLeft ? iconLeft
                : <Feather
                  name='check-circle'
                  size={40}
                  color= {colorsPalette.textWhite}
                  />
              }
            </TouchableOpacity>
            
          </View>
          <View style={ styles.textsContainer }>
            <Text style={[ styles.title ,
              {
                color: bgTextColor ? bgTextColor : colorsPalette.textWhite,
              }
              ]}
            >{ title ? title : 'Card with two buttons'}</Text>
            <Text style={[ styles.textContent, {
              color: bgTextColor ? bgTextColor : colorsPalette.textWhite,
            }]}
            >{
              text ? text :
              'Tap here to create a new thing'}</Text>
          </View>
          <View style= { styles.btnRightContainer }>
              <TouchableOpacity
              // style = {{ backgroundColor: 'pink' }}
              onPress={ this.props.onPressRightButton ? this.props.onPressRightButton : null }
              >
              {
                iconRight ? iconRight
                : <Feather
                  name='chevron-right'
                  size={36}
                  color= {colorsPalette.textWhite}
                  />
              }

              </TouchableOpacity>
          </View>

        </View>
        
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
  btnLeftContainer: {
    height: '100%',
    width: '20%',  
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: colorsPalette.transparentGray2,
  },
  btnRightContainer: {
    height: '100%',
    width: '15%',  
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: colorsPalette.secondaryLight,
  },
  textsContainer:{
    // backgroundColor: colorsPalette.tCofeeprimaryColorDark,
    height: '100%',
    width: '65%', 
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

export default CardWithTwoButton;