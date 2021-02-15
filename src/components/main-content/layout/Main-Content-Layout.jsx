import React from 'react';
import { Route } from 'react-router';
import RightSidebarFriendList from './Right-Sidebar-FriendList';
import LeftSidebarMenu from './Left-Sidebar-Menu';
import TimeLine from '../Time-Line';
import TimeLineFriends from './TimeLineFriends';
import TimeLinePhotos from './TimeLinePhotos';
import TimeLineVideos from './TimeLineVideos';
import TimeLineGroups from './TimeLineGroups';
import TimeLineAbout from './TimeLineAbout';

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
                  <Route exact path="/timeline-friends">
                    <TimeLineFriends />
                  </Route>
                  <Route exact path="/timeline-photos">
                    <TimeLinePhotos />
                  </Route>
                  <Route exact path="/timeline-videos">
                    <TimeLineVideos />
                  </Route>
                  <Route exact path="/timeline-groups">
                    <TimeLineGroups />
                  </Route>
                  <Route exact path="/timeline-about">
                    <TimeLineAbout />
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
