<p align="center">
    <img src="https://raw.githubusercontent.com/NumairAwan/ethplorer-api-node/main/art/ethplorer-api-node.png" width="600" alt="ethplorer-api-node">
    <p align="center">
        <a href="https://github.com/NumairAwan/ethplorer-api-node"><img alt="Total Hits" src="https://hits.dwyl.com/NumairAwan/ethplorer-api-node.svg?style=flat-square"></a>
        <a href="https://github.com/NumairAwan/ethplorer-api-node"><img alt="Downloads" src="https://img.shields.io/npm/dt/ethplorer-api-node"></a>
        <a href="https://www.npmjs.com/package/ethplorer-api-node"><img alt="Version" src="https://img.shields.io/npm/v/ethplorer-api-node?logo=npm&style=flat-square"></a>
        <a href="https://github.com/NumairAwan/ethplorer-api-node"><img alt="License" src="https://img.shields.io/github/license/numairawan/ethplorer-api-node"></a>
    </p>
</p>

------
**ethplorer-api-node** is a powerful nodejs module for Ethplorer.io API. This feature-rich library not only provides multi-key support to effortlessly bypass rate limits but also offers blazing-fast performance, two key usage modes (sequential and random), and extensive promise support for smooth integration into your NodeJs projects.

🌟 Key Features:
- 🔄 Multi-Key Support: Seamlessly rotate API keys to bypass rate limits.
- ⚡️ High Performance: Enjoy super-fast access to ethereum blockchain data.
- 🎯 Two Key Usage Modes: Choose between sequential and random key usage.
- ✨ Promise Support: Simplify asynchronous operations with built-in promises.

## 📦 Install

```sh
npm i ethplorer-api-node
```

### Usage
For more sample please check test.js

```js
const EthplorerApi = require('ethplorer-api-node');

// Create an instance of EthplorerApi with your API keys
const apiKeys = ['your-api-key-1', 'your-api-key-2'];
const ethplorer = new EthplorerApi(apiKeys, true); // Use 'true' for random key mode or 'false' for sequential key mode

// Example: Get information about the last block
ethplorer.getLastBlock().then((lastBlock) => {

    console.log('Last Block Information:');
    console.log(lastBlock);
})
```

### Contributing
Contributions are welcome! Feel free to fork the repository and submit pull requests as well.

### License
This project is licensed under the **[MIT license](https://opensource.org/licenses/MIT)**.


## Connect with Me

Feel free to reach out to me for any project-related queries or collaborations. I'm always happy to connect and discuss ideas!

[<img align="left" alt="Telegram" width="32px" src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" />](https://t.me/NumairAwan)
[<img align="left" alt="WhatsApp" width="32px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png?20220228223904" />](https://wa.me/+923164700904)

