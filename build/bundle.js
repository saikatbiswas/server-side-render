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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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
var types = exports.types = {
    GET_USER_REQUEST: 'get-user-request',
    GET_USER_SUCCESS: 'get-user-success'
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@babel/polyfill");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(7);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

var _express = __webpack_require__(8);

var _express2 = _interopRequireDefault(_express);

var _renderer = __webpack_require__(9);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(15);

var _createStore2 = _interopRequireDefault(_createStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static('public'));

app.get('*', function (req, res) {
    var store = (0, _createStore2.default)();

    res.send((0, _renderer2.default)(req, store));
});

app.listen(3000, function () {
    console.log('Listing on port 3000 ');
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(10);

var _reactRouterDom = __webpack_require__(3);

var _reactRedux = __webpack_require__(11);

var _Routes = __webpack_require__(12);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store) {
    var content = (0, _server.renderToString)(
    // store.runSaga(rootSaga).done.then(()=>{
    _react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
            _reactRouterDom.StaticRouter,
            { context: {}, location: req.path },
            _react2.default.createElement(_Routes2.default, null)
        )
    )
    // })
    );

    return "\n        <html>\n            <head></head>\n            <body>\n                <div id=\"root\">" + content + "</div>\n                <!-- no need to pul /public/bundle.js beacause app.use(express.static('public')) -->\n                <script src=\"bundle.js\"></script>\n            </body>\n        </html>\n    ";
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

var _Home = __webpack_require__(13);

var _Home2 = _interopRequireDefault(_Home);

var _UsersList = __webpack_require__(14);

var _UsersList2 = _interopRequireDefault(_UsersList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/users', component: _UsersList2.default })
    );
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            null,
            'Home component'
        ),
        _react2.default.createElement(
            'button',
            { onClick: function onClick() {
                    return console.log('hi i am');
                } },
            'Press me'
        )
    );
};

exports.default = Home;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: D:/xampp/htdocs/server-side-render/src/client/components/UsersList.js: Missing class properties transform.\n\n\u001b[0m \u001b[90m  9 | \u001b[39m        \u001b[90m// this.props.getUserRequest();\u001b[39m\n \u001b[90m 10 | \u001b[39m    }\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 11 | \u001b[39m    renderUsers \u001b[33m=\u001b[39m () \u001b[33m=>\u001b[39m {\n \u001b[90m    | \u001b[39m    \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 12 | \u001b[39m        \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mprops\u001b[33m.\u001b[39musers\u001b[33m.\u001b[39mmap((user)\u001b[33m=>\u001b[39m(\n \u001b[90m 13 | \u001b[39m            \u001b[33m<\u001b[39m\u001b[33mli\u001b[39m key\u001b[33m=\u001b[39m{user\u001b[33m.\u001b[39mid}\u001b[33m>\u001b[39m{user\u001b[33m.\u001b[39mname}\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mli\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m 14 | \u001b[39m        ))\u001b[33m;\u001b[39m\u001b[0m\n");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(4);

var _reduxSaga = __webpack_require__(16);

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _reducers = __webpack_require__(17);

var _reducers2 = _interopRequireDefault(_reducers);

var _sagas = __webpack_require__(19);

var _sagas2 = _interopRequireDefault(_sagas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    // const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    var sagaMiddleware = (0, _reduxSaga2.default)();
    // const enhancer = composeEnhancers(
    //     applyMiddleware(sagaMiddleware)
    // );

    var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(sagaMiddleware));

    // const store = createStore(reducers, enhancer);
    sagaMiddleware.run(_sagas2.default);

    return store;
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(4);

var _users = __webpack_require__(18);

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
    users: _users2.default
});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = users;

var _types = __webpack_require__(1);

var INITIAL_STATE = {
    users: [],
    error: ''
};

function users() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
    var action = arguments[1];

    switch (action.type) {
        case _types.types.GET_USER_REQUEST:
            return _extends({}, state, {
                users: action.payload
            });

        default:
            return state;
    }
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = rootSaga;

var _users = __webpack_require__(20);

var _users2 = _interopRequireDefault(_users);

var _effects = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(rootSaga);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function rootSaga() {
    return regeneratorRuntime.wrap(function rootSaga$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return (0, _effects.all)([].concat(_toConsumableArray(_users2.default)));

                case 2:
                case "end":
                    return _context.stop();
            }
        }
    }, _marked, this);
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _effects = __webpack_require__(5);

var _types = __webpack_require__(1);

var _users = __webpack_require__(21);

var actions = _interopRequireWildcard(_users);

var _users2 = __webpack_require__(22);

var api = _interopRequireWildcard(_users2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(userRequest),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(watchUsersRequest);

function userRequest() {
    var users;
    return regeneratorRuntime.wrap(function userRequest$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return (0, _effects.call)(api.getUser);

                case 2:
                    users = _context.sent;
                    _context.next = 5;
                    return (0, _effects.put)(actions.getUserSuccess({
                        users: users.data
                    }));

                case 5:
                case "end":
                    return _context.stop();
            }
        }
    }, _marked, this);
}

function watchUsersRequest() {
    return regeneratorRuntime.wrap(function watchUsersRequest$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    _context2.next = 2;
                    return (0, _effects.takeLatest)(_types.types.GET_USER_REQUEST, userRequest);

                case 2:
                case "end":
                    return _context2.stop();
            }
        }
    }, _marked2, this);
}

var usersSagas = [(0, _effects.fork)(watchUsersRequest)];

exports.default = usersSagas;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getUserSuccess = exports.getUserRequest = undefined;

var _types = __webpack_require__(1);

var getUserRequest = exports.getUserRequest = function getUserRequest() {
    return {
        type: _types.types.GET_USER_REQUEST
    };
};
var getUserSuccess = exports.getUserSuccess = function getUserSuccess(_ref) {
    var users = _ref.users;
    return {
        type: _types.types.GET_USER_SUCCESS,
        payload: users
    };
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getUser = undefined;

var _axios = __webpack_require__(23);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_axios2.default.defaults.baseURL = 'http://react-ssr-api.herokuapp.com';

var getUser = exports.getUser = function getUser() {
    return _axios2.default.get("/users");
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })
/******/ ]);