import Link from "next/link";
import NavStyles from './styles/NavStyles';

const Nav = () => (
  <NavStyles>
    {/* <Link href="/feed">
      <a>Feed</a>
    </Link> */}
    <Link href="/request-off">
      <a>Request Off</a>
    </Link>
    <Link href="/sub-opportunites">
      <a>Find a Day to Sub</a>
    </Link>
    <Link href="/account">
      <a>Account</a>
    </Link>
    <Link href="/register">
      <a>Register</a>
    </Link>
  </NavStyles>
);

export default Nav;
