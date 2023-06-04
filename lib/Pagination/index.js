"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Icon = _interopRequireDefault(require("../Icon"));
var _excluded = ["currentPage", "groupPagesCount", "totalPages"];
var __jsx = _react["default"].createElement;
var ICON_MAP = {
  NEXT: 'fa-angle-right',
  PREVIOUS: 'fa-angle-left',
  TOP: 'fa-angle-double-left',
  END: 'fa-angle-double-right'
};
var getIconColor = function getIconColor(accessible, theme) {
  return accessible ? theme.colors.primary : theme.colors.grey2;
};
var PaginationBox = (0, _styledComponents["default"])('div').withConfig({
  displayName: "Pagination__PaginationBox",
  componentId: "sc-1pgq2xb-0"
})({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center'
});
var PagesBox = (0, _styledComponents["default"])('div').withConfig({
  displayName: "Pagination__PagesBox",
  componentId: "sc-1pgq2xb-1"
})({
  display: 'inline-flex'
});
var PageNumber = (0, _styledComponents["default"])('span').withConfig({
  displayName: "Pagination__PageNumber",
  componentId: "sc-1pgq2xb-2"
})(function (_ref) {
  var theme = _ref.theme,
    active = _ref.active;
  return {
    border: "1px solid ".concat(active ? theme.colors.primary : theme.colors.grey1),
    padding: "".concat(theme.getSpacing(1), "px ").concat(theme.getSpacing(2), "px"),
    borderRadius: theme.radius,
    marginRight: theme.getSpacing(1),
    color: active ? theme.colors.primary : theme.colors.grey2
  };
});
var StyledIcon = (0, _styledComponents["default"])(_Icon["default"]).withConfig({
  displayName: "Pagination__StyledIcon",
  componentId: "sc-1pgq2xb-3"
})(function (_ref2) {
  var theme = _ref2.theme,
    accessible = _ref2.accessible;
  return {
    color: getIconColor(accessible, theme),
    marginRight: theme.getSpacing(1)
  };
});

// 上一頁
// 下一頁
// 第一頁
// 最後一頁

// 當前頁數
// 總頁數
// 每頁筆數

var getPages = function getPages(totalPages, groupPagesCount) {
  var pages = Math.ceil(totalPages / groupPagesCount);
  // console.log('pages', pages);
  return Array.from({
    length: pages
  }, function (_, index) {
    return index + 1;
  });
  //  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
};

var Pages = function Pages(_ref3) {
  var pages = _ref3.pages,
    currentPage = _ref3.currentPage,
    handlePageChange = _ref3.handlePageChange;
  return __jsx(PagesBox, null, pages && pages.map(function (page, index) {
    var isActive = currentPage === page;
    return __jsx(PageNumber, {
      key: "page_".concat(index),
      active: isActive,
      onClick: handlePageChange(page)
    }, page);
  }));
};
var onPageChange = function onPageChange() {
  return true;
};
var pageChange = function pageChange(onPageChange) {
  return function (page) {
    return function () {
      onPageChange(page);
    };
  };
};
var Pagination = function Pagination(_ref4) {
  var currentPage = _ref4.currentPage,
    groupPagesCount = _ref4.groupPagesCount,
    totalPages = _ref4.totalPages,
    props = (0, _objectWithoutProperties2["default"])(_ref4, _excluded);
  var pages = getPages(totalPages, groupPagesCount);
  var handlePageChange = pageChange(onPageChange);
  return __jsx(PaginationBox, props, __jsx(StyledIcon, {
    icon: ICON_MAP.TOP,
    accessible: currentPage !== 1,
    onClick: handlePageChange(1)
  }), __jsx(StyledIcon, {
    icon: ICON_MAP.PREVIOUS,
    accessible: currentPage !== 1,
    onClick: handlePageChange(currentPage - 1)
  }), __jsx(Pages, {
    pages: pages,
    currentPage: currentPage,
    handlePageChange: handlePageChange
  }), __jsx(StyledIcon, {
    icon: ICON_MAP.NEXT,
    accessible: currentPage !== 1,
    onClick: handlePageChange(currentPage + 1)
  }), __jsx(StyledIcon, {
    icon: ICON_MAP.END,
    accessible: currentPage !== 1,
    onClick: handlePageChange(pages.length)
  }));
};
var _default = Pagination;
exports["default"] = _default;