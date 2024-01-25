// src/index.ts
import { fetchWalletData } from './web3-interaction';
import { storeDataInDatabase } from './database';
import ua from 'universal-analytics';

// Replace 'Your-GA-Tracking-ID' with your actual Google Analytics tracking ID
const googleAnalyticsTrackingId = 'Your-GA-Tracking-ID';
const visitor = ua(googleAnalyticsTrackingId, 'some-user-id');

async function main() {
  const walletAddress = '0x1234567890123456789012345678901234567890'; // Replace with an actual wallet address

  try {
    // Fetch wallet data
    const walletData = await fetchWalletData(walletAddress);

    // Store data in the database
    await storeDataInDatabase(walletAddress, walletData);

    // Track an event in Google Analytics
    visitor.event('WalletData', 'FetchedFromWeb3').send((err: any) => {
      if (err) {
        console.error('Error tracking event in Google Analytics', err);
      } else {
        console.log('Event tracked in Google Analytics');
      }
    });
  } catch (error) {
    console.error('Error in the main process:', error);
  } finally {
    // Close database connection or perform any cleanup if needed
  }
}

// Run the main process
main();
