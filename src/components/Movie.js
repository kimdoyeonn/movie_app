import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Styled from "styled-components";
import styled from "styled-components";

const Container = Styled.div`
  width: 45%;
  background-color: white;
  margin-bottom: 70px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-weight: 300;
  padding: 20px;
  border-radius: 5px;
  color: #adaeb9;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);

`;

const Image = Styled.img`
  position: relative;
  top: -50px;
  max-width: 150px;
  width: 100%;
  margin-right: 30px;
  box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
    0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
`;

const MLink = styled(Link)`
  display: grid;
  grid-template-columns: minmax(150px, 1fr) 2fr;
  grid-gap: 20px;
  text-decoration: none;
  color: inherit;
`;

const Title = Styled.div`
  font-weight: 300;
  margin-bottom: 5px;
  font-size: 24px;
  color: #2c2c2c;
`;

const Year = Styled.div`
  font-weight: 300;
  margin-right: 10px;
  font-size: 14px;
`;

const Genres = Styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  margin: 5px 0px;
`;
const Genre = Styled.li`
  margin-right: 10px;
  font-size: 14px;
`;

function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <Container>
      <MLink
        to={{
          pathname: `/movie/${id}`,
          state: {
            year,
            title,
            summary,
            poster,
            genres,
          },
        }}
      >
        <Image src={poster} alt={title} title={title} />
        <div className="movie__date">
          <Title>{title}</Title>
          <Year>{year}</Year>
          <Genres>
            {genres.map((genre, index) => (
              <Genre key={index}>{genre}</Genre>
            ))}
          </Genres>
          <p className="movie__summary">{summary.slice(0, 180)}...</p>
        </div>
      </MLink>
    </Container>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
