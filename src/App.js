import './App.css';
import { useState } from 'react'
import Header from './components/Header/Header'
import Separator from './components/Separator/Separator'
import Knowledges from './components/Knowledges/Knowledges'
import TopBanner from './components/TopBanner/TopBanner'
import Citar from './components/Citar/Citar'
import Skills from './components/Skills/Skills'
import RecentWorks from './components/RecentWorks/RecentWorks'
import Contact from './components/Contact/Contact'
import { Link, animateScroll as scroll } from "react-scroll";

export default function App() {

  const[ptbr, setPtbr] = useState('en')

  return (
    <>
      <Header ptbr = {ptbr} setPtbr = {setPtbr}/>
      <TopBanner ptbr = { ptbr } />
      <Citar ptbr = { ptbr } />
      <Knowledges ptbr = { ptbr } id='know'/>
      {ptbr == 'pt' && <Separator title="Habilidades" />}
      {ptbr == 'en' && <Separator title="Skills"  />}
      <Skills id='skills'/>
      {ptbr == 'pt' && <Separator title="Trabalhos Recentes" />}
      {ptbr == 'en' && <Separator title="Recent Works" />}
      <RecentWorks ptbr = { ptbr } id='recent'/>
      {ptbr == 'pt' && <Separator title="Contato" />}
      {ptbr == 'en' && <Separator title="Contact" />}
      <Contact ptbr = { ptbr } id='contact' />
    </>
  )
}