import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from "./header.module.scss"

const Header = () => (
  <header className={headerStyles.header}>
    <ul className={headerStyles.navList}>
      <li>
        <Link className={headerStyles.navItem} to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}>
          Home
        </Link>
      </li>
      <li>
        <Link className={headerStyles.navItem} to="/blog/">Blog</Link>
      </li>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
