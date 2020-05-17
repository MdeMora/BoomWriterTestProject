import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const ToolCards = () => {
    return (
        <section className='flex-fill'>
        
            <Container fluid>
                <Row>
                    <Col md={6} className='mt-3 mb-3'>
                        
                        <Link to='/tools/assignment-writing-tool'>
                            <div className="carde ligthgray roundedCorners cardGrow">
                                <div className='cardTitle green roundedTopCorners'>
                                    <h2>Assignments</h2>
                                </div>
                                <div className='cardBody'>
                                    <div className='textWrapper'>
                                        <p>
                                            A customizable and easy-to-use tool to create group or individual writing assignments!
                                        </p>
                                    </div>
                                    
                                    <figure className='imgWrapper150'>
                                        <img className='cardDecoration' src='../../../../anubis.png' alt='decoration pic'></img>
                                    </figure>
                                </div>
                            </div>
                        </Link>
                    </Col>

                    <Col md={6} className='mt-3 mb-3'>
                        
                        <Link to='/tools/journal-writing-tool'>
                            <div className="carde ligthgray roundedCorners cardGrow">
                                <div className='cardTitle darkblue roundedTopCorners'>
                                    <h2>Journals</h2>
                                </div>
                                <div className='cardBody'>
                                    <div className='textWrapper'>
                                        <p>
                                            The place where students can write consistently about anything and everything.
                                        </p>
                                    </div>
                                    
                                    <figure className='imgWrapper150'>
                                        <img className='cardDecoration' src='../../../../writingMonster.png' alt='decoration pic'></img>
                                    </figure>
                                </div>
                            </div>
                        </Link>
                    </Col>

                    <Col md={6} className='mt-3 mb-3'>
                        
                        <Link to='/tools/books-writing-tool'>
                            <div className="carde ligthgray roundedCorners cardGrow">
                                <div className='cardTitle blue roundedTopCorners'>
                                    <h2>Stories</h2>
                                </div>
                                <div className='cardBody'>
                                    <div className='textWrapper'>
                                        <p>
                                        Interactive group and individual story writing that gets published!
                                        </p>
                                    </div>
                                    
                                    <figure className='imgWrapper150'>
                                        <img className='cardDecoration' src='../../../../photoMonster.png' alt='decoration pic'></img>
                                    </figure>
                                </div>
                            </div>
                        </Link>
                    </Col>

                    <Col md={6} className='mt-3 mb-3'>
                        
                        <Link to='/tools/grading-writing-tool'>
                            <div className="carde ligthgray roundedCorners cardGrow">
                                <div className='cardTitle orange roundedTopCorners'>
                                    <h2>Grading</h2>
                                </div>
                                <div className='cardBody'>
                                    <div className='textWrapper'>
                                        <p>
                                            Built-in Grading System
                                        </p>
                                    </div>
                                    
                                    <figure className='imgWrapper150'>
                                        <img className='cardDecoration' src='../../../../graph.png' alt='anubis'></img>
                                    </figure>
                                </div>
                            </div>
                        </Link>
                    </Col>

                    
                    
                </Row>
            </Container>
        </section>
    )
    

}

export default ToolCards