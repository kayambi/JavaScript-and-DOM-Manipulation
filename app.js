// from data.js

let tableData = data;

// YOUR CODE HERE!
let tempTable = document.getElementsByTagName('tbody')[0];


function buildTable(tempTable, tableData){
 
  console.log(tempTable);
  for (let i = 0; i < tableData.length; i++)
  {
    let newRow = tempTable.insertRow(0);

    let cell0 = newRow.insertCell(0);
    let cell1 = newRow.insertCell(1);
    let cell2 = newRow.insertCell(2);
    let cell3 = newRow.insertCell(3);
    let cell4 = newRow.insertCell(4);
    let cell5 = newRow.insertCell(5);
    let cell6 = newRow.insertCell(6);

    cell0.innerHTML = tableData[i].datetime;
    cell1.innerHTML = tableData[i].city;
    cell2.innerHTML = tableData[i].state;
    cell3.innerHTML = tableData[i].country;
    cell4.innerHTML = tableData[i].shape;
    cell5.innerHTML = tableData[i].durationMinutes;
    cell6.innerHTML = tableData[i].comments;
  }
}
buildTable(tempTable, tableData);


let button = d3.select("#filter-btn");
button.on("click", function()
{
    d3.event.preventDefault(); 
    let a = document.getElementById("datetime").value;
    console.log(a);

    let filteredData = []
    console.log(a);
    console.log(tableData);

    // clear the table 
    let doesNotExist = false
    for (let i=0; i <tableData.length ; i++)
    {
      if(a === tableData[i]["datetime"]){
        filteredData.push(tableData[i]);
        doesNotExist = true;
      }

    }

    if(doesNotExist === false){
      alert("Does not exist")
    }

    console.log(filteredData);
    document.getElementsByTagName('tbody')[0].innerHTML = ""
    buildTable(tempTable, filteredData);
    
} );


