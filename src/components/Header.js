import React from 'react';
import config from '../../config';
import avatarIcon from '../assets/images/avatar.png';
// const pic = require('../assets/images/avatar.png');

export default function Header() {
  return (
    <header>
      <span className="avatar">
        <img height="128px" src={avatarIcon} alt="frontend vj" />
      </span>
      <h1>{config.authorName}</h1>
      <p>{config.heading}</p>
    </header>
  );
}
