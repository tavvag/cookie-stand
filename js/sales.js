'use strict';


var locationHours =['6am','7am','8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm','4pm', '5pm', '6pm', '7pm', '8pm'];

function salamonCookieLocation(locationName,minCustomer,maxCustomer,averageCookiePerCustomer){
this.locationName =locationName;
this.minCustomer=minCustomer;
this.maxCustomer=maxCustomer;
this.averageCookiePerCustomer=averageCookiePerCustomer;

 this.averageCustomersPerHour =function () {
     return Math.floor(Math.random() * (10)+20);
 }
 this.cookiesSoldPerHour =function () {
    var averageCookiesSold= [];
    for (var count= 1; count <= locationHours.length; count++) {
        averageCookiesSold.push(parseInt(this.averageCookiePerCustomer*this.averageCustomersPerHour()));
}
console.log(' Location '+  this.locationName + " Average Cookies Sold : "+ averageCookiesSold );
return averageCookiesSold;
}

this.totalCookiesSold=function(){
    var sum = 0;
    var toatalSales = this.cookiesSoldPerHour();
 for(var i = 0; i < toatalSales.length; i++){
 sum += toatalSales[i];

}
console.log(' Location '+  this.locationName + " Total Sold : "+ sum );
    return sum;
}
}

var pikeLocation = new salamonCookieLocation("7thPike",40,200,2);
var pierLocation = new salamonCookieLocation("Pier99",50,250,2);
var alaskanLocation = new salamonCookieLocation("AlaskanWay",30,300,3);
var seatacLocation = new salamonCookieLocation("Seatac",100,500,5);
var mercerLocation = new salamonCookieLocation("Mercer Island",28,27,2);

var allLocations = [pikeLocation,pierLocation,alaskanLocation,seatacLocation,mercerLocation];

for (var i = 0; i < allLocations.length; i++) {
    var ulElement = document.createElement('ul');
  document.getElementById('location-name').appendChild(ulElement);
  ulElement.innerHTML = allLocations[i].locationName;
 
  var liElement = document.createElement('li');
  var totalSales = allLocations[i].totalCookiesSold();
  liElement.textContent = totalSales;
  ulElement.appendChild(liElement);
}