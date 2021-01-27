import { Alignment, Button, Navbar, NavbarGroup } from '@blueprintjs/core';
import React, { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { Wallet } from '@app/component/Wallet';
import { getErc20Contract } from '@app/web3/contracts';
import { BigNumber } from 'ethers';
import { getCurrentAddress } from '@app/web3/utils';

const Navigation: React.FC = () => {
    const { active } = useWeb3React<Web3Provider>();
    const [shouldShowConnectWallet, setShouldShowConnectWallet] = useState(false);
    const address = getCurrentAddress();

    const erc20 = getErc20Contract();

    const [balance, setBalance] = useState(BigNumber.from(0));
    const [name, setName] = useState('');

    useEffect(() => {
        async function getErc20Detail(): Promise<void> {
            await erc20.balanceOf(address).then(setBalance);
            await erc20.name().then(setName);
        }

        getErc20Detail();
    }, [erc20, address]);

    return (
        <Navbar className={'mb-3'}>
            <NavbarGroup align={Alignment.LEFT}>
                <h1>Centralex</h1>
            </NavbarGroup>
            <NavbarGroup align={Alignment.RIGHT}>
                <Button className={'mr-1'} minimal={true} icon={'bank-account'}>
                    ${balance.toString()} <span>{name}</span>
                </Button>
                <Button onClick={() => setShouldShowConnectWallet(true)} className={'mr-1'}>
                    {active ? 'Disconnect Wallet' : 'Connect Wallet'}
                </Button>
            </NavbarGroup>
            <Wallet shouldShow={shouldShowConnectWallet} setShouldShowConnectWallet={setShouldShowConnectWallet} />
        </Navbar>
    );
};

export default Navigation;
