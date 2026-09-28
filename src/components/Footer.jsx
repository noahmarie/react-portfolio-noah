import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Noah Marie Giberson</p>
      <p className="footer-email">giberson.noahmarie@gmail.com</p>
    </footer>
  );
}
