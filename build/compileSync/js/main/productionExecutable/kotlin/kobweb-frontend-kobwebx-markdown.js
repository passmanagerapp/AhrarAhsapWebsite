(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['kobweb-frontend-kobwebx-markdown'] = factory(typeof globalThis['kobweb-frontend-kobwebx-markdown'] === 'undefined' ? {} : globalThis['kobweb-frontend-kobwebx-markdown']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-kobwebx-markdown.js.map
