import { React, useState } from "react";

export const App = () => {

  const [searchValue, setSearchValue] = useState(""); //SearchValue
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const [searchView, setSearchView] = useState(false); //ViewSearch
  const handleSearchView = () => {
    setSearchView(!searchView);
  };

  const [isOpenMenu, setIsOpenMenu] = useState(false); //Menu
  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <div className="wrapper">
      <header>
        <div className="header__container">
          <svg
            className="header__logo"
            xmlns="http://www.w3.org/2000/svg"
            id="my-svg"
            width="60"
            height="60"
            viewBox="0 0 256 256"
            style={{ minWidth: "60px" }}
          >
            <path
              fill="#b0b2c3"
              d="M53.2 145.1l81.9-71.7h-34.3L19 145.1l102.8 90h34.3l-102.9-90"
            ></path>
            <g fill="#b0b2c3">
              <path d="M145.3 145.1l36-31.6s.8-.7 1.1-1l2.4-2.4c8.5-10.3 13.3-23.3 13.3-36.7 0-31.8-25.8-57.7-57.6-57.7l-111.1.1L7.2 38.6l111.4-.1h21.9c19.2 0 34.8 15.6 34.8 34.8 0 8.2-2.7 15.8-8 22.2-1 1.3-8.3 7.3-8.3 7.3l-12.4 10.6-35.6 31.7 102.9 90h34.3l-102.9-90zm33.4-31.7h.2-.2z"></path>
              <path d="M252.8 236.9h-39.6l-.5-.4-104.4-91.3 37.1-33 12.5-10.6c3.5-2.9 7.5-6.3 8.1-7 5-6 7.6-13.3 7.6-21.1 0-18.2-14.8-33.1-33.1-33.1H3L28.6 14h115.8l-.1.1c31 2 55.6 27.8 55.6 59.3 0 13.6-4.9 27.1-13.7 37.8-.5.6-2.2 2.3-2.6 2.6-.3.3-1.2 1-1.2 1l-.5.4-34 29.8 104.9 91.9zm-38.3-3.5h29l-100.9-88.3 34.1-29.9h-2.2l3.6-3.5h1v1.5l1.6-1.4c.2-.2.4-.4.6-.5.4-.3 1.9-1.9 2.2-2.2 8.3-10.1 12.9-22.8 12.9-35.6 0-30.8-25.1-55.9-55.9-55.9h-3.9l-106.5-.1-18.8 19.4 109-.1h20.1c20.2 0 36.6 16.4 36.6 36.6 0 8.6-2.9 16.6-8.4 23.3-1 1.3-7.3 6.5-8.5 7.5l-12.4 10.6-34.1 30.3 100.9 88.3z"></path>
              <g>
                <path d="M249.3 235.5h-35.5l-.1-.1-103.2-90.3.3-.3 35.6-31.7 12.4-10.6c2.5-2.1 7.5-6.2 8.3-7.2 5.1-6.2 7.9-13.8 7.9-21.9 0-19-15.4-34.4-34.4-34.4H6.2l23-23.7h.2l112.1-.1c31.6.5 57.1 26.4 57.1 58.1 0 13.3-4.8 26.5-13.4 37-.4.5-2.1 2.2-2.4 2.5-.3.3-1.1 1-1.1 1l-.1.1-35.5 31.2 103.2 90.4zm-35.3-.8h33l-102.4-89.6 36.4-32c.2-.2.7-.6 1-.9.3-.3 2-1.9 2.4-2.4 8.5-10.3 13.2-23.3 13.2-36.4 0-31.5-25.7-57.2-57.2-57.3h-1l-110 .1L8 38.2l111-.1h21.5c19.4 0 35.2 15.8 35.2 35.2 0 8.3-2.8 16-8 22.4-1 1.3-8.1 7.1-8.4 7.3l-12.4 10.6-35.2 31.4L214 234.7zm-35-120.9h-1.4l1-.8h.4V113.8z"></path>
                <path d="M253.9 237.3H213l-.5-.4-104.8-91.7 1.8-1.6 35.6-31.7 12.5-10.6c4-3.3 7.5-6.4 8-7 4.9-5.9 7.5-13.1 7.5-20.8 0-18-14.7-32.7-32.7-32.7H2l26.4-27.2 117.2-.1-.2.2c30.6 2.6 54.8 28.5 54.8 59.6 0 13.7-4.9 27.3-13.8 38.1-.5.6-2.3 2.4-2.6 2.7-.3.3-1.2 1-1.2 1l-.5.4-33.6 29.5 105.4 92.3zm-39.2-4.3h27.7L142 145.1l33.6-29.5h-3.1l4.7-3.8.1-2.6 1.8 2 1.4.1c.2-.1.3-.3.4-.4.4-.3 1.9-1.9 2.2-2.2 8.3-10 12.8-22.6 12.8-35.3 0-30.6-24.9-55.5-55.5-55.5H30.3l-18 18.5 108.4-.1h19.7c20.4 0 37 16.6 37 37 0 8.7-2.9 16.8-8.4 23.5-.7.9-3.5 3.4-8.5 7.5L148 115.1l-33.7 30L214.7 233z"></path>
              </g>
            </g>
          </svg>

          <ul className={"header__links " + (isOpenMenu ? "active" : "")}>
            <li className="link">
              <p className="series" >Series</p>
            </li>
            <li className="link">
              <p className="movies" >Movies</p>
            </li>
            <li className="link">
              <p className="cartoons" >Cartoons</p>
            </li>
            <li style={{ marginRight: "40px" }} className="link">
              <p className="saved" >Saved</p>
            </li>
            <li className={`header__search ${searchView ? "active" : ""}`}>
              <input
                onChange={onChangeSearchInput}
                value={searchValue}
                placeholder="Search.."
                type="text"
              />

              <svg
                onClick={handleSearchView}
                className="header__searchClear"
                width={"25px"}
                enableBackground="new 0 0 32 32"
                viewBox="0 0 32 32"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="#b0b2c3"
              >
                <path
                  d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z"
                  id="logoGlyph"
                />
              </svg>
            </li>
          </ul>

          <div
            onClick={handleOpenMenu}
            className={"header__menu " + (isOpenMenu ? "change active" : "")}
          >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>

          <div
            className={"header__overlayRed " + (isOpenMenu ? "active" : "")}
          ></div>
          <div
            className={"header__overlayBlue " + (isOpenMenu ? "active" : "")}
          ></div>
        </div>
      </header>
      <main>
        <h1>
          {searchValue ? `Пошук по запросу: ${searchValue}` : ""}
        </h1>
      </main>
    </div>
  );
};
