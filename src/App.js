import React from "react";
import Header from "./components/Header";
import Link from "./components/Link";
import Card from "./components/Card"
import SearchBar from "./components/SearchBar";
/* import Main from "./components/Main"; */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCommentDots, faUser } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  return (
    <>
      <Header className="header" >
        <div className="header__nav">
          <Link>Inicio</Link>
          <Link>Hoy</Link>
          <Link>Siguiendo</Link>
        </div>
        <SearchBar/>
        <div className="header__notices">
          <FontAwesomeIcon icon={faBell} />
          <FontAwesomeIcon icon={faCommentDots} />
          <FontAwesomeIcon icon={faUser} />
        </div>
      </Header>
      {/* <Main /> */}
      <Card description="Una Foto"
      title="Intereses, el nuevo widget de pinterest"
      src="https://i.picsum.photos/id/0/536/354.jpg?hmac=pYva7VotLDyw33JFwZdFMkf5Egtdk2Z6p7Rr8nO6ngs"
      size="large"
      />
    </>
  );
};

export default App;
