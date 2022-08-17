import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useLocation, Navigate } from "react-router-dom";

import Trending from "./trending/trending";
import Messaging from "./messaging/messaging";
import Settings from "./settings/settings";
import Feeds from "./feed/feed";
import Notifications from "./notifications/notifications";
import DiscoverPeople from "./discoverPeople/discoverPeople";
import Profile from "./profile/profile";
import MobileChatView from "./messaging/mobileView/mobileChatView/mobileChatView";
import SinglePost from "./singlePost/singlePost";
import SingleUserProfile from "./singleUserProfile/singleUserProfile";
import SingleTrendingPost from "./trending/singleTrendingPost/singleTrendingPost";
import PostArticle from "./postArticle/postArticle";
import SearchResult from "./searchResult/searchResult";
import LikedPosts from "./likedPostPage/likedPostPage"
import Followers from "./followersPage/followersPage"
import Followings from "./followings/followings"
import Repost from "./repostPage/repost"
import Comments from "./commentPage/commentPage"
import SavedPost from "./savedPost/savedPost"

import TopBar from "../../constants/topbar/topBar";
import home from "../../assets/home.png";
import trending from "../../assets/trending.png";
import mail from "../../assets/mail.png";
import bell from "../../assets/bell.png";

import { NavigationBox, Icon, Container, IconBox } from "./userAccountStyles";
import MAccountComponent from "./settings/mobileView/account/account";
import MFeedsComponent from "./settings/mobileView/feeds/feeds";
import MChat from "./settings/mobileView/chat/chat";
import MSafety from "./settings/mobileView/safety/safety";
import MNotifications from "./settings/mobileView/nofications/notifications";
import MBlocked from "./settings/mobileView/blocked/blocked";
import MMuted from "./settings/mobileView/muted/muted";
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
      {screenWidth && location === "/user/notifications" 
      ? ("") 
      : screenWidth && location === "/user/discover" 
      ? (" ")
      : screenWidth && location === "/user/profile" 
      ? (" ")
      : screenWidth && location === "/user/article/new" 
      ? (" ")
      : screenWidth && location === "/user/messaging" 
      ? (" ")
      : screenWidth && location === "/user/messages/chats" 
      ? (" ")
      : screenWidth && location === "/user/saved-posts" 
      ? (" ")
      : screenWidth && location === "/user/search" 
      ? (" ")
      : screenWidth && location.includes("/user/settings" ) 
      ? (" ")
      : screenWidth && location.includes("/user/msettings" ) 
      ? (" ")
      : screenWidth && location.includes("post" ) 
      ? (" ")
      : screenWidth && location.includes("followings" ) 
      ? (" ")
      : screenWidth && location.includes("followers" ) 
      ? (" ")
      : (<TopBar />)}
      <div
      >
        {/* General snackbar renders when the associate dispatch action fires */}
        <SnackBar open={openSnackBar} message={snackBarMsg} />

        <Routes>
          <Route element={<ProtectedRoutes />}>
              <Route exact path="feed" element={<Feeds/>} />
              <Route exact path="messaging" element={<Messaging />} />
              <Route exact path="search" element={<SearchResult />} />
          </Route>

          <Route exact path="messages/chats" element={<MobileChatView />}/>

          <Route exact path="settings/*" element={<Settings />} />

          <Route exact path="msettings/account" element={<MAccountComponent />} />

          <Route exact path="msettings/feeds" element={<MFeedsComponent />} />

          <Route exact path="msettings/chat" element={ <MChat />} />

          <Route exact path="msettings/safety" element={<MSafety />} />

          <Route exact path="msettings/notification" element={<MNotifications />} />

          <Route exact path="msettings/blocked" element={<MBlocked />} />

          <Route exact path="msettings/muted" element={<MMuted />} />

          <Route exact path="notifications" element={<Notifications />} />

          <Route exact path="trending/post/:id" element={<SingleTrendingPost />} />

          <Route exact path="trending" element={<Trending />} />

          <Route exact path="saved-posts" element={<SavedPost />} />

          {/* <Route exact path="profile" element={<Profile />} /> */}

          <Route exact path="discover" element={<DiscoverPeople />} />

          <Route exact path="article/new" element={<PostArticle />} />

          <Route  path=":username/post/:id/likes" element={<LikedPosts />} />

          <Route  path=":username/post/:id/reposts" element={<Repost />} />

          <Route  path=":username/post/:id/comments" element={<Comments />} />

          <Route  path=":username/followers" element={<Followers />} />

          <Route  path=":username/followings" element={<Followings />} />

          <Route  path=":username" element={<SingleUserProfile />} />

          <Route  path=":username/post/:post_url/" element={<SinglePost />} />

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
