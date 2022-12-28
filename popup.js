const log = console.log;
const print = (msg) => {
  document.getElementById("log").value = msg;
};

function inTab(tabCallback) {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabArray) {
    tabCallback(tabArray[0]);
  });
}

function getTabContent() {
  return document.body.innerHTML;
}

function loadSearch() {
  inTab((tab) => {
    chrome.scripting.executeScript(
      {
        target: { tabId: tab.id, allFrames: true },
        func: getTabContent,
      },
      (injectionResults) => {
        for (const frameResult of injectionResults)
          if (frameResult.frameId === 0) {
            print("Frame Title: " + frameResult.result);
          }
      }
    );
  });
}

document.addEventListener(
  "DOMContentLoaded",
  function () {
    document.querySelector("#btn").addEventListener("click", loadSearch, false);
  },
  false
);
