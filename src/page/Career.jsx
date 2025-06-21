
import './Career.css';
import { Link } from 'react-router-dom';


function Career(){

  return(
    <>
    <div className="nav">
    <div className="wrapCareer">
      <Link to="/career" className="aboutMe">Career</Link>
        <Link to="/project" className="skills">Projects</Link>
        <Link to='/skill' className="Projects">Skills</Link>
        <Link to="/" className="career">About Me</Link>
    </div>
  </div>
  <div className="content">
    <div className="wrapCareer">
      <div className="careerBox">
        <p>2013.05 - 2016.10</p>
        <p>비스코리아</p>
        <p className="myDes">
          몰 디자인 운영 진행, 이벤트& 상세페이지 기획 및 디자인을 진행했습니다.
        </p>
      </div>
      
      {/* <!-- <div class="adu">
        <p>2017.01 - 2017.12</p>
        <p>영어학원 수료</p>
        <p>영어회화 학원 후 수료 미국 가구 온라인 런칭에 커뮤니케이션에 많은 도움이 되었습니다.</p>
      </div> --> */}
      <div className="careerBox">
        <p>2018.03 - 2020.03</p>
        <p>현대리바트</p>
        <p>
          미국 가구 브랜드 온라인 런칭 팀(WSI팀)에 발령받아
          <span className="bold">미국 가구 브랜드 온라인 런칭(디자인, 클라이언트 소통, 일정관리, QA 등)</span>
          하고 <span className="bold">본사와 직접 커뮤니케이션</span>하면서 사이트 유지보수 및 운영을 진행했습니다.
        </p>
      </div>
      {/* <div className="adu">
        <p>2020.04 - 2020.10</p>
        <p>UI/UX & 퍼블리싱 학원 수료</p>
        <p>
          온라인 런칭을 진행하면서 UI/UX와 퍼블리싱의 스킬들을 배워서 내 것으로 만들기위해 학원을 다녔습니다.
        </p>
      </div> */}
      <div className="careerBox">
        <p>2021.03 - 2023.01</p>
        <p>유엑스플러스</p>
        <p>
          IT 회사로 주업무는
          <span className="bold">온라인 방송, 펫 몰, 스트리밍 사이트 UI/UX 디자인</span>과 유지보수 업무를 하고 기획과 QA를 진행했습니다.
        </p>
      </div>
      <div className="careerBox">
        <p>2024.03 - 2025.03</p>
        <p>엔프로젝트</p>
        <p>
          엔프로젝트는 웹과 앱 개발을 하는 에이전시로 기획과 PM 역할을 했습니다. 주로 클라이언트 응대, 소통, 프로젝트 전반적인 조사와 기획, 일정관리, 업무 분배, 납품관리까지 하나의 프로젝트의 처음과 끝의 모든 관리를 진행했습니다.
        </p>
      </div>
      
      {/* <div className="adu">
        <p>2023.04 - 2023.09</p>
        <p>Java 풀스텍 강의 수료</p>
        <p>
          java, spring, SQL 등 다양한 개발 언어를 습득했습니다.
        </p>
      </div> */}
      {/* <div className="adu">
        <p>2024.01 - </p>
        <p>인프런 강의</p>
        <p>
          더 필요한 부분 등을 보완하기 위해 수강 중입니다.
        </p>
      </div> */}


    </div>

    <div className="wrapCareer">
      
    </div>
  </div>
    </>
  )
}


export default Career;