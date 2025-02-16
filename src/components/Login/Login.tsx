import { FC } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { login } from '../../redux/slices/authSlice';
import styles from './Login.module.scss';
import { useNavigate } from 'react-router-dom';
import BlueButton from '../UI/BlueButton/BlueButton';
import { useForm } from 'react-hook-form';

interface LoginFormInputs {
    email: string;
    password: string;
}

const Login: FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormInputs>();

    const onSubmit = (data: LoginFormInputs) => {
        const role = data.email.includes('admin') ? 'admin' : 'user';
        dispatch(login({ role }));
        navigate('/');
    };

    return (
        <form className={styles.login} onSubmit={handleSubmit(onSubmit)}>
            <h2>Вход</h2>
            <div className={styles.error}>
                {errors.email && <span className={styles.text}>{errors.email.message}</span>}
            </div>
            <input
                type="email"
                placeholder="Email"
                {...register('email', {
                    required: 'Email обязателен',
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Введите корректный email',
                    },
                })}
            />
            <div className={styles.error}>
                {errors.password && <span className={styles.text}>{errors.password.message}</span>}
            </div>
            <input
                type="password"
                placeholder="Пароль"
                {...register('password', { required: 'Пароль обязателен' })}
            />

            <BlueButton className={styles.button} type="submit">
                Войти
            </BlueButton>
        </form>
    );
};

export default Login;
