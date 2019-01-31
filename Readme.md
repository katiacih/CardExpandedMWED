## Description
Reusable card components
## **Components**

* CardDefault
* CardWithButton
* CardWithTwoButton

## **Properties**

**Basics**
*  icon  
	* type: @expo/vector-icons
* titleCard 
	* type : String 
*  textContent
	* type: String
* bgColor 
	* type: String
* bgTextColor  
	* type: String
	
**CardWithButton**
* onPressEvent()  
	* type: function()
	
**CardWithTwoButton**

* iconLeft
	* type: @expo/vector-icons
* iconRight
	* type: @expo/vector-icons
* onPressLeftButton()  
	* type: function()
* onPressRightButton()  
	* type: function()

# Example
**Simple**
```javascript
<CardDefault title='titleCard' bgTextColor='black' />
```

**Card with Button**
```javascript
// in parent
<CardWithButton onPressEvent = {()=> this.onPressCardComponent( 
  'pressed CardWithButton') } 
/>
```
**Card with two Button**
```javascript
// in parent
<CardWithTwoButton

onPressLeftButton  =  { () =>  this.onPressCardComponent('pressed buttonLeft in CardWithTwoButton') }

onPressRightButton  =  { () =>  this.onPressCardComponent('pressed buttonRight in CardWithTwoButton') }

/>
```
	