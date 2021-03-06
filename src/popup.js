import { render, h } from "preact";
import Main from "./example/index.jsx";

export async function getUrl() {
  chrome.extension.getBackgroundPage().console.log("testing");
  return chrome.runtime.getURL("popup-content.html");
}

async function getTopSites() {
  let result;
  await chrome.topSites.get(function callback(res) {
    result = res;
  });

  return result;
}

render(<Main getUrl={getUrl} />, document.body);
