document.getElementById('downloadJson').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {type: "download", format: "json"});
    });
});

document.getElementById('downloadCsv').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {type: "download", format: "csv"});
    });
});
