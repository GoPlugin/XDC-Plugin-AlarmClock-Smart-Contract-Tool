/**
 * Network configurations 
 */
const NETWORK_CONFIGURATIONS = {
    /**
     * Configurations for XinFin Apothem Network (TestNet)
     * 
     * Chain Id for Apothem Network is 51. Refer https://howto.xinfin.org/general/networks/#specifications_1 for more information
     */
    51: {
        /**
         * Contract addres of PLI token. 
         */
        TLW_FACTORY_CONTRACT_ADDR:'xdce3c7228fedab6f0db2a2a8425cae2b661f32dfa6',
        PLI_TOKEN_CONTRACT_ADDR:'0x6bca679982acb4c840776d58d4e84f004b0ea2e5',
        ORACLE_CONTRACT_ADDR:'0x94ba4ff82aac4952962e84195ef722f4514133de',
        PLUGIN_JOB_ID:'09aae736dc234fa2b2ffe49e72753be1',
        //PLI_TOKEN_CONTRACT_ADDR: '0x499F9320079C3a5Dd30AF691ea1a88e8c75FDA17',
        /**
         * ABI of PLI token contract
         */
        PLI_TOKEN_ABI: [ { "constant": false, "inputs": [ { "name": "spender", "type": "address" }, { "name": "value", "type": "uint256" } ], "name": "approve", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "type": "function", "stateMutability": "nonpayable" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "type": "function", "stateMutability": "view" }, { "constant": false, "inputs": [ { "name": "from", "type": "address" }, { "name": "to", "type": "address" }, { "name": "value", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "type": "function", "stateMutability": "nonpayable" }, { "constant": false, "inputs": [ { "name": "to", "type": "address" }, { "name": "value", "type": "uint256" }, { "name": "data", "type": "bytes" } ], "name": "transferAndCall", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "type": "function", "stateMutability": "nonpayable" }, { "constant": true, "inputs": [ { "name": "who", "type": "address" } ], "name": "balanceOf", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "type": "function", "stateMutability": "view" }, { "constant": false, "inputs": [ { "name": "to", "type": "address" }, { "name": "value", "type": "uint256" } ], "name": "transfer", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "type": "function", "stateMutability": "nonpayable" }, { "constant": true, "inputs": [ { "name": "owner", "type": "address" }, { "name": "spender", "type": "address" } ], "name": "allowance", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "type": "function", "stateMutability": "view" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }, { "indexed": false, "name": "data", "type": "bytes" } ], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "owner", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" } ], "name": "Approval", "type": "event" } ],
        /**
         * Contract addres of Oracle contract. Refer contracts/Oracle.sol for more info
         */
        //ORACLE_CONTRACT_ADDR: '0xc60Fe49B383Db931D0Ef68Cf1A9aAe7912fAcbd0',
        /**
         * Job Id created in plugin node. Job definition available at plugin/alarm-job.json
         */
        //PLUGIN_JOB_ID: '97bccb8bdc384b88961955f493efe012',
        /**
         * Fee charged by Oracle contract to trigger the plugin job. Value is 0.1 PLI 
         */
        PLUGIN_FEE: 0.1 * 10 ** 18,
        /**
         * Time Locked Wallet factory contract address. Contract reference contracts/TimeLockedContractFactory.sol
         */
        //TLW_FACTORY_CONTRACT_ADDR: '0x2774c572A9b6c2f13d6fbe226f3e30be2E9D01C4',
        /**
         * Time Locked Wallet factory contract ABI
         */
        // TLW_FACTORY_CONTRACT_ABI: [ { "constant": false, "inputs": [ { "name": "receivers", "type": "address[]" }, { "name": "funds", "type": "uint256[]" }, { "name": "oracleContractAddr", "type": "address" }, { "name": "jobId", "type": "bytes32" }, { "name": "link", "type": "address" } ], "name": "newTimeLockedContract", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "payable": false, "stateMutability": "nonpayable", "type": "fallback" }, { "constant": true, "inputs": [ { "name": "user", "type": "address" } ], "name": "getWallets", "outputs": [ { "name": "", "type": "address[]" } ], "payable": false, "stateMutability": "view", "type": "function" } ],
        TLW_FACTORY_CONTRACT_ABI: [ { "constant": true, "inputs": [ { "name": "user", "type": "address" } ], "name": "getWallets", "outputs": [ { "name": "", "type": "address[]" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "receivers", "type": "address[]" }, { "name": "funds", "type": "uint256[]" }, { "name": "oracleContractAddr", "type": "address" }, { "name": "jobId", "type": "bytes32" }, { "name": "link", "type": "address" }, { "name": "linkFee", "type": "uint256" }, { "name": "durationInSeconds", "type": "uint256" } ], "name": "newTimeLockedContract", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "payable": false, "stateMutability": "nonpayable", "type": "fallback" } ],
        /**
         * Time Locked Wallet contract ABI
         */
        // TLW_CONTRACT_ABI: [ { "constant": true, "inputs": [], "name": "info", "outputs": [ { "name": "", "type": "address" }, { "name": "", "type": "address[]" }, { "name": "", "type": "uint256[]" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "durationInSeconds", "type": "uint256" }, { "name": "fee", "type": "uint256" } ], "name": "initiateAlarm", "outputs": [ { "name": "requestId", "type": "bytes32" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_requestId", "type": "bytes32" } ], "name": "releaseFunds", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "name": "sender", "type": "address" }, { "name": "receivers", "type": "address[]" }, { "name": "funds", "type": "uint256[]" }, { "name": "oracleContractAddr", "type": "address" }, { "name": "jobId", "type": "bytes32" }, { "name": "link", "type": "address" }, { "name": "totalXDC", "type": "uint256" } ], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "from", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" } ], "name": "Received", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "receiver", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" } ], "name": "Released", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "id", "type": "bytes32" } ], "name": "pluginRequested", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "id", "type": "bytes32" } ], "name": "pluginFulfilled", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "id", "type": "bytes32" } ], "name": "pluginCancelled", "type": "event" } ]
        TLW_CONTRACT_ABI: [ { "constant": true, "inputs": [], "name": "info", "outputs": [ { "name": "", "type": "address" }, { "name": "", "type": "address[]" }, { "name": "", "type": "uint256[]" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "bool" }, { "name": "", "type": "bool" }, { "name": "", "type": "uint256" }, { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "withdraw", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "sender", "type": "address" }, { "name": "value", "type": "uint256" }, { "name": "data", "type": "bytes" } ], "name": "onTokenTransfer", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_requestId", "type": "bytes32" } ], "name": "releaseFunds", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "initiateAlarm", "outputs": [ { "name": "requestId", "type": "bytes32" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "name": "sender", "type": "address" }, { "name": "receivers", "type": "address[]" }, { "name": "funds", "type": "uint256[]" }, { "name": "oracleContractAddr", "type": "address" }, { "name": "jobId", "type": "bytes32" }, { "name": "link", "type": "address" }, { "name": "totalXDC", "type": "uint256" }, { "name": "linkFee", "type": "uint256" }, { "name": "durationInSeconds", "type": "uint256" } ], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "from", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" } ], "name": "Received", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "receiver", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" } ], "name": "Released", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "id", "type": "bytes32" } ], "name": "PluginRequested", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "id", "type": "bytes32" } ], "name": "PluginFulfilled", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "id", "type": "bytes32" } ], "name": "PluginCancelled", "type": "event" } ]
    },
    /**
     * Configurations for XinFin MainNet Network
     * 
     * Chain Id for XinFin MainNet Network is 50. Refer https://howto.xinfin.org/general/networks/#specifications for more information
     * 
     * NOTE: Replace appropriate values below as per XinFin Main network
     */
    50: {
        /**
         * Contract addres of PLI token. https://github.com/XinFinOrg/XinFin-ChainLink/blob/master/contracts/LinkToken.sol
         */
        // TLW_FACTORY_CONTRACT_ADDR:'0x3690a35d7364914f172520b2e4d829daee157702',
        // PLI_TOKEN_CONTRACT_ADDR:'0xff7412ea7c8445c46a8254dfb557ac1e48094391',
        // ORACLE_CONTRACT_ADDR:'0x468e73d64773618ad1f714bf7597e7d5e9f623e2',
        // PLUGIN_JOB_ID:'1bd2c9bd9c1045f5808b6927a86c44d1',

        TLW_FACTORY_CONTRACT_ADDR:'0x2598d6a2c30e1bf19c205d7963be5285f63ebb1d',
        PLI_TOKEN_CONTRACT_ADDR:'0xff7412ea7c8445c46a8254dfb557ac1e48094391',
        ORACLE_CONTRACT_ADDR:'0x30623047726431919e8f725e84dfe4e8f23c7a5a',
        PLUGIN_JOB_ID:'103a3c14e3f24a36ba3ec11f59ae61bf',

//         PLI_TOKEN_CONTRACT_ADDR: '',
         /**
          * ABI of PLI token contract
          */
         PLI_TOKEN_ABI: [ { "constant": false, "inputs": [ { "name": "spender", "type": "address" }, { "name": "value", "type": "uint256" } ], "name": "approve", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "type": "function", "stateMutability": "nonpayable" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "type": "function", "stateMutability": "view" }, { "constant": false, "inputs": [ { "name": "from", "type": "address" }, { "name": "to", "type": "address" }, { "name": "value", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "type": "function", "stateMutability": "nonpayable" }, { "constant": false, "inputs": [ { "name": "to", "type": "address" }, { "name": "value", "type": "uint256" }, { "name": "data", "type": "bytes" } ], "name": "transferAndCall", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "type": "function", "stateMutability": "nonpayable" }, { "constant": true, "inputs": [ { "name": "who", "type": "address" } ], "name": "balanceOf", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "type": "function", "stateMutability": "view" }, { "constant": false, "inputs": [ { "name": "to", "type": "address" }, { "name": "value", "type": "uint256" } ], "name": "transfer", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "type": "function", "stateMutability": "nonpayable" }, { "constant": true, "inputs": [ { "name": "owner", "type": "address" }, { "name": "spender", "type": "address" } ], "name": "allowance", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "type": "function", "stateMutability": "view" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }, { "indexed": false, "name": "data", "type": "bytes" } ], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "owner", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" } ], "name": "Approval", "type": "event" } ],
         /**
          * Contract addres of Oracle contract. Refer contracts/Oracle.sol for more info
          */
  //       ORACLE_CONTRACT_ADDR: '',
         /**
          * Job Id created in Plugin node. Job definition available at plugin/alarm-job.json
          */
    //     PLUGIN_JOB_ID: '',
         /**
          * Fee charged by Oracle contract to trigger the Plugin job. Value is 0.1 PLI 
          */
         PLUGIN_FEE: 0.1 * 10 ** 18,
         /**
          * Time Locked Wallet factory contract address. Contract reference contracts/TimeLockedContractFactory.sol
          */
      //   TLW_FACTORY_CONTRACT_ADDR: '',
         /**
          * Time Locked Wallet factory contract ABI
          */
         TLW_FACTORY_CONTRACT_ABI: [{"constant":false,"inputs":[{"name":"receivers","type":"address[]"},{"name":"funds","type":"uint256[]"},{"name":"oracleContractAddr","type":"address"},{"name":"jobId","type":"bytes32"},{"name":"link","type":"address"},{"name":"linkFee","type":"uint256"},{"name":"durationInSeconds","type":"uint256"}],"name":"newTimeLockedContract","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"payable":false,"stateMutability":"nonpayable","type":"fallback"},{"constant":true,"inputs":[{"name":"user","type":"address"}],"name":"getWallets","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"}],
         /**
          * Time Locked Wallet contract ABI
          */
         TLW_CONTRACT_ABI: [ { "constant": true, "inputs": [], "name": "info", "outputs": [ { "name": "", "type": "address" }, { "name": "", "type": "address[]" }, { "name": "", "type": "uint256[]" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "durationInSeconds", "type": "uint256" }, { "name": "fee", "type": "uint256" } ], "name": "initiateAlarm", "outputs": [ { "name": "requestId", "type": "bytes32" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_requestId", "type": "bytes32" } ], "name": "releaseFunds", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "name": "sender", "type": "address" }, { "name": "receivers", "type": "address[]" }, { "name": "funds", "type": "uint256[]" }, { "name": "oracleContractAddr", "type": "address" }, { "name": "jobId", "type": "bytes32" }, { "name": "link", "type": "address" }, { "name": "totalXDC", "type": "uint256" } ], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "from", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" } ], "name": "Received", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "receiver", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" } ], "name": "Released", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "id", "type": "bytes32" } ], "name": "PluginRequested", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "id", "type": "bytes32" } ], "name": "PluginFulfilled", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "id", "type": "bytes32" } ], "name": "PluginCancelled", "type": "event" } ]
    }
}

/**
 * Function to get the configurations based on network id
 * 
 * 50 - XinFin Main Network
 * 51 - XinFin Apothem Test Network
 * 
 * @param {*} vm - Config instance
 * @returns 
 */
export function getNetworkConfig(vm) {
    return NETWORK_CONFIGURATIONS[vm.networkId]
}

export const LOADER_COLOR = '#21325b';
