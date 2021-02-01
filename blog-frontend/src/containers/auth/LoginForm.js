import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeField, initializeForm} from '../../modules/auth';
import Authform from '../../components/auth/AuthForm';

const LoginForm = () => {
    const dispatch = useDispatch();
    const {form} = useSelector(({auth}) => ({
        form: auth.login
    }));
    const onChange = e => {
        const {value, name} = e.target;
        dispatch(
            changeField({
                form: 'login',
                key: name,
                value
            })
        )
    };
    const onSubmit = e => {
        e.preventDefault();
    };

    //매너음 렌더링 후 initializeForm 액션 생성 함수 호출
    useEffect(() => {
        dispatch(initializeForm('login'));
    }, [dispatch]);

    return (
        <Authform
            type="login"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    );
};

export default LoginForm;