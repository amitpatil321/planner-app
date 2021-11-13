import styled from 'styled-components';

const ProfileImage = styled.img`
  width: ${props => props.pWidth ? props.pWidth : 24}px;
  height: ${props => props.pHeight ? props.pHeight : 24}px;
  border-radius: 50%;
  background-image: url(/assets/images/profile.jpeg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export default ProfileImage;