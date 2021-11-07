/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    height: 8,
    padding: 0,
    radius: 4,
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4,
  },
  large: {
    height: 16,
    padding: 8,
    radius: 8,
  },
};

const ProgressBar = ({ value, size }) => {
  const style = STYLES[size];

  if (!style) {
    throw new Error(`${size} is not found!`);
  }

  // style={{ "--height": style.height, "--width": value }}
  return (
    <Wrapper
      style={{
        "--padding": style.padding + "px",
        "--radius": style.radius + "px",
      }}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemax={100}
      aria-valuemin={0}
    >
      <ProgressBarWrapper>
        <Bar
          style={{ "--height": style.height + "px", "--width": value + "%" }}
        />
      </ProgressBarWrapper>
      <VisuallyHidden> {value}% </VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: var(--padding);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  width: 100%;
  border-radius: var(--radius);
`;

const ProgressBarWrapper = styled.div`
  overflow: hidden;
  border-radius: 4px;
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  border-radius: 4px 0px 0px 4px;
  width: var(--width);
  height: var(--height);
`;
export default ProgressBar;
