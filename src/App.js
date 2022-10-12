import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FooterCon from './components/Footer';
import Topbutton from './components/Topbutton';
import { Main, Keynote, SessionDetail, Tech, Speakers,SpeakerDetail, Terms, Privacy, Support, Sitemap, Mypage, Schedule, Error, PrivacyKorea, PrivacyEu, PrivacyLatin, PrivacyBrazil, PrivacyTurkey, Cookie, CookieLatin, SessionRoom, SessionRoom2, MegaSession  } from './pages';
import './App.scss';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      {/* page content */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/keynote" element={<Keynote />} />
        <Route path="/liveTech" element={<Tech />} />
        <Route path="/sessionDetail" element={<SessionDetail />} />
        <Route path="/sessionRoom" element={<SessionRoom />} />
        <Route path="/sessionRoom2" element={<SessionRoom2 />} />
        <Route path="/megaSessionRoom" element={<MegaSession />} />
        <Route path="/speaker" element={<Speakers />} />
        <Route path="/speakerDetail" element={<SpeakerDetail />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/support" element={<Support />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/error" element={<Error />} />
        <Route path="/privacy/lang=us" element={<Privacy />} />
        <Route path="/privacy/lang=ko" element={<PrivacyKorea />} />
        <Route path="/privacy/lang=eu" element={<PrivacyEu />} />
        <Route path="/privacy/lang=latinAmerica" element={<PrivacyLatin />} />
        <Route path="/privacy/lang=brazil" element={<PrivacyBrazil />} />
        <Route path="/privacy/lang=turkey" element={<PrivacyTurkey />} />
        <Route path="/cookie/lang=eu" element={<Cookie />} />
        <Route path="/cookie/lang=latinAmerica" element={<CookieLatin />} />
      </Routes>

      {/* Footer */}
      <FooterCon />

      {/* Top Button */}
      <Topbutton />

    </div>
  );
}

export default App;
