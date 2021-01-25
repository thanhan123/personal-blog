import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from "./header.module.scss"

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    <h1 style={{margin: `1.3rem`}}>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}>
        {siteTitle}
      </Link>
    </h1>
    <ul className={headerStyles.navList}>
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
