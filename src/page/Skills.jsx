
import { Link } from 'react-router-dom';
import './Skills.css';

function Skills() {

  return (
    <>
      <div className="nav">
    <div className="wrapSkill">
        <Link to="/career" className="aboutMe">Career</Link>
        <Link to="/project" className="skills">Projects</Link>
        <Link to='/skill' className="Projects">Skills</Link>
        <Link to="/" className="career">About Me</Link>
    </div>
  </div>
  <div className="content">
      <div className="skill">
        <h2>PhotoShop</h2>
        <h4>75%</h4>
        <div className="shape">
          <div className="bg"></div>
          <div className="line"></div>
        </div>
        <p>
          포토샵을 활용해 이미지 편집과 사진보정 합성을 할 수 있으며, 웹사이트 배너, 이벤트 등 다양한 시각 콘텐츠를 제작하였습니다.

        </p>
      </div>
      <div className="skill">
        <h2>Illustrator</h2>
        <h4>60%</h4>
        <div className="shape">
          <div className="bg"></div>
          <div className="line"></div>
        </div>
        <p>
          일러스트레이터로 로고, 아이콘 등 벡터 그래픽 등, UI/UX나 각종 이벤트, 프로모션 배너에 필요한 일러스트를 제작하거나 인쇄물 작업도 하였습니다. 
        </p>
      </div>
      <div className="skill">
        <h2>Figma</h2>
        <h4>60%</h4>
        <div className="shape">
          <div className="bg"></div>
          <div className="line"></div>
        </div>
        <p>
          프그마를 사용해 웹과 앱 UI/UX 디자인을 했고, 컴포넌트와 스타일 가이드를 만들고 여러 화면 간의 프로토타입을 만들어 인터랙션을 시뮬레이션하였습다. 
        </p>
      </div>
      <div className="skill">
        <h2>HTML</h2>
        <h4>60%</h4>
        <div className="shape">
          <div className="bg"></div>
          <div className="line"></div>
        </div>
        <p>
          여러 태그들을 활용할 수 있습니다. 
          <br/> 태그를 활용하여 레이아웃을 잡고 화면을 그릴 수 있습니다.
        </p>
      </div>
      <div className="skill">
        <h2>CSS</h2>
        <h4>50%</h4>
        <div className="shape">
          <div className="bg"></div>
          <div className="line"></div>
        </div>
        <p>
          HTML로 잡은 레이아웃에 스타일을 입힐 수 있으며, 애니메이션이나 마우스 호버같은 여러가지 효과를 넣을 수 있습니다.
        </p>
      </div>
      <div className="skill">
        <h2>JavaScript</h2>
        <h4>50%</h4>
        <div className="shape">
          <div className="bg"></div>
          <div className="line"></div>
        </div>
        <p>
          자바스크립트를 사용해 웹 페이지에 동적 기능을 추가할 수 있습니다. 폼 검증, 모달 창 등 사용자 인터랙션을 처리하는 기능을 구현하거나, AJAX를 사용해 비동기적 데이터 처리를 했습니다.
        </p>
      </div>
      <div className="skill">
        <h2>React</h2>
        <h4>40%</h4>
        <div className="shape">
          <div className="bg"></div>
          <div className="line"></div>
        </div>
        <p>
          컴포넌트 기반 아키텍처를 사용해서 재사용이 가능한 UI 요소들을 만들어 Hooks를 사용해 프로잭트를 작업했습니다.
        </p>
      </div>
      <div className="skill">
        <h2>Java</h2>
        <h4>60%</h4>
        <div className="shape">
          <div className="bg"></div>
          <div className="line"></div>
        </div>
        <p>
          자바를 활용하여 다양한 라이브러리를 사용해 알고리즘을 구현하고 웹 애플리케이션 개발 경험이 있으며, 스프링 프레임워크를 이용해 효율적으로 개발할 수 있습니다.
        </p>
      </div>
      <div className="skill">
        <h2>Github</h2>
        <h4>50%</h4>
        <div className="shape">
          <div className="bg"></div>
          <div className="line"></div>
        </div>
        <p>
          깃허브를 사용하여 코드를 팀원들과 공유하고 관리하면서 협업을 진행했습니다.
        </p>
      </div>
      
  </div>
    
    </>
  )
}


export default Skills;