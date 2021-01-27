import React, { useCallback, useState } from 'react';
import { getErc20Contract } from '@app/web3/contracts';
import { Field, Form } from 'react-final-form';
import { Button, Classes, FormGroup } from '@blueprintjs/core';
import { FormInputGroup } from '@app/component/Form';

const Transfer: React.FC = () => {
    const erc20 = getErc20Contract();

    const transfer = useCallback(
        async (values) => {
            await erc20.transfer(values.recipient, values.amount);
        },
        [erc20],
    );

    return (
        <div>
            <div>
                <Form
                    onSubmit={transfer}
                    render={({ handleSubmit, values }) => {
                        return (
                            <form className={'stream-withdraw-form'} onSubmit={handleSubmit}>
                                <div className={`${Classes.DIALOG_BODY}`}>
                                    <div className={'col-xs-12'}>
                                        <FormGroup label={'Amount to transfer'} labelFor={'amount'}>
                                            <Field type={'number'} name={'amount'} component={FormInputGroup} />
                                        </FormGroup>
                                    </div>
                                    <div className={'col-xs-12'}>
                                        <FormGroup label={'Recipient'} labelFor={'recipient'}>
                                            <Field name={'recipient'} component={FormInputGroup} />
                                        </FormGroup>
                                    </div>
                                </div>

                                <div className={`${Classes.DIALOG_FOOTER}`}>
                                    <Button onClick={handleSubmit}>Transfer</Button>
                                </div>
                            </form>
                        );
                    }}
                />
            </div>
        </div>
    );
};

export default Transfer;
