import React from "react";
import { Image, Container, ClickContainer } from "./styles";
import { DEFAULT_TITLE } from "../../../constants/image";
import { pickMode, getSize, getHoverSize } from "../../../utils/imageFunctions";

const ImageBox = ({
  onClick,
  style,
  src,
  borderMode,
  size,
  title,
  transparent,
  opacity,
}) => {
  const [height, width] = getSize(size);
  const [hHeight, hWidth] = getHoverSize([height, width]);
  const clickable = onClick !== undefined ? true : false;
  return !clickable ? (
    <Container
      style={style}
      borderMode={pickMode(borderMode)}
      height={height}
      width={width}
      transparent={transparent}
      opacity={opacity ? opacity : 1}
    >
      <Image src={src} title={title ? title : DEFAULT_TITLE} />
    </Container>
  ) : (
    <ClickContainer
      style={style}
      borderMode={pickMode(borderMode)}
      height={height}
      width={width}
      transparent={transparent}
      opacity={opacity ? opacity : 1}
      hHeight={hHeight}
      hWidth={hWidth}
      onClick={onClick}
    >
      <Image src={src} title={title ? title : DEFAULT_TITLE} />
    </ClickContainer>
  );
};

export default ImageBox;
