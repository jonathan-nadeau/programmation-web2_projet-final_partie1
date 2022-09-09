import useOnAuth from '../auth/hooks/useOnAuth';

const AppContainer = ({ children }) => {
  useOnAuth();

  return <>{children}</>;
};

export default AppContainer;
