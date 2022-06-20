import React from "react";
import { Outlet, Link } from "react-router-dom";
import { MainWrapper } from "./styles";

const Layout = () => (
  <div>
    {/* A "layout route" is a good place to put markup you want to
        share across all the pages on your site, like navigation. */}
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/anagram">Anagram</Link>
        </li>
        <li>
          <Link to="/tic-tac-toe">Tic Tac Toe</Link>
        </li>
        <li>
          <Link to="/no/match-page">404 page</Link>
        </li>
      </ul>
    </nav>

    <hr />

    {/* An <Outlet> renders whatever child route is currently active,
        so you can think about this <Outlet> as a placeholder for
        the child routes we defined above. */}
    <MainWrapper>
      <Outlet />
    </MainWrapper>
  </div>
);

export default Layout;
