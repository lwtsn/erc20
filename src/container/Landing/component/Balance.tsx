import React, { useCallback, useState } from 'react';
import { getErc20Contract } from '@app/web3/contracts';
import { Field, Form } from 'react-final-form';
import { Button, Classes, FormGroup } from '@blueprintjs/core';
import { FormInputGroup } from '@app/component/Form';

const Balance: React.FC = () => {
    const erc20 = getErc20Contract();

    const [balance, setBalance] = useState(undefined);

    const checkBalance = useCallback(
        async (values) => {
            await erc20.balanceOf(values.address).then(setBalance);
        },
        [erc20],
    );

    const renderBalance = () => {
        if (balance != undefined) {
            return <div>Balance is : {balance.toString()}</div>;
        }
    };

    return (
        <div>
            <div>
                <Form
                    onSubmit={checkBalance}
                    render={({ handleSubmit, values }) => {
                        return (
                            <form className={'stream-withdraw-form'} onSubmit={handleSubmit}>
                                <div className={`${Classes.DIALOG_BODY}`}>
                                    <div className={'col-xs-12'}>
                                        <FormGroup label={'Address to check'} labelFor={'address'}>
                                            <Field name={'address'} component={FormInputGroup} />
                                        </FormGroup>
                                    </div>
                                </div>

                                <div className={`${Classes.DIALOG_FOOTER}`}>
                                    <Button onClick={handleSubmit}>Check balance</Button>
                                </div>
                            </form>
                        );
                    }}
                />
                {renderBalance()}
            </div>
        </div>
    );
};

export default Balance;
