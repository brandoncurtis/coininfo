var common = {
  name: 'Decred',
  unit: 'DCR'
}

// https://github.com/decred/dcrd/blob/f8608835624a54def5825a738fcd0491e1519e5a/chaincfg/mainnetparams.go
// https://github.com/decred/bitcore/blob/f53e5ced4e4aee4936f6bb7dc9ae4379fbb7c6b2/networks.js
// note that the hash below has the reverse endianness of the hash hardcoded in Bitcore
// because Bitcore uses the reverse endianness of DCRD and most other tools
// BIP-44 coin types: https://github.com/satoshilabs/slips/blob/master/slip-0044.md
var main = Object.assign({}, {
  hashGenesisBlock: '298e5cc3d985bfe7f81dc135f360abe089edd4396b86d2de66b0cef42b21d980',
  port: 9108,
  portRpc: 9109,
  protocol: {
    magic: 0xf900b4d9
  },
  seedsDns: [
    'mainnet-seed.decred.mindcry.org',
    'mainnet-seed.decred.netpurgatory.com',
    'mainnet.decredseed.org',
    'mainnet-seed.decred.org'
  ],
  versions: {
    bip32: {
      private: 0x02fda4e8,
      public: 0x02fda926
    },
    bip44: 42,
    private: 0x22de,
    public: 0x073f,
    scripthash: 0x071a
  }
}, common)

// https://github.com/decred/dcrd/blob/ef71103c95cbf77e5a0418e3d413b5906e710b25/chaincfg/params.go
// https://github.com/decred/dcrd/blob/ef71103c95cbf77e5a0418e3d413b5906e710b25/chaincfg/genesis_test.go
// https://github.com/decred/bitcore/blob/a92381b2b0023b28a1b7eb03e6cb0bfb7800200d/lib/networks.js
var testnet2 = Object.assign({}, {
  hashGenesisBlock: '5b7466edf6739adc9b32aaedc54e24bdc59a05f0ced855088835fe3cbe58375f',
  port: 19108,
  portRpc: 19109,
  protocol: {
    magic: 0x48e7a065
  },
  seedsDns: [
    'testnet-seed.decred.mindcry.org',
    'testnet-seed.decred.netpurgatory.org',
    'testnet.decredseed.org',
    'testnet-seed.decred.org'
  ],
  versions: {
    bip32: {
      private: 0x04358397,
      public: 0x043587d1
    },
    bip44: 1,
    private: 0x230e,
    public: 0x0f21,
    scripthash: 0x0efc
  }
}, common)

// https://github.com/decred/dcrd/blob/f8608835624a54def5825a738fcd0491e1519e5a/chaincfg/testnetparams.go
// https://github.com/decred/bitcore/blob/f53e5ced4e4aee4936f6bb7dc9ae4379fbb7c6b2/networks.js
// note that the hash below has the reverse endianness of the hash hardcoded in Bitcore
// because Bitcore uses the reverse endianness of DCRD and most other tools
var testnet3 = Object.assign({}, {
  hashGenesisBlock: 'a649dce53918caf422e9c711c858837e08d626ecfcd198969b24f7b634a49bac',
  port: 19108,
  portRpc: 19109,
  protocol: {
    magic: 0x75aa94b1
  },
  seedsDns: [
    'testnet-seed.decred.mindcry.org',
    'testnet-seed.decred.netpurgatory.org',
    'testnet.decredseed.org',
    'testnet-seed.decred.org'
  ],
  versions: {
    bip32: {
      private: 0x04358397,
      public: 0x043587d1
    },
    bip44: 1,
    private: 0x230e,
    public: 0x0f21,
    scripthash: 0x0efc
  }
}, common)

module.exports = {
  main: main,
  mainnet: main,
  test: testnet3
  testnet: testnet3,
  testnet2: testnet2,
  testnet3: testnet3
}
