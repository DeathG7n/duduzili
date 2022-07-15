import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useLocation, Navigate } from "react-router-dom";

import Trending from "./trending/index";
import Messaging from "./messaging/index";
import Settings from "./settings/index";
import Feeds from "./feed/index";
import Notifications from "./notifications/index";
import DiscoverPeople from "./discoverPeople/index";
import Profile from "./profile/index";
import MobileChatView from "./messaging/mobileView/mobileChatView/index";
import SinglePost from "./singlePost/index";
import SingleUserProfile from "./singleUserProfile/index";
import SingleTrendingPost from "./trending/singleTrendingPost/index";
import PostArticle from "./postArticle/index";
import SearchResult from "./searchResult/index";
import LikedPosts from "./likedPostPage/index"
import Followers from "./followersPage/index"
import Followings from "./followings/index"
import Repost from "./repostPage/index"

import TopBar from "../../constants/topbar/index";
import home from "../../assets/home.png";
import trending from "../../assets/trending.png";
import mail from "../../assets/mail.png";
import bell from "../../assets/bell.png";

import { NavigationBox, Icon, Container, IconBox } from "./userAccountStyles";
import MAccountComponent from "./settings/mobileView/account/index";
import MFeedsComponent from "./settings/mobileView/feeds/index";
import MChat from "./settings/mobileView/chat/index";
import MSafety from "./settings/mobileView/safety/index";
import MNotifications from "./settings/mobileView/nofications/index";
import SnackBar from "../../constants/successSnackbar";

import { DataContext } from "../../api/context";
import { useGetRequest } from "../../api/api";
import ProtectedRoutes from "../../constants/protectedRoute";

const Index = () => {
  const { getRequest } = useGetRequest();
  const [screenWidth, setScreenWith] = useState(false);

  const volumeRequest = async () => {
    let promise = await Promise.all([
      getRequest("dashboard/"),
      getRequest("posts/"),
      getRequest("notifications/"),
      getRequest("trending/"),
      getRequest("get_topics/"),
      getRequest("conversations/"),
      getRequest("discover_people/"),
    ]);
    return promise;
    console.log(promise)
  };

  useEffect(() => {
    volumeRequest();
      // getRequest("dashboard/")
      // getRequest("posts/"),
      // getRequest("notifications/"),
      // getRequest("trending/"),
      // getRequest("get_topics/"),
      // getRequest("conversations/"),
      // getRequest("discover_people/"),

    // Get screen size so as to hide topbar in some components
    if (window.innerWidth < 900) {
      setScreenWith(prevState => !prevState);
    } else {
      return;
    }
  }, [])

  const {
    state: { userData, openSnackBar, snackBarMsg, hideTopBar },
  } = DataContext();

  // Get the current route location
  const location = useLocation().pathname;
  return (
    <Container>
      {/* Query pathname and hide topbar */}
      {screenWidth && location === "/user/notifications" ? (
        ""
      ) : screenWidth && location === "/user/discover" ? (
        " "
      ) 
      
      // : screenWidth && hideTopBar ? (
      //   ""
      // ) 
      : (
        <>
          <TopBar />
          {/* <Feeds/> */}
        </>
        
      )}
      <div
        // Apply padding to every route except discover and notification routes
        // style={{
        //   paddingTop:
        //     screenWidth && location === "/user/discover"
        //       ? "0px"
        //       : screenWidth && location === "/user/notifications"
        //       ? "0px"
        //       : "60px",
        // }}
      >
        {/* General snackbar renders when the associate dispatch action fires */}
        <SnackBar open={openSnackBar} message={snackBarMsg} />

        <Routes>
          <Route element={<ProtectedRoutes />}>
              <Route exact path="feed" element={<Feeds/>} />
              <Route exact path="messaging" element={<Messaging />} />
              <Route exact path="search" element={<SearchResult />} />
          </Route>
          {/* <ProtectedRoute path="/user/feed" component={Feeds} />

          <ProtectedRoute path="/user/messaging" component={Messaging} />

          <ProtectedRoute path="/user/search" component={SearchResult} /> */}

          <Route path="messages/chats" element={<MobileChatView />}/>
            
          

          <Route path="settings" element={<Settings />} />

          <Route path="msettings/account" element={<MAccountComponent />} />

          <Route path="msettings/feeds" element={<MFeedsComponent />} />

          <Route path="msettings/chat" element={ <MChat />} />

          <Route path="msettings/safety" element={<MSafety />} />

          <Route path="msettings/notification" element={<MNotifications />} />

          <Route path="notifications" element={<Notifications />} />

          <Route path="trending/post/:id" element={<SingleTrendingPost />} />

          <Route path="trending" element={<Trending />} />

          <Route path="profile" element={<Profile />} />

          <Route path="discover" element={<DiscoverPeople />} />

          <Route path="article/new" element={<PostArticle />} />

          <Route path=":username/post/:id/likes" element={<LikedPosts />} />

          <Route path=":username/post/:id/reposts" element={<Repost />} />

          <Route path=":username/followers" element={<Followers />} />

          <Route path=":username/followings" element={<Followings />} />

          <Route exact path=":username/:id" element={<SingleUserProfile />} />

          <Route path=":id" element={<SinglePost />} />

          <Route path="*" element={<Navigate to="feed"/>} />

          </Routes>
      </div>

      {/* Bottom menu. display only on mobile view */}
      <NavigationBox
        style={{ display: location === "/user/messages/chats" ? "none" : "" }}
      >
        <div>
          <Link
            to="/user/feed"
            style={{ color: "#10221C", textDecoration: "none" }}
          >
            <IconBox>
              <Icon alt="icon" src={home} />
              <p>Home</p>
            </IconBox>
          </Link>

          <Link
            to="/user/trending"
            style={{ color: "#10221C", textDecoration: "none" }}
          >
            <IconBox>
              <Icon alt="icon" src={trending} />
              <p>Trend</p>
            </IconBox>
          </Link>

          <Link
            to="/user/notifications"
            style={{ color: "#10221C", textDecoration: "none" }}
          >
            <IconBox>
              <Icon alt="icon" src={bell} />
              <p>Notification</p>
              {userData?.number_of_notifications > 0 ? (
                <div className="notify">
                  {userData?.number_of_notifications}
                </div>
              ) : (
                ""
              )}
            </IconBox>
          </Link>

          <Link
            to="/user/messaging"
            style={{ color: "#10221C", textDecoration: "none" }}
          >
            <IconBox>
              <Icon alt="icon" src={mail} />
              <p>Message</p>

              {userData?.number_of_messages > 0 ? (
                <div className="notify">{userData?.number_of_messages}</div>
              ) : (
                ""
              )}
            </IconBox>
          </Link>
        </div>
      </NavigationBox>
    </Container>
  );
};

export default Index;
