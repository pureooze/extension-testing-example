const chrome = require("sinon-chrome/extensions");

import { getUrl } from "src/popup.js";

describe("popup.js ", () => {
  beforeAll(() => {
    global.chrome = chrome;
  });

  beforeEach(() => {
    chrome.flush();
  });

  describe("getTabTitle ", () => {
    it("should return full runtime URL", async () => {
      chrome.runtime.getURL.returns("http://localhost/popup-content.html");
      expect(await getUrl()).toBe("http://localhost/popup-content.html");
    });
  });

  afterAll(() => {
    chrome.flush();
    delete global.chrome;
  });
});
