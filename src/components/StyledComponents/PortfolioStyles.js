import styled from "styled-components"

export const AllPortfolioItemsWrapper = styled.div`
  padding-top: 200px;
  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); */
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;
  @media (max-width: 1370px) {
    padding-top: 150px;
  }
  @media (max-width: 889px) {
    grid-gap: 25px;
  }
`

export const PortfolioItemWrapper = styled.div`
  position: relative;
  box-shadow: 3px 3px 8px 3px #ccc !important;
  overflow: hidden;
  .PortfolioItemInfo {
    border-top: 2px solid black;
    position: absolute;
    background: ${props => props.backgroundColor};
    color: ${props => props.textColor};
    width: 100%;
    bottom: -240px;
    transition: 0.5s ease-in-out;
    overflow-y: hidden;
    padding: 12px;
    text-align: center;
    font-family: "Geogrotesque Rg", "Gill Sans", "Gill Sans MT", Calibri,
      "Trebuchet MS", sans-serif;
    h3 {
      font-family: "Geogrotesque SmBd", "Gill Sans", "Gill Sans MT", Calibri,
        "Trebuchet MS", sans-serif;
    }
    p {
      margin-bottom: 8px;
    }
    a {
      margin-bottom: 0;
      color: ${props => props.textColor};
      text-decoration: none;
      display: inline-block;
      position: relative;
      :after {
        background: none repeat scroll 0 0 transparent;
        bottom: 0;
        content: "";
        display: block;
        height: 2px;
        left: 50%;
        position: absolute;
        background: ${props => props.textColor};
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
        @media (max-width: 915px) {
          height: 1px;
        }
      }
      :hover:after {
        width: 100%;
        left: 0;
      }
    }
    @media (max-width: 915px) {
      h3 {
        font-size: 18px;
        margin-bottom: 10px;
      }
      p,
      a {
        font-size: 14px;
        line-height: 18px;
        /* margin-bottom: 0px; */
      }
    }
    @media (max-width: 400px) {
      h3 {
        font-size: 14px;
        margin-bottom: 5px;
      }
      p,
      a {
        font-size: 8px;
        line-height: 14px;
        margin-bottom: 2px;
      }
    }
  }
  :hover {
    .PortfolioItemInfo {
      bottom: 0px;
    }
  }
`
