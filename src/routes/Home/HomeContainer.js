import React from "react";
import axios from "axios";
// import Movie from "../Components/Movie.js";
import "./Home.css";
import HomePresenter from "./HomePresenter";

class Home extends React.Component {
  state = {
    loading: true,
    error: null,
    movies: [],
  };

  async componentDidMount() {
    try {
      const {
        data: {
          data: { movies },
        },
      } = await axios.get(
        "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
      );
      this.setState({ movies });
    } catch {
      this.setState({ error: "ERRORRRRRRRRRRR" });
    } finally {
      this.setState({ loading: false });
    }
  }
  render() {
    const { loading, movies, error } = this.state;
    return <HomePresenter loading={loading} movies={movies} error={error} />;
  }
}

export default Home;
