import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, resetUser } from '../authSlice/authslice';
import { useEffect, useCallback } from 'react';
import AuthService from '../service/auth-service';

const authService = new AuthService();

const useOnAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onAuth = useCallback(() => {
    if (user) {
      console.log(`User: ${user}`);
      dispatch(setUser({ email: user.email }));
      navigate('/');
    } else {
      console.log(`There's no user connected.`);
      navigate('/login');
    }
    dispatch(resetUser);
  }, [dispatch, navigate, user]);

  useEffect(() => {
    authService.onAuthChange(onAuth);
  }, [onAuth]);
};

export default useOnAuth;
