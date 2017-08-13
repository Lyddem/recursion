// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	/*
	{
		key1: 'value1',
		key2: 'value2'
	}
	*/

	//loop through object, stringify every key and value!

	// for(var key in obj){	
	// 	key.toString();
	// 	obj[key] = '' + obj[key2];
	// }


	if(typeof obj === '{}'){
			return '' + obj;
	}

	if(typeof obj === 'boolean'){
		return '' + obj;
	}

	if(typeof obj === 'string'){
		return '' + string;
	}

	
	if(Array.isArray(obj)){
	  obj.forEach(element => {
	      stringifyJSON(element)
	  })
    return '' + stringifyJSON(obj);
	}

	if(typeof obj === 'object'){

			for(var key in obj){
				key.toString();
				obj[key] = ''  + obj[key];
			}
				return '' + obj;
	}

};


















