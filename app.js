var countryName = process.argv[2]
var fs = require ('fs');

fs.readFile( './countries.json', function( error, data ) {
	//Make sure errors are visible in console
	if ( error ){
		console.log("Something is up! Details: " + error)
	}
	// Store our filedata in var as json
	var jasondata = JSON.parse (filedata) 
console.log (jsondata)
})