import styled from "styled-components";

const MovieDetailsPageStyled = styled.div`
  margin-top: 50px;
  .wrapper {
    display: flex;
  }
  .detailsImg {
    margin-right: 50px;
  }

  .detailsTitle {
    margin-bottom: 30px;
    font-size: 50px;
    text-transform: uppercase;
    color: #a33278;
  }
  .detailsSubtitle {
    margin-bottom: 15px;
    font-size: 30px;
    color: #b9327c;
  }
  .detailsOverview {
    display: block;
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 15px;
    color: #cf408f;
  }
  .detailsList {
    margin-bottom: 15px;
    list-style: square outside;
  }
  .detailsItem {
    margin-left: 20px;
    color: #cf408f;
    font-size: 20px;
    font-weight: 500;
  }

  .detailLink {
    font-size: 30px;
    border-bottom: 1px solid #cf408f;
    color: #d64e99;
    font-weight: 500;
    &:hover {
      color: #f00f6d;
    }
  }

  .reviews {
    margin-right: 20px;
  }
  .castReviews {
    display: block;
    margin-top: 50px;
  }
`;

export default MovieDetailsPageStyled;
