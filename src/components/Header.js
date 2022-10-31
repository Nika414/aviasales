import Logo from "../images/Logo.svg";

export default function Header() {
  return (
    <div className="header">
      <img src={Logo} className="header__logo" alt="Лого" />
    </div>
  );
}
