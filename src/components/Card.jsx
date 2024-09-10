import React, { useContext } from "react";
import ThemeSwitch from "../context/ThemeSwitch";

const Card = () => {
    const {theme} = useContext(ThemeSwitch)
  return (
    <div className={theme === "light"? "card ": " dark"}>
      <h1>Card</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aut
        sint dicta sequi, a reiciendis voluptate amet vero molestias quibusdam.
        Quis atque voluptate excepturi commodi, magnam modi accusantium nisi
        facere?
      </p>
    </div>
  );
};

export default Card;
