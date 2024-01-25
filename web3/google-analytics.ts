// src/google-analytics.ts
import ua from 'universal-analytics';

const visitor = ua('Your-GA-Tracking-ID', 'some-user-id');

visitor.event('WalletData', 'StoreInDatabase').send((err: any) => {
  if (err) {
    console.error('Error tracking event in Google Analytics', err);
  } else {
    console.log('Event tracked in Google Analytics');
  }
});
