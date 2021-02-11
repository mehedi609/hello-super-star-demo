import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ResponsiveHeader from './components/layout/Responsive-Header';
import TimeLine from './components/main-content/Time-Line';
import TopBar from './components/layout/TopBar';
import BannerPhoto from './components/layout/Banner-Photo';
import MainContentLayout from './components/main-content/layout/Main-Content-Layout';
import DesireCategory from './components/category-selection/Desire-Category';
import Layout from './components/category-selection/layout/Layout';

function App() {
  return (
    <>
      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
        <Route
          path="/(.+)"
          render={() => (
            <>
              <Layout />
            </>
          )}
        />
        <Route
          path="/(.+)"
          render={() => (
            <>
              <div className="theme-layout">
                <ResponsiveHeader />
                <TopBar />
                <BannerPhoto />
                {/*<Route exact path="/time-line">
                  <TimeLine />
                </Route>*/}
                <MainContentLayout />
              </div>
            </>
          )}
        />
      </Switch>
    </>
  );
}

export default App;
