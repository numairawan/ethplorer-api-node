const axios = require("axios");

class EthplorerApi {
  /**
   * Initializes the Ethplorer API client.
   * @param {string[] | string} apiKeys - An array of API keys or a single API key string.
   * @param {boolean} randomKeys - Whether to use API keys randomly or sequentially.
   */
  constructor(apiKeys, randomKeys = false) {
    this.randomKeys = randomKeys;
    this.apiAddress = "https://api.ethplorer.io/";

    if (!apiKeys) {
      throw new Error("API keys are required.");
    }

    if (typeof apiKeys === "string") {
      this.apiKeys = [apiKeys];
    } else if (Array.isArray(apiKeys)) {
      this.apiKeys = apiKeys;
    } else {
      throw new Error("Invalid API keys format.");
    }

    this.apiKeyIndex = 0; // Index for sequential API key usage.
  }

  /**
   * Makes an Axios request to the specified URL.
   * @param {string} url - The URL to make the request to.
   * @returns {Promise<any>} - A promise that resolves to the response data.
   */
  async axiosRequest(url) {
    try {
      const response = await axios.get(url, {
        headers: {
          Accept: "application/json",
          "User-Agent": "Googlebot/2.1 (+http://www.google.com/bot.html)",
        },
        timeout: 10000,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Retrieves the next API key for sequential usage.
   * @returns {string} - The next API key in sequence.
   */
  getNextApiKey() {
    if (this.randomKeys) {
      return this.getRandomApiKey();
    }

    const apiKey = this.apiKeys[this.apiKeyIndex];
    this.apiKeyIndex = (this.apiKeyIndex + 1) % this.apiKeys.length;
    return apiKey;
  }

  /**
   * Get random api keys.
   * @returns {string} - Random key.
   */
  getRandomApiKey() {
    return this.apiKeys[Math.floor(Math.random() * this.apiKeys.length)];
  }

  /**
   * Retrieves the last block information.
   * @returns {Promise<any>} - A promise that resolves to the last block information.
   */
  getLastBlock() {
    const apiKey = this.getNextApiKey();
    const url = `${this.apiAddress}getLastBlock?apiKey=${apiKey}`;
    return this.axiosRequest(url);
  }

  /**
   * Retrieves token information by its address.
   * @param {string} token - The token address.
   * @returns {Promise<any>} - A promise that resolves to token information.
   */
  getTokenInfo(token) {
    const apiKey = this.getNextApiKey();
    const url = `${this.apiAddress}getTokenInfo/${token}?apiKey=${apiKey}`;
    return this.axiosRequest(url);
  }

  /**
   * Retrieves address information by its address.
   * @param {string} address - The Ethereum address.
   * @returns {Promise<any>} - A promise that resolves to address information.
   */
  getAddressInfo(address) {
    const apiKey = this.getNextApiKey();
    const url = `${this.apiAddress}getAddressInfo/${address}?apiKey=${apiKey}`;
    return this.axiosRequest(url);
  }

  /**
   * Retrieves transaction information by its hash.
   * @param {string} tx - The transaction hash.
   * @returns {Promise<any>} - A promise that resolves to transaction information.
   */
  getTxInfo(tx) {
    const apiKey = this.getNextApiKey();
    const url = `${this.apiAddress}getTxInfo/${tx}?apiKey=${apiKey}`;
    return this.axiosRequest(url);
  }

  /**
   * Retrieves token history by its address.
   * @param {string} token - The token address.
   * @param {string} type - The type of history (default: 'transfer').
   * @param {number} limit - The maximum number of records to retrieve (default: 10).
   * @returns {Promise<any>} - A promise that resolves to token history.
   */
  getTokenHistory(token, type = "transfer", limit = 10) {
    const apiKey = this.getNextApiKey();
    const url = `${this.apiAddress}getTokenHistory/${token}?apiKey=${apiKey}&type=${type}&limit=${limit}`;
    return this.axiosRequest(url);
  }

  /**
   * Retrieves address history by its address.
   * @param {string} token - The Ethereum address.
   * @param {string} type - The type of history (default: 'transfer').
   * @param {number} limit - The maximum number of records to retrieve (default: 10).
   * @returns {Promise<any>} - A promise that resolves to address history.
   */
  getAddressHistory(token, type = "transfer", limit = 10) {
    const apiKey = this.getNextApiKey();
    const url = `${this.apiAddress}getAddressHistory/${token}?apiKey=${apiKey}&type=${type}&limit=${limit}`;
    return this.axiosRequest(url);
  }

  /**
   * Retrieves address transactions by its address.
   * @param {string} token - The Ethereum address.
   * @param {number} limit - The maximum number of records to retrieve (default: 10).
   * @returns {Promise<any>} - A promise that resolves to address transactions.
   */
  getAddressTransactions(token, limit = 10) {
    const apiKey = this.getNextApiKey();
    const url = `${this.apiAddress}getAddressTransactions/${token}?apiKey=${apiKey}&limit=${limit}`;
    return this.axiosRequest(url);
  }

  /**
   * Retrieves top tokens based on criteria.
   * @param {string} criteria - The criteria for ranking (default: 'cap').
   * @param {number} limit - The maximum number of records to retrieve (default: 50).
   * @returns {Promise<any>} - A promise that resolves to top tokens.
   */
  getTop(criteria = "cap", limit = 50) {
    const apiKey = this.getNextApiKey();
    const url = `${this.apiAddress}getTop?apiKey=${apiKey}&criteria=${criteria}&limit=${limit}`;
    return this.axiosRequest(url);
  }

  /**
   * Retrieves top tokens.
   * @returns {Promise<any>} - A promise that resolves to top tokens.
   */
  getTopTokens() {
    const apiKey = this.getNextApiKey();
    const url = `${this.apiAddress}getTopTokens/?apiKey=${apiKey}`;
    return this.axiosRequest(url);
  }

  /**
   * Retrieves top token holders by token address.
   * @param {string} token - The token address.
   * @param {number} limit - The maximum number of records to retrieve (default: 100).
   * @returns {Promise<any>} - A promise that resolves to top token holders.
   */
  getTopTokenHolders(token, limit = 100) {
    const apiKey = this.getNextApiKey();
    const url = `${this.apiAddress}getTopTokenHolders/${token}?apiKey=${apiKey}&limit=${limit}`;
    return this.axiosRequest(url);
  }

  /**
   * Retrieves token history grouped by day by token address.
   * @param {string} token - The token address.
   * @returns {Promise<any>} - A promise that resolves to token history grouped by day.
   */
  getTokenHistoryGrouped(token) {
    const apiKey = this.getNextApiKey();
    const url = `${this.apiAddress}getTokenHistoryGrouped/${token}?apiKey=${apiKey}`;
    return this.axiosRequest(url);
  }

  /**
   * Retrieves token price history grouped by day by token address.
   * @param {string} token - The token address.
   * @param {number} period - The period in days for price history (default: 365).
   * @returns {Promise<any>} - A promise that resolves to token price history grouped by day.
   */
  getTokenPriceHistoryGrouped(token, period = 365) {
    const apiKey = this.getNextApiKey();
    const url = `${this.apiAddress}getTokenPriceHistoryGrouped/${token}?apiKey=${apiKey}&period=${period}`;
    return this.axiosRequest(url);
  }
}

module.exports = EthplorerApi;
