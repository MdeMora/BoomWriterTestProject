import React, {useState,useEffect} from 'react'

/*Components*/
import Navbar from '../ui/NavBar/Navbar'
import Footer from '../ui/Footer/Footer'
import ToolMenu from './toolMenu/ToolMenu'
import ToolCards from './toolCards/ToolCards.jsx'
import Assignment from './sections/assignments/Assignments'
import Journal from './sections/journal/Journal'
import Stories from './sections/stories/Stories'
import Grading from './sections/grading/Grading'

/*Styles*/
import { Container } from 'react-bootstrap'

const Tools = ({term}) => {

    const [stateTerm,setState]=useState('panel')

    useEffect(() => {
        // Actualiza el título del documento usando la API del navegador
        console.log(term)
        setState(term)
      });

    

    return(
        <>
        <Navbar/>
        <main className="mt-5">        
            <Container>
                <h1>BoomWriter Tools & Grading</h1>
                <div className='d-flex'>
                    <ToolMenu term={stateTerm}/>
                    {term==='panel'&&<ToolCards/>}
                    {term==='assignment'&&<Assignment/>}
                    {term==='journal'&&<Journal/>}
                    {term==='stories'&&<Stories/>}
                    {term==='grading'&&<Grading/>}
                </div>
                

            </Container>

        </main>
        
        <Footer/>
        </>
    )
}

export default Tools