import styled from "styled-components";

export default styled.div`
  ul {
    /* display: block; */
    display: flex;

    li {
      display: inline-flex;
      flex-shrink: 4;
    }

    li:not(:last-child) {
      margin: 0 1vw 0 0;
    }
  }

  img {
    height: 23vh;
    border: 1px black solid;
    border-radius: 14px;
  }

  a > span {
    color: black;
    display: inline;
    position: relative;
    top: 18px;
    left: 33%;
  }
  a {
    text-decoration: none;
  }
  /* 
  @media (max-width: 1426px) {
    img {
      height: 22vh;
    }
  }
  @media (max-width: 1371px) {
    img {
      height: 21vh;
    }
  }
  @media (max-width: 1325px) {
    img {
      height: 19vh;
    }
  }
  @media (max-width: 1320px) {
    img {
      height: 19vh;
    }
  }
  @media (max-width: 1232px) {
    img {
      height: 17vh;
    }
  }
  @media (max-width: 1135px) {
    img {
      height: 16vh;
    }
  }
  @media (max-width: 1093px) {
    img {
      height: 14vh;
    }
  }

  @media (max-width: 1019px) {
    img {
      height: 13vh;
    }
  }
  @media (max-width: 693px) {
    img {
      height: 11vh;
    }
  }
  @media (max-width: 598px) {
    img {
      height: 9vh;
    }
  } */

  @media (max-width: 1263px) {
    img {
      height: 17vh;
    }
  }

  @media (max-width: 1193px) {
    img {
      height: 14vh;
    }
  }
`;
