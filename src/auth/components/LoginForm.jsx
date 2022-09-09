import { Form as BSForm, Container, Button } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import useEmailPasswordSignin from '../hooks/useEmailPasswordSignin';
import useEmailPasswordSignup from '../hooks/useEmailPasswordSignup';

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('You must enter a valid email')
    .required('This field is required'),
  password: Yup.string()
    .required('This field is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
    ),
});

const LoginForm = () => {
  const signinWithEmailAndPassword = useEmailPasswordSignin();
  const signupWithEmailAndPassord = useEmailPasswordSignup();

  const handleSubmit = (values) => {
    signinWithEmailAndPassword(values.email, values.password);
  };

  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{ height: 'calc(100vh - 56px)' }}
    >
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        <Form as={BSForm} className='row gy-3'>
          <h1>Login</h1>
          <label htmlFor='email' hidden>
            Email
          </label>
          <Field
            type='email'
            name='email'
            id='email'
            placeholder='Email'
            className='col-12'
          />
          <ErrorMessage name='email' component={'div'} />
          <label htmlFor='password' hidden>
            Password
          </label>
          <Field
            type='password'
            name='password'
            id='password'
            placeholder='Password'
            className='col-12'
          />
          <ErrorMessage name='password' component={'div'} />
          <Button type='submit'>Sign In</Button>
        </Form>
      </Formik>
    </Container>
  );
};

export default LoginForm;
