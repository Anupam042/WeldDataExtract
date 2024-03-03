// Function to download data as a file
function download(content, fileName, contentType) {
  const a = document.createElement('a');
  const file = new Blob([content], {type: contentType});
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  document.body.appendChild(a); // Append the element to the body
  a.click();
  document.body.removeChild(a); // Clean up and remove the element from the body
}

// Parse the specific table with class '.datatable.title.nofilter' to JSON
function tableToJson() {
  // Adjust the selector to target your specific table and its rows
  const rows = document.querySelectorAll('.datatable.title.nofilter .rowElement');
  const data = Array.from(rows).map(row => {
      // Adjust the selectors based on your table's actual structure and classes
      return {
          seamNumber: row.querySelector('.Seamnumber').innerText,
          startTime: row.querySelector('.starttimelocaltime').title,
          weldingDuration: row.querySelector('.Weldingduration div div').title,
          current: row.querySelector('.I div div').title,
          voltage: row.querySelector('.U div div').title,
          wireFeedSpeed: row.querySelector('.Wfs div div').title,
          power: row.querySelector('.Power').title,
          energy: row.querySelector('.Energy div div').title,
          gasConsumption: row.querySelector('.Gasconsumption').title
      };
  });

  return JSON.stringify(data, null, 2);
}

// Function to trigger the JSON download
function downloadTableAsJson() {
  const jsonData = tableToJson();
  download(jsonData, 'data.json', 'application/json');
}

// ... (other functions like download() and tableToJson())

// Function to convert JSON data to CSV format
function jsonToCsv(jsonData) {
  const array = JSON.parse(jsonData);
  const headers = Object.keys(array[0]);
  const csvRows = array.map(row => headers.map(header => JSON.stringify(row[header], replacer)).join(','));
  csvRows.unshift(headers.join(',')); // Add header row
  return csvRows.join('\n');

  function replacer(key, value) {
      return value === null ? '' : value; // Handle null values
  }
}

// Function to decide the format and trigger the download
function downloadData(format) {
  const jsonData = tableToJson();
  if (format === "json") {
      download(jsonData, 'data.json', 'application/json');
  } else if (format === "csv") {
      const csvData = jsonToCsv(jsonData);
      download(csvData, 'data.csv', 'text/csv');
  } else {
      console.error("Unsupported format");
  }
}

// Listen for messages from the popup script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "download") {
      downloadData(message.format);
  }
});
