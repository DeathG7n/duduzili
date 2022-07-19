


export const initialValues = {
  token: JSON.parse(localStorage.getItem("token") || null),
  isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn") || false),
  userData: null,
  postData: null,
  notification: null,
  discoverPeople: null,
  trendingPosts: null,
  conversations: null,
  getTopics: null,
  postID: null,
  openSnackBar: false,
  snackBarMsg: null,
  openPostModal: true,
  getPostId: null,
  getRepostData: null,
  repostId: null,
  searchResults: null,
  hideTopBar: false,
  getEditPost: null,
  singleRepostData: null,
};

export const reducer = (state, action) => {
  if (action.type === "LOGIN") {
    // Set the token on the localstorage
    localStorage.setItem("token", JSON.stringify(action.payload.token));
    localStorage.setItem("isLoggedIn", JSON.stringify(true));
    console.log(state)
    return {
      ...state,
      isLoggedIn: true,
      token: action.payload.token,
    };
  }
  // Save user profile data
  else if (action.type === "SAVE_USER") {
    return {
      ...state,
      userData: action.payload,
      isLoggedIn: true,
    };
  }
  // Fetch all news feed posts
  else if (action.type === "POST") {
    return {
      ...state,
      postData: action.payload,
    };
  }
  // Fetch notifications
  else if (action.type === "NOTIFICATIONS") {
    return {
      ...state,
      notification: action.payload,
    };
  }
  // Fetch trending posts
  else if (action.type === "TRENDING") {
    return {
      ...state,
      trendingPosts: action.payload,
    };
  }
  // Fetch conversations
  else if (action.type === "CONVERSATIONS") {
    return {
      ...state,
      conversations: action.payload,
    };
  }

  // Fetch trending topics
  else if (action.type === "GET_TOPICS") {
    return {
      ...state,
      getTopics: action.payload,
    };
  }

  // Fetch discover people
  else if (action.type === "DISCOVER_PEOPLE") {
    return {
      ...state,
      discoverPeople: action.payload,
    };
  }

  // get post id
  else if (action.type === "POST_ID") {
    return {
      ...state,
      postID: action.payload,
    };
  }

  // open snackbar and pass the snackbar message
  else if (action.type === "OPEN_SNACKBAR") {
    return {
      ...state,
      snackBarMsg: action.payload,
      openSnackBar: true,
    };
  } else if (action.type === "CLOSE_SNACKBAR") {
    return {
      ...state,
      openSnackBar: false,
    };
  } else if (action.type === "LOGOUT") {
    localStorage.clear();
    window.location.reload(false);
    
  }

  // Update search results
  else if (action.type === "SEARCH_RESULTS") {
    return {
      ...state,
      searchResults: action.payload,
    };
  }

  // Hide and Show topBar
  else if (action.type === "HIDE_TOPBAR") {
    return {
      ...state,
      hideTopBar: false,
    };
  } else if (action.type === "SHOW_TOPBAR") {
    return {
      ...state,
      hideTopBar: true,
    };
  } else if (action.type === "SHOW_CREATEPOSTMODAL") {
    return {
      ...state,
      openPostModal: !state.openPostModal,
    };
  } else if (action.type === "GET_REPOSTDATA") {
    return {
      ...state,
      getRepostData: state.postData.find((item) => item.id === state.repostId),
    };
  } else if (action.type === "GET_REPOST_ID") {
    return {
      ...state,
      repostId: action.payload,
    };
  } else if (action.type === "GETPOST_ID") {
    return {
      ...state,
      getPostId: action.payload,
    };
  } else if (action.type === "GET_EDITPOST") {
    return {
      ...state,
      getEditPost: state.postData.find((item) => item.id === state.getPostId),
    };
  }
  // get the repost data of the single page post
  else if (action.type === "GET_SINGLE_REPOST") {
    return {
      ...state,
      singleRepostData: action.payload,
    };
  } else {
    return state;
  }
};
