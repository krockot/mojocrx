"use strict";

(function() {
  function save() {
    let selector = document.getElementById('catalog');
    let info = CATALOG_INFO[selector.value];
    document.getElementById('description').innerText = info.description;
    chrome.storage.sync.set({catalog: selector.value});
  }

  function load() {
    let selector = document.getElementById('catalog');
    for (let i in CATALOG_INFO) {
      let info = CATALOG_INFO[i];
      let opt = document.createElement('option');
      opt.text = info.displayName
      opt.value = i;
      selector.add(opt);
    }
    chrome.storage.sync.get({
      'catalog': 'chrome',
    }, items => { selector.value = items.catalog; save() });
  }

  document.addEventListener('DOMContentLoaded', load);
  document.getElementById('catalog').onchange = save;
}());
