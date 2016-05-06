var fs = require ('fs')
var countryname = process.argv[2]
var naam = process.argv[3]

function read(file){
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
			//possibly client wants to output all info
		console.log ("Country: " + country.name);
			console.log('Top level domain: ' + country.topLevelDomain)// The TLD field is an array an may contain more.
		}
	} )
 
	
} )





}
console.log(naam )
module.exports.readFile = read