import styled from "styled-components";

const Button = styled.button`
  color: var(--black);
  border: 2px solid var(--primary);
  box-sizing: border-box;
  background-color: var(--primary);
  cursor: pointer;
  padding: 16px 24px;
  font-style:'roboto',normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default Button