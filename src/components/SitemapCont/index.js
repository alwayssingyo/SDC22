import React from "react";
import { Link } from "react-router-dom";
import * as S from './style'

const SitemapCont = () => {
  return(
    <S.SitemapWrap>
      <S.SitemapWrapInner>
        <S.SitemapTitle>Site map</S.SitemapTitle>
        {
          /* Links */
        }
        <S.SitemapLinks>
          <Link className="link" to="/keynote">Keynote</Link>
          <div className="link">
            <span>Sessions</span>
              <Link className="depth-link" to="/speaker">Speakers</Link>
              <Link className="depth-link" to="/liveTech">Tech Sessions</Link>
            </div>
          <Link className="link" to="/schedule">Schedule</Link>
          <Link className="link" to="/support">Support</Link>
        </S.SitemapLinks>
      </S.SitemapWrapInner>
    </S.SitemapWrap>
  )

}

export default SitemapCont;