import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 50vw;
  height: 50vh;
`;

export const Table = styled.div`
  display: grid;
  border-collapse: collapse;
  min-width: 100%;
  grid-template-columns:
    minmax(100px, 1fr)
    minmax(350px, 1fr)
    minmax(250px, 1fr)
    minmax(450px, 1fr)
    minmax(150px, 1fr)
    minmax(150px, 1fr)
    minmax(150px, 1fr)
    minmax(150px, 1fr)
    minmax(150px, 1fr)
    minmax(150px, 1fr)
    minmax(150px, 1fr);
  overflow: auto;

  /* Row */
  > section {
    display: contents;

    &:first-child {
      > div {
        background: #abeafe;
      }
    }

    /* Column */
    > div {
      border-bottom: 1px solid #ddd;
      padding: 15px;
    }
  }
`;
