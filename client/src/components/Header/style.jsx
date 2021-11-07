import styled from 'styled-components';

export const Wrapper = styled.div`
  width:100%;
  height: 64px;
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const AapNameContainer = styled.div`
  font-size: 20px;
`;
export const MenuIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const ProfileShortcut = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const ProfileImage = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-image: url(/assets/images/profile.jpeg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;


