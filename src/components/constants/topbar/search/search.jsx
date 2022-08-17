import React, { useEffect, useState,useRef } from "react";

import { Container, Content, Header, Item, Topic } from "./searchStyles";
import search from "../../../assets/search.svg";
import cancel from "../../../assets/x.svg";
import { useGetRequest, useSearchRequest, useDeleteRequest } from "../../../api/api";
import { useNavigate } from "react-router-dom";

const Index = ({ handleOpenSearch }) => {
  const [searchString, setSearchString] = useState(null);
  const { getRequest, data } = useGetRequest();
  const { searchRequest } = useSearchRequest();
  const { deleteRequest } = useDeleteRequest();

  useEffect(() => {
    getRequest("search_list/");  
  }, []);

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

  console.log(data)
  console.log(searchString);

  return (
    <Container>
      <Content ref={moreRef}>
        <Header>
          <h4>Recent</h4>
          <h5 onClick={clearSearches}>Clear all</h5>
        </Header>

        {data?.searches.length === 0 ? (
          <h3 style={{
            color: "#49665C",
            fontSize: "13px",
            padding: "10px 0 20px 15px"
        }}>No Recent search</h3>
        ) : (
          data?.searches.map((item) => { 
            return (
              <Item key={item?.id}>
                <Topic onClick={() => makeSearchRequest(item?.search_string)}>
                  <img alt="icon" src={search} />
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
