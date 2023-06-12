import { Formik } from 'formik';
import * as yup from 'yup';
import * as S from './styles';
import { SignInUseCase } from '~/@core/application/auth/SignInUseCase';
import AuthGatewayHttp from '~/@core/infra/gateways/AuthGatewayHttp';
import AxiosAdapter from '~/@core/infra/http/AxiosAdapter';
import { useLocalStorage } from '~/presentation/hooks';

interface IValues {
  email: string;
  password: string;
}

const Login = () => {
  const axios = new AxiosAdapter();
  const apiBaseUrl = 'http://localhost:3000';
  const authGateway = new AuthGatewayHttp(axios, apiBaseUrl);

  const { setValue } = useLocalStorage('auth', {});

  const handleSubmit = (values: IValues) => {
    const signInUseCase = new SignInUseCase(authGateway, values);
    signInUseCase
      .execute()
      .then(async (response) => {
        const { data }: any = { ...response };
        setValue(JSON.stringify({ ...data }));
        window.location.reload();
      })
      .catch(() => {
        alert('Usuário ou senha inválidos!');
      });
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Insira um e-mail válido!')
      .required('E-mail é obrigatório!'),
    password: yup.string().required('Senha é obrigatória!'),
  });

  return (
    <S.Container>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting, errors }) => (
          <S.FormElement>
            <S.FormContainer>
              <S.Title>Login</S.Title>
              <S.Input name="email" placeholder="E-mail" />
              {errors.email && <S.FieldError>{errors.email}</S.FieldError>}
              <S.Input name="password" placeholder="Senha" />
              {errors.password && (
                <S.FieldError>{errors.password}</S.FieldError>
              )}
              <S.SubmitButton type="submit" disabled={isSubmitting}>
                Entrar
              </S.SubmitButton>
            </S.FormContainer>
          </S.FormElement>
        )}
      </Formik>
    </S.Container>
  );
};

export default Login;
