import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ResponsiveHeader from './components/layout/Responsive-Header';
import TopBar from './components/layout/TopBar';
import BannerPhoto from './components/layout/Banner-Photo';
import MainContentLayout from './components/main-content/layout/Main-Content-Layout';
import DesireCategory from './components/category-selection/Desire-Category';
import Header from './components/category-selection/layout/Header';
import ChooseCategory from './components/category-selection/Choose-Category';
import SelectedCategory from './components/category-selection/Selected-Category';
import ViewStars from './components/category-selection/View-Stars';
import TimeLine from './components/main-content/Time-Line';
import CategorySelectionRoutes from './components/category-selection/Category-Selection-Routes';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />

        <CategorySelectionRoutes
          exact
          path="/choose-category"
          component={ChooseCategory}
        />
        <CategorySelectionRoutes
          exact
          path="/select-category"
          component={DesireCategory}
        />
        <CategorySelectionRoutes
          path="/selected-category"
          component={SelectedCategory}
        />
        <CategorySelectionRoutes
          exact
          path="/view-super-stars"
          component={ViewStars}
        />

        <Route
          path={'/(.+)'}
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
