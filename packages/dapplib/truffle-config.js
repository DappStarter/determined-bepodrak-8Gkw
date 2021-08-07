require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good close bone tooth story rescue night mad give clog bridge silly'; 
let testAccounts = [
"0x53b264fea2d677c718cb484f654292e5fc5e0994c7d9b8afa9310dd24ae8bd70",
"0x9ac0f587649fea91c6e69eceffd93e90301c9b11d86a112eb9aa2ded6b14c648",
"0x4558ca71bee2263dac1aa47ea1a15cbfd40df0a8d6c16e1ef007564df181aae0",
"0x0e538181ba96c3ec308a2021904695b42ae0ee488d1577bd9da907d9a3d5fa8e",
"0x80f4c59daa2001b2058d0df66d5735e456a71894b50a5b3d978e18a157709f4d",
"0xe7e092e43fb4e07d72af96844dc5bc18866ac4d20cd8a079070441fd5273315c",
"0x81fdcde598648fe1858a74aa5a83c29206b9d2161d529228cc8bd7db968895f0",
"0x10f6ca7e244b10ec4349ff050d753c93db492769c02443bd9fef798ed93c7ff4",
"0x2539edd6acdc16930148eb3e9200f8ce8b650d225a3e24023035879c1aa84e81",
"0x15a8b9210d5f476418efc4bf4e15792264f1e4afe59e2ef463fd5f8643fc29c5"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

