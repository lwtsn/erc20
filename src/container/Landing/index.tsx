import React from 'react';
import { Wrapper } from './styled';
import Navigation from '@app/container/Landing/Navigation';
import Balance from '@app/container/Landing/component/Balance';
import Allowance from '@app/container/Landing/component/Allowance';
import Approve from '@app/container/Landing/component/Approve';
import Transfer from '@app/container/Landing/component/Transfer';

const Landing: React.FC = () => {
    return (
        <Wrapper>
            <Navigation />
            <div className={'row mb-1'}>
                <div className={'col-xs-4'}>
                    <h3>Check balance</h3>
                    <Balance />
                </div>
                <div className={'col-xs-4'}>
                    <h3>Check allowance</h3>
                    <Allowance />
                </div>
                <div className={'col-xs-4'}>
                    <h3>Check allowance</h3>
                    <Approve />
                </div>
            </div>
            <h3>Transfer</h3>
            <Transfer />
        </Wrapper>
    );
};

export default Landing;
