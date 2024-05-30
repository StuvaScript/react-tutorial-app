import React from 'react';
import { createRoot } from 'react-dom/client';

import './normalize.css';
import './style.css';

function getReactVersion() {
  return React.version;
}

console.log(getReactVersion());

const reactElement = React.createElement(
  'h1',
  {
    className: 'center',
    style: { color: '#1ce' },
  },
  'Howdy Turds',
);
console.log({ reactElement });

const jsxElement = (
  <h1 id="title" className="primary-color" style={{ color: '#1ce' }}>
    Howdy Turds
  </h1>
);

function GetDropdownMenu(props) {
  const { children } = props;

  return (
    <ul id="dropdown-menu" className="dropdown">
      <li>{children}</li>
      <li>Orders</li>
      <li className="separator"></li>
      <li>Logout</li>
    </ul>
  );
}

const root = document.querySelector('#root');

createRoot(root).render(<GetDropdownMenu>hellkdjflskdjf</GetDropdownMenu>);
