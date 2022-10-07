import React from "react";
import { Link } from "react-router-dom";
import {SitemapWrap, SitemapWrapInner, SitemapTitle, SitemapLinks } from './SitemapContElement'

const SitemapCont = () => {
  return(
    <SitemapWrap>
      <SitemapWrapInner>
        <SitemapTitle>Site map</SitemapTitle>
        {
          /* Links */
        }
        <SitemapLinks>
          <Link className="link" to="/keynote">Keynote</Link>
          <div className="link">
            <span>Sessions</span>
              <Link className="depth-link" to="/speaker">Speakers</Link>
              <Link className="depth-link" to="/liveTech">Tech Sessions</Link>
            </div>
          <Link className="link" to="/schedule">Schedule</Link>
          <Link className="link" to="/support">Support</Link>
        </SitemapLinks>
      </SitemapWrapInner>
    </SitemapWrap>
  )

}

export default SitemapCont;