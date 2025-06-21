
import { Link } from 'react-router-dom';
import './Project.css';

function Project(){


  return(
    <>
    <div className="nav">
    <div className="wrapProject">
        <Link to="/career" className="aboutMe">Career</Link>
        <Link to="/project" className="skills">Projects</Link>
        <Link to='/skill' className="Projects">Skills</Link>
        <Link to="/" className="career">About Me</Link>
    </div>
  </div>
  <div className="content">
    <div className="wrapper">

      <div className="items">
        <div className="item">
          <img src="/images/petmall.png" alt="펫몰모바일1"/>
          <div className="caption">
            <h2>UI/UX</h2>
            <p>모바일 전용 펫몰 디자인</p>
          </div>
        </div>
        <div className="item">
          <img src="/images/detaile1.jpg" alt="가구런칭상세페이지"/>
          <div className="caption">
            <h2>상세페이지</h2>
            <p>런칭된 가구 상세페이지 작업</p>
          </div>
        </div>
        
        <div className="item">
          <img src="/images/fiversemo.jpg" alt="피버스모바일"/>
          <div className="caption">
            <h2>UI/UX</h2>
            <p>OTT 모바일 디자인</p>
          </div>
        </div>
        <div className="item">
          <img src="/images/eventofbum.jpg" alt="범퍼가드 프로모션"/>
          <div className="caption">
            <h2>프로모션</h2>
            <p>애기 범퍼가드 프로모션 디자인</p>
          </div>
        </div>

        <div className="item">
          <img src="/images/uxpluspc.png" alt="회사 사이트"/>
          <div className="caption">
            <h2>UI/UX</h2>
            <p>회사 소개 페이지 디자인</p>
          </div>
        </div>
        <div className="item">
          <img src="/images/check.png" alt="출석체크"/>
          <div className="caption">
            <h2>프로모션</h2>
            <p>출석체크 이벤트 행사 디자인</p>
          </div>
        </div>
        <div className="item">
          <img src="/images/eventofspecial.jpg" alt="가전할인"/>
          <div className="caption">
            <h2>이벤트</h2>
            <p>가전 할인 이벤트 디자인</p>
          </div>
        </div>

        <div className="item">
          <img src="/images/eventofbrand.jpg" alt="미국 브랜드 할인"/>
          <div className="caption">
            <h2>이벤트</h2>
            <p>미국 브랜드 할인전 디자인</p>
          </div>
        </div>
        <div className="item">
          <img src="/images/fiversepc.jpg" alt="피버스 피시"/>
          <div className="caption">
            <h2>UI/UX</h2>
            <p>OTT PC 디자인</p>
          </div>
        </div>
        <div className="item">
          <img src="/images/eventofmicro.jpg" alt="마이크로소프트"/>
          <div className="caption">
            <h2>프로모션</h2>
            <p>마이크로소프트 프로모션 디자인</p>
          </div>
        </div>

        <div className="item">
          <img src="/images/eventofwedding.jpg" alt="신혼부부"/>
          <div className="caption">
            <h2>이벤트</h2>
            <p>신혼부부 혜택 프로모션 디자인</p>
          </div>
        </div>
        <div className="item">
          <img src="/images/eventofspring.jpg" alt="인테리어 프로모션"/>
          <div className="caption">
            <h2>프로모션</h2>
            <p>인테리어 프로모션 디자인</p>
          </div>
        </div>
        <div className="item">
          <img src="/images/eventofopen.jpg" alt="미국브랜드 런칭전"/>
          <div className="caption">
            <h2>프로모션</h2>
            <p>미국 가구 브랜드 런칭전</p>
          </div>
        </div>

        <div className="item">
          <img src="/images/eventofchristmas2.jpg" alt="크리스마스 배너"/>
          <div className="caption">
            <h2>배너</h2>
            <p>크리스마스 무배 배너</p>
          </div>
        </div>

        <div className="item">
          <img src="/images/eventoftimesale.jpg" alt="타임세일 이벤트"/>
          <div className="caption">
            <h2>이벤트</h2>
            <p>미국 브랜드 타임세일 이벤트</p>
          </div>
        </div>
        <div className="item">
          <img src="/images/event1.jpg" alt="여름 특가 이벤트"/>
          <div className="caption">
            <h2>이벤트</h2>
            <p>여름 특가 이벤트</p>
          </div>
        </div>
        <div className="item">
          <img src="/images/eventofcoupon.jpg" alt="추석 할인 쿠폰"/>
          <div className="caption">
            <h2>이벤트</h2>
            <p>추석 쿠폰 이벤트</p>
          </div>
        </div>
        <div className="item">
          <img src="/images/petmall2.png" alt="펫몰"/>
          <div className="caption">
            <h2>UI/UX</h2>
            <p>펫몰 디자인</p>
          </div>
        </div>


      </div>
    </div>          
  </div>
    
    
    </>
  )
}


export default Project;