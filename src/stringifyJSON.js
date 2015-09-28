// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	var newObj;
   if (typeof obj === 'number') {
  	return obj.toString();
  }else if (typeof obj === 'string') {
  		return '\"' + obj + '\"';
  }else if (obj === null) {
  		return 'null';
  } else if (obj === undefined) {
  		return 'undefined';
  	
	}else if (typeof obj === 'boolean') {
		return obj.toString();
	
	}else if (Array.isArray(obj)) {
		if (obj.length === 0) {
			return '[]';
		}
  		for (var i = 0; i < obj.length;i++) {
  			if (i === 0) {
  				newObj = '['; 
  			} 
        if (i !== 0) {
            newObj += ',' + stringifyJSON(obj[i]); 
          }else {
            newObj += stringifyJSON(obj[i]); 
          }       
  			if (i === obj.length - 1) {
  				if (typeof obj[i] != 'string') {
	  				newObj += ']' ;
  				}else {
  					newObj += ']';
  				}
  				}
        }
 //start of object cycle
  		}else if (typeof obj === 'object') {
  		  	if (_.isEmpty(obj)) {
  					return '{}';
  				}
		       newObj = '{';
		  		for (var j in obj) {
              if ( (typeof obj[j] === 'function') || (typeof obj[j] === 'undefined')) {

              } else {
                newObj += stringifyJSON(j) + ':' + stringifyJSON(obj[j]) + ",";
              }
          }
        if (newObj !== '{') {
            newObj = newObj.substr(0,newObj.length - 1) + '}';
        }else {
            newObj += '}';   
        }
      }
  return newObj; 
};	  
