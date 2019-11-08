// Libraries
import React from 'react';

// Styles
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendar,
  FaRegCalendarAlt
} from 'react-icons/fa';

import { Generic, Middle, Projects } from './sidebar.style';

export const Sidebar = () => {
  return (
    <Generic data-testid='sidebar'>
      <ul>
        <li>
          <span>
            <FaInbox />
          </span>
          <span>Inbox</span>
        </li>
        <li>
          <span>
            <FaRegCalendar />
          </span>
          <span>Today</span>
        </li>
        <li>
          <span>
            <FaRegCalendarAlt />
          </span>
          <span>Next 7 days</span>
        </li>
      </ul>

      <Middle>
        <span>
          <FaChevronDown />
        </span>
        <h2>Projects</h2>
      </Middle>

      <Projects>
        <p>Projects will go here</p>
      </Projects>
    </Generic>
  );
};
