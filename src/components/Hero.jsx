import { useEffect, useRef } from 'react';

function ParticleCanvas() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: null, y: null });
  const particlesRef = useRef([]);
  const animFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const hero = document.getElementById('hero');

    function resize() {
      canvas.width = hero.offsetWidth;
      canvas.height = hero.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    hero.addEventListener('mousemove', e => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    });
    hero.addEventListener('mouseleave', () => {
      mouseRef.current = { x: null, y: null };
    });

    const count = Math.min(Math.floor((canvas.width * canvas.height) / 12000), 80);
    particlesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.6,
      speedY: (Math.random() - 0.5) * 0.6,
      opacity: Math.random() * 0.3 + 0.1,
    }));

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const p = particlesRef.current;
      const m = mouseRef.current;

      p.forEach(part => {
        part.x += part.speedX;
        part.y += part.speedY;
        if (part.x > canvas.width) part.x = 0;
        if (part.x < 0) part.x = canvas.width;
        if (part.y > canvas.height) part.y = 0;
        if (part.y < 0) part.y = canvas.height;
        ctx.fillStyle = `rgba(248, 187, 208, ${part.opacity})`;
        ctx.beginPath();
        ctx.arc(part.x, part.y, part.size, 0, Math.PI * 2);
        ctx.fill();
      });

      for (let a = 0; a < p.length; a++) {
        for (let b = a + 1; b < p.length; b++) {
          const dx = p[a].x - p[b].x;
          const dy = p[a].y - p[b].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.strokeStyle = `rgba(248, 187, 208, ${0.08 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p[a].x, p[a].y);
            ctx.lineTo(p[b].x, p[b].y);
            ctx.stroke();
          }
        }
        if (m.x !== null) {
          const dx = p[a].x - m.x;
          const dy = p[a].y - m.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            ctx.strokeStyle = `rgba(248, 187, 208, ${0.25 * (1 - dist / 180)})`;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(p[a].x, p[a].y);
            ctx.lineTo(m.x, m.y);
            ctx.stroke();
          }
        }
      }

      animFrameRef.current = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} id="particles-canvas" style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }} />;
}

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <ParticleCanvas />
      <div className="hero-layout">
        <div className="hero-text">
          <div className="hero-greeting reveal">Hello World</div>
          <h1 className="hero-name reveal">OfSienna</h1>
          <p className="hero-desc reveal">
            前端开发者，相信好的代码像好的设计一样——<br />
            简单，但有力量。
          </p>
          <div className="hero-cta reveal">
            <a href="#projects" className="btn btn-black">查看作品 ↓</a>
            <a href="#contact" className="btn btn-outline">联系我</a>
          </div>
        </div>

        {/* 浮动预览卡片矩阵 */}
        <div className="visual-stage reveal">
          <div className="float-card card-1">
            <div className="card-inner">
              <div className="card-placeholder" style={{ background: 'linear-gradient(135deg, #fce4ec, #f8bbd0)' }}>
                <span className="placeholder-label">Project 01</span>
              </div>
            </div>
          </div>
          <div className="float-card card-2">
            <div className="card-inner">
              <div className="card-placeholder" style={{ background: 'linear-gradient(135deg, #e8e0e0, #fce4ec)' }}>
                <span className="placeholder-label">Project 02</span>
              </div>
            </div>
          </div>
          <div className="float-card card-3">
            <div className="card-inner">
              <div className="card-placeholder" style={{ background: 'linear-gradient(135deg, #f8bbd0, #f48fb1)' }}>
                <span className="placeholder-label">Project 03</span>
              </div>
            </div>
          </div>
          <div className="float-card card-4">
            <div className="card-inner">
              <div className="card-placeholder" style={{ background: 'linear-gradient(135deg, #fce4ec, #e8e0e0)' }}>
                <span className="placeholder-label">Project 04</span>
              </div>
            </div>
          </div>
          <div className="float-card card-5">
            <div className="card-inner">
              <div className="card-placeholder" style={{ background: 'linear-gradient(135deg, #f48fb1, #f8bbd0)' }}>
                <span className="placeholder-label">Project 05</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
