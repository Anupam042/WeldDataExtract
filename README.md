# Chrome Extension to extract Fronius weld Data

## Description
This Chrome extension is designed to scrape and download fronius weld data from fronius welds management portal as JSON or CSV files. It specifically targets tables with the class `datatable title nofilter` and extracts their data upon user request through a simple popup interface.

## Features
- Scrape tables holding weld data from web pages using content scripts.
- Download table data as JSON or CSV files.
- Easy to use with a simple click on the extension icon.

## Installation
To install this extension in Chrome, follow these steps:

1. Clone the repository or download the ZIP file and extract it.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable Developer Mode by toggling the switch in the top right corner.
4. Click on "Load unpacked" and select the extension directory where your `manifest.json` file is located.
5. The extension should now be installed and will appear in your Chrome toolbar.

## Usage
After installation, navigate to a web page with table of all welds data (usually "froniusUnitIpAddress"/documentation/documentation.html) whcih contains welds data in a table with the class `datatable title nofilter`. Click the extension icon in the toolbar to open the popup, then select:

- `Download as JSON` to download the table data in JSON format.
- `Download as CSV` to download the table data in CSV format.

The downloaded file will be saved to your default downloads directory.

## Project Structure
- `manifest.json`: Configuration file for the Chrome extension.
- `popup.html`: The HTML file for the popup interface.
- `popup.js`: The JavaScript file handling popup button clicks and sending messages to the content script.
- `contentScript.js`: The content script that scrapes the table data and initiates the download.

## Contributing
Contributions are welcome! If you would like to contribute to this project, please fork the repository and submit a pull request with your proposed changes.

## Contact
anupamtamrakar1994@gmail.com
