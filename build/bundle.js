/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllAddress = exports.FETCH_ADMINS = exports.userSignOut = exports.USER_SIGN_OUT = exports.fetchCurrentUser = exports.FETCH_CURRENT_USER = exports.getUserLogin = exports.USER_LOGIN = exports.fetchUsers = exports.FETCH_USERS = undefined;

var _reactCookies = __webpack_require__(14);

var _reactCookies2 = _interopRequireDefault(_reactCookies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH_USERS = exports.FETCH_USERS = 'fetch_users';
var fetchUsers = exports.fetchUsers = function fetchUsers() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return api.get('/products/all');

            case 3:
              res = _context.sent;

              // const res = await api.get('/users');

              // console.log('res', res);

              dispatch({
                type: FETCH_USERS,
                payload: res
              });

              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context['catch'](0);

              console.log(_context.t0);

            case 10:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 7]]);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};

var USER_LOGIN = exports.USER_LOGIN = 'user_login';
var getUserLogin = exports.getUserLogin = function getUserLogin(data) {
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {
      var user;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return api.post('/auth/signin', {
                userid: data.email,
                password: data.password
              });

            case 3:
              user = _context2.sent;


              dispatch({
                type: USER_LOGIN,
                payload: user.data
              });
              _context2.next = 9;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2['catch'](0);

            case 9:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[0, 7]]);
    }));

    return function (_x4, _x5, _x6) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = 'fetch_current_user';
var fetchCurrentUser = exports.fetchCurrentUser = function fetchCurrentUser() {
  return function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return api.get('/auth/isAuth');

            case 3:
              res = _context3.sent;


              // console.log('111111');
              // console.log(res);

              dispatch({
                type: FETCH_CURRENT_USER,
                payload: res
              });

              _context3.next = 9;
              break;

            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3['catch'](0);

            case 9:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined, [[0, 7]]);
    }));

    return function (_x7, _x8, _x9) {
      return _ref3.apply(this, arguments);
    };
  }();
};

var USER_SIGN_OUT = exports.USER_SIGN_OUT = 'user_sign_out';
var userSignOut = exports.userSignOut = function userSignOut() {
  return function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(dispatch, getState, api) {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              try {

                console.log('1111111111111');

                _reactCookies2.default.remove('x-access-token', { path: '/' });

                dispatch({
                  type: USER_SIGN_OUT
                });
              } catch (error) {}

            case 1:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined);
    }));

    return function (_x10, _x11, _x12) {
      return _ref4.apply(this, arguments);
    };
  }();
};

var FETCH_ADMINS = exports.FETCH_ADMINS = 'fetch_admins';
var getAllAddress = exports.getAllAddress = function getAllAddress(id) {
  return function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return api.get('/address/all');

            case 3:
              res = _context5.sent;


              dispatch({
                type: FETCH_ADMINS,
                payload: res.data
              });

              _context5.next = 9;
              break;

            case 7:
              _context5.prev = 7;
              _context5.t0 = _context5['catch'](0);

            case 9:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, undefined, [[0, 7]]);
    }));

    return function (_x13, _x14, _x15) {
      return _ref5.apply(this, arguments);
    };
  }();
};

// export const FETCH_ADMINS = 'fetch_admins';
// export const fetchAdmins = () => async (dispatch, getState, api) => {
//   const res = await api.get('/admins');

//   dispatch({
//     type: FETCH_ADMINS,
//     payload: res
//   });
// };

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
// import UsersPage, { loadData } from './pages/UsersPage';


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(12);

var _App2 = _interopRequireDefault(_App);

var _HomePage = __webpack_require__(15);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _UsersPage = __webpack_require__(16);

var _UsersPage2 = _interopRequireDefault(_UsersPage);

var _NotFoundPage = __webpack_require__(17);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

var _LoginPage = __webpack_require__(18);

var _LoginPage2 = _interopRequireDefault(_LoginPage);

var _AdminPage = __webpack_require__(19);

var _AdminPage2 = _interopRequireDefault(_AdminPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [
// Now we have to nested theose pages inside App
_extends({}, _App2.default, {
    routes: [_extends({}, _HomePage2.default, {
        path: "/",
        // component: HomePage,  we use spread operator for this and component export as an object
        exact: true
    }), _extends({}, _UsersPage2.default, {
        path: "/users"
        // loadData, we use spread operator for this and component export as an object
        // component: UsersPage  we use spread operator for this and component export as an object
    }), _extends({}, _AdminPage2.default, {
        path: "/admins"
    }), _extends({}, _LoginPage2.default, {
        path: "/login"
    }), _extends({}, _NotFoundPage2.default)]
})];

// () => {
//     return(
//         <div>
//             <Route exact path="/" component={Home} />
//             <Route path="/users" component={UsersList} />
//         </div>
//     );
// };

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(8);

var _express = __webpack_require__(9);

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(3);

var _expressHttpProxy = __webpack_require__(10);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _cookieParser = __webpack_require__(11);

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _Routes = __webpack_require__(4);

var _Routes2 = _interopRequireDefault(_Routes);

var _renderer = __webpack_require__(20);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(23);

var _createStore2 = _interopRequireDefault(_createStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
// import React from 'react';


app.use((0, _cookieParser2.default)());

app.use(_express2.default.static('public'));

// Brawser any call from /api it will send to the "https://react-ssr-api.herokuapp.com or http://localhost:3001/api" server.
app.use('/api',
// proxy('https://react-ssr-api.herokuapp.com'
// , {

// , {
// This option is only for this project
// proxyReqOptDecorator(opts) {
//   // https://
//   opts.headers['x-forwarded-host'] = 'localhost:3000';
//   return opts;
// }
// }
// )
(0, _expressHttpProxy2.default)('http://localhost:3001/api'));

app.get('*', function (req, res) {
    var store = (0, _createStore2.default)(req);

    // console.log(matchRoutes(Routes, req.path));
    var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
        var route = _ref.route;

        return route.loadData ? route.loadData(store) : null;
    });

    Promise.all(promises).then(function () {

        var context = {};
        var content = (0, _renderer2.default)(req, store, context);

        if (context.notFound) {
            res.status(404);
        }

        res.send(content);
    });

    // Promise.all(promises).then(()=>{
    //     res.send(renderer(req, store));
    // });

});

app.listen(3000, function () {
    console.log('Listing on port 3000 ');
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(3);

var _Header = __webpack_require__(13);

var _Header2 = _interopRequireDefault(_Header);

var _users_actions = __webpack_require__(1);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, App);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.logoutHandler = function () {
            console.log('hi');
            _this.props.dispatch((0, _users_actions.userSignOut)()).then(function (response) {
                _this.props.history.push('/');
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(App, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            // this.props.fetchCurrentUser();

        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(_Header2.default, { onLogout: this.logoutHandler }),
                (0, _reactRouterConfig.renderRoutes)(this.props.route.routes)
            );
        }
    }]);

    return App;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        auth: state.auth
    };
};

exports.default = {
    // component: App,
    component: (0, _reactRedux.connect)(mapStateToProps)(App),
    loadData: function loadData(_ref2) {
        var dispatch = _ref2.dispatch;
        return dispatch((0, _users_actions.fetchCurrentUser)(), (0, _users_actions.userSignOut)());
    }
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(5);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            // console.log(this.props.auth)

            var authButton = this.props.auth ? _react2.default.createElement(
                "div",
                {
                    style: {
                        cursor: 'pointer'
                    },
                    onClick: this.props.onLogout
                },
                "Logout"
            ) : _react2.default.createElement(
                _reactRouterDom.Link,
                { to: "/login" },
                "Login"
            );

            return _react2.default.createElement(
                "nav",
                null,
                _react2.default.createElement(
                    "div",
                    { className: "nav-wrapper" },
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: "/", className: "brand-logo", style: { marginLeft: '20px' } },
                        "SSR React"
                    ),
                    _react2.default.createElement(
                        "ul",
                        { className: "right", style: { marginRight: '20px' } },
                        _react2.default.createElement(
                            "li",
                            null,
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: "/users" },
                                "Users"
                            )
                        ),
                        _react2.default.createElement(
                            "li",
                            null,
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: "/admins" },
                                "Admins"
                            )
                        ),
                        _react2.default.createElement(
                            "li",
                            null,
                            authButton
                        )
                    )
                )
            );
        }
    }]);

    return Header;
}(_react.Component);

var mapStateToProps = function mapStateToProps(_ref) {
    var auth = _ref.auth;

    return { auth: auth };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Header);

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-cookies");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomePage = function HomePage() {
    return _react2.default.createElement(
        'div',
        { className: 'center-align', style: { marginTop: '200px' } },
        _react2.default.createElement(
            'h3',
            null,
            'Welocome'
        ),
        _react2.default.createElement(
            'p',
            null,
            'React server side app'
        )
    );
};

exports.default = {
    component: HomePage
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _users_actions = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UsersPage = function (_Component) {
    _inherits(UsersPage, _Component);

    function UsersPage() {
        _classCallCheck(this, UsersPage);

        return _possibleConstructorReturn(this, (UsersPage.__proto__ || Object.getPrototypeOf(UsersPage)).apply(this, arguments));
    }

    _createClass(UsersPage, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.props.fetchUsers();
        }
    }, {
        key: "renderUsers",
        value: function renderUsers() {
            return this.props.users.map(function (user) {
                return _react2.default.createElement(
                    "li",
                    { key: user._id },
                    user.name
                );
            });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                this.props.users ? _react2.default.createElement(
                    "ul",
                    null,
                    this.renderUsers()
                ) : null
            );
        }
    }]);

    return UsersPage;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        users: state.users
    };
};

var loadData = function loadData(store) {
    // console.log(store.dispatch(fetchUsers()));

    return store.dispatch((0, _users_actions.fetchUsers)());
};

exports.default = {
    loadData: loadData,
    component: (0, _reactRedux.connect)(mapStateToProps, { fetchUsers: _users_actions.fetchUsers })(UsersPage)
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFoundPage = function NotFoundPage(_ref) {
    var _ref$staticContext = _ref.staticContext,
        staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;

    staticContext.notFound = true;
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h1',
            null,
            'Ooop! Route not found'
        )
    );
};

exports.default = {
    component: NotFoundPage
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _users_actions = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginPage = function (_Component) {
    _inherits(LoginPage, _Component);

    function LoginPage(props) {
        _classCallCheck(this, LoginPage);

        var _this = _possibleConstructorReturn(this, (LoginPage.__proto__ || Object.getPrototypeOf(LoginPage)).call(this, props));

        _this.submitForm = function (event) {
            event.preventDefault();
            // this.props.getUserLogin(this.state).then((res)=>{
            //     console.log(res);
            // });
            // this.props.dispatch(getUserLogin(this.state)).then((res)=>{
            //     console.log(res);
            // });

            _this.props.getUserLogin(_this.state).then(function (res) {
                if (_this.props.auth) {
                    _this.props.history.push('/');
                }
            });
        };

        _this.state = {
            email: '',
            password: ''
        };
        return _this;
    }

    _createClass(LoginPage, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            // console.log('this',this)

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'form',
                    { onSubmit: function onSubmit(event) {
                            return _this2.submitForm(event);
                        } },
                    _react2.default.createElement('input', { type: 'email', onChange: function onChange(event) {
                            return _this2.setState({ email: event.target.value });
                        } }),
                    _react2.default.createElement('input', { type: 'password', onChange: function onChange(event) {
                            return _this2.setState({ password: event.target.value });
                        } }),
                    _react2.default.createElement(
                        'button',
                        { onClick: function onClick(event) {
                                return _this2.submitForm(event);
                            }, 'data-test': 'login-submit-component' },
                        'Login'
                    )
                )
            );
        }
    }]);

    return LoginPage;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        auth: state.auth
    };
};

exports.default = {
    component: (0, _reactRedux.connect)(mapStateToProps, { getUserLogin: _users_actions.getUserLogin })(LoginPage)
    // component: connect(mapStateToProps)(LoginPage)
    // loadData: ({ dispatch }) => dispatch(getUserLogin(this.state))
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _users_actions = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdminPage = function (_Component) {
    _inherits(AdminPage, _Component);

    function AdminPage() {
        _classCallCheck(this, AdminPage);

        return _possibleConstructorReturn(this, (AdminPage.__proto__ || Object.getPrototypeOf(AdminPage)).apply(this, arguments));
    }

    _createClass(AdminPage, [{
        key: "componentDidMount",
        value: function componentDidMount() {

            this.props.getAllAddress();
            // console.log('prop',this)
        }
    }, {
        key: "renderUsers",
        value: function renderUsers() {
            return this.props.admin.map(function (user) {
                return _react2.default.createElement(
                    "li",
                    { key: user._id },
                    user.fullname
                );
            });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                this.props.admin && this.props.admin.length > 0 ? _react2.default.createElement(
                    "ul",
                    null,
                    this.renderUsers()
                ) : null
            );
        }
    }]);

    return AdminPage;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        admin: state.admin,
        auth: state.auth
    };
};

exports.default = {
    component: (0, _reactRedux.connect)(mapStateToProps, { getAllAddress: _users_actions.getAllAddress })(AdminPage),
    loadData: function loadData(_ref) {
        var dispatch = _ref.dispatch;
        return dispatch((0, _users_actions.getAllAddress)());
    }
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(21);

var _reactRouterDom = __webpack_require__(5);

var _reactRedux = __webpack_require__(2);

var _reactRouterConfig = __webpack_require__(3);

var _serializeJavascript = __webpack_require__(22);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _Routes = __webpack_require__(4);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import rootSaga from "../client/store/sagas"; 


exports.default = function (req, store, context) {
    var content = (0, _server.renderToString)(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
            _reactRouterDom.StaticRouter,
            { context: context, location: req.path },
            _react2.default.createElement(
                "div",
                null,
                (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
            )
        )
    ));

    return "\n        <html>\n            <head>\n                <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\">\n            </head>\n            <body>\n                <div id=\"root\">" + content + "</div>\n                <!-- no need to pul /public/bundle.js beacause app.use(express.static('public')) -->\n                <script>\n                    window.INITIAL_STATE = " + (0, _serializeJavascript2.default)(store.getState()) + "\n                </script>\n                <script src=\"bundle.js\"></script>\n            </body>\n        </html>\n    ";
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(6);

var _reduxThunk = __webpack_require__(24);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(25);

var _axios2 = _interopRequireDefault(_axios);

var _reducers = __webpack_require__(26);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
  console.log('cook', req.cookies['x-access-token']);
  _axios2.default.defaults.headers.post['Content-Type'] = 'application/json';
  var axiosInstance = _axios2.default.create({
    // baseURL: 'http://react-ssr-api.herokuapp.com',
    baseURL: 'http://localhost:3001/api',
    // headers: { cookie: req.get('cookie') || '' }
    headers: { 'Authorization': 'Bearer ' + req.cookies['x-access-token'] || '' }
  });

  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));

  return store;
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(6);

var _users_reducers = __webpack_require__(27);

var _users_reducers2 = _interopRequireDefault(_users_reducers);

var _auth_reducer = __webpack_require__(28);

var _auth_reducer2 = _interopRequireDefault(_auth_reducer);

var _admin_reducer = __webpack_require__(29);

var _admin_reducer2 = _interopRequireDefault(_admin_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import login from "./login_reducer";

exports.default = (0, _redux.combineReducers)({
    users: _users_reducers2.default,
    auth: _auth_reducer2.default,
    admin: _admin_reducer2.default
    // login
});

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _users_actions = __webpack_require__(1);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _users_actions.FETCH_USERS:
      return action.payload.data;
    default:
      return state;
  }
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments[1];

  switch (action.type) {
    case _users_actions.FETCH_CURRENT_USER:
      return action.payload.data || false;
    case _users_actions.USER_LOGIN:
      return action.payload.user;
    case _users_actions.USER_SIGN_OUT:
      return null;
    default:
      return state;
  }
};

var _users_actions = __webpack_require__(1);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case _users_actions.FETCH_ADMINS:
      return action.payload;
    default:
      return state;
  }
};

var _users_actions = __webpack_require__(1);

/***/ })
/******/ ]);