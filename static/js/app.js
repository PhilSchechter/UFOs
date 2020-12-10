// import data from data.js
const = tableData=data;

/ reference the HTML table data using D3
var tbody = d3.select("tbody");

function buildTable(data){
    // first, clear out any existing data
    tbody.html("");

    // lay out the JSON-like data into a table format
    // loop through each object in the date
    // append a row and cells for each value in the ro
    data.forEach((dataRow) => {
        // append a row to the table body
        let row = tbody.append("tr");

        // loop through each field in the datRat and add
        // each value as a table cell (td)
        
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}