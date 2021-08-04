import styled from "styled-components";
import { topBarHeight } from "./theme/variables";

export const AppWrapper = styled.div`
  display: flex;
`;

export const TopBarSpace = styled.div`
  min-height: ${topBarHeight};
`;

export const Container = styled.div`
  width: 100%;
  height: calc(100% - ${topBarHeight});
  box-sizing: border-box;
`;
