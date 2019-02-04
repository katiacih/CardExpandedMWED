import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {colorsPalette} from '../../assets/colorsPalette';
import { Feather } from '@expo/vector-icons';

/**
 * Render default Card.
 * @props {@expo/vector-icons} icon -
 * @props {@expo/vector-icons} iconTouchTop -
 * @props {string} title - title Card.
 * @props {value} value - Counter Itens.
 * @props {price} price - valor do produto.
 * @props {string} text - textContent.
 * @props {string} bgColor - backgroundColor.
 * @props {string} bgTextColor - colors.
 * @props {function} onPressMore - 
 * @props {function} setplusValue - Count items (+)
 * @props {function} setminusValue - Count items (-)
 */

class CardShop extends React.PureComponent {


  render() {
    const { icon, 
      title, 
      text, 
      bgColor, 
      bgTextColor, 
      iconTouchTop, 
      value, 
      price }  = this.props;    
    const textDefault = 'Lorem ipsum dolor sit amet. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, aperiam?'; 
    const textColor = bgTextColor ? bgTextColor : 'black';
    return (
      <View style={ [styles.card, 
        { backgroundColor: bgColor ? bgColor : colorsPalette.transparentLight100 }]}>
        <View style={ styles.iconContainer }>
        {
              icon ? icon
              : <Feather
                name='image'
                size={56}
                color= {colorsPalette.textWhite}
                />
            }
        </View>
        <View style={ styles.detailsContainer }>
            <View style={ styles.titleContainer }> 
              <Text style={[ styles.title, {
                color: textColor
                } ]}>{title ? title : 'TITLE GOES HERE'}</Text>
              <TouchableOpacity style={ styles.touchTop }
                onPress = { this.props.onPressMore ? this.props.onPressMore : null}
              >
               { iconTouchTop ? iconTouchTop
                : <Feather
                name='more-vertical'
                size={22}
                color= {colorsPalette.textBlack}
                />}
              </TouchableOpacity>
            </View>
            <View style={ styles.containerTextDetails }>
              <Text style={[ styles.textDetails, {
                  color: textColor
              }] }>{text ? text : textDefault }</Text>
            </View>

            <View style={ styles.bottomContainer }>

              <View style= { styles.textsBottom }>
                <Text style={{ fontSize: 12,
                  fontWeight: '100',  color: textColor }}>U$</Text>
                <Text style={{ fontSize: 24, paddingLeft: 8,
                  fontWeight: '100',  color: textColor }}>{
                    price ? price : '0.0' 
                  }</Text>
              </View>

              <View style= { styles.buttonsBottom }>
                <TouchableOpacity style= {{ padding: 8 }}
                onPress = {this.props.setminusValue ? this.props.setminusValue : null }>
                  <Feather
                    name='minus-circle'
                    size={18}
                    color= {
                      ( value && value > 0 ) ? colorsPalette.textBlack : 'transparent' }
                    />
                </TouchableOpacity>
  
                <Text style= {{ fontSize: 22, fontWeight:'bold',
                  color: ( value && value > 0 ) ? colorsPalette.textBlack : 'transparent',
                  }}>{value}</Text>
                  <TouchableOpacity style= {{ padding: 8 }}
                    onPress = {this.props.setplusValue ? this.props.setplusValue : console.log('nao deu')
                    }
                  >
                    <Feather
                      name='plus-circle'
                      size={18}
                      color= {colorsPalette.textBlack}
                    />
                  </TouchableOpacity> 
              </View>

            </View>
        
        </View>
        
      </View>
    );
  }
}

  const styles = StyleSheet.create({
    card: {
      height: 194,
      padding: 8,
      width: 344,  
      flexDirection: 'row',
      margin: 8,
    },
    iconContainer: {
      height: '100%',
      width: '40%',  
      justifyContent: 'center',
      alignItems: 'center',
    },
    detailsContainer:{
      height: '100%',
      width: '60%', 

    },
    titleContainer: {
      flexDirection: 'row',
      padding: 12
    },
    title:{
      flex:1,
      fontSize: 18,
      fontWeight: 'bold'
    },
    touchTop: {
      height: 24,
      width: 22,
    },
    containerTextDetails:{
      padding: 8,
      flexWrap: 'wrap'
    },
    textDetails:{
      fontSize: 12,
      fontWeight: '300'
    },
    
    bottomContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 8,
    },
    textsBottom:{
      flexDirection: 'row',
      height: '100%',
      width: '50%',
      alignItems: 'center',
    },
    buttonsBottom: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      height: '100%',
      width: '50%',
    }
  });
  
export default CardShop;