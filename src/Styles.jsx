import styled from 'styled-components';

export const BlueButtonInput = styled.input`
  box-shadow: inset 0px 1px 0px 0px #bee2f9;
  background: linear-gradient(to bottom, #63b8ee 5%, #468ccf 100%);
  background-color: #63b8ee;
  border-radius: 6px;
  border: 1px solid #3866a3;
  display: inline-block;
  cursor: pointer;
  color: #071a34;
  font-family: Arial;
  font-size: 1rem;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #7cacde;
  &:hover {
    background: linear-gradient(to bottom, #468ccf 5%, #63b8ee 100%);
    background-color: #468ccf;
  }
`;

export const PlumButton = styled.button`
  box-shadow: inset 0px 1px 0px 0px #efdcfb;
  background-color: plum;
  border-radius: 6px;
  border: 1px solid plum;
  display: inline-block;
  cursor: pointer;
  color: #071a34;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  margin-bottom: 10px;

  &:hover {
    background-color: #bc80ea;
  }
`;
