// Libraries
import React from 'react';
import { FaPizzaSlice } from 'react-icons/fa';

export const Header = () => {
  return (
    <header data-testid='header'>
      <nav>
        <div className='logo'>
          <img src='#' alt='Todoist Logo' />
        </div>
        <div className='setting'>
          <ul>
            <li>+</li>
            <li>
              <FaPizzaSlice />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
