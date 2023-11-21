import {  Link, PageProps } from 'gatsby'

const NotFound = (_props: PageProps) => (
  <>
    <h1>404 - Page not found</h1>
    <p>
      Go back to <Link to="/">homepage</Link>.
    </p>
  </>
)

export default NotFound
