import styled from 'styled-components';

export const Dot = styled.div<{color: string}>`
  background: ${(props) => props.color ?? 'none'};
  border-radius: 0.5rem;
  display: block;
  height: 0.5rem;
  width: 0.5rem;
`;