'use strict';


var locationHours =['6am','7am','8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm','4pm', '5pm', '6pm', '7pm', '8pm'];

function SalamonCookieLocation(locationName,minCustomer,maxCustomer,averageCookiePerCustomer){
this.locationName =locationName;
this.minCustomer=minCustomer;
this.maxCustomer=maxCustomer;
this.averageCookiePerCustomer=averageCookiePerCustomer;

 this.averageCustomersPerHour =function () {
     return Math.floor(Math.random() * (10)+20);
 }
 this.cookiesSoldPerHour =function () {
    var averageCookiesSold= [];
    for (var count= 0; count < locationHours.length; count++) {
        averageCookiesSold.push(locationHours[count] +'-' +parseInt(this.averageCookiePerCustomer*this.averageCustomersPerHour()));
}
console.log(' Location '+  this.locationName + " Average Cookies Sold : "+ averageCookiesSold );
return averageCookiesSold;
}

this.totalCookiesSold=function(){
    var sum = 0;
    var toatalSales = this.cookiesSoldPerHour();
 for(var i = 0; i < toatalSales.length; i++){
     var saleByHour = parseInt(toatalSales[i].substr(toatalSales[i].indexOf('-')+1,toatalSales[i].length)); 

 sum += saleByHour;

}
console.log(' Location '+  this.locationName + " Total Sold : "+ sum );
    return sum;
}
}

var pikeLocation = new SalamonCookieLocation("7thPike",40,200,2);
var pierLocation = new SalamonCookieLocation("Pier99",50,250,2);
var alaskanLocation = new SalamonCookieLocation("AlaskanWay",30,300,3);
var seatacLocation = new SalamonCookieLocation("Seatac",100,500,5);
var mercerLocation = new SalamonCookieLocation("Mercer Island",28,27,2);

var allLocations = [pikeLocation,pierLocation,alaskanLocation,seatacLocation,mercerLocation];

for (var i = 0; i < allLocations.length; i++) {
    var ulElement = document.createElement('ul');
    //ulElement.setAttribute("start", "8");
  document.getElementById('location-name').appendChild(ulElement);
  ulElement.innerHTML = allLocations[i].locationName;
  var cookiesByHour = allLocations[i].cookiesSoldPerHour();
 for(var hour =0;hour<cookiesByHour.length;hour++){
  var liElement = document.createElement('li');
  var totalSales = allLocations[i].totalCookiesSold();
  liElement.textContent = cookiesByHour[hour];
  ulElement.appendChild(liElement);
 }
 var liTotalElement = document.createElement('li');
 var totalSales = allLocations[i].totalCookiesSold();
 liTotalElement.textContent = 'Total :' + totalSales;
 ulElement.appendChild(liTotalElement);
}