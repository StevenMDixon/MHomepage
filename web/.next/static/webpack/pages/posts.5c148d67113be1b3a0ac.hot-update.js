webpackHotUpdate_N_E("pages/posts",{

/***/ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./Components/Nav.module.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Components/Nav.module.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/next/node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".Nav_nav__2Y9In {\n  cursor: default;\n  width: 100%;\n  text-align: center;\n  color: #353638;\n  display: flex;\n  flex-direction: column;\n  flex: 3 1;\n  margin-bottom: 1em;\n}\n\n.Nav_nav_wrapper__1p8Te {\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: space-around;\n}\n\n.Nav_current__xfpOj {\n  text-decoration: underline;\n}\n\n.Nav_nav_button__34THX {\n  display: block;\n  cursor: pointer;\n  color: #353638;\n  background-color: transparent;\n  border: 1px solid transparent;\n  flex-basis: 30%;\n  transition: 0.3s ease-in;\n  outline: 0;\n}\n.Nav_nav_button__34THX .Nav_nav_link__1590d {\n  font-size: 2em;\n  color: #353638;\n  font-family: \"Grand Hotel\";\n}\n.Nav_nav_button__34THX .Nav_current__xfpOj {\n  text-decoration: underline !important;\n}\n\n@media screen and (min-width: 700px) {\n  .Nav_nav__2Y9In {\n    flex-grow: 1;\n  }\n  .Nav_nav__2Y9In h1 {\n    font-size: 3rem;\n  }\n  .Nav_nav__2Y9In h2 {\n    font-size: 3rem;\n  }\n\n  .Nav_nav_button__34THX:hover {\n    transition: 0.3s ease-in;\n    --text-shadow: 5px 2px 10px rgb(93, 93, 93);\n    transform: scale(1.1);\n  }\n\n  .Nav_nav_wrapper__1p8Te {\n    margin-top: 1rem;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: space-around;\n  }\n}", "",{"version":3,"sources":["C:/Users/StevenDev/Documents/git/Mhomepage/web/Components/Nav.module.scss"],"names":[],"mappings":"AAAA;EACE,eAAA;EACA,WAAA;EACA,kBAAA;EACA,cAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;EACA,kBAAA;AACF;;AAEA;EACE,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,yBAAA;AACF;;AAEA;EACE,0BAAA;AACF;;AAEA;EACE,cAAA;EACA,eAAA;EACA,cAAA;EACA,6BAAA;EACA,6BAAA;EACA,eAAA;EACA,wBAAA;EACA,UAAA;AACF;AAAE;EACE,cAAA;EACA,cAAA;EACA,0BAAA;AAEJ;AACE;EACE,qCAAA;AACJ;;AAIA;EAEE;IACE,YAAA;EAFF;EAGE;IACE,eAAA;EADJ;EAGE;IACE,eAAA;EADJ;;EAME;IACE,wBAAA;IACA,2CAAA;IACA,qBAAA;EAHJ;;EAMA;IACE,gBAAA;IACA,aAAA;IACA,mBAAA;IACA,uBAAA;IACA,yBAAA;EAHF;AACF","file":"Nav.module.scss","sourcesContent":[".nav{\r\n  cursor: default;\r\n  width: 100%;\r\n  text-align: center;\r\n  color: #353638;\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex: 3;\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.nav_wrapper{\r\n  margin-top: 1rem;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: space-around;\r\n}\r\n\r\n.current {\r\n  text-decoration: underline;\r\n}\r\n\r\n.nav_button{\r\n  display: block;\r\n  cursor: pointer;\r\n  color: #353638;\r\n  background-color: transparent;\r\n  border: 1px solid transparent;\r\n  flex-basis: 30%;\r\n  transition: .3s ease-in;\r\n  outline:0;\r\n  .nav_link {\r\n    font-size: 2em;\r\n    color: #353638;\r\n    font-family: 'Grand Hotel';\r\n    //text-decoration: none;\r\n  }\r\n  .current {\r\n    text-decoration: underline !important;\r\n  }\r\n}\r\n\r\n\r\n@media screen and (min-width: 700px){\r\n\r\n  .nav{\r\n    flex-grow: 1;\r\n    h1 {\r\n      font-size: 3rem;\r\n    }\r\n    h2{\r\n      font-size: 3rem;\r\n    }\r\n  }\r\n\r\n  .nav_button{\r\n    &:hover{\r\n      transition: .3s ease-in;\r\n      --text-shadow: 5px 2px 10px rgb(93, 93, 93);\r\n      transform: scale(1.1)\r\n    }\r\n  }\r\n  .nav_wrapper{\r\n    margin-top: 1rem;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: space-around;\r\n  }\r\n\r\n \r\n}"]}]);
// Exports
exports.locals = {
	"nav": "Nav_nav__2Y9In",
	"nav_wrapper": "Nav_nav_wrapper__1p8Te",
	"current": "Nav_current__xfpOj",
	"nav_button": "Nav_nav_button__34THX",
	"nav_link": "Nav_nav_link__1590d"
};
module.exports = exports;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9OYXYubW9kdWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx5SUFBa0U7QUFDNUc7QUFDQTtBQUNBLGNBQWMsUUFBUyxvQkFBb0Isb0JBQW9CLGdCQUFnQix1QkFBdUIsbUJBQW1CLGtCQUFrQiwyQkFBMkIsY0FBYyx1QkFBdUIsR0FBRyw2QkFBNkIscUJBQXFCLGtCQUFrQix3QkFBd0IsNEJBQTRCLDhCQUE4QixHQUFHLHlCQUF5QiwrQkFBK0IsR0FBRyw0QkFBNEIsbUJBQW1CLG9CQUFvQixtQkFBbUIsa0NBQWtDLGtDQUFrQyxvQkFBb0IsNkJBQTZCLGVBQWUsR0FBRywrQ0FBK0MsbUJBQW1CLG1CQUFtQixpQ0FBaUMsR0FBRyw4Q0FBOEMsMENBQTBDLEdBQUcsMENBQTBDLHFCQUFxQixtQkFBbUIsS0FBSyx3QkFBd0Isc0JBQXNCLEtBQUssd0JBQXdCLHNCQUFzQixLQUFLLG9DQUFvQywrQkFBK0Isa0RBQWtELDRCQUE0QixLQUFLLCtCQUErQix1QkFBdUIsb0JBQW9CLDBCQUEwQiw4QkFBOEIsZ0NBQWdDLEtBQUssR0FBRyxPQUFPLGdJQUFnSSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssdURBQXVELHNCQUFzQixrQkFBa0IseUJBQXlCLHFCQUFxQixvQkFBb0IsNkJBQTZCLGNBQWMseUJBQXlCLEtBQUsscUJBQXFCLHVCQUF1QixvQkFBb0IsMEJBQTBCLDhCQUE4QixnQ0FBZ0MsS0FBSyxrQkFBa0IsaUNBQWlDLEtBQUssb0JBQW9CLHFCQUFxQixzQkFBc0IscUJBQXFCLG9DQUFvQyxvQ0FBb0Msc0JBQXNCLDhCQUE4QixnQkFBZ0IsaUJBQWlCLHVCQUF1Qix1QkFBdUIsbUNBQW1DLGdDQUFnQyxPQUFPLGdCQUFnQiw4Q0FBOEMsT0FBTyxLQUFLLGlEQUFpRCxlQUFlLHFCQUFxQixZQUFZLDBCQUEwQixTQUFTLFdBQVcsMEJBQTBCLFNBQVMsT0FBTyxzQkFBc0IsZ0JBQWdCLGtDQUFrQyxzREFBc0Qsd0NBQXdDLE9BQU8sbUJBQW1CLHlCQUF5QixzQkFBc0IsNEJBQTRCLGdDQUFnQyxrQ0FBa0MsT0FBTyxjQUFjLEdBQUc7QUFDajJHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy41YzE0OGQ2NzExM2JlMWIzYTBhYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLk5hdl9uYXZfXzJZOUluIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICMzNTM2Mzg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDMgMTtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG59XFxuXFxuLk5hdl9uYXZfd3JhcHBlcl9fMXA4VGUge1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uTmF2X2N1cnJlbnRfX3hmcE9qIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4uTmF2X25hdl9idXR0b25fXzM0VEhYIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICMzNTM2Mzg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgZmxleC1iYXNpczogMzAlO1xcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluO1xcbiAgb3V0bGluZTogMDtcXG59XFxuLk5hdl9uYXZfYnV0dG9uX18zNFRIWCAuTmF2X25hdl9saW5rX18xNTkwZCB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGNvbG9yOiAjMzUzNjM4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHcmFuZCBIb3RlbFxcXCI7XFxufVxcbi5OYXZfbmF2X2J1dHRvbl9fMzRUSFggLk5hdl9jdXJyZW50X194ZnBPaiB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAhaW1wb3J0YW50O1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xcbiAgLk5hdl9uYXZfXzJZOUluIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgfVxcbiAgLk5hdl9uYXZfXzJZOUluIGgxIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgfVxcbiAgLk5hdl9uYXZfXzJZOUluIGgyIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgfVxcblxcbiAgLk5hdl9uYXZfYnV0dG9uX18zNFRIWDpob3ZlciB7XFxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbjtcXG4gICAgLS10ZXh0LXNoYWRvdzogNXB4IDJweCAxMHB4IHJnYig5MywgOTMsIDkzKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgfVxcblxcbiAgLk5hdl9uYXZfd3JhcHBlcl9fMXA4VGUge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IHNwYWNlLWFyb3VuZDtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQzovVXNlcnMvU3RldmVuRGV2L0RvY3VtZW50cy9naXQvTWhvbWVwYWdlL3dlYi9Db21wb25lbnRzL05hdi5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLDBCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsVUFBQTtBQUNGO0FBQUU7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0FBRUo7QUFDRTtFQUNFLHFDQUFBO0FBQ0o7O0FBSUE7RUFFRTtJQUNFLFlBQUE7RUFGRjtFQUdFO0lBQ0UsZUFBQTtFQURKO0VBR0U7SUFDRSxlQUFBO0VBREo7O0VBTUU7SUFDRSx3QkFBQTtJQUNBLDJDQUFBO0lBQ0EscUJBQUE7RUFISjs7RUFNQTtJQUNFLGdCQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7SUFDQSx5QkFBQTtFQUhGO0FBQ0ZcIixcImZpbGVcIjpcIk5hdi5tb2R1bGUuc2Nzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubmF2e1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogIzM1MzYzODtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZmxleDogMztcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdl93cmFwcGVye1xcclxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uY3VycmVudCB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdl9idXR0b257XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiAjMzUzNjM4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIGZsZXgtYmFzaXM6IDMwJTtcXHJcXG4gIHRyYW5zaXRpb246IC4zcyBlYXNlLWluO1xcclxcbiAgb3V0bGluZTowO1xcclxcbiAgLm5hdl9saW5rIHtcXHJcXG4gICAgZm9udC1zaXplOiAyZW07XFxyXFxuICAgIGNvbG9yOiAjMzUzNjM4O1xcclxcbiAgICBmb250LWZhbWlseTogJ0dyYW5kIEhvdGVsJztcXHJcXG4gICAgLy90ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICB9XFxyXFxuICAuY3VycmVudCB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICFpbXBvcnRhbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KXtcXHJcXG5cXHJcXG4gIC5uYXZ7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICAgaDEge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgfVxcclxcbiAgICBoMntcXHJcXG4gICAgICBmb250LXNpemU6IDNyZW07XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXZfYnV0dG9ue1xcclxcbiAgICAmOmhvdmVye1xcclxcbiAgICAgIHRyYW5zaXRpb246IC4zcyBlYXNlLWluO1xcclxcbiAgICAgIC0tdGV4dC1zaGFkb3c6IDVweCAycHggMTBweCByZ2IoOTMsIDkzLCA5Myk7XFxyXFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpXFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIC5uYXZfd3JhcHBlcntcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBzcGFjZS1hcm91bmQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuIFxcclxcbn1cIl19XSk7XG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJuYXZcIjogXCJOYXZfbmF2X18yWTlJblwiLFxuXHRcIm5hdl93cmFwcGVyXCI6IFwiTmF2X25hdl93cmFwcGVyX18xcDhUZVwiLFxuXHRcImN1cnJlbnRcIjogXCJOYXZfY3VycmVudF9feGZwT2pcIixcblx0XCJuYXZfYnV0dG9uXCI6IFwiTmF2X25hdl9idXR0b25fXzM0VEhYXCIsXG5cdFwibmF2X2xpbmtcIjogXCJOYXZfbmF2X2xpbmtfXzE1OTBkXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwic291cmNlUm9vdCI6IiJ9