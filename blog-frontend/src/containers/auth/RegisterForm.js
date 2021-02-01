import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeField, initializeForm} from '../../modules/auth';
import Authform from '../../components/auth/AuthForm';

const RegisterForm = () => {
    const dispatch = useDispatch();
    const {form} = useSelector(({auth}) => ({
        form: auth.register
    }));
    const onChange = e => {
        const {value, name} = e.target;
        dispatch(
            changeField({
                form: 'register',
                key: name,
                value
            })
        )
    };
    const onSubmit = e => {
        e.preventDefault();
    };

    //맨처음 렌더링 후 initializeForm 액션 생성 함수 호출
    useEffect(() => {
        dispatch(initializeForm('register'));
    }, [dispatch]);

    return (
        <Authform
            type="register"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    );
};

export default RegisterForm;