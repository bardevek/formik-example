import React from "react";
import styled from "styled-components";

const HelpersButtons = ({
  arrayLength,
  removeHandler,
  insertHandler,
  index
}) => {
  return (
    <>
      <StyledButton
        type="button"
        onClick={() => removeHandler(index, {})}
        isVisible={arrayLength !== 1 && index !== 0}
        color="red"
      >
        -
      </StyledButton>
      <StyledButton
        type="button"
        onClick={() =>
          insertHandler(index + 1, { email: "", isPremium: false })
        }
        isVisible={index === arrayLength - 1}
        color="#1db71d"
      >
        +
      </StyledButton>
    </>
  );
};

const StyledButton = styled.button`
  margin-left: 15px;
  height: 25px;
  width: 50px;
  background-color: ${props => props.color};
  display: ${props => (props.isVisible ? "inline" : "none")};
  align-self: flex-end;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`;

export { HelpersButtons };
