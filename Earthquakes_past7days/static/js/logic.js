// Add console.log to check to see if our code is working.
console.log("working");

// We create the tile layer that will be the background of our map.
// Skill drill id: mapbox.streets -> mapbox.dark
let streets = L.tileLayer(' https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

let satelliteStreets = L.tileLayer(' https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

let baseMaps = {
  "Streets": streets,
  "Satellite Streets": satelliteStreets,
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
	center: [43.7, -79.3],
	zoom: 11,
	layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
let torontoHoods = "https://raw.githubusercontent.com/wshih88/Mapping_Earthquakes/master/torontoNeighborhoods.json";

d3.json(torontoHoods).then(function(data){
	console.log(data);
	//L.geoJSON(data).addTo(map);
	L.geoJSON(data, { style: myStyle, 
		onEachFeature: function(feature, layer) {
			      console.log(layer);
				  layer.bindPopup("<h2>" + "<p>" + "Neighborhood: " + "</p:>"  + feature.properties.AREA_NAME + "</h2>");
			    }
		  }).addTo(map);});


let myStyle = {
	color: "blue",
	weight: 1,
	fillColor: "yellow"
}
// Grabbing our GeoJSON data.
// d3.json(torontoHoods).then(function(data) {
//     console.log(data);
// // Creating a GeoJSON layer with the retrieved data.
//   L.geoJson(data, {
// 	// We turn each feature into a marker on the map.
// 	style: myStyle,
//     pointToLayer: function(feature, coordinates) {
//       console.log(feature);
// 	  return L.marker(coordinates)
// 	  .bindPopup("<h2>" + "<p>" + "Airline: " + "</p:>"  + feature.properties.airline + "</h2>" + "<hr>" + "</hr>" + 
//	  "<h2>" + "<p>" + "Destination: " + "</p:>" +feature.properties.dsr + "</h2>");
//     }
//   }).addTo(map);
// });
// Create a style for the lines.
// let myStyle = {
// 	color: "blue",
// 	weight: 1,
// 	fillcolor: "#ffffe6"
// }




//Skill Drill
// Creating a GeoJSON layer with the retrieved data.
// L.geoJson(data, {
//   //We turn each feature into a marker on the map.
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//   return L.marker(latlng)
//   .bindPopup("<h2>"+ (Airport Code) feature.properties.faa + "</h2>" + "<hr>" + "</hr>" + "<h3>" + Airport Name: feature.properties.name + "</h3>");
//   }

// }).addTo(map)
// });










// // Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

// Grabbing our GeoJSON data.
// L.geoJson(sanFranAirport, {
//     // We turn each feature into a marker on the map.
//     pointToLayer: function(feature, latlng) {
//       console.log(feature);
// 	  return L.marker(latlng)
// 	  .bindPopup("<h2>" + feature.properties.city + "</h2>");
//     }

//   }).addTo(map);

// GeoJSON data with popup feature
//   L.geoJson(sanFranAirport, {
//     // We turn each feature into a marker on the map.
//     onEachFeature: function(feature, layer) {
//       console.log(layer);
// 	  layer.bindPopup();
//     }
//   }).addTo(map);