import React from "react";
import Styled from "styled-components";
import PropTypes from "prop-types";
import Movie from "Components/Movie";
import Loader from "Components/Loader";

const Container = Styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 50px;
  padding-top: 70px;
  width: 80%;
`;

const HomePresenter = ({ loading, movies, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {movies &&
        movies.length > 0 &&
        movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            year={movie.year}
            title={movie.title}
            summary={movie.summary}
            poster={movie.medium_cover_image}
            genres={movie.genres}
          />
        ))}
    </Container>
  );

HomePresenter.propTypes = {
  movies: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;
