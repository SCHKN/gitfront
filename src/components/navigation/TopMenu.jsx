import React from "react";
import { Menu, Icon, Item, Header } from "semantic-ui-react";
import logo from "../../images/artist.png";

const TopMenu = () => {
  return (
    <Menu size="huge" borderless className="top-menu">
      <Menu.Item>
        <img src={logo} />
      </Menu.Item>
      <Menu.Item className="brand">
        <div className="git-front">gitfront</div>
        <div className="brand-description">
          <p>Browsing the best front-end repos</p>
        </div>
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>
          <Icon name='code'></Icon>
        </Menu.Item>
        <Menu.Item>
          Built with <Icon name="heart" /> by{" "}
          <a href="https://github.com/SCHKN" className="schkn">
            SCHKN
          </a>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default TopMenu;
