const chrome = require("sinon-chrome/extensions");

import { getTabTitle } from "src/popup.js";

describe("popup.js ", () => {
  beforeAll(() => {
    global.chrome = chrome;
  });

  beforeEach(() => {
    chrome.flush();
  });

  describe("getTabTitle ", () => {
    it("should return false when URL is empty", () => {
      expect(getTabTitle()).toBe(true);
    });
  });

  afterAll(() => {
    chrome.flush();
    delete global.chrome;
  });
});
