import Timeline from './components/Timeline';
import styles from './App.module.css';
import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useMousePosition from './hooks/useMousePosition';

import GithubIcon from './assets/icons/github';
import EmailIcon from './assets/icons/email';
import LinkedinIcon from './assets/icons/linkedin';

import Skills from './components/Skills';

function App() {
  const experienceRef = useRef(null);
  useMousePosition();
  let loc = useLocation();

  useEffect(() => {
    // if no current hash.. move to about
    if (!loc.hash) {
      location.assign('/#about');
    }
  }, [])

  return (
    <>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <div className={styles.headerBg}></div>
          <img className={styles.avatar} src="fiji.png" />
          <blockquote>
            <span>Don't lose your dinosaur</span>
          </blockquote>
          <nav>
            <ul className={styles.links}>
              <li className={`${styles.link} ${loc.hash === '#about' ? styles.selected : ''}`}>
                <a href="#about">about</a>
              </li>
              <li className={`${styles.link} ${loc.hash === '#experience' ? styles.selected : ''}`}>
                <a href="#experience">experience</a>
              </li>
              <li className={`${styles.link} ${loc.hash === '#projects' ? styles.selected : ''}`}>
                <a href="#projects">projects</a>
              </li>
            </ul>
          </nav>
          <footer className={styles.footer}>
            <ul className={styles.icons}>
              <li>
                <a href="https://www.linkedin.com/in/sdbui/" target="_blank">
                  <LinkedinIcon/>
                </a>
              </li>
              <li><a href="https://github.com/sdbui" target="_blank">
                <GithubIcon />
              </a></li>
              <li><a href="mailto:bui.steven.d@gmail.com" target="_blank">
                <EmailIcon/>
              </a></li>
            </ul>
            <span>
              icons by <a target="_blank" href="https://icons8.com">Icons8</a>
            </span>
          </footer>
        </header>
        <section className={styles.content}>
          <div id="about" className={styles.about}>
            <div className={styles.description}>
              <h1>Steven Bui 👨🏻‍💻</h1>
              <p>Full stack engineer, Gym Rat, Destroyer of gummy bears.</p>
              <p>I enjoy tinkering and building. </p>
              <p>Almost a decade of planning, building, shipping and maintaining interactive user interfaces with added focus on accessibility and responsiveness.
              </p>
              <p>Recently have been enjoying some time off and instead of building applications, I've built a family.
                All the while taking the spare time I get to explore a variety of languages and tech stacks like PHP (Laravel) and Python along with 
                exploring the Google Cloud and Digital Ocean platforms.
              </p>
              <p>
                If not at my desk, I'm probably off playing darts, hitting the gym, or playing peekaboo with my son.
              </p>
            </div>
            <div id="skills" className={styles.skills}>
              <Skills></Skills>
            </div>
          </div>
          <div id="experience" className={styles.experience} ref={experienceRef}>
            <Timeline></Timeline>
            <a href="/StevenBui_Resume_2024.pdf" target="_blank">
							<span class="icon solid fa-file-download"></span> See Resumé
						</a>
          </div>

          <ul id="projects" className={styles.projects}>
            <li className={styles.project} onClick={()=>window.open("https://stingray-app-x2drr.ondigitalocean.app/exercises")}>
              <div className={styles.projectImg}>
                <img src="buifit.png" alt="BuiFit" />
              </div>
              <div className={styles.projectDetails}>
                <a href="https://stingray-app-x2drr.ondigitalocean.app/exercises" target="_blank">
                  <h2>BuiFit</h2>
                </a>
                <p>Work in progress very much in its infancy</p>
                <p>Currently just an exercise database which allows filtering based on muscle group, equipment needed, experience level, etc. Shamelessly scraped <a href="https://www.muscleandstrength.com/exercises" target="_blank">Muscle and Fitness</a> for this data but intend to overwrite everything with my own content </p>
                <p>
                  <div><a href="https://github.com/sdbui/bui-fitness-web-client/tree/master" target="_blank">React Frontend</a></div>
                  <div><a href="https://github.com/sdbui/bui-fitness-api-service" target="_blank">PHP (Laravel) Backend</a></div>
                </p>
              </div>
            </li>
            <li className={styles.project} onClick={()=>window.open('https://github.com/sdbui/buitube-web-client')}>
              <div className={styles.projectImg}>
                <img src="buitube.png" alt="BuiTube" />
              </div>
              <div className={styles.projectDetails}>
                <a href="https://github.com/sdbui/buitube-web-client" target="_blank">
								  <h2>Buitube</h2>
                </a>
                <p>
                  A YouTube clone for my baby videos. Made to play around with Firebase and Google Cloud Platform. Firebase authentication and Firestore for 
                  database. Videos uploaded to GCS buckets and notified to <a href="https://github.com/sdbui/video-processing-service">video-processing-service</a> via 
                  Pub/Sub. Firebase functions used for <a href="https://github.com/sdbui/buitube-api-service">buitube-api-service</a>
                </p>
              </div>
            </li>
            <li className={styles.project} onClick={()=>window.open('https://github.com/sdbui/darts-practice')}>
              <div className={styles.projectImg}>
                <img src="darts.png" alt="Darts Practice" />
              </div>
              <div className={styles.projectDetails}>
                <a href="https://github.com/sdbui/darts-practice" target="_blank">
                  <h2>Darts Practice</h2>
                </a>
                <p>Helper application for popular darts practice routine "A1 Accuracy". Allows for bluetooth connection with Granboard 3 (haven't tested with other boards) for automatic scoring. Stores game results and accuracy statistics via MongoDB.</p>
              </div>
            </li>
            <li className={styles.project} onClick={()=>window.open('https://github.com/sdbui/pet-tracker/wiki')}>
              <div className={styles.projectImg}>
                <img src="pets.png" alt="" />
              </div>
              <div className={styles.projectDetails}>
                <a href="https://github.com/sdbui/pet-tracker/wiki" target="_blank">
                  <h2>Family Pet Tracker</h2>
                </a>
                <p>Daily tracker for how many treat calories are given per pet. Will display when calories are over the limit. Records stored in sqlite using Sequelize ORM.</p>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}

export default App
