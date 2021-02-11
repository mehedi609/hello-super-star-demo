import React from 'react';
import { Route } from 'react-router';
import RightSidebarFriendList from './Right-Sidebar-FriendList';
import LeftSidebarMenu from './Left-Sidebar-Menu';
import TimeLine from '../Time-Line';
import PrivateRoute from '../../helpers/PrivateRoute';

const MainContentLayout = () => {
  return (
    <>
      <section>
        <div className="gap gray-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="row merged20" id="page-contents">
                  {/*left sidebar*/}
                  <LeftSidebarMenu />
                  {/*Main Content*/}
                  <Route exact path="/time-line">
                    <TimeLine />
                  </Route>
                  {/*Right Sidebar*/}
                  <RightSidebarFriendList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainContentLayout;
