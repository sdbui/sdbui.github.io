import styles from './styles.module.css';
import { useState } from 'react';

function Timeline () {

  const [activeIdx, setActiveIdx] = useState(0);
  
  return (
    <ul className={styles.main}>
      <li className={styles.active} onClick={()=>{window.open('https://www.dataannotation.tech/about?')}}>
        <div className={styles.timeframe}>
          {/* <span className={styles.dot}></span> */}
          <span>2023 - Present</span>
        </div>
        <div className={styles.details}>
          <div className={styles.title}>
            <span>Freelance <small>@</small> Data Annotation Tech</span>
          </div>
          <div className={styles.description}>
            Provide diverse problems and solutions for a coding chatbot. Write high-quality answers and code snippets. Evaluate code quality produced by AI models for correctness and performance
          </div>
        </div>
      </li>
      <li onClick={()=>window.open('https://www.cisco.com/site/us/en/services/cx-cloud/index.html')}>
        <div className={styles.timeframe}>2015 - 2021</div>
        <div className={styles.details}>
          <div className={styles.title}>
            <span>Technical Leader <small>@</small> Cisco</span>
          </div>
          <div className={styles.secondaryTitle}>Senior Software Engineer</div>
          <div className={styles.secondaryTitle}>Software Engineer (Contract)</div>
          <div className={styles.description}>
            Full stack development of various products using popular frontend frameworks (Angular, React, Vue).
            Backends built using Node via Express, NestJS. Databases built with Sqlite and postgres. Data visualization with D3. CI/CD using Jenkins and CircleCI.
            End to End testing using Cypress.io. Unit testing using Jest.
          </div>
        </div>
      </li>
      <li onClick={()=>window.open('https://www.paypal.com/')}>
        <div className={styles.timeframe}>2014 - 2015</div>
        <div className={styles.details}>
          <div className={styles.title}>
            <span>Software Engineer (Contract) <small>@</small> Paypal</span>
          </div>
          <div className={styles.description}>
            Rapid prototyping of merchant facing account pages using NodeJS, BackboneJS, RequireJS, LESS, DustJS.
            Partnered closesly with design & product to craft great product experiences through usability testing.
            End to End testing using PayPal's open source automation framework, NemoJS.
            Integration and unit testing with Casper/PhantomJS, mocha/chai/sinonJS.
            Creation of RESTful web services for client consumption with Java Spring.
            Java testing using both TestNG and Junit.
          </div>
        </div>
      </li>
    </ul>
  );
}

export default Timeline;