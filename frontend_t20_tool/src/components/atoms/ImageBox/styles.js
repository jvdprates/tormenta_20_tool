import styled from "styled-components";

export const Image = styled.img`
  //Display
  display: block;
  max-height: 100%;
  max-width: 100%;
  height: auto;
  width: auto;
`;

export const Container = styled.div`
  //Colors & Fonts
  background-color: ${(props) => {
    const defaultColor = props.theme.colors.medium_background;
    if (props.transparent) {
      return "transparent";
    } else {
      return defaultColor;
    }
  }};
  opacity: ${(props) => props.opacity};

  //Display
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  min-height: ${(props) => props.height};
  min-width: ${(props) => props.width};
  overflow: hidden;
  padding: 5px;

  //Border & Style
  border-radius: ${(props) => (props.borderMode === 0 ? "10px" : "50%")};
`;

export const ClickContainer = styled(Container)`
  &:hover {
    height: ${(props) => props.hHeight};
    width: ${(props) => props.hWidth};
    cursor: pointer;
  }
  &:active {
    transition-duration: 0s;
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    cursor: pointer;
  }
`;
