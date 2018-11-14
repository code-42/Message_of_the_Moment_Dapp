import Web3 from "web3";

const contract_address = "0x7016B1a2d5F5BC5107161Ef111D06dfd09843Ba5";
const abi = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_maxLength",
                "type": "uint256"
            }
        ],
        "name": "setMaxLength",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_message",
                "type": "string"
            }
        ],
        "name": "setMessage",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "isOwner",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "maxLength",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "message",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];

// Metamask automatically injects an object named web3 
// to the page before the load event completes.
// if the web3 object is not found, it is because 
// the user does not have Metamask installed
let contract;
let my_web3;
let account;

// infura is the Ethereum node we are reading from
const rpcUrl = "https://ropsten.infura.io";

window.addEventListener('load', () => {
    if(typeof(web3) === 'undefined') {
        // return console.log("Metamask is not installed.");
        // enables read-only support for visitors without Metamask or an Ethereum account
        my_web3 = new Web3(new Web3.providers.HttpProvider(rpcUrl));
    } else {
        my_web3 = new Web3(web3.currentProvider);    
    }

    contract = my_web3.eth.contract(abi).at(contract_address);

    // callback function to read message if it exists
    contract.message.call((error, result) => {
        if(error) {
            return console.log(error);
        }
        $('#message').text(result);
    });

    // attach the buttons event handler to function setMessage()
    $('#set_message').click(setMessage);
});

// the setMessage function for the form to call
function setMessage() {
    let message = $('#new_message').val();
    contract.setMessage.sendTransaction(
        message, 
        {gasPrice: my_web3.toWei(4.1, 'Gwei')}, 
        (error, result) => {
            if(error) {
                return console.log(error);
            }
            console.log("txhash: " + result); 
        }
    );
}

// get a transaction recipt
// https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethgettransactionreceipt
// https://github.com/ethereum/wiki/wiki/JavaScript-API#using-callbacks
// var receipt = web3.eth.getTransactionReceipt(result);
// console.log(receipt);
