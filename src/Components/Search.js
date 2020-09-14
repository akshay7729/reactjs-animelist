import React, { useState, useRef } from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { SEARCH } from "../Redux/Constants";

const Search = () => {
  const searchInput = useRef("");
  const searchDispatch = useDispatch();
  const listResults = useSelector((state) => state.search);
  const handleSearch = () => {
    if (searchInput.current.value) {
      Axios.get(
        `https://api.jikan.moe/v3/search/anime?q=${searchInput.current.value}&limit=16`
      )
        .then((response) => {
          console.log("response.data.results", response.data.results);
          searchDispatch({
            type: SEARCH.RESPONSE,
            payload: response.data.results,
          });
        })
        .catch((error) => {
          console.log("err", error.message);
          searchDispatch({
            type: SEARCH.ERROR,
            payload: error.message,
          });
        });
    } else {
      console.log("err empty");
      searchDispatch({
        type: SEARCH.ERROR,
        payload: "Please enter input",
      });
      searchDispatch({
        type: SEARCH.RESPONSE,
        payload: [],
      });
    }
  };

  return (
    <React.Fragment>
      <Navbar expand="lg" className="px-0 pt-4 fixed-top container">
        <Navbar.Toggle aria-controls="anime-navbar" />
        <Navbar.Collapse id="anime-navbar">
          <Form inline className="w-100">
            <FormControl
              type="text"
              placeholder="Search"
              className="flex-grow-1 search-box"
              ref={searchInput}
            />
            <Button className="search-btn" onClick={handleSearch}>
              Go
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <div className="position-fixed requesting">
        {listResults.search.length ? (
          `Requesting - https://api.jikan.moe/v3/search/anime?q=${searchInput.current.value}&limit=16`
        ) : (
          <div></div>
        )}
        {listResults.error ? listResults.error : <div></div>}
      </div>
    </React.Fragment>
  );
};

export default Search;
