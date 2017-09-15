"use strict";

(function() {
  //const kCatalogBaseUrl = "https://cs.chromium.org/chromium/src/out/Debug/gen/";
  const kCatalogBaseUrl = "https://oz.gs/";

  async function fetchCatalog(path) {
    const response = fetch(kCatalogBaseUrl + path);
    const data = await response;
    return await data.json();
  }

  async function initializeForCatalog(index) {
    let info = CATALOG_INFO[index];
    let catalog = await fetchCatalog(info.path);
    console.log(catalog);
  }

  chrome.storage.sync.get({catalog: "chrome"},
      items => { initializeForCatalog(items.catalog) });
}());
