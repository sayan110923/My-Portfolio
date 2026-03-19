import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My training <span>&</span>
          <br />
          education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Python & Django Training</h4>
                <h5>Cipher Schools (Edtech)</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed and deployed web applications using Django models, views,
              and templates. Built real-world apps including a Resume Maker tool.
              Integrated databases, authentication mechanisms, and REST APIs in Django.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech – Computer Science & Engineering</h4>
                <h5>Lovely Professional University, Punjab</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Pursuing Bachelor of Technology in Computer Science and Engineering
              since August 2022. Building expertise in full-stack development,
              cloud infrastructure, and software engineering best practices.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intermediate (PCMB)</h4>
                <h5>Bajua High School, West Bengal</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Completed Intermediate education with PCMB stream, achieving 73%.
              Developed strong analytical and problem-solving foundations that
              drive my approach to software engineering today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
