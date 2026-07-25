export default function About() {
  const skills = [
    ['React', 'TypeScript', 'Vue.js', 'Next.js'],
    ['Three.js', 'GSAP', 'Tailwind CSS', 'Node.js'],
    ['Figma', 'Git', 'Webpack/Vite', 'REST/GraphQL'],
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-number">01</div>
          <h2 className="section-title">关于我</h2>
        </div>
        <div className="about-grid">
          {/* 左侧：文字 + 技能 */}
          <div className="about-left reveal">
            <p className="about-intro">
              一名热爱技术与设计的前端开发者。专注于构建高性能、可访问且视觉精致的 Web 应用。
            </p>
            <p className="about-detail">
              我相信好的前端不仅是功能实现，更是连接人与信息的桥梁。每一个像素、每一次交互动画，都应该让用户感到自然与愉悦。
            </p>
            <div className="skills-wrap">
              <h4 className="skills-label">技术栈</h4>
              <div className="skill-chips">
                {skills.flat().map(s => <span key={s} className="chip">{s}</span>)}
              </div>
            </div>
          </div>

          {/* 右侧：简历图片（带 hover 虚化） */}
          <div className="about-right reveal">
            <div className="resume-card">
              <div className="resume-img-wrapper">
                <img
                  src="https://picsum.photos/seed/resume/400/520"
                  alt="Resume"
                  className="resume-img"
                />
                <div className="resume-overlay">
                  <span className="resume-overlay-text">查看简历</span>
                </div>
              </div>
              <div className="resume-info">
                <span className="resume-tag">PDF</span>
                <span className="resume-size">2.4 MB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
