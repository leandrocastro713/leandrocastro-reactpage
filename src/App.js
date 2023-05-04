import './App.css';
import Header from './components/Header/Header'
import Separator from './components/Separator/Separator'
import Knowledges from './components/Knowledges/Knowledges'
import TopBanner from './components/TopBanner/TopBanner'
import Citar from './components/Citar/Citar'

export default function App() {
  return (
    <>
      <Header />
      <TopBanner />
      <Citar />
      <Separator />
      <Knowledges />
    </>
  );
}