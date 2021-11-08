import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderThinkness: 1,
    height: 24,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderThinkness: 2,
    height: 36,
  },
};

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const styles = STYLES[size];
  if (!styles) {
    throw new Error("Style prop not found! ");
  }
  return (
    <Wrapper style={{ "--height": styles.height / 16 + "rem" }}>
      <VisuallyHidden> {label} </VisuallyHidden>
      <IconWrapper style={{ "--size": styles.iconSize + "px" }}>
        <Icon id={icon} size={styles.iconSize} />
      </IconWrapper>
      <TextInput
        style={{
          "--width": width + "px",
          "--borderThinkness": styles.borderThinkness + "px",
          "--fontSize": styles.fontSize / 16 + "rem",
          "--height": styles.height / 16 + "rem",
        }}
        {...delegated}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  margin: auto;
  height: var(--size);
`;
const TextInput = styled.input`
  height: var(--height);
  border: none;
  border-bottom: var(--borderThinkness) solid ${COLORS.black};
  padding-left: var(--height);
  color: inherit;
  font-weight: 700;
  font-size: var(--fontSize);
  outline-offset: 2px;
  width: var(--width);

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

export default IconInput;
