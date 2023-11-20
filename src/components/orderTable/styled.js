import styled from "styled-components";

export const Button = styled.button`
  padding: 7px 20px;
  font-size: 12px;
  border: 2px solid #3498db;
  border-radius: 5px;
  background-color: #3498db;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2980b9;
    border-color: #2980b9;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(52, 152, 219, 0.7);
  }

  &:active {
    background-color: #1f618d;
    border-color: #1f618d;
  }
`;
export const ButtonDel = styled.button`
  padding: 7px 20px;
  font-size: 12px;
  border: 2px solid #e14d3b;
  border-radius: 5px;
  background-color: #e14d3b;
  color: #000;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2980b9;
    border-color: #2980b9;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(52, 152, 219, 0.7);
  }

  &:active {
    background-color: #1f618d;
    border-color: #1f618d;
  }
`;

export const ViewButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
