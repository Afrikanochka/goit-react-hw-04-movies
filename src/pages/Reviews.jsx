import React, { Component } from "react";
import ReviewsStyled from "../styles/ReviewsStyled";
import { getMovieReviews } from "../services/Api";

class Reviews extends Component {
  state = {
    reviews: [],
  };
  async componentDidMount() {
    const id = this.props.match.params.id || "";
    await getMovieReviews(id)
      .then((results) => this.setState({ reviews: results }))
      .catch((error) => console.log(error));
  }
  render() {
    const { reviews } = this.state;
   
    return (
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
    );
  }
}

export default Reviews;
