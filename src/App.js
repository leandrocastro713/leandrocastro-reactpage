import './App.css';
import Header from './components/Header/Header'
import Separator from './components/Separator/Separator'
import Knowledges from './components/Knowledges/Knowledges'
import TopBanner from './components/TopBanner/TopBanner'
import Citar from './components/Citar/Citar'
import Skills from './components/Skills/Skills'
import RecentWorks from './components/RecentWorks/RecentWorks'
import Contact from './components/Contact/Contact'

export default function App() {
  return (
    <>
      <Header />
      <TopBanner />
      <Citar />
      <Knowledges />
      <Separator title="Skills" />
      <Skills />
      <Separator title="Recent Works" />
      <RecentWorks />
      <Separator title="Contact" />
      <Contact />
    </>
  );
}