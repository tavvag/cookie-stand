'use strict';


var locationHours =['6am','7am','8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm','4pm', '5pm', '6pm', '7pm', '8pm'];
var firstSubmit=false;
var tableData =[];
var totalLocations =0;
var totalCookieSoldPerLocation=[];
var form = document.getElementById('sales_form');
document.getElementById('sales-table').style.visibility='hidden';

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
    var newTableRow = document.createElement('tr');
    newTableRow.innerHTML=tableRow[row];
    newTableElement.appendChild(newTableRow);
  }

}
//Function will trigger on submit event
function formSalesLocationData(event) {
  event.preventDefault();
  var allLocations=[];
  var locationName = event.target.location.value;
  var minCustomer = event.target.minimum.value;
  var maxCustomer = event.target.maximum.value;
  var averagePerCustomer = event.target.average.value;
  totalLocations++;
  allLocations.push(new SalamonCookieLocation(locationName, minCustomer, maxCustomer, averagePerCustomer));
  printSalesData(allLocations);
  if(totalLocations>1){
    var footerEl = document.getElementById('footer');
    while (footerEl.firstChild) {
      // This will remove all children within tbody which in your case are <tr> elements
      footerEl.removeChild(footerEl.firstChild);
    }
    printTotalsFooter();
  }
  form.reset();
}
//Print Sales Data for each location
function printSalesData(location){
  tableData =[];
  //Create headers for table dynamically
  if(firstSubmit===false){
    document.getElementById('sales-table').style.visibility='visible';
    makeTable(locationHours,' ','Daily Location Total');
    renderTable(tableData,'heading');
    firstSubmit=true;
  }
  for (var i = 0; i < location.length; i++) {
    tableData =[];
    var locationName = location[i].locationName;
    var cookiesByHour = location[i].cookiesSoldPerHour();
    var totalSalesByLoaction = location[i].totalCookiesSold(cookiesByHour);
    makeTable(cookiesByHour,locationName,totalSalesByLoaction);
    renderTable(tableData,'data');
    totalCookieSoldPerLocation.push(cookiesByHour);
  }

}

//Print Sales Data for each location
function printTotalsFooter(){
  tableData =[];
  var totalHourSales=[];
  console.log('totalLocations :'+ totalLocations + '  totalCookieSoldPerLocation '+ totalCookieSoldPerLocation);
  //Create Totals for each hour for all locations
  for (var i = 0; i < locationHours.length; i++) {
    var totalByHour=0;
    for (var j = 0; j < totalLocations; j++){
      var cookiesByHour = totalCookieSoldPerLocation[j];
      totalByHour+=cookiesByHour[i];
    }
    totalHourSales.push(totalByHour);
    console.log('totalHourSales :' + totalHourSales);
  }
  makeTable(totalHourSales,'Totals',grandTotal(totalHourSales));
  renderTable(tableData,'footer');
}

function grandTotal(totalHourSales){
  var total =0;
  for(var i = 0; i < totalHourSales.length; i++){
    total+=totalHourSales[i];
  }
  return total;
}


//Main Start of the program

form.addEventListener('submit', formSalesLocationData);

