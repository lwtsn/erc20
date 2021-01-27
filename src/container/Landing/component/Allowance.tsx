import React, { useCallback, useState } from 'react';
import { getErc20Contract } from '@app/web3/contracts';
import { Field, Form } from 'react-final-form';
import { Button, Classes, FormGroup } from '@blueprintjs/core';
import { FormInputGroup } from '@app/component/Form';

const Allowance: React.FC = () => {
    const erc20 = getErc20Contract();

    const [allowance, setAllowance] = useState(undefined);

    const checkBalance = useCallback(
        async (values) => {
            await erc20.allowance(values.allowanceOf, values.allowanceFor).then(setAllowance);
        },
        [erc20],
    );

    const renderAllowance = () => {
        if (allowance != undefined) {
            return <div>Allowance is : {allowance.toString()}</div>;
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
                                        <FormGroup label={'Allowance of'} labelFor={'allowanceOf'}>
                                            <Field name={'allowanceOf'} component={FormInputGroup} />
                                        </FormGroup>
                                    </div>
                                    <div className={'col-xs-12'}>
                                        <FormGroup label={'Allowance for'} labelFor={'allowanceFor'}>
                                            <Field name={'allowanceFor'} component={FormInputGroup} />
                                        </FormGroup>
                                    </div>
                                </div>

                                <div className={`${Classes.DIALOG_FOOTER}`}>
                                    <Button onClick={handleSubmit}>Check allowance</Button>
                                </div>
                            </form>
                        );
                    }}
                />
                {renderAllowance()}
            </div>
        </div>
    );
};

export default Allowance;
