import { WalletError } from '@grhbit/wallet-adapter-base';

export class WalletNotSelectedError extends WalletError {
    name = 'WalletNotSelectedError';
}
