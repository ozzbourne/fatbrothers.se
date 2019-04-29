import styled from "styled-components"

export const StyledFooter = styled.div`
  text-align: center;
  background: #f9f9f9;
  margin-top: 100px;
  padding: 70px;
  a {
    font-family: "Geogrotesque Rg", "Gill Sans", "Gill Sans MT", Calibri,
      "Trebuchet MS", sans-serif;
    text-decoration: none;
    display: inline-block;
    position: relative;
    color: black;
    :after {
      background: none repeat scroll 0 0 transparent;
      bottom: 0;
      content: "";
      display: block;
      height: 1px;
      left: 50%;
      position: absolute;
      background: black;
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
      width: 0;
    }
    :hover:after {
      width: 100%;
      left: 0;
    }
  }
`
