// This function detects most providers injected at window.ethereum.
import detectEthereumProvider from '@metamask/detect-provider';
import Web3 from 'web3';
import { useNetworkStore } from '~/store/network';
import { NetworkType } from '.';
import { NetworkChainID } from '~/constants/chainId';
import { useUserStore } from '~/store/user';
// This returns the provider, or null if it wasn't detected.
const provider = await detectEthereumProvider();


export enum ConnectType {
    MetaMask,
    CoinBaseWallet,
    WalletConnect,
    Formatitc,
}

export class IConnectFactory {
    static getConnect(type: ConnectType): Promise<any> {
        if (type === ConnectType.MetaMask) {
            const instance = new MetaMask()
            instance.connect()
            instance.verify()
        }
        return Promise.resolve(0)
    }
}

interface ConnectInterface {
    connect(): void
    verify(): Promise<any>
}

class MetaMask implements ConnectInterface {
    async verify(): Promise<any> {
        const network = useNetworkStore().getNetwork
        let web3 = new Web3(window.ethereum)
        let chainId = await window.ethereum.request({ method: 'eth_chainId' });
        chainId = web3.utils.hexToNumber(chainId)
        if (network.getNetworkType() === NetworkType.Etherum && chainId !== NetworkChainID.Etherum) {
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: web3.utils.toHex(NetworkChainID.Etherum) }]
            });
        }
    }
    async  startApp(provider: any) {
        // If the provider returned by detectEthereumProvider isn't the same as
        // window.ethereum, something is overwriting it – perhaps another wallet.
        if (provider !== window.ethereum) {
            console.error('Do you have multiple wallets installed?');
        }
        // Access the decentralized web!
        if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
            const accounts = await window?.ethereum?.request({ method: 'eth_requestAccounts' });
            const userStore = useUserStore()
            userStore.setAddress(accounts[0])
            userStore.setConnected(true)

        }
    }
    connect(): void {
        try {
            if (provider) {
                // From now on, this should always be true:
                // provider === window.ethereum
                this.startApp(provider); // initialize your app
            } else {
                console.log('Please install MetaMask!');
            }


        } catch (err) {

        }
    }
}