import styled from 'styled-components';

import userimage from '../../../assets/userimage.png';

export const Avatar = () => {
  return (
    <AvatarContainer>
      <img
        src={userimage}
        alt='user avatar'
      />
    </AvatarContainer>
  );
};

const AvatarContainer = styled.div`
  border-radius: 2rem;
  overflow: hidden;
  height: 2rem;
  width: 2rem;
`;
