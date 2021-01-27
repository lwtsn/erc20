import React, { useCallback } from 'react';
import { getErc20Contract } from '@app/web3/contracts';
import { Field, Form } from 'react-final-form';
import { Button, Classes, FormGroup } from '@blueprintjs/core';
import { FormInputGroup } from '@app/component/Form';

const Approve: React.FC = () => {
    const erc20 = getErc20Contract();

    const approve = useCallback(
        async (values) => {
            await erc20.approve(values.address, values.amount);
        },
        [erc20],
    );

    return (
        <div>
            <div>
                <Form
                    onSubmit={approve}
                    render={({ handleSubmit, values }) => {
                        return (
                            <form className={'stream-withdraw-form'} onSubmit={handleSubmit}>
                                <div className={`${Classes.DIALOG_BODY}`}>
                                    <div className={'col-xs-12'}>
                                        <FormGroup label={'Amount to approve'} labelFor={'amount'}>
                                            <Field type={'number'} name={'amount'} component={FormInputGroup} />
                                        </FormGroup>
                                    </div>
                                    <div className={'col-xs-12'}>
                                        <FormGroup label={'Address to allow'} labelFor={'address'}>
                                            <Field name={'address'} component={FormInputGroup} />
                                        </FormGroup>
                                    </div>
                                </div>

                                <div className={`${Classes.DIALOG_FOOTER}`}>
                                    <Button onClick={handleSubmit}>Approve</Button>
                                </div>
                            </form>
                        );
                    }}
                />
            </div>
        </div>
    );
};

export default Approve;
