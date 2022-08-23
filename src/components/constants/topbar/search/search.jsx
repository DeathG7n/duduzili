import React, { useEffect, useState,useRef } from "react";

import { Container, Content, Header, Item, SearchArticle, Topic , SearchImg, SearchBox} from "./searchStyles";

import SearchIcon from '@mui/icons-material/Search';

import logo from "../../../assets/new-logo.png";
import cancel from "../../../assets/x.svg";
import { useGetRequest, useSearchRequest, useDeleteRequest } from "../../../api/api";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../../api/context";

const Index = ({ handleOpenSearch, show , search}) => {
  const {state: { getTopics, postData, trendingPosts, discoverPeople },} = DataContext()
  const [searchString, setSearchString] = useState(null);
  const { getRequest, data } = useGetRequest();
  const { searchRequest } = useSearchRequest();
  const { deleteRequest, loading } = useDeleteRequest();

  useEffect(() => {
    getRequest("search_list/");  
  }, [loading]);

  const topics = getTopics?.topics?.map((c)=>{
    return {
      img: logo,
      text: c.title
    }
  })
  const posts = postData?.map((c)=>{
    return {
      img: logo,
      text: c.text
    }
  })
  const trendingPost = trendingPosts?.trending?.article?.map((c)=>{
    return {
      img: logo,
      text: c.text
    }
  })
  const users = discoverPeople?.users?.map((c)=>{
    return {
      img: logo,
      text: `${c?.first_name} ${c?.last_name}`
    }
  })

  const searches = topics?.concat(posts, trendingPost, users) 
  
  useEffect(()=>{
    searches.sort(()=> 0.5 - Math.random())
  },[searches])

  const searchArticle = searches?.map((s)=>{
    const show = s?.text !== "" && s?.text?.toLowerCase()?.includes(search?.toLowerCase())
    console.log(show)
    return(
      <>
      {<SearchBox onClick={() => makeSearchRequest(s?.text)} style={{display: show ? "flex" : "none"}}>
        <SearchArticle>{s?.text?.substring(0, 30)}</SearchArticle>
      </SearchBox>}
      </>
  )
})

  

  const history = useNavigate();
  const moreRef = useRef()
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          handleOpenSearch();
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  useOutsideAlerter(moreRef)

  const changeRoute = () => {
    handleOpenSearch();
    return history.push("/user/search");
  };

  const handleSubmit = () => {
    if (searchString === null) {
      return;
    } else {
      searchRequest(`make_search/`, changeRoute, searchString)
    }
  };

  const handleSearchString = (str) => {
    setSearchString(str);
  };

  const makeSearchRequest = (str) => {
    handleSearchString(str);
    if (searchString) {
      handleSubmit();
    }
  };
  const makeDeleteRequest = (id) => {
    deleteRequest(`delete_search/${id}/`)
  };

  const clearSearches = () => {
    deleteRequest("clear_searches")
  };

  return (
    <Container>
      <Content ref={moreRef}>
       {!show && <Header>
          <h4>Recent</h4>
          <h5 onClick={clearSearches}>Clear all</h5>
        </Header>}

        {show && searchArticle}

        {!show && data?.searches.length === 0 ? (
          <><h3 style={{
            color: "#49665C",
            fontSize: "13px",
            padding: "10px 0 20px 15px"
        }}>No Recent search</h3>
        </>
        ) : (
          data?.searches.map((item) => { 
            return (
              <Item key={item?.id}>
                <Topic onClick={() => makeSearchRequest(item?.search_string)}>
                  <SearchIcon sx={{fontSize: "35px"}}/>
                  <h4>
                    {item?.search_string}
                  </h4>
                </Topic>

                <img alt="icon" src={cancel} style={{ cursor: "pointer" }} onClick={()=>{
                  makeDeleteRequest(item?.id)
                }}/>
              </Item>
            );
          })
        )}
        
      </Content>
    </Container>
  );
};

export default Index;
