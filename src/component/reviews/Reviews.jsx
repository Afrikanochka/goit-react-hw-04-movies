import React, { Component } from "react";
import ReviewsStyled from "./ReviewsStyled";
import { getMovieReviews } from "../../services/Api";
import Loader from "react-loader-spinner";

class Reviews extends Component {
  state = {
    reviews: [],
  };
  async componentDidMount() {
    const id = this.props.match.params.id || "";
    this.setState({ isLoading: true });

    await getMovieReviews(id)
      .then((results) => this.setState({ reviews: results }))
      .catch((error) => console.log(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { reviews, isLoading } = this.state;
   
    return (
      <>
      <ReviewsStyled>
        {reviews.length > 1 ? (
          <ul className="reviewList">
            {reviews.map((review) => (
              <li className="reviewItem" key={review.author}>
                <h2 className="reviewTitle">{review.author}</h2>
                <p className="reviewText">{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <h2 className="notFound">We don't have any reviews for this movie</h2>
        )}
      </ReviewsStyled>
      {isLoading && <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={80}
        width={80}
        timeout={3000} //3 secs
      />}
      </>
    );
  }
}

export default Reviews;
