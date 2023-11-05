/* A helper file that simplifies using the wallet selector */

// near api js
import { providers } from 'near-api-js';

// wallet selector
import '@near-wallet-selector/modal-ui/styles.css';
import { setupModal } from '@near-wallet-selector/modal-ui';
import {
  NetworkId,
  setupWalletSelector,
  WalletSelector,
} from '@near-wallet-selector/core';
import { setupMyNearWallet } from '@near-wallet-selector/my-near-wallet';
import { SignMessageMethod } from '@near-wallet-selector/core/src/lib/wallet';
import { Wallet } from '@near-wallet-selector/core/src/lib/wallet';

const THIRTY_TGAS = '30000000000000';
const NO_DEPOSIT = '0';

// Wallet that simplifies using the wallet selector
export class MyWallet {
  walletSelector?: WalletSelector;
  wallet: (Wallet & SignMessageMethod) | undefined;
  network;
  createAccessKeyFor?: string;
  accountId?: string;

  constructor({ createAccessKeyFor = undefined, network = 'testnet' }) {
    // Login to a wallet passing a contractId will create a local
    // key, so the user skips signing non-payable transactions.
    // Omitting the accountId will result in the user being
    // asked to sign all transactions.
    this.createAccessKeyFor = createAccessKeyFor;
    this.network = 'testnet';
    console.log(network);
  }

  // To be called when the website loads
  async startUp() {
    this.walletSelector = await setupWalletSelector({
      network: this.network as NetworkId,
      modules: [setupMyNearWallet()],
    });

    const isSignedIn = this.walletSelector.isSignedIn();

    if (isSignedIn) {
      this.wallet = await this.walletSelector.wallet();
      this.accountId =
        this.walletSelector.store.getState().accounts[0].accountId;
    }

    return isSignedIn;
  }

  // Sign-in method
  signIn() {
    if (!this.walletSelector || !this.createAccessKeyFor) return;
    const description = 'Please select a wallet to sign in.';
    const modal = setupModal(this.walletSelector, {
      contractId: this.createAccessKeyFor,
      description,
    });
    modal.show();
  }

  // Sign-out method
  signOut() {
    if (!this.wallet) return;
    this.wallet.signOut();
    this.wallet = this.accountId = this.createAccessKeyFor = undefined;
    window.location.replace(window.location.origin + window.location.pathname);
  }

  // Make a read-only call to retrieve information from the network
  async viewMethod({
    contractId,
    method,
    args = {},
  }: {
    contractId: string;
    method: string;
    args: object;
  }) {
    if (!this.walletSelector) return;
    const { network } = this.walletSelector.options;
    const provider = new providers.JsonRpcProvider({ url: network.nodeUrl });

    const res = await provider.query({
      request_type: 'call_function',
      account_id: contractId,
      method_name: method,
      args_base64: Buffer.from(JSON.stringify(args)).toString('base64'),
      finality: 'optimistic',
    });
    // return JSON.parse(Buffer.from(res.result).toString());
    return res;
  }

  // Call a method that changes the contract's state
  async callMethod({
    contractId,
    method,
    args = {},
    gas = THIRTY_TGAS,
    deposit = NO_DEPOSIT,
  }: {
    contractId: string;
    method: string;
    args: object;
    gas: string;
    deposit: string;
  }) {
    if (!this.wallet) return;
    // Sign a transaction with the "FunctionCall" action
    return await this.wallet.signAndSendTransaction({
      signerId: this.accountId,
      receiverId: contractId,
      actions: [
        {
          type: 'FunctionCall',
          params: {
            methodName: method,
            args,
            gas,
            deposit,
          },
        },
      ],
    });
  }

  // Get transaction result from the network
  async getTransactionResult(txhash: string | Uint8Array) {
    if (!this.walletSelector) return;
    const { network } = this.walletSelector.options;
    const provider = new providers.JsonRpcProvider({ url: network.nodeUrl });

    // Retrieve transaction result from the network
    const transaction = await provider.txStatus(txhash, 'unnused');
    return providers.getTransactionLastResult(transaction);
  }
}
