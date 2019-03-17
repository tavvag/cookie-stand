'use strict';


var locationHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var pikeLocation = {
    locationName: '7thPike',
    minCustomer: 40,
    maxCustomer: 200,
    averageCookiePerCustomer: 2,

    averageCustomersPerHour: function () {
        return Math.floor(Math.random() * (pikeLocation.maxCustomer-pikeLocation.minCustomer) + 20);
    },
    cookiesSoldPerHour: function () {
        var averageCookiesSold = [];
        for (var count = 0; count < locationHours.length; count++) {
            console.log('test' +locationHours[count] + '-' + parseInt(pikeLocation.averageCookiePerCustomer * pikeLocation.averageCustomersPerHour()));
            averageCookiesSold.push(locationHours[count] + '-' + parseInt(pikeLocation.averageCookiePerCustomer * pikeLocation.averageCustomersPerHour()));
        }
        console.log(' Location ' + pikeLocation.locationName + " Average Cookies Sold : " + pikeLocation.averageCookiesSold);
        return averageCookiesSold;
    },

    totalCookiesSold: function () {
        var sum = 0;
        var toatalSales = pikeLocation.cookiesSoldPerHour();
        for (var i = 0; i < toatalSales.length; i++) {
            var saleByHour = parseInt(toatalSales[i].substr(toatalSales[i].indexOf('-') + 1, toatalSales[i].length));

            sum += saleByHour;

        }
        console.log(' Location ' + pikeLocation.locationName + " Total Sold : " + sum);
        return sum;
    }
}

var pierLocation = {
    locationName: 'Pier99',
    minCustomer: 50,
    maxCustomer: 250,
    averageCookiePerCustomer: 2,

    averageCustomersPerHour: function () {
        return Math.floor(Math.random() * (pierLocation.maxCustomer-pierLocation.minCustomer) + 20);
    },
    cookiesSoldPerHour: function () {
        var averageCookiesSold = [];
        for (var count = 0; count < locationHours.length; count++) {
            averageCookiesSold.push(locationHours[count] + '-' + parseInt(pierLocation.averageCookiePerCustomer * pierLocation.averageCustomersPerHour()));
        }
        console.log(' Location ' + pierLocation.locationName + " Average Cookies Sold : " + averageCookiesSold);
        return averageCookiesSold;
    },

    totalCookiesSold: function () {
        var sum = 0;
        var toatalSales = pierLocation.cookiesSoldPerHour();
        for (var i = 0; i < toatalSales.length; i++) {
            var saleByHour = parseInt(toatalSales[i].substr(toatalSales[i].indexOf('-') + 1, toatalSales[i].length));

            sum += saleByHour;

        }
        console.log(' Location ' + pierLocation.locationName + " Total Sold : " + sum);
        return sum;
    }
}


var alaskanLocation = {
    locationName: 'AlaskanWay',
    minCustomer: 30,
    maxCustomer: 300,
    averageCookiePerCustomer: 3,

    averageCustomersPerHour: function () {
           return Math.floor(Math.random() * (alaskanLocation.maxCustomer-alaskanLocation.minCustomer) + 20);
    },
    cookiesSoldPerHour: function () {
        var averageCookiesSold = [];
        for (var count = 0; count < locationHours.length; count++) {
            averageCookiesSold.push(locationHours[count] + '-' + parseInt(alaskanLocation.averageCookiePerCustomer * alaskanLocation.averageCustomersPerHour()));
        }
        console.log(' Location ' + alaskanLocation.locationName + " Average Cookies Sold : " + averageCookiesSold);
        return averageCookiesSold;
    },

    totalCookiesSold: function () {
        var sum = 0;
        var toatalSales = alaskanLocation.cookiesSoldPerHour();
        for (var i = 0; i < toatalSales.length; i++) {
            var saleByHour = parseInt(toatalSales[i].substr(toatalSales[i].indexOf('-') + 1, toatalSales[i].length));

            sum += saleByHour;

        }
        console.log(' Location ' + alaskanLocation.locationName + " Total Sold : " + sum);
        return sum;
    }
}

var seatacLocation = {
    locationName: 'Seatac',
    minCustomer: 100,
    maxCustomer: 500,
    averageCookiePerCustomer: 5,

    averageCustomersPerHour: function () {
           return Math.floor(Math.random() * (seatacLocation.maxCustomer-seatacLocation.minCustomer) + 20);
    },
    cookiesSoldPerHour: function () {
        var averageCookiesSold = [];
        for (var count = 0; count < locationHours.length; count++) {
            averageCookiesSold.push(locationHours[count] + '-' + parseInt(seatacLocation.averageCookiePerCustomer * seatacLocation.averageCustomersPerHour()));
        }
        console.log(' Location ' + seatacLocation.locationName + " Average Cookies Sold : " + averageCookiesSold);
        return averageCookiesSold;
    },

    totalCookiesSold: function () {
        var sum = 0;
        var toatalSales = seatacLocation.cookiesSoldPerHour();
        for (var i = 0; i < toatalSales.length; i++) {
            var saleByHour = parseInt(toatalSales[i].substr(toatalSales[i].indexOf('-') + 1, toatalSales[i].length));

            sum += saleByHour;

        }
        console.log(' Location ' + seatacLocation.locationName + " Total Sold : " + sum);
        return sum;
    }
}

var mercerLocation = {
    locationName: 'Mercer Island',
    minCustomer: 28,
    maxCustomer: 39,
    averageCookiePerCustomer: 2,

    averageCustomersPerHour: function () {
           return Math.floor(Math.random() * (mercerLocation.maxCustomer-mercerLocation.minCustomer) + 20);
    },
    cookiesSoldPerHour: function () {
        var averageCookiesSold = [];
        for (var count = 0; count < locationHours.length; count++) {
            averageCookiesSold.push(locationHours[count] + '-' + parseInt(mercerLocation.averageCookiePerCustomer * mercerLocation.averageCustomersPerHour()));
        }
        console.log(' Location ' + mercerLocation.locationName + " Average Cookies Sold : " + mercerLocation.averageCookiesSold);
        return averageCookiesSold;
    },

    totalCookiesSold: function () {
        var sum = 0;
        var toatalSales = mercerLocation.cookiesSoldPerHour();
        for (var i = 0; i < toatalSales.length; i++) {
            var saleByHour = parseInt(toatalSales[i].substr(toatalSales[i].indexOf('-') + 1, toatalSales[i].length));

            sum += saleByHour;

        }
        console.log(' Location ' + mercerLocation.locationName + " Total Sold : " + sum);
        return sum;
    }
}

var allLocations = [pikeLocation, pierLocation, alaskanLocation, seatacLocation, mercerLocation];
console.log('element '+ pikeLocation.cookiesSoldPerHour[j]);
for (var i = 0; i < allLocations.length; i++) {
    var ulElement = document.createElement('ul');
    document.getElementById('location-name').appendChild(ulElement);
    ulElement.innerHTML = allLocations[i].locationName;
     console.log('loction name : '+allLocations[i].locationName);
     for (var j = 0; j <= locationHours.length; j++) {
          var liElement = document.createElement('li');
          var hourSales = allLocations[i].cookiesSoldPerHour();
          //console.log('element '+pikeLocation.cookiesSoldPerHour[j]);
          liElement.textContent = hourSales[j];
          ulElement.appendChild(liElement);
        }
    var totalSales = allLocations[i].totalCookiesSold();
    liElement.textContent = totalSales;
    ulElement.appendChild(liElement);
} 