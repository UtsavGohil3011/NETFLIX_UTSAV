import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovie } from "../../toolkit/slices/getData";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie.data);

  useEffect(() => {
    dispatch(fetchMovie());
  }, [dispatch]);

  return (
    <div className="d-flex flex-wrap">
      {movies.map((movie) => (
        <Card
          key={movie.imdbID}
          className="d-flex m-2"
          style={{
            width: "18rem",
            height: "600px", // Adjust height as needed
            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", // Box shadow
          }}
        >
          <Card.Img variant="top" src={movie.Poster} style={{ height: "60%" }} />
          <Card.Body className="d-flex flex-column justify-content-between">
            <div>
              <Card.Title>{movie.Title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{movie.Year}</Card.Subtitle>
              <Card.Text>{movie.Runtime}</Card.Text>
            </div>
            <Button variant="primary">Go And Watch</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Home;
