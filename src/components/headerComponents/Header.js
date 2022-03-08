import React from "react";
import Logo from "../../images/Logo-bandsite.svg";
import "../headerComponents/Header.scss";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={Logo} alt="logo" />
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__lineOne">Hello Guest</span>
          <span className="header__lineTwo">Sign In</span>
        </div>

        <div className="header__option">
          <span className="header__lineOne">Returns</span>
          <span className="header__lineTwo">Order</span>
        </div>

        <div className="header__option">
          <span className="header__lineOne">Your</span>
          <span className="header__lineTwo">Prime</span>
        </div>
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
