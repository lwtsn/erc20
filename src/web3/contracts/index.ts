import { useContract } from '@app/web3/hooks/useContract';
import { Contract } from 'ethers';
import { ERC20_ABI, ERC20_ADDRESS } from '@app/web3/constants/contracts/Token';

export function getErc20Contract(): Contract | null {
    return useContract(ERC20_ADDRESS, ERC20_ABI, true);
}
