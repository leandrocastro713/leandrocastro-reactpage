import './App.css';
import Header from './components/Header/Header'
import Separator from './components/Separator/Separator'
import Knowledges from './components/Knowledges/Knowledges'
import TopBanner from './components/TopBanner/TopBanner'

export default function App() {
  return (
    <>
      <Header />
      <TopBanner />
      <Separator />
      <Knowledges />
    </>
  );
}