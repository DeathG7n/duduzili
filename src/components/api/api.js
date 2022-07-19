import { API } from "./axiosConfig";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "./context";


export const usePostRequest = () => {
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const history = useNavigate();
  const { dispatch } = DataContext();

  const postRequest = (endpoint, data) => {
    setLoading(true);
    API({
      url: endpoint,
      method: "POST",
      data: data,
      responseType: 'json',
    }).then((res) => {
        console.log(res);
        setLoading(false);
        if (endpoint === "signin/") {
          dispatch({ type: "LOGIN", payload: res.data });
          history("/user/feed");
        }
      }).catch((err) => {
        if (endpoint === "signup/" || "signin/") {
          // console.log("User with this email already exists.");
          console.log(err.response)
          setOpenSnackbar(true);
          setMessage(
            (err.response && err.response.data.error) && "Something went wrong"
          );
        }
        setLoading(false);
      });
  };

  return {
    postRequest,
    // openModal,
    loading,
    openSnackbar,
    setOpenSnackbar,
    message,
  };
};

export const useGetRequest = () => {
  const [loading, setLoading] = useState(false);
  const { dispatch } = DataContext();
  const [data, setData] = useState(null);

  const getRequest = (endpoint, cb) => {
    setLoading(true);
    API({
      url: endpoint,
      method: "GET",
    })
      .then((res) => {
        setLoading(false);
        setData(res.data);
        // cb()
        console.log(res.data);

        if (endpoint === "dashboard/") {
          dispatch({ type: "SAVE_USER", payload: res.data });
        }

        if (endpoint === "posts/") {
          dispatch({ type: "POST", payload: res.data });
        }

        if (endpoint === "notifications/") {
          dispatch({ type: "NOTIFICATIONS", payload: res.data });
        }

        if (endpoint === "trending/") {
          dispatch({ type: "TRENDING", payload: res.data });
        }

        if (endpoint === "get_topics/") {
          dispatch({ type: "GET_TOPICS", payload: res.data });
        }

        if (endpoint === "conversations/") {
          dispatch({ type: "CONVERSATIONS", payload: res.data });
        }

        if (endpoint === "discover_people/") {
          dispatch({ type: "DISCOVER_PEOPLE", payload: res.data });
        }

        if (endpoint.includes("make_search")) {
          dispatch({ type: "SEARCH_RESULTS", payload: res.data });
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return {
    loading,
    getRequest,
    data,
  };
};

export const useFollowGetRequest = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const { dispatch } = DataContext();

  const getFollowRequest = (endpoint, isFollowing) => {
    setLoading(true);
    API({
      url: endpoint,
      method: "GET",
    })
      .then((res) => {
        setLoading(false);
        console.log(res.data);
        setData(res.data);
        dispatch({
          type: "OPEN_SNACKBAR",
          payload: isFollowing === true ? "User unfollowed" : "User followed",
        });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return {
    loading,
    getFollowRequest,
    data,
  };
};

export const useGetLikeRequest = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const { dispatch } = DataContext();

  const getLikeRequest = (endpoint, isFollowing) => {
    setLoading(true);
    API({
      url: endpoint,
      method: "GET",
    })
      .then((res) => {
        setLoading(false);
        console.log(res.data);
        setData(res.data);
        dispatch({
          type: "OPEN_SNACKBAR",
          payload: isFollowing === true ? "Post Unliked" : "Post Liked",
        });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return {
    loading,
    getLikeRequest,
    data,
  };
};

export const usePostComment = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const { dispatch } = DataContext();

  const postComment = (endpoint, data, cb, reload) => {
    setLoading(true);
    API({
      url: endpoint,
      method: "POST",
      data,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        setLoading(false);
        console.log(res.data);
        setData(res.data);
        dispatch({ type: "OPEN_SNACKBAR", payload: "Post Successful" });
        cb();

        // reload after completion of request
        reload();
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        // function that closes modal
        cb();
      });
  };

  return {
    loading,
    postComment,
    data,
  };
};

export const useUpdateRequest = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const { dispatch } = DataContext();

  const updateRequest = (endpoint, id, data, cb, reload) => {
    setLoading(true);
    API({
      url: `${endpoint}/${id}/`,
      method: "PUT",
      data,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        setLoading(false);
        console.log(res.data);
        setData(res.data);
        dispatch({
          type: "OPEN_SNACKBAR",
          payload: "Profile updated successfully",
        });
        // function that closes modal
        cb();
        // reload function is optional
        reload();
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return {
    loading,
    updateRequest,
    data,
  };
};

export const useSearchRequest = () => {
  const [loading, setLoading] = useState(false);
  const { dispatch } = DataContext();
  const [data, setData] = useState(null);

  const searchRequest = (endpoint, cb) => {
    setLoading(true);
    API({
      url: endpoint,
      method: "GET",
    })
      .then((res) => {
        setLoading(false);
        setData(res.data);
        cb();
        console.log(res.data);

        if (endpoint.includes("make_search")) {
          dispatch({ type: "SEARCH_RESULTS", payload: res.data });
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return {
    loading,
    searchRequest,
    data,
  };
};

export const useDeleteRequest = () => {
  const [loading, setLoading] = useState(false);
  const { dispatch } = DataContext();

  const deleteRequest = (endpoint, id) => {
    setLoading(true);
    API({
      url: `${endpoint}/${id}/`,
      method: "DELETE",
    })
      .then(() => {
        setLoading(false);
        dispatch({ type: "OPEN_SNACKBAR", payload: "Post Deleted" });
        window.location.reload(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        // function that closes modal
      });
  };

  return {
    loading,
    deleteRequest,
  };
};

export const useUserActions = () => {
  const [loading, setLoading] = useState(false);
  const { dispatch } = DataContext();

  const userAction = (endpoint, message) => {
    setLoading(true);
    API({
      url: endpoint,
      method: "GET",
    })
      .then((res) => {
        setLoading(false);
        if (res.status === 200) {
          dispatch({ type: "OPEN_SNACKBAR", payload: message });
        }
        console.log(res.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return {
    loading,
    userAction,
  };
};

export const useMarkRequest = () => {
  const [loading, setLoading] = useState(false);
  const { dispatch } = DataContext();

  const markRequest = (endpoint) => {
    setLoading(true);
    API({
      url: endpoint,
      method: "GET",
    })
      .then((res) => {
        setLoading(false);
        if (res.status === 200) {
          dispatch({ type: "MARK_RESPONSE", payload: res.data });
        }
        console.log(res.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return {
    loading,
    markRequest,
  };
};
