import React from 'react'
import { Link } from 'gatsby'
import './Footer.css'

class Footer extends React.Component {
  render() {
    const { authorName, footerLinks } = this.props.siteConfig

    const FooterItem = ({ item }) => {
      if (typeof item === 'string') {
        return (
          <h5 className="footer-title" key={item}>
            {item}
          </h5>
        )
      }
      if (item.url.startsWith('/')) {
        return (
          <Link className="footer-item" to={item.url}>
            {item.label}
          </Link>
        )
      }
      return (
        <a className="footer-item" href={item.url}>
          {item.label}
        </a>
      )
    }

    const FooterColumn = ({ column }) => {
      return (
        <div className="footer-col">
          {column.map((item, i) => {
            return <FooterItem item={item} key={`footer-column-item-${i}`} />
          })}
        </div>
      )
    }

    return (
      <footer className="footer">
        <nav className="footer-nav">
          <div className="footer-col">
            <h5 className="footer-title">{authorName} © 2018</h5>
            <p className="footer-item-text">
              Built with{' '}
              <a className="footer-link" href="https://gatsby.com/">
                Gatsby
              </a>
              .
            </p>
            <p className="footer-item-text">
              Theme using{' '}
              <a
                className="footer-link"
                href="https://github.com/maxpou/gatsby-starter-morning-dew"
              >
                gatsby-starter-morning-dew
              </a>
              .
            </p>
            <p className="footer-item-text">
              Hosted with <span className="footer-heart">❤</span> by{' '}
              <a className="footer-link" href="https://github.com/">
                Github
              </a>
              .
            </p>
          </div>
          {footerLinks.map((column, i) => {
            return <FooterColumn column={column} key={`footer-column-${i}`} />
          })}
        </nav>
      </footer>
    )
  }
}

export default Footer
