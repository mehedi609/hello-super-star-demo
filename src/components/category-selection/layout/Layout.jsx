import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import DesireCategory from '../Desire-Category';
import ChooseCategory from '../Choose-Category';
import SelectedCategory from '../Selected-Category';
import ViewStars from '../View-Stars';

const Layout = () => {
  return (
    <>
      <Header />
      <Route exact path="/choose-category">
        <ChooseCategory />
      </Route>
      <Route exact path="/select-category">
        <DesireCategory />
      </Route>
      <Route exact path="/selected-category">
        <SelectedCategory />
      </Route>
      <Route exact path="/view-super-stars">
        <ViewStars />
      </Route>
    </>
  );
};

export default Layout;
