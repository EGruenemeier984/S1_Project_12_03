"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 3

   Author:  Ethan Gruenemeier
   Date:   2.18.19
   
   Filename: ah_report.js
   
   Functions:
   
   calcSum(donorAmt)
      A callback function that adds the current donation amount in the array to the donationTotal variable
   
   findMajorDonors(donorAmt)
      A callback function that returns the value true only if the current donation amount in the array
      is greater than or equal to 1000
      
   donorSortDescending(a, b)
      A callback function used to sort the donation amounts from the array in descending order
      
   writeDonorRow(value)
      A callback function that writes the HTML code for each table row that provides the contact
      information for the donor
      
*/
// this sets the donationTotal var to 0.
var donationTotal = 0;
// this runs the calcsum function on evrey value in the donors array.
donors.forEach(calcSum);
// this sets the summmaryTable var to HTML that starts a table to hold the information.
var summaryTable = `<table> <tr><th>Donors</th><td> ${donors.length} </td></tr> <tr><th>Total Donations</th><td>$${donationTotal.toLocaleString()}</td></tr></table>`;
// This sets the summaryTable var to the innerHTML of the donationSummary id on the webpage.
document.getElementById("donationSummary").innerHTML = summaryTable;
// This sets the majorDonors var equal to the donors array being checked by the function findMajorDonors.
var majorDonors = donors.filter(findMajorDonors);
// This sorts the majorDonors array using the call back function.
majorDonors.sort(donorSortDescending);
// This var is set equal to another table holding the major donors info.
var donorTable = `<table> <caption>Major Donors</caption> <tr> <th>Donation</th><th>Donor ID</th> <th>Date</th><th>Name</th><th>Address</th> <th>Phone</th><th>E-mail</th> </tr>`;
// This runs the call back function write Donor row on evrey value in the majorDonors array.
majorDonors.forEach(writeDonorRow);
// This adds the ending tag to the table 
donorTable += "</table>";
// Sets the var donorTable equal to the innerHTML of the donorTable ID.
document.getElementById("donorTable").innerHTML = donorTable;

function calcSum(donorAmt) {
      donationTotal += donorAmt[9];
}

function findMajorDonors(donorAmt) {
      return donorAmt[9] >= 1000;
}

function donorSortDescending(a, b) {
      return b[9] - a[9];
}

function writeDonorRow(value) {
      donorTable += "<tr>";
      donorTable += "<td>$" + value[9].toLocaleString() + "</td>";
      donorTable += "<td>" + value[0] + "</td>";
      donorTable += "<td>" + value[10] + "</td>";
      donorTable += "<td>" + value[2] + ", " + value[1] + "</td>";
      donorTable += "<td>" + value[3] + "<br />" + value[4] + ", " + value[5] + " " + value[6] + "</td>";
      donorTable += "<td>" + value[7] + "</td>";
      donorTable += "<td>" + value[8] + "</td>";
      donorTable += "</tr>";
}