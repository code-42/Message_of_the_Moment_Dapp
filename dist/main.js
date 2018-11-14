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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const contract_address = \"0x7016B1a2d5F5BC5107161Ef111D06dfd09843Ba5\";\nconst abi = [\n    {\n        \"anonymous\": false,\n        \"inputs\": [\n            {\n                \"indexed\": true,\n                \"name\": \"previousOwner\",\n                \"type\": \"address\"\n            },\n            {\n                \"indexed\": true,\n                \"name\": \"newOwner\",\n                \"type\": \"address\"\n            }\n        ],\n        \"name\": \"OwnershipTransferred\",\n        \"type\": \"event\"\n    },\n    {\n        \"constant\": false,\n        \"inputs\": [],\n        \"name\": \"renounceOwnership\",\n        \"outputs\": [],\n        \"payable\": false,\n        \"stateMutability\": \"nonpayable\",\n        \"type\": \"function\"\n    },\n    {\n        \"constant\": false,\n        \"inputs\": [\n            {\n                \"name\": \"_maxLength\",\n                \"type\": \"uint256\"\n            }\n        ],\n        \"name\": \"setMaxLength\",\n        \"outputs\": [],\n        \"payable\": false,\n        \"stateMutability\": \"nonpayable\",\n        \"type\": \"function\"\n    },\n    {\n        \"constant\": false,\n        \"inputs\": [\n            {\n                \"name\": \"_message\",\n                \"type\": \"string\"\n            }\n        ],\n        \"name\": \"setMessage\",\n        \"outputs\": [],\n        \"payable\": false,\n        \"stateMutability\": \"nonpayable\",\n        \"type\": \"function\"\n    },\n    {\n        \"constant\": false,\n        \"inputs\": [\n            {\n                \"name\": \"newOwner\",\n                \"type\": \"address\"\n            }\n        ],\n        \"name\": \"transferOwnership\",\n        \"outputs\": [],\n        \"payable\": false,\n        \"stateMutability\": \"nonpayable\",\n        \"type\": \"function\"\n    },\n    {\n        \"inputs\": [],\n        \"payable\": false,\n        \"stateMutability\": \"nonpayable\",\n        \"type\": \"constructor\"\n    },\n    {\n        \"constant\": true,\n        \"inputs\": [],\n        \"name\": \"isOwner\",\n        \"outputs\": [\n            {\n                \"name\": \"\",\n                \"type\": \"bool\"\n            }\n        ],\n        \"payable\": false,\n        \"stateMutability\": \"view\",\n        \"type\": \"function\"\n    },\n    {\n        \"constant\": true,\n        \"inputs\": [],\n        \"name\": \"maxLength\",\n        \"outputs\": [\n            {\n                \"name\": \"\",\n                \"type\": \"uint256\"\n            }\n        ],\n        \"payable\": false,\n        \"stateMutability\": \"view\",\n        \"type\": \"function\"\n    },\n    {\n        \"constant\": true,\n        \"inputs\": [],\n        \"name\": \"message\",\n        \"outputs\": [\n            {\n                \"name\": \"\",\n                \"type\": \"string\"\n            }\n        ],\n        \"payable\": false,\n        \"stateMutability\": \"view\",\n        \"type\": \"function\"\n    },\n    {\n        \"constant\": true,\n        \"inputs\": [],\n        \"name\": \"owner\",\n        \"outputs\": [\n            {\n                \"name\": \"\",\n                \"type\": \"address\"\n            }\n        ],\n        \"payable\": false,\n        \"stateMutability\": \"view\",\n        \"type\": \"function\"\n    }\n];\n\n// Metamask automatically injects an object named web3 \n// to the page before the load event completes.\n// if the web3 object is not found, it is because \n// the user does not have Metamask installed\nlet contract;\nwindow.addEventListener('load', () => {\n    if(typeof(web3) === 'undefined') {\n        return console.log(\"Metamask is not installed.\");\n    }\n    contract = web3.eth.contract(abi).at(contract_address);\n\n    // callback function to read message if it exists\n    contract.message.call((error, result) => {\n        if(error) {\n            return console.log(error);\n        }\n        $('#message').text(result);\n    });\n\n    // attach the buttons event handler to function setMessage()\n    $('#set_message').click(setMessage);\n});\n\n// the setMessage function for the form to call\nfunction setMessage() {\n    let message = $('#new_message').val();\n    contract.setMessage.sendTransaction(\n        message, \n        {gasPrice: web3.toWei(4.1, 'Gwei')}, \n        (error, result) => {\n            if(error) {\n                return console.log(error);\n            }\n            console.log(\"txhash: \" + result); \n        }\n    );\n}\n\n// get a transaction recipt\n// https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethgettransactionreceipt\n// https://github.com/ethereum/wiki/wiki/JavaScript-API#using-callbacks\n// var receipt = web3.eth.getTransactionReceipt(result);\n// console.log(receipt);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });