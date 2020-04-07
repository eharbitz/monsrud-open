import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
  }

  toggleMenu() {}

  render() {
    return (
      <div className={styles.HeaderPadding}>
        <div className={styles.Header}>
          <div className={styles.HeaderContainer}>
            <div className={styles.MonsrudLogo}>
              <a href="/">
                <img
                  width="60"
                  height="60"
                  src={require('./../../img/icons/MonsrudLogo.png')}
                />{' '}
              </a>
            </div>
            <button className={styles.HamburgerBar} onClick={this.toggleMenu}>
              Menu
            </button>
            <div className={styles.MenuList}>
              <div className={styles.MenuLink}>
                <Link
                  style={{ color: 'white', textDecoration: 'none' }}
                  to="/"
                  rel="noopener noreferrer"
                >
                  <h6 className={styles.HeaderNumberSix}>Monsrud Open</h6>
                </Link>
              </div>
              <div className={styles.MenuLink}>
                <Link
                  style={{ color: 'white', textDecoration: 'none' }}
                  to="/Competitions"
                  rel="noopener noreferrer"
                >
                  <h6 className={styles.HeaderNumberSix}>
                    Tidligere turneringer
                  </h6>
                </Link>
              </div>
              <div className={styles.MenuLink}>
                <Link
                  style={{ color: 'white', textDecoration: 'none' }}
                  to="/Donations"
                  rel="noopener noreferrer"
                >
                  <h6 className={styles.HeaderNumberSix}>Donasjoner</h6>
                </Link>
              </div>
              <div className={styles.MenuLink}>
                <Link
                  style={{ color: 'white', textDecoration: 'none' }}
                  to="/About"
                  rel="noopener noreferrer"
                >
                  <h6 className={styles.HeaderNumberSix}>Om oss</h6>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
