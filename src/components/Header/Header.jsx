import React from "react";

import Input from "./Input/Input.jsx";
import Notice from "./Notice/Notice.jsx";
import Profile from "./Profile/Profile.jsx";

import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <h1>Profile page</h1>
        <Input />
      </div>
      <div className={s.userWrapper}>
        <Notice />
        <Profile />
      </div>
    </header>
  );
};

export default Header;
