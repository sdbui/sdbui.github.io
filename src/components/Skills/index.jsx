import styles from './styles.module.css';
import JsIcon from '../../assets/icons/javascript';
import AngularIcon from '../../assets/icons/angular';
import CssIcon from '../../assets/icons/css';
import HtmlIcon from '../../assets/icons/html';
import NodeIcon from '../../assets/icons/nodejs';
import ReactIcon from '../../assets/icons/react';
import D3Icon from '../../assets/icons/d3';

export default function Skills () {
  return (
    <div className={styles.skills}>
      <div className={styles.skill}>
        <div>
          <JsIcon></JsIcon>
        </div>
        <div>Javascript</div>
      </div>
      <div className={styles.skill}>
        <HtmlIcon></HtmlIcon>
        <div>HTML</div>
      </div>
      <div className={styles.skill}>
        <CssIcon></CssIcon>
        <div>CSS</div>
      </div>
      <div className={styles.skill}>
        <div><AngularIcon></AngularIcon></div>
        <div>Angular</div>
      </div>
      <div className={styles.skill}>
        <ReactIcon></ReactIcon>
        <div>React</div>
      </div>
      <div className={styles.skill}>
        <D3Icon></D3Icon>
        <div>D3</div>
      </div>
      <div className={styles.skill}>
        <NodeIcon></NodeIcon>
        <div>Node</div>
      </div>
    </div>
  );
}