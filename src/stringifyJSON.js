// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

	if(typeof obj === 'function' || undefined){
		 return;
	}
	if(typeof obj === '{}'){
			return '' + obj;
	}

	if(typeof obj === "number" || obj === null || typeof(obj) === 'boolean'){
		return "" + obj;
	}

	if(typeof obj === 'string'){
		return '"' + obj + '"';
	}

	
	if(Array.isArray(obj)){
	  if(obj.length === 0){
	  	return "[]";
	  } else {
	  	var final = [];
	  	obj.forEach(elem => {
	  		final.push(stringifyJSON(elem)); 
	  	})
	  	return "[" + final + "]";
	  }
	}

	if(typeof obj === 'object'){

		var results = [];
		var keys = Object.keys(obj);

		// if(Object.keys(obj)).length === 0){
		// 	return '{}';
		// }

		for(var key in obj){
		
		if(obj[key] === undefined || typeof (obj[key]) === 'function'){
			continue;
		}

		results.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
	}
		return '{' + results.join(',') + '}';
  }
		// return '' + obj;
};


















