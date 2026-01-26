import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './componentes/Header'
import SearchBar from './componentes/SearchBar'
import LastSearch from './componentes/LastSearch'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header></Header>
    <SearchBar value={''} placeholder={''}></SearchBar>
    <LastSearch searches={[]}></LastSearch>
  </StrictMode>,
)
