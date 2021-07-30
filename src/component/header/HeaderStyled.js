import styled from "styled-components";

const HeaderStyled = styled.header`
  padding: 20px 50px;
  border-bottom: 1px solid #e0d3d3;
  margin-bottom: 20px;
  .navigationList {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .navigationItem:not(:last-child) {
    margin-right: 70px;
  }
  .navigationLink {
    font-weight: 900;
    font-size: 30px;
    text-decoration: none;
    color: #9c02a1;
    text-transform: uppercase;
    &:hover {
      color: #f00f6d;
    }
  }

  .activeNavigationLink {
    color: #5e0312;
    margin-bottom: 20px;
  }
`;

export default HeaderStyled;
