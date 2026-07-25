export default function Contact() {
  const links = [
    { href: 'mailto:hello@ofsienna.dev', label: '✉️ 邮件', primary: true },
    { href: '#', label: '🐙 GitHub' },
    { href: '#', label: '💬 LinkedIn' },
    { href: '#', label: '🐦 Twitter' },
  ];

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-number">03</div>
          <h2 className="section-title">一起聊聊？</h2>
        </div>
        <p className="reveal" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 400, margin: '0 auto 40px' }}>
          无论是合作机会还是技术交流，都欢迎随时联系我。
        </p>
        <div className="contact-links reveal">
          {links.map((l, i) => (
            <a key={i} href={l.href} className={`contact-btn${l.primary ? ' primary' : ''}`}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <span className="footer-brand">OfSienna</span>
      <span>© 2026 — Built with ❤️</span>
    </footer>
  );
}
