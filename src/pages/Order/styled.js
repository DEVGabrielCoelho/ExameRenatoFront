import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 70px;
`;

export const Text = styled.text`
  font-size: 40px;
  font-weight: bold;
  font-family: "Segoe UI", Roboto, sans-serif;
`;

export const ButtonView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 10px;
`;
export const ActionView = styled.div`
  margin-top: 50px;
`;
export const Button = styled.button`
  margin-top: 20px;
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
