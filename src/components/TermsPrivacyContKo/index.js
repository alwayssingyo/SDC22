import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TermsContContainer, TermsContInner, TermsDropdownGroup, TermsContWrap, TermsContTop, TermsContTitle, TermsItemSubTitle, TermsContVersion,TermsContDesc, TermsContLink, TermsContItem, TermsItemTitle, TermsItemP, TermsItemPtagTitle,  TermsItemLink, TermsContToc, TermsTocInner, TermsTocItem, TermsContListNumber, TermsTable } from '../TermsCont/TermsContElements';
import Dropdown from '../Dropdown';

const TermPrivacyContKo = ()=>{
  const tocRef = useRef([]);
  const [currentItem, setCurrentItem] = useState(0);

  const scrollHandler = (el)=>{
    const yOffset = -100;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({top: y, behavior: 'smooth'});
  }

  const tocHandler = ()=>{
    const scrollPos = window.scrollY;

    tocRef.current.forEach((item, idx)=>{
      const refElement = tocRef.current[idx];

      if( refElement.offsetTop <= scrollPos ){
        setCurrentItem( tocRef.current[idx] );
      }
    })

    tocRef.current.forEach((item, idx)=>{
      if ( (window.innerHeight + window.scrollY) >= document.body.scrollHeight ) {
        setCurrentItem( tocRef.current[tocRef.current.length-1] );
      }
    })
  }

  useEffect(() => {
    setCurrentItem(tocRef.current[0]);

    window.addEventListener('scroll', tocHandler);
  },[])

  /*
    language dropdown in privacy page
  */
  const location = useLocation();
  const isPrivacyPage = location.pathname.includes('privacy');
  const hasBtnClass = (route) => {return location.pathname === route ? "hasBtn" : null};
  const dropdownUrl = ["/privacy/lang=ko","/privacy/lang=eu", "/privacy/lang=us", "/privacy/lang=latinAmerica", "/privacy/lang=brazil", "/privacy/lang=turkey"];
  const dropdownBtnText = ["Republic Of Korea","EU", "US", "Latin America", "Brazil", "Turkey"];
  const dropdownBtnTextDate = ["EFFECTIVE : 09/06/2022"];
  const dropdownDateUrl = ["/privacy/lang=ko"];

  //EN
  // const dropdownBtnTextDate = ["EFFECTIVE : 01/29/2020","11/06/2019 ~ 29/01/2020"];
  // const dropdownDateUrl = ["/privacy?lang=eu","version=1"];
  //KOREAN
  // const dropdownBtnTextDate = ["최종수정 : 2022년 2월 9일","시행일자 : 2021년 1월 1일", "시행일자 : 2020년 10월 30일" ];
  // const dropdownDateUrl = ["/privacy?lang=ko", "version=1", "version=2"];
  //CHINESE
  // const dropdownBtnTextDate = ["生效日期 : 02/15/2022","06/01/2021 ~ 02/14/2022"];
  // const dropdownDateUrl = ["/privacy?lang=zh", "version=1"];
  //GLOBAL
  // const dropdownBtnTextDate = ["EFFECTIVE : 01/29/2020","11/23/2019 ~ 01/29/2020"];
  // const dropdownDateUrl = ["/privacy?lang=global", "version=1"];
	return (
    <TermsContContainer>
      <TermsContInner>
        <TermsContWrap>

          <TermsContTop>
          {
            isPrivacyPage ?  <TermsContTitle>삼성개발자컨퍼런스 (SDC) 개인정보 처리방침</TermsContTitle>

                          :  <TermsContTitle>Samsung Developer Conference<br />Terms & Conditions</TermsContTitle>
          }
          {
            isPrivacyPage ?  ''

                          :  <TermsContVersion><span>Global</span>  EFFECTIVE : 06/09/2022</TermsContVersion>
          }

            {
              isPrivacyPage &&
              <TermsDropdownGroup>
                <Dropdown
                  btnText="Republic Of Korea"
                  url= {dropdownUrl}
                  itemText = {dropdownBtnText}
                />
                <Dropdown
                  btnText="EFFECTIVE : 09/06/2022"
                  itemText = {dropdownBtnTextDate}
                  url= {dropdownDateUrl}
                />
              </TermsDropdownGroup>

            }
            <TermsContDesc>
            삼성전자는 사용자의 개인정보를 안전하게 보호하는 것을 가장 중요하게 생각합니다.<br />
            삼성전자는 사용자가 신뢰할 수 있도록, 사용자가 제공한 개인정보를 목적에 따라 적법하게 사용하고, 제공한 개인정보에 대한 사용자의 권리와 선택을 보장하기 위해 최선을 다합니다. 이를 위해 제공된 개인정보가 어떤 목적으로 사용되고, 어떻게 보호되는지, 투명하게 공개합니다. 또한 사용자가 어떤 권리를 갖는지, 그 권리를 어떻게 행사할 수 있는지 자세히 알려드립니다.
            </TermsContDesc>
          </TermsContTop>
          <TermsContItem ref={el => (tocRef.current[0] = el)}>
            <TermsItemTitle>1. 개인정보 수집 항목 및 방법</TermsItemTitle>
            <TermsItemSubTitle>(1) 개인정보 수집 항목</TermsItemSubTitle>
            삼성전자는 사용자가 회원을 가입하거나 서비스를 이용할 때, 다음과 같은 개인정보를 수집합니다. 서비스 제공에 꼭 필요한 개인정보만 수집하며, 추가로 개인정보가 필요한 경우에는 별도의 선택 동의를 받은 후 수집합니다.
            <br/><br className='hide-m'/>
            <TermsTable>
              <colgroup>
                <col width="30%"/>
                <col width="70%"/>
              </colgroup>
              <thead>
                <tr>
                  <th scope='col'>구분</th>
                  <th scope='col'>자세한 내용</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>필수항목</th>
                  <td>
                    <ul>
                      <li><span>□</span> 이름</li>
                      <li><span>□</span> 이메일</li>
                      <li><span>□</span> 국가정보</li>
                      <li><span>□</span> 이메일</li>
                      <li><span>□</span> 홈페이지 이용 기록</li>
                      <li><span>□</span> 삼성계정</li>
                      <li><span>□</span> 직급, 소속회사</li>
                      <li><span>□</span> 콘텐츠 관련 관심 토픽</li>
                      <li><span>□</span> 휴대폰 번호</li>
                      <li><span>□</span> 행사장 방문 기록 및 행사 참여 사진, 영상</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>기타 자동으로 생성/수집되는 개인정보</th>
                  <td>
                    <ul>
                    <li><span>□</span> 쿠키 정보, 웹사이트 이용 기록</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </TermsTable>
            <div className='space-large'>
             ※ 삼성전자는 만 14세 미만 사용자의 개인정보는 수집하지 않습니다. 단, 서비스 이용을 위해 만 14세 미만 사용자의 개인정보를 수집할 때는 사전에 법정대리인에게 동의를 받고, 개인정보 사용이 끝나면 해당 정보를 바로 삭제하며, 개인정보가 사용되는 동안 개인정보를 안전하게 관리합니다.
            </div>
            <TermsItemSubTitle>(2) 개인정보 수집 방법</TermsItemSubTitle>
            삼성전자는 다음과 같이 개인정보를 수집합니다.
            <div className='space'></div>
            <TermsItemP>컨퍼런스 참여 등록 시 사용자가 직접 제공한 개인정보를 수집 </TermsItemP>
            <TermsItemP>서비스를 이용할 때 앱, 웹사이트 등에서 자동으로 생성된 정보(서비스 이용 기록 등)를 수집</TermsItemP>
            <TermsItemP>컨퍼런스 관련 상담 시 전화, 이메일, 상담게시판, 상담 메뉴 등을 통한 수집</TermsItemP>
            <TermsItemP>사용자가 참여한 이벤트, 프로모션 등을 통한 수집 </TermsItemP>
          </TermsContItem>

          <TermsContItem ref={el => (tocRef.current[1] = el)}>
            <TermsItemTitle>2. 개인정보 수집∙이용 목적</TermsItemTitle>
            삼성전자는 수집한 개인정보를 다음과 같이 사용합니다.
            <div className='space-large'></div>
            <TermsTable>
              <colgroup>
                <col width="25%"/>
                <col width="75%"/>
              </colgroup>
              <thead>
                <tr>
                  <th scope='col'>목적</th>
                  <th scope='col'>자세한 내용</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>회원 관리 및 본인 확인</th>
                  <td>- 컨퍼런스 참석자 관리 및 본인 확인</td>
                </tr>
                <tr>
                  <th scope='row'>서비스 제공</th>
                  <td>- 컨퍼런스 상세 정보 제공 및 관련 문의 응대 제공</td>
                </tr>
                <tr>
                  <th scope='row'>서비스 개선 및 개발</th>
                  <td>
                    - 고객만족 조사 메일 발송<br />
                    - 이용자 사용 패턴 분석을 통해 필요시 서비스 및 웹사이트에 대한 개선 조치 진행
                  </td>
                </tr>
                <tr>
                  <th scope='row'>마케팅∙광고 등에 활용</th>
                  <td>- 컨퍼런스 시 촬영한 사진 및 동영상을 이용하여 컨퍼런스 홍보물 제작</td>
                </tr>
                <tr>
                  <th scope='row'>고객문의 응대</th>
                  <td>- 상담 접수 및 답변 제공, 문의 내역 관리</td>
                </tr>
              </tbody>
            </TermsTable>
          </TermsContItem>

          <TermsContItem ref={el => (tocRef.current[2] = el)}>
            <TermsItemTitle>3. 개인정보 처리위탁</TermsItemTitle>
            삼성전자는 더 나은 서비스 제공을 위해 개인정보 처리 업무를 외부 전문 업체에 위탁합니다.
            <div className='space-large'></div>
            <TermsTable>
              <colgroup>
                <col width="23%"/>
                <col width="77%"/>
              </colgroup>
              <thead>
                <tr>
                  <th scope='col'>위탁받는 업체 명칭</th>
                  <th scope='col'>위탁하는 업무 내용</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>제일기획</td>
                  <td>행사 및 서비스 운영을 위해 개인정보 확인 및 메일 발송 등 </td>
                </tr>
                <tr>
                  <td>TecAce Software, Ltd. </td>
                  <td>SDC Event 시스템 개발 및 웹사이트 개발 및 운영</td>
                </tr>
                <tr>
                  <td>AWS(Amazon Web Service)</td>
                  <td>Cloud 서비스 제공</td>
                </tr>
                <tr>
                  <td>Cadmuim LLC </td>
                  <td>이벤트 솔루션(Cadmium) 제공</td>
                </tr>
              </tbody>
            </TermsTable>
            <div className='space-large'>국외에는 다음과 같이 위탁합니다.</div>
            <TermsTable>
              <colgroup>
                <col width="15%"/>
                <col width="17%"/>
                <col width="18%"/>
                <col width="18%"/>
                <col width="30%"/>
              </colgroup>
              <thead>
                <tr>
                  <th scope='col'>업체 명칭</th>
                  <th scope='col'>연락처</th>
                  <th scope='col'>이전되는 항목</th>
                  <th scope='col'>이전 국가, 일시 및 방법</th>
                  <th scope='col'>이전 목적(위탁 업무) 및 보유∙이용 기간 </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>TecAce Software, Ltd.</td>
                  <td>contact@tecace.com</td>
                  <td>1. (1) 항의 수집 항목</td>
                  <td>미국</td>
                  <td>개인정보 보관 기간 동안 개인정보가 보관된 시스템 개발 및 운영</td>
                </tr>
                <tr>
                  <td>AWS(Amazon Web Service)</td>
                  <td>https://<br />aws.amazon.com/<br />compliance/contact/</td>
                  <td>1. (1) 항의 수집 항목</td>
                  <td>미국</td>
                  <td>개인정보 보관 기간 동안 Cloud 서비스 제공</td>
                </tr>
                <tr>
                  <td>Cadmuim LLC</td>
                  <td>추가 예정</td>
                  <td>1. (1) 항의 수집 항목</td>
                  <td>미국</td>
                  <td>컨퍼런스 종료 후, 3개월동안</td>
                </tr>
              </tbody>
            </TermsTable>
            <div className='space-large'>삼성전자는 개인정보 처리를 위탁할 때, 개인정보가 안전하게 보호될 수 있도록 위탁받는 업체와 다음 내용이 포함된 계약을 체결하고, 개인정보를 안전하게 처리하도록 관리합니다. </div>
            <div className='space'></div>
            <TermsItemP>위탁된 업무 처리와 관계없는 개인정보 처리 금지 </TermsItemP>
            <TermsItemP>개인정보 보호를 위한 기술적∙관리적 조치 </TermsItemP>
            <TermsItemP>다른 업체로 재위탁 제한</TermsItemP>
            <TermsItemP>위탁업무 종료 후 개인정보 반환 또는 삭제 의무</TermsItemP>
            <TermsItemP>손해배상 등 책임에 관한 사항</TermsItemP>
            <div className='space'>삼성전자는 위탁받는 업체 또는 위탁 업무 내용이 변경될 경우, 개인정보 처리방침에 공개 또는 개별 공지하여 알려드립니다.</div>
          </TermsContItem>

          <TermsContItem ref={el => (tocRef.current[3] = el)}>
            <TermsItemTitle>4. 개인정보 삭제 </TermsItemTitle>
            삼성전자는 컨퍼런스 종료 시로부터 1년 후 개인정보 수집 및 이용이 끝나면 해당 정보를 바로 삭제합니다.<br />
            단, 다음과 같이 다른 법령에 따라 일정 기간 개인정보를 보관해야 할 경우, 삼성전자는 해당 기간 동안 개인정보를 안전하게 보관한 후 삭제합니다. 
            <div className='space-large'></div>
            <TermsTable>
              <colgroup>
                <col width="43%"/>
                <col width="15%"/>
                <col width="42%"/>
              </colgroup>
              <thead>
                <tr>
                  <th scope='col'>보유 항목</th>
                  <th scope='col'>보유 기간</th>
                  <th scope='col'>법적 근거</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>계약 또는 청약철회 등에 관한 기록</td>
                  <td>5년</td>
                  <td>전자상거래 등에서의 소비자보호에 관한 법률</td>
                </tr>
                <tr>
                  <td>대금결제 및 재화 등의 공급에 관한 기록</td>
                  <td>5년</td>
                  <td>전자상거래 등에서의 소비자보호에 관한 법률</td>
                </tr>
                <tr>
                  <td>소비자의 불만 또는 분쟁처리에 관한 기록</td>
                  <td>3년</td>
                  <td>전자상거래 등에서의 소비자보호에 관한 법률</td>
                </tr>
                <tr>
                  <td>신용정보의 수집/처리 및 이용 등에 관한 기록</td>
                  <td>3년</td>
                  <td>신용정보의 이용 및 보호에 관한 법률</td>
                </tr>
                <tr>
                  <td>표시/광고에 관한 기록</td>
                  <td>6개월</td>
                  <td>전자상거래 등에서의 소비자보호에 관한 법률</td>
                </tr>
                <tr>
                  <td>사용자의 인터넷 등 로그 기록 / 사용자가 접속한 장소를 기록한 자료</td>
                  <td>3개월</td>
                  <td rowSpan='2'>통신비밀보호법</td>
                </tr>
                <tr>
                  <td>그 외 통신사실 확인 자료</td>
                  <td>12개월</td>
                </tr>
              </tbody>
            </TermsTable>
            <div className='space-large'></div>
            <TermsItemSubTitle>(1) 삭제 절차</TermsItemSubTitle>
            사용자의 개인정보는 사용이 끝나면 바로 삭제됩니다. 위에서 언급한 것과 같이 개인정보를 보존해야 할 경우에는 별도의 데이터베이스(DB) 또는 다른 장소에 옮겨서 법정 기간 동안 보관하며, 기간이 지나면 바로 삭제합니다.

            <TermsItemSubTitle>(2) 삭제 방법</TermsItemSubTitle>
            삼성전자는 전자 파일 형태로 저장된 개인정보는 기록을 열어볼 수 없는 방법으로 삭제하며, 종이에 기재된 형태의 개인정보는 분쇄나 소각을 통해 삭제합니다.
          </TermsContItem>

          <TermsContItem ref={el => (tocRef.current[4] = el)}>
            <TermsItemTitle>5. 사용자 및 법정대리인의 권리 및 행사 방법</TermsItemTitle>
            삼성전자는 개인정보에 대한 사용자의 권리를 존중합니다. 사용자(만14세 미만인 경우에는 법정대리인)는 언제든지 개인정보 열람, 정정·삭제, 처리정지, 동의 철회를 삼성전자에 다음의 방법으로 요청할 수 있습니다. 단, 개인정보보호법 등 관련 법령에 따라 일부 권리 행사가 제한될 수 있습니다.
            <div className='space'></div>
            <TermsItemP>대표전화(1588-4730) 이용 </TermsItemP>
            <TermsItemP>고객지원 담당부서 또는 개인정보 보호책임자에게 연락(다음 목차 참조) </TermsItemP>
          </TermsContItem>

          <TermsContItem ref={el => (tocRef.current[5] = el)}>
            <TermsItemTitle>6. 고객지원 담당부서 및 개인정보 보호책임자 </TermsItemTitle>
            삼성전자는 사용자의 개인정보를 보호하고 개인정보와 관련된 불편사항을 개선하기 위해 고객지원 담당부서 및 개인정보 보호책임자를 지정하고 있습니다.
            사용자는 담당자에게 본인의 개인정보에 대한 권리 행사를 요청할 수 있으며, 삼성전자 서비스를 이용하며 발생한 개인정보 보호와 관련된 모든 민원을 신고할 수 있습니다. 삼성전자는 사용자의 신고사항에 대해 충분한 내용으로 신속하게 답변을 드릴 것입니다.

            <div className='space-large'></div>

            <TermsItemSubTitle>(1) 고객지원 담당부서</TermsItemSubTitle>
            <div className='space'></div>
            <TermsItemP>고객지원 담당부서 : 삼성전자 글로벌마케팅센터 브랜드전략그룹</TermsItemP>
            <TermsItemP>문의처 :  <TermsItemLink href='mailto:sdcsupport@samsungdevelopers.com' target='_blank' rel='noopener noreferrer'>sdcsupport@samsungdevelopers.com</TermsItemLink></TermsItemP>

            <TermsItemSubTitle>(2) 개인정보 보호책임자 및 개인정보 보호 담당부서</TermsItemSubTitle>
            <div className='space'></div>
            <TermsItemP>개인정보 보호책임자 : 개인정보보호사무국장</TermsItemP>
            <TermsItemP>개인정보 보호 담당부서 : 개인정보보호사무국</TermsItemP>
            <TermsItemP>전화 : 1588-4730 </TermsItemP>
            <TermsItemP><TermsItemLink href='mailto:privacy.sec@samsung.com' target='_blank' rel='noopener noreferrer'>privacy.sec@samsung.com</TermsItemLink></TermsItemP>

            <TermsItemSubTitle>(3) 기타 기관</TermsItemSubTitle>
            <div className='space'></div>
            <TermsItemP>기타 개인정보 침해 신고나 상담이 필요한 경우에는 아래 기관에 문의해 주세요. </TermsItemP>
            <TermsItemP>개인정보침해 신고센터 (<TermsItemLink href='https://privacy.kisa.or.kr/' target='_blank' rel='noopener noreferrer'>privacy.kisa.or.kr</TermsItemLink> / 국번 없이 118)</TermsItemP>
            <TermsItemP>대검찰청 사이버수사과 (<TermsItemLink href='https://www.spo.go.kr/' target='_blank' rel='noopener noreferrer'>pwww.spo.go.kr</TermsItemLink> / 국번 없이 1301)</TermsItemP>
            <TermsItemP>경찰청 사이버수사국 (<TermsItemLink href='https://ecrm.police.go.kr/minwon/main' target='_blank' rel='noopener noreferrer'>ecrm.cyber.go.kr</TermsItemLink> / 국번 없이 182)</TermsItemP>
          </TermsContItem>

          <TermsContItem ref={el => (tocRef.current[6] = el)}>
            <TermsItemTitle>7. 개인정보 자동 수집 장치 설치, 운영, 거부에 관한 사항  </TermsItemTitle>
            삼성전자는 사용자의 정보를 수시로 저장하고 찾아내는 쿠키(cookie)를 사용합니다. 쿠키는 회사 웹사이트 운영에 이용되는 서버가 사용자의 브라우저에 보내는 아주 작은 텍스트 파일로, 사용자의 기기내 저장공간에 저장됩니다.

            <div className='space-large'></div>

            <TermsItemSubTitle>(1) 쿠키 사용 목적</TermsItemSubTitle>
            삼성전자는 다음과 같은 목적으로 쿠키를 사용합니다.
            <div className='space'></div>
            <TermsItemP>자동 로그인 기능 구현</TermsItemP>
            <TermsItemP>회원/비회원의 접속 빈도 또는 방문 시간 등 분석</TermsItemP>
            <TermsItemP>사용자의 취향과 관심분야 파악 및 사용 기록 확인</TermsItemP>
            <TermsItemP>각종 이벤트 참여 및 방문 횟수 파악 등을 통한 타겟 마케팅과 개인 맞춤 서비스 제공 등</TermsItemP>

            <TermsItemSubTitle>(2) 쿠키 설정 방법</TermsItemSubTitle>
            사용자는 쿠키를 설치할 것인지 선택할 수 있습니다. 사용 중인 웹브라우저의 설정 메뉴(예: 인터넷 익스플로러 11.0 : 도구 > 인터넷옵션 > 개인정보)에서 쿠키 허용 수준을 변경하거나, 모든 쿠키의 저장을 거부할 수 있습니다. 단, 사용자가 쿠키 설치를 거부할 경우 일부 서비스가 제공되지 않을 수 있습니다. 
          </TermsContItem>

          <TermsContItem ref={el => (tocRef.current[7] = el)}>
            <TermsItemTitle>8. 안전한 개인정보 보호를 위한 조치</TermsItemTitle>
            삼성전자는 사용자의 개인정보를 안전하게 보호하기 위하여 다양한 보호조치와 노력을 하고 있습니다.
            <div className='space'></div>
            <TermsItemP>관리적 조치 : 내부 관리계획 수립 및 시행, 개인정보 교육 실시 등 </TermsItemP>
            <TermsItemP>기술적 조치 : 개인정보에 대한 접근통제 장치 운영 및 접근 권한 제한, 개인정보 처리시스템 접속기록 보관 및 위조/변조를 방지하기 위한 보안기능 사용, 개인정보의 암호화, 백신 프로그램 및 보안 프로그램 설치 등 </TermsItemP>
            <TermsItemP>물리적 조치 : 전산실, 자료보관실 등의 접근통제</TermsItemP>
          </TermsContItem>

          <TermsContItem ref={el => (tocRef.current[8] = el)}>
            <TermsItemTitle>9. 개인정보 처리방침 업데이트</TermsItemTitle>
            개인정보 처리방침은 처리하는 개인정보 내용 등 변경사항이 있으면, 이를 반영하여 언제든지 업데이트될 수 있습니다. 개인정보 처리방침이 업데이트될 경우, 시행되기 최소 7일 전에 공지사항 등을 통해 미리 알려드립니다.  
            <br /><br />
            개인정보 처리방침 버전 번호 :  v 1.0<br />
            개인정보 처리방침 시행 일자 :  2022년 09월 14일
          </TermsContItem>

        </TermsContWrap>

        <TermsContToc>
          <TermsTocInner>
            <TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[0])} } className={tocRef.current[0] === currentItem ? 'is-active' : ''}>1. 개인정보 수집 항목 및 방법</TermsTocItem>
            <TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[1])} } className={tocRef.current[1] === currentItem ? 'is-active' : ''}>2. 개인정보 수집·이용 목적</TermsTocItem>
            <TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[2])} } className={tocRef.current[2] === currentItem ? 'is-active' : ''}>3. 개인정보 처리위탁</TermsTocItem>
            <TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[3])} } className={tocRef.current[3] === currentItem ? 'is-active' : ''}>4. 개인정보 삭제</TermsTocItem>
            <TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[4])} } className={tocRef.current[4] === currentItem ? 'is-active' : ''}>5. 사용자 및 법정대리인의 권리 및 행사 방법</TermsTocItem>
            <TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[5])} } className={tocRef.current[5] === currentItem ? 'is-active' : ''}>6. 고객지원 담당부서 및 개인정보 보호책임자</TermsTocItem>
            <TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[6])} } className={tocRef.current[6] === currentItem ? 'is-active' : ''}>7. 개인정보 자동 수집 장치 설치, 운영, 거부에 관한 사항</TermsTocItem>
            <TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[7])} } className={tocRef.current[7] === currentItem ? 'is-active' : ''}>8. 안전한 개인정보 보호를 위한 조치</TermsTocItem>
            <TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[8])} } className={tocRef.current[8] === currentItem ? 'is-active' : ''}>9. 개인정보 처리방침 업데이트</TermsTocItem>
          </TermsTocInner>
        </TermsContToc>
      </TermsContInner>
    </TermsContContainer>
	)
}

export default TermPrivacyContKo;