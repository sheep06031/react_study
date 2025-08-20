import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  height: 40px;
  display: flex;
  border: 1px solid #dbdbdb;
  box-sizing: border-box;
  border-radius: 8px;
  overflow: hidden;
`;

export const searchInput = css`
  border: none;
  outline: none;
  padding: 5px 15px;
  flex-grow: 1;
`;

export const searchButton = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 15px;
  border: none;
  background-color: transparent;
  transition: all 0.2 ease;;

  &:hover {
    background-color: #fafafa;
  }
`;

export const filterContainer = css`
  padding: 10px 0px;
`;
