// src/web3-interaction.ts
import Web3 from 'web3';
import dotenv from 'dotenv';

// Load environment variables from the .env file
dotenv.config();

// Read Infura node URL from environment variables
const infuraUrl = process.env.INFURA_NODE_URL || '';

// Create a new Web3 instance with the Infura endpoint
const web3 = new Web3(new Web3.providers.HttpProvider(infuraUrl));

/**
 * Fetch data from a Web3 wallet using Infura.
 *
 * @param {string} walletAddress - The Ethereum wallet address to fetch data for.
 * @returns {Promise<any>} - A Promise that resolves with the fetched data.
 */
export async function fetchWalletData(walletAddress: string): Promise<any> {
  try {
    // Example: Get the balance of the wallet
    const balanceWei = await web3.eth.getBalance(walletAddress);

    // Add more Web3 interactions as needed

    return {
      balanceEther: web3.utils.fromWei(balanceWei, 'ether'), // Convert balance to Ether
      // Add more data fields as needed
    };
  } catch (error) {
    console.error('Error fetching wallet data:', error);
    throw error;
  }
}

// You can add more utility functions for additional Web3 interactions if necessary
