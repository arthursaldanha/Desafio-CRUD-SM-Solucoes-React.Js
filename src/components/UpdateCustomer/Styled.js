import styled from "styled-components";
import { FiArrowLeft } from "react-icons/fi";

export const UpdateCustomer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - 50px);
  padding-top: 80px;
`;

export const ButtonBack = styled.div`
  align-items: center;
  align-self: center;
  background-color: #1B232A;
  border-radius: 6px;
  border: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  justify-content: center;
  margin-top: 5px;
  padding: 15px;
  width: 130px;
`;

export const ArrowLeft = styled(FiArrowLeft)`
  height: 25px;
  margin-right: 3px;
  width: 20px;
`;
