'use strict';


var locationHours =['6am','7am','8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm','4pm', '5pm', '6pm', '7pm', '8pm'];
var allLocations=[];
var tableData =[];

//Constructor
function SalamonCookieLocation(locationName,minCustomer,maxCustomer,averageCookiePerCustomer){
  this.locationName =locationName;
  this.minCustomer=minCustomer;
  this.maxCustomer=maxCustomer;
  this.averageCookiePerCustomer=averageCookiePerCustomer;
}
//Generate Randam number
SalamonCookieLocation.prototype.averageCustomersPerHour=function(){
  return Math.floor(Math.random() * (this.maxCustomer-this.minCustomer)+20);
};
//Calculate cookies sold by hour
SalamonCookieLocation.prototype.cookiesSoldPerHour=function(){
  var averageCookiesSold= [];
  for (var count= 0; count < locationHours.length; count++) {
    averageCookiesSold.push(parseInt(this.averageCookiePerCustomer*this.averageCustomersPerHour()));
  }
  //console.log(' Location '+  this.locationName + " Average Cookies Sold : "+ averageCookiesSold );
  return averageCookiesSold;
};

//Calculate cookies sold total per each location
SalamonCookieLocation.prototype.totalCookiesSold=function(cookiesByHour){
  var sum = 0;
  //var toatalSales = this.cookiesSoldPerHour();
  for(var i = 0; i < cookiesByHour.length; i++){
    sum += cookiesByHour[i];
  }
  //console.log(' Location '+  this.locationName + " Total Sold : "+ sum );
  return sum;
};

//Create td elements data
function makeTable(locations,firstElement,lastElement){
  var finalData ;
  for(var i =0;i<locations.length;i++){
    if(i===0){
      finalData ='<th>'+firstElement+'</th>';
    }
    finalData = finalData+'<td>'+locations[i]+'</td>';
  }
  tableData.push(finalData+'<td>'+lastElement+'</td>');
  //console.log('tableData in maketable'+ tableData);
}

//create a tr and append to parent table
function renderTable(tableRow,elementId){
  var newTableElement = document.getElementById(elementId);
  for(var row=0;row<tableRow.length;row++){
    // console.log(`length ${tableRow.length}`);
    var newTableRow = document.createElement('tr');
    newTableRow.innerHTML=tableRow[row];
    newTableElement.appendChild(newTableRow);
  }

}
//Create Objects
var pikeLocation = new SalamonCookieLocation('7thPike',40,200,2);
var pierLocation = new SalamonCookieLocation('Pier99',50,250,2);
var alaskanLocation = new SalamonCookieLocation('AlaskanWay',30,300,3);
var seatacLocation = new SalamonCookieLocation('Seatac',100,500,5);
var mercerLocation = new SalamonCookieLocation('Mercer Island',32,20,2);
//Create array of objects
allLocations.push(pikeLocation,pierLocation,alaskanLocation,seatacLocation,mercerLocation);
//Create headers for table dynamically
makeTable(locationHours,' ','Daily Location Total');
renderTable(tableData,'heading');



//Create data with every day sales for each location
var cookieByHourPerLocation=[];
for (var i = 0; i < allLocations.length; i++) {
  tableData =[];
  var locationName = allLocations[i].locationName;
  var cookiesByHour = allLocations[i].cookiesSoldPerHour();
  var totalSalesByLoaction = allLocations[i].totalCookiesSold(cookiesByHour);
  console.log('inside '+cookiesByHour);
  makeTable(cookiesByHour,locationName,totalSalesByLoaction);
  renderTable(tableData,'data');
  cookieByHourPerLocation.push(cookiesByHour);
}


//Create Footer
tableData =[];
var totalHourSales=[];
//Create Totals for each hour for all locations
for (var i = 0; i < locationHours.length; i++) {
  var totalByHour=0;
  for (var j = 0; j < allLocations.length; j++){
    var cookiesByHour = cookieByHourPerLocation[j];
    totalByHour+=cookiesByHour[i];
  }
  totalHourSales.push(totalByHour);
}
makeTable(totalHourSales,'Totals',grandTotal(totalHourSales));
renderTable(tableData,'data');

function grandTotal(totalHourSales){
  var total =0;
  for(var i = 0; i < totalHourSales.length; i++){
    total+=totalHourSales[i];
  }
  return total;
}

