const EthplorerApi = require('ethplorer-api-node');

// Create an instance of EthplorerApi with your API keys
const apiKeys = ['your-api-key-1', 'your-api-key-2'];
const ethplorer = new EthplorerApi(apiKeys, true); // Use 'true' for random key mode or 'false' for sequential key mode

// Example: Get information about the last block
ethplorer.getLastBlock().then((lastBlock) => {

    console.log('Last Block Information:');
    console.log(lastBlock);
})

// Example: Get token information by its address
async function getTokenInfo(tokenAddress) {
    
  try {
    const tokenInfo = await ethplorer.getTokenInfo(tokenAddress);
    console.log('Token Information:');
    console.log(tokenInfo);
  } catch (error) {
    console.error('Error fetching token information:', error);
  }
}

// USDT address
const tokenAddress = '0xdAC17F958D2ee523a2206206994597C13D831ec7';

// Usage examples
getTokenInfo(tokenAddress);
