// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {

  var biPrefix = cardNumber.slice(0, 2)
  var triPrefix = cardNumber.slice(0, 3)
  var quadPrefix = cardNumber.slice(0, 4)

  var hexPrefix = cardNumber.slice(0, 6)
  // Note: `cardNumber` will always be a string
  var prefix = cardNumber.slice(0, 2)
  var dinerNum = ((prefix === '38') || (prefix === '39'))
  var dinerLength = (cardNumber.length === 14)
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  if (dinerNum && dinerLength) {
  	return 'Diner\'s Club';
  }

  var americanNum = ((prefix === '34') || (prefix === '37'))
  var americanLength = (cardNumber.length === 15)

  if (americanNum && americanLength) {
  	return 'American Express';
  } 
  
    //Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
    // Create a switchArray that containing all the Switch prefixes.
  var switchArray = ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'];
    // Create a switchLength and assign them with the Switch length values
  var switchLength = ((cardNumber.length === 16) || (cardNumber.length === 18) || (cardNumber.length === 19))
      // iterate over the switchArray and check to see if the cardNumber matches the 
      // switch prefixes and the switchLength.
  for (var k = 0; k <= switchArray.length; k ++) {
    if ((switchArray[k] === quadPrefix) && switchLength) {
      return 'Switch';
    } else if ((switchArray[k] === hexPrefix) && switchLength) {
      return 'Switch';
    }
  } 

  var visaPrefix = cardNumber.slice(0, 1)

  var visaNum = (visaPrefix === '4')
  var visaLength = ((cardNumber.length === 13) || (cardNumber.length === 16) || (cardNumber.length === 19))
  //Visa always has a prefix of 4 and a length of 13, 16, or 19.

  if (visaNum && visaLength) {
  	return 'Visa';
  }
  //MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.

  var masterNum = ((prefix === '51') || (prefix === '52') || (prefix === '53') || (prefix === '54') || (prefix === '55'))
  var masterLength = (cardNumber.length === 16)

  if (masterNum && masterLength) {
  	return 'MasterCard';
  }

  //6011, 644-649, or 65
  var discoverLength = ((cardNumber.length === 16) || (cardNumber.length === 19));
  var discoverPrefix = ['65', '644', '645', '646', '647', '648', '649', '6011'];

  for (var i = 0; i <discoverPrefix.length; i ++) {

  	if ((biPrefix === discoverPrefix[i]) && discoverLength) {
  		return 'Discover'
  	} else if ((triPrefix === discoverPrefix[i]) && discoverLength) {
  		return 'Discover'
  	} else if ((quadPrefix === discoverPrefix[i]) && discoverLength) {
  		return 'Discover'
  	}
  }

  var maestroPrefix = cardNumber.slice(0, 4)
  var maestroNum = ((maestroPrefix === '5018') || (maestroPrefix === '5020') || (maestroPrefix === '5038') || (maestroPrefix === '6304'))
  var maestroLength = (cardNumber.length >= 12 && cardNumber.length <= 19)

  if (maestroNum && maestroLength) {
  		return 'Maestro';
  	}

  //China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
    // Create a China UnionPay prefix
  var cupLength = (cardNumber.length >= 16 && cardNumber.length <= 19)
    // iterate over the prefixs to see if it matches the card number
  for (var chinaPrefix = 622126; chinaPrefix <= 622925; chinaPrefix ++) {
    if ((chinaPrefix.toString() === hexPrefix) && cupLength) {
      return 'China UnionPay'
    }
  }
    
    // create a array containing all other prefixes and iterate over them to see if the prefix matches them as well.
  var cupPrefixArray = ['624', '625', '626', '6282', '6283', '6284', '6285', '6286', '6287', '6288']

  for (var j = 0; j <= cupPrefixArray.length; j++) {
    if ((cupPrefixArray[j] === triPrefix) && cupLength) {
      return 'China UnionPay';
    } else if ((cupPrefixArray[j] === quadPrefix) && cupLength) {
      return 'China UnionPay';
    }
  }
  // Once you've read this, go ahead and try to implement this function, then return to the console.
};


