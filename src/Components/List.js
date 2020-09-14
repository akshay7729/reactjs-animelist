import React from "react";
import Row from "react-bootstrap/Row";
import { useSelector } from "react-redux";
import ListCard from "../Components/listCard";

const List = () => {
  const listResults = useSelector((state) => state.search);
  return (
    <Row className="list-grid px-2">
      {listResults.search.length ? (
        listResults.search.map((list, index) => {
          return <ListCard list={list} key={index} />;
        })
      ) : (
        <div></div>
      )}
    </Row>
  );
};

export default List;
