import styled from "styled-components"
import Logo from "../queryImages/logo"

/* Menu styles */
export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  position: fixed;
  top: 0;
  z-index: 1;
  height: 100px;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  @media only screen and (max-width: 500px) {
    padding-left: 20px;
    padding-right: 20px;
    height: 90px;
  }
`

/*När man hämtar in en komponent som här ovan och stilar 
den här nedan måste man i den komponenten ta emot ett 
className så det kan nå dit den ska */
export const StyledLogo = styled(Logo)`
  max-width: 250px;
  /* margin: 0 auto; */
  img {
    position: fixed !important;
    height: auto !important;
    width: 250px !important;
    top: 27px !important;
    left: 27px !important;
    transition: all 0.5s !important;
    @media only screen and (max-width: 500px) {
      width: 170px !important;
      top: 33px !important;
    }
  }
`

export const StyledMenu = styled.div`
  .bm-item {
    text-align: center;
    text-decoration: none;
    color: black;
    transition: all 0.2s;
    outline: 0;
    text-align: left;
    font-family: "Geogrotesque SmBd", "Gill Sans", "Gill Sans MT", Calibri,
      "Trebuchet MS", sans-serif;
    font-size: 35px;
    text-transform: uppercase;
    transform: scale(0.8, 1);
  }
  .bm-item:hover {
    color: pink;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6);
  }
  .bm-burger-button {
    position: fixed;
    width: 45px;
    height: 40px;
    right: 36px;
    top: 25px;
    transition: 0.2s;

    &:hover {
      .bm-burger-bars {
        background: pink;
        opacity: 1 !important;
      }
    }
  }
  .bm-burger-bars {
    background: #373a47;
    transition: 0.2s;
    height: 18% !important;
    /* border-radius: 50%; */
  }
  .bm-cross-button {
    height: 71px !important;
    width: 50px !important;
    right: 15px !important;
    transition: all 0.5s ease-in-out;
    &:hover {
      transform: rotate(90deg);
    }
  }
  .bm-cross {
    height: 60px !important;
    width: 10px !important;
    background: black;
    right: 8px;
    border-radius: 50%;
  }
  .bm-menu-wrap {
    width: 280px !important;
  }
  .bm-menu {
    background: white;
    padding: 40px 18px 10px 36px;
    font-size: 2em;
    overflow-y: hidden;
  }
  .bm-morph-shape {
    fill: #373a47;
  }
  .bm-item-list {
    color: #b8b7ad;
    padding-top: 100px;
    a {
      padding: 0;
      margin: 30px 0;
    }
  }

  .bm-overlay {
    background: rgba(0, 0, 0, 0.5) !important;
    left: 0;
    cursor: pointer;
  }
`
