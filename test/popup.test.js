const browser = require("sinon-chrome/webextensions");

import { getUrl } from "src/popup.js";

describe("popup.js ", () => {
  beforeAll(() => {
    global.browser = browser;
  });

  beforeEach(() => {
    browser.flush();
  });

  describe("getTabTitle ", () => {
    it("should return false when URL is empty", async () => {
      browser.runtime.getURL.returns("http://localhost/popup-content.html");
      expect(await getUrl()).toBe("http://localhost/popup-content.html");
    });
  });

  afterAll(() => {
    browser.flush();
    delete global.browser;
  });
});
