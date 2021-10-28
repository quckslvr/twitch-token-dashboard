import * as React from 'react';
import profile from '../assets/img/Profile.png';
import twitchLogo from '../assets/img/twitch-logo.png';

export default function Menu() {
  return (
        <nav>
          <img className="menu" src={ twitchLogo } alt="twitch-logo"/>
          <img src={ profile } alt="profile" />
        </nav>
  );
}