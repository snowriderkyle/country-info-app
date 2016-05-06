var countryName = process.argv[2]
var fs = require ('fs');

fs.readFile( './countries.json', function( error, data ) {
	if ( error ){
		console.log("Something is up! Details: " + error)
	}

	var jasondata = JSON.parse (filedata) 

})