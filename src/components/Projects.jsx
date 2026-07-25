export default function Projects() {
  const projects = [
    {
      cls: 'proj-1 card-type-live',
      gradient: 'linear-gradient(135deg, #f48fb1, #f8bbd0, #fce4ec)',
      badge: '● Live Demo',
      num: '01',
      cat: 'Web Application',
      title: '在线协作设计平台',
      desc: '基于 Canvas 的实时协作编辑工具，支持多人同时编辑、版本管理和一键导出。',
      techs: ['React', 'Canvas', 'WebSocket'],
    },
    {
      cls: 'proj-2 card-type-case',
      gradient: 'linear-gradient(180deg, #e8e0e0, #fce4ec)',
      badge: 'Case Study',
      num: '02',
      cat: 'Data Viz',
      title: '数据面板',
      desc: '企业级分析仪表盘。',
      techs: ['Vue 3', 'D3.js'],
    },
    {
      cls: 'proj-3 card-type-live',
      gradient: 'linear-gradient(135deg, #f8bbd0, #f48fb1)',
      badge: '● Live Demo',
      num: '03',
      cat: 'Interactive',
      title: 'H5 活动页',
      desc: '粒子特效 + 手势操作。',
      techs: ['Three.js', 'GSAP'],
    },
    {
      cls: 'proj-4 card-type-case',
      gradient: 'linear-gradient(135deg, #fce4ec, #f8bbd0, #f48fb1)',
      badge: 'Case Study',
      num: '04',
      cat: 'Creative Development',
      title: '3D 沉浸式品牌官网',
      desc: '结合 WebGL 和滚动叙事的沉浸式体验页面，为品牌创造令人难忘的视觉旅程。',
      techs: ['Three.js', 'WebGL', 'GSAP', 'Shader'],
    },
    {
      cls: 'proj-5 card-type-live',
      gradient: 'linear-gradient(180deg, #f48fb1, #f8bbd0)',
      badge: '● Live Demo',
      num: '05',
      cat: 'Tool',
      title: 'CLI 脚手架',
      desc: '快速搭建项目。',
      techs: ['Node.js', 'CLI'],
    },
    {
      cls: 'proj-6 card-type-case',
      gradient: 'linear-gradient(135deg, #fce4ec, #e8e0e0)',
      badge: 'Case Study',
      num: '06',
      cat: 'Open Source',
      title: '组件库 & 设计系统',
      desc: '自研 React 组件库，30+ 高质量组件，完善的 TypeScript 类型定义和文档站点。',
      techs: ['React', 'TypeScript', 'Storybook'],
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-number">02</div>
          <h2 className="section-title">精选作品</h2>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={i} className={`project-card ${p.cls} reveal`} style={{ background: p.gradient }}>
              <div className="card-visual" style={{ background: p.gradient }} />
              <div className="card-overlay" />
              <span className="card-badge">{p.badge}</span>
              <div className="card-content">
                <div className="card-num">{p.num}</div>
                <div className="card-cat">{p.cat}</div>
                <h3 className="card-title">{p.title}</h3>
                <p className="card-desc">{p.desc}</p>
                <div className="card-techs">
                  {p.techs.map(t => <span key={t} className="tech-tag">{t}</span>)}
                </div>
                <a href="#" className="card-link">
                  查看
                  <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
