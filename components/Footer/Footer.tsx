import css from './Footer.module.css';

function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p>© {new Date().getFullYear()} NoteHub. All rights reserved.</p>
        <div className={css.wrap}>
          <p>Developer: Viktoriia Dmytryk</p>
          <p>
            Contact us:
            <a href="mailto:viki.dmytryk@gmail.com">viki.dmytryk@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
