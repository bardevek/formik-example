import React from "react";

import styled from "styled-components";

const SubmitButton = ({ onClick }) => {
  return (
    <StyledBtn type="submit" onClick={onClick}>
      Submit
    </StyledBtn>
  );
};

const StyledBtn = styled.button`
  width: 200px;
  height: 40px;
  font-size: 15px;
  background-color: #28ee5a;
  cursor: pointer;
  border-radius: 10px;
  margin-top: 40px;
  position: relative;
  margin-left: 50%;
  transform: translateX(-50%);
`;

export { SubmitButton };
