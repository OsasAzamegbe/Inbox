// compile code will go here
const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const sourceCode = fs.readFileSync(inboxPath, 'utf-8');
const compilerInput = {
    language: 'Solidity',
    sources: {
        'Inbox.sol': {
            content: sourceCode,
        },
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*'],
            },
        },
    },
};

const compiledCode = JSON.parse(solc.compile(JSON.stringify(compilerInput)));
module.exports = compiledCode.contracts['Inbox.sol'].Inbox;