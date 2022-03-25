import styled from "styled-components";
import arrowDown from "../Images/arrowDown.svg";




export const StyledDropdown = styled.div`
  border-bottom: 1px solid var(--light-gray);
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  &:last-of-type {
    margin-bottom: 4rem;
  }
  .question {
    position: relative;
    font-size: 1.4rem;
    font-weight: ${(props) => (props.open ? "700" : "400")};
    cursor: pointer;
  }
  .question:hover {
    color: ${(props) => (props.open ? "var(--black)" : "var(--red)")};
  }
  .question::after {
    ${(props) => props.open && "transform: rotate(180deg);"};
    transition: all 0.3s ease-in;
    content: url(${arrowDown});
    position: absolute;
    right: 0;
  }
  .answer {
    display: ${(props) => (props.open ? "block" : "none")};
    overflow-wrap: break-word;
    padding-top: 1rem;
    padding-right: 1.25rem;
    line-height: 1.5;
  }
  @media (min-width: 900px) {
    max-width: 320px;
  }
`;
