import { useEffect } from 'react';
import './App.css';
/* Modules */
import { Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';

/* Components */
import { authOperations } from './redux/auth';
import AppBar from './components/AppBar/AppBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Spinner from './components/Spinner';


/* Styles */

const HomePage = lazy(() => import('./pages/HomePage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));


const App = ({ onGetCurrentUser }) => {

  useEffect(()=> {
    onGetCurrentUser();
  }, [])

    return (
      <div className="back">
        <AppBar />
        <Suspense fallback={<div className="spinnerContainer"><Spinner /></div>}>
          <Switch>
            <PublicRoute exact path="/" component={HomePage} />
            <PublicRoute
              path="/register"
              restricted
              redirected="/contacts"
              component={RegistrationPage}
            />
            <PublicRoute
              path="/login"
              restricted
              redirectTo="/contacts"
              component={LoginPage}
            />
            <PrivateRoute
              path="/contacts"
              redirectTo="/login"
              component={ContactsPage}
            />
          </Switch>
        </Suspense>
      </div>
    );
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);

/*<PublicRoute
              path="/register"
              restricted
              redirected="/contacts"
              component={RegistrationPage}
            />
            <PublicRoute
              path="/login"
              restricted
              redirectTo="/contacts"
              component={LoginPage}
            />*/