var countryname = process.argv[2]//Json file is case sensitive! Maybe handle this?
var fs = require ('fs');

fs.readFile( './countries.json', function( error, filedata ) {
	//Make sure errors are visible in console
	if ( error ){
		console.log("Something is up! Details: " + error)
	}
	// Store our filedata in var as json
	var jsondata = JSON.parse (filedata) 
// loop through the json to match country to paramater
	jsondata.forEach ( function ( country ) {
		if ( country.name == countryname) { 
			console.log ("Country: " + country.name);
			console.log('Top level domain: ' + country.topLevelDomain)// The TLD field is an array an may contain more.
		}
	} )
 
	
} )