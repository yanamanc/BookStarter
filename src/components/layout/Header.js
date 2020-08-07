import React from 'react';

import UserInfo from './UserInfo';

const Header = ({ children }) => {
  return (
    <header style={styles.header}>
      {children}
      <UserInfo />
    </header>
  )
}

export default Header;

const styles = {
  header: {
    background: '#85004B',
    color: '#fff',
    minHeight: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.2 rem',
    fontWeight: 'bold'
  }
}