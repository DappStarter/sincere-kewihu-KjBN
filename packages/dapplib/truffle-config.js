require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note pulse puzzle harvest dry equal gas'; 
let testAccounts = [
"0x62937c242c1396d77a28afa5baaeec975790924438e6848678e37314f1788c0a",
"0xb9356307dcbdf2496ba6ad2b4bd204ebc1a82602181522f28210d4f44b501261",
"0xe37542716ea385ff441c678ef2016cf51992e70b0637cc028a90a6ba7cb54bc4",
"0x883bde4c4ace056c4a36dec1f748d5d4b6e4581a657c346c9343daf0e127b67a",
"0xcaab9669e5cdd1c0550b56639f85da715ef9ef83b9b09e75cfd8346672ed0151",
"0x518eb2ba26196ccda1cba79ffe9e6ae4977e33abf1c4ec41a56278e4b5dcf1fd",
"0xa5210772c71c3fc0f85339da692260c4dd290bbbcaf44df0f6b5c5d061785dd0",
"0x2687eff7e0c86042d9266c2770cc6e3bdf945980202b778abde57b6c1dc7dd03",
"0x7f73106dbb8a053c1e3531f1800dcb942118379c71127f8083418dc5264e4426",
"0x045009338e29c4c5432c1887367f8e67a75392c001bd3cbc1b18d557059802c1"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


