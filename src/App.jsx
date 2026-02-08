import './App.css'

function App() {
  return (
    <>
      <header>
        <h1>Justin Port</h1>
        <h2>Junior Front-End Developer</h2>
        <p>
          I’m a front-end developer focused on building clean, responsive web
          interfaces with React. Currently learning and building projects to
          showcase my skills.
        </p>
      </header>

      <section>
        <h3>Skills</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Vite</li>
        </ul>
      </section>

      <section>
        <h3>Projects</h3>
        <div className="projects">
          <div className="project-card">
            <h4>Portfolio</h4>
            <p>My personal portfolio built with React and Vite.</p>
            <a
              href="https://github.com/Justinkredible94/Portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>

          <div className="project-card">
            <h4>Todo App</h4>
            <p>Simple task manager built with React.</p>
            <a href="#" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>

          <div className="project-card">
            <h4>Weather App</h4>
            <p>Fetches weather information using an API.</p>
            <a href="#" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      <section>
        <h3>Contact</h3>
        <p>
          Email:{' '}
          <a href="mailto:justinkredible94@gmail.com">
            justinkredible94@gmail.com
          </a>
        </p>
        <p>
          GitHub:{' '}
          <a
            href="https://github.com/Justinkredible94"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/Justinkredible94
          </a>
        </p>
      </section>
    </>
  )
}

export default App

