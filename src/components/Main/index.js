import React from "react";
import {
  Container,
  Header,
  BackIcon,
  ProfileIcon,
  BottomMenu,
  HomeIcon,
  SearchIcon,
} from "./MainStyled";

export const Main = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>
        <ProfileInfo>
          <strong>Vinicius And</strong>
          <span>121 tweets</span>
        </ProfileInfo>
      </Header>

      <BottomMenu>
        <HomeIcon />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  );
};
