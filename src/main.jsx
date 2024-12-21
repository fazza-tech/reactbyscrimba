import { createRoot } from 'react-dom/client'

import Header  from './Header.jsx'
import MainContent from './MainCOntent.jsx'
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
    <>
    <Header/>
    <MainContent/>
    <Footer/>
    </>
)