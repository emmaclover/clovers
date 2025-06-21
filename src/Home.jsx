
import { Link } from 'react-router-dom';
import './Home.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, {useState} from 'react';
import { AiOutlineClose } from 'react-icons/ai'; // x 아이콘
import { motion, AnimatePresence } from 'framer-motion';



function Home(){

  const [isModalOpen, setIsModalOpen] = useState(true); // 모달 기본 표시됨

  return(
    <>
    <div className="nav">
      <div className="wrap">
        <Link to="/career" className="aboutMe">Career</Link>
        <Link to="/project" className="skills">Projects</Link>
        <Link to='/skill' className="Projects">Skills</Link>
        <Link to="/" className="career">About Me</Link>
      </div>
    </div>
    <div className="content">
      <div className="profile">
        <h1>Sehee</h1>
        <div className="img"><img src="images/sehee.jpg" alt="" /></div>
        <div className="coments">
          <h2>밝고 긍정의 키워드를 가진 인재 </h2>
          <p>
            <mark>미국 4개 가구 브랜드를 온라인 런칭(기획 및 일정관리)</mark>하고 유지보수(운영)한 경험이 있고, <br />IT회사에서 UI/UX디자인과 기획 및 QA를 진행했으며,<mark>개발 언어를 알고 사용</mark>할 수 있습니다.
            <br />  웹에이전시에서 기획PM으로 다양한 프로젝트를 관리했습니다.
          </p>
        </div>
      </div>
      
      {/* <!-- 다양한 인포 --> */}
      <div className="info">

        <div className="infoProfile">
          <h2>About Me</h2>
          <p><span className="name">장세희</span> / Jang sehee</p>
          <p>91. 11. 27</p>
          <p>서울시 중구 신당동</p>
          <p>010 - 8375 - 6813</p>
          <p>devsignjay7@gmail.com</p>
        </div>

        <div className="infoCreer">
          <h2>Career</h2>
          <p><span className="bdfont">2013.05-2016.10</span> 비스코리아</p>
          <p><span className="bdfont">2018.03-2020.03</span> 현대리바트</p>
          <p><span className="bdfont">2021.03-2023.01</span> 유엑스플러스</p>
          <p><span className="bdfont">2024.03-2025.03</span> 엔프로젝트</p>
        </div>

        {/* <!-- 스킬 툴 --> */}
        <div className="infoSkills">
          <h2>Tools</h2>
          <div className="skillBox">
            <h1>Ps</h1>
            <p>PhotoShop</p>
          </div>
          <div className="skillBox">
            <h1>Ai</h1>
            <p>Illustrator</p>
          </div>
          <div className="skillBox">
            <h1>Fg</h1>
            <p>Figma</p>
          </div>

          <div className="skillBox">
            <h1>Vc</h1>
            <p>VsCode</p>
          </div>
          <div className="skillBox">
            <h1>Git</h1>
            <p>Github</p>
          </div>
          
        </div>

        {/* <!-- 언어 --> */}
        <div className="infoCreer">
          <h2>Skills & Languega</h2>
          <p>HTML , CSS , JavaScript , React , Thymeleaf</p>
          <p>JAVA , Spring, SQL </p>
          <div><a href="https://github.com/IMFOMATE/infomate_back.git">개발경험 Git 보러가기 &gt;</a></div>
          <div><a href="https://emotion-diary-lovat.vercel.app/">미니 훈련 보러가기 &gt;</a></div>
        </div>
        
      </div>
    </div>


    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          className='modal_back'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className='modal_Deam'
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <div className='modal_content'>
              지금 보시는 페이지는 디자인관련 포트폴리오입니다.
              <br />
              기획PM에 관련된 포트폴리오는 ppt를 확인해주세요.
            </div>
            <div className="modal_x" onClick={() => setIsModalOpen(false)}>
              <AiOutlineClose />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>



    </>
  )
}

export default Home;