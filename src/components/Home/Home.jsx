import React, {useEffect,useState} from 'react'

/*Components*/
import Navbar from '../ui/NavBar/Navbar'
import Footer from '../ui/Footer/Footer'
import Slider from 'infinite-react-carousel';
import { TwitterTweetEmbed } from 'react-twitter-embed';
// Services
import statsServices from '../../services/stats.services'
/*Styles*/
import './Home.css'
import { Container, Row, Col } from 'react-bootstrap'

const Home = () => {

    const [stats,setStats] = useState({writers:undefined,activities:undefined,countries:undefined})

    useEffect(() => {
        statsServices.getStats().then(res=>setStats(res))
    },[]);

    return(
        <>
        <Navbar/>
        <main>
            <section className="hero p-5 d-flex">
                <div className='heroCard ml-5'>
                    <h1>Where Students Love to Write</h1>
                    <p>The writing app for teachers to conduct remote learning activities with students</p>
                    <h2>Sign up for free:</h2>
                    <div className='d-flex flex-column align-items-center full'>
                        <a href='#home' className='p-1 m-2'>
                            <img src='../../../emc2.png' alt='decoration pic'/>
                            Teacher
                        </a>
                        <a href='#home' className='p-1 m-2'>
                            <img src='../../../monsterandbook.png' alt='decoration pic'/>
                            Student
                        </a>
                        <a href='#home' className='p-1 m-2'>
                            <img src='../../../house.png' alt='decoration pic'/>
                            Parent
                        </a>
                        <a href='#home' className='hiden'> signup</a>
                    </div>
                </div>


            </section>

            <section className='text-center ligthgray pb-3 patternBG slant'>
                <Container>
                    <h2 className="mb-0">Our writing app tool kit</h2>
                    <p >For all fiction, non-fiction and vocabulary-focused writing activities</p>
                    <p></p>
                </Container>
                <Container fluid>
                    <Row>
                        <Col md={4}>
                            <a href='#link' className="topPicCard">
                                <div className="topPicCardImgWrapper greenWrapper">
                                    <img className='topPicCardImg' src='../../../storyMonster.png' alt='decoration pic'></img>
                                </div>
                                <div className="">
                                    <h3>Stories</h3>
                                    <p>Let your class collaborate to create an original story that can be published into a softcover book and personalized for each student!</p>
                                </div>
                            </a>
                        </Col>
                        <Col md={4}>
                        <a href='#link' className="topPicCard">
                                <div className="topPicCardImgWrapper redWrapper">
                                    <img className='topPicCardImg' src='../../../anubis.png' alt='decoration pic'></img>
                                </div>
                                <div className="">
                                    <h3>Stories</h3>
                                    <p>Let your class collaborate to create an original story that can be published into a softcover book and personalized for each student!</p>
                                </div>
                            </a>
                        </Col>
                        <Col md={4}>
                        <a href='#link' className="topPicCard">
                                <div className="topPicCardImgWrapper purpleWrapper d-flex align-items-center">
                                    <img className='topPicCardImg' src='../../../writingMonster.png' alt='decoration pic'></img>
                                </div>
                                <div className="">
                                    <h3>Stories</h3>
                                    <p>Let your class collaborate to create an original story that can be published into a softcover book and personalized for each student!</p>
                                </div>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container className='standardSection'>
                    <div className='mr-4'>
                        <h1>BoomWriter inspires students to write on any subject.</h1>
                        <p className="bigP">Try it for ELA, Social Studies/History, Science and even Math. Plus, it can be used on any device.</p>
                        <a className="outlineBtn" href="#link">Signup free as the teacher</a>
                    </div>
                    <div>
                        <img className="subjetsImg" src='../../../subjectsLaptop.png'/>
                    </div>
                </Container>
            </section>

            <section>
                <Container className="standardSection justify-content-center">
                    <div>
                        <h1>Teachers love BoomWriter</h1>
                        <div>
                            <Slider dots arrows={false} duration={5} sift={-200} adaptiveHeight={true} overScan={2}>
                                <div>
                                <TwitterTweetEmbed
                                    tweetId={'1222636781679583232'}
                                /> 
                                </div>
                                <div>
                                    <TwitterTweetEmbed
                                        tweetId={'1216735232809938951'}
                                    /> 
                                </div>
                                <div>
                                    <TwitterTweetEmbed
                                        tweetId={'1214679829448216577'}
                                    /> 
                                </div>
                            </Slider>
                        </div>
                    </div>
                </Container>
            </section>

            <section>
                <Container fluid className="p-0 topDeco">
                    <Row>
                        <Col md={6} className="p-0">
                            <div className="d-flex flex-column text-center pl-5 pr-5 pt-3 pb-3">
                                <h2>BoomWriter Remote Teaching</h2>
                                <p className="bigP">These resources should help you deliver impactful remote learning activities through BoomWriter. Download them now for free!</p>
                                <div className="mb-4">
                                    <img className="journalPic" src="../../../multiMonster.png" alt='decorative pic'/>
                                </div>
                                <div>
                                    <a href="#link" className='outlineBtn smBtn ml-1 mr-1 mb-3'>Remote Teaching Guide</a>
                                    <a href="#link" className='outlineBtn smBtn ml-1 mr-1 mb-3'>Student onboarding</a>
                                </div>
                                <div>
                                    <a href="#link" className='blueLink smBtn'>Watch our video on remote learning</a>
                                </div>
                            </div>
                        </Col>

                        <Col md={6} className="p-0">
                            <a href='#link' className="topDeco">
                                <div className='blueWrapper text-center'>
                                    <h2>BoomWriter Student Journals</h2>
                                    <p className="bigP">Your ‘go-to’ place for students to write about anything and everything!</p>
                                    <div className="mb-1">
                                        <img className="journalPic" alt="decorative pic" src="../../../writingMonster.png"/>
                                    </div>

                                    <span className='journalBtn'>Learn More</span>
                                </div>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </section>
            
            <section className='ligthgray p-5'>
                <Container>
                    <div className='d-flex flex-column'>
                        <h2 className='noBold'>This month on BoomWriter</h2>
                        <Container className='mt-5'>
                            <Row>
                                <Col md={4}>
                                    <div className="statsCard" id="gray">
                                        <div className="bold cGray bigHeading">{stats.writers}</div>
                                        <div className="smallHeading">Writers</div>                                    
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className='statsCard' id="blue">
                                        <div className="bold cBlue bigHeading">{stats.activities}</div>
                                        <div className="smallHeading">Writers</div>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className='statsCard' id="green">
                                        <div className="bold cGreen bigHeading">{stats.countries}</div>
                                        <div className="smallHeading">countries</div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </section>
                
            <section>

                <div className="d-flex flex-column dropped patternBG">
                    <Container>
                        <div className='d-flex p-5 align-items-center'>
                            <div>
                                <h2 className="cDarkBlue">Turn your students into published authors</h2>
                                <figure>
                                    <img className='imgWrapper hiden' src='../../../studentBooks.png' alt='laptop'></img>
                                </figure>
                                <p className="bigP">Kick-off a collaborative writing project and let every student writer take home a copy of their book.</p>
                                <a className="outlineBtn" href='#link'>Start my story</a>
                            </div>

                            <div>
                                <figure className="notHiden imgWrapper900">
                                    <img className='imgWrapper' src='../../../studentBooks.png' alt='laptop'></img>
                                </figure>
                            </div>
                        </div>
                    </Container>

                    <div className='mb-0'>
                        <h2 className='noBold cDarkBlue ml-3'>With story starts for all abilities</h2>
                    </div>

                    <div>
                        <Container fluid >
                            <Row >
                                <Col md={6}>
                                    <div className='blue cWhite celebSlider'>
                                        <Slider arrows={false} duration={5} sift={-200} autoplay={true} autoplaySpeed={4000} pauseOnHover={false} overScan={2} wheel={true}>

                                            <div className="text-center">
                                                <div className="celebPicWrapper">
                                                    <img src='../../../men1.jpg' alt='a men'></img>
                                                </div>
                                                <div>
                                                    <h4>Jamal Joseph</h4>
                                                    <p>Black Panther and Poet</p>
                                                </div>
                                            </div>

                                            <div className="text-center">
                                                <div className="celebPicWrapper">
                                                    <img src='../../../men2.jpg' alt='a men'></img>
                                                </div>
                                                <div className="">
                                                    <h4>Nick Bruel</h4>
                                                    <p>Creator of Bad Kitty</p>
                                                </div>
                                            </div>

                                            <div className="text-center">
                                                <div className="celebPicWrapper">
                                                    <img src='../../../men3.jpg' alt='a men'></img>
                                                </div>
                                                <div>
                                                    <h4>Jeff Kiney</h4>
                                                    <p>Creator of <i>Diary of a Wimpy Kid</i></p>
                                                </div>
                                            </div>
                                            
                                        </Slider>
                                    </div>
                                    
                                    
                                </Col>
                                <Col md={6}>
                                    <div className='p-2'>
                                        <p className="bigP"> Our curated and expansive collection of story starts are created by an ever-growing assortment of renowned authors and personalities. All accessible in our writing app.</p>
                                        <a class="outlineBtn" href="#link">Join now to access story starts</a>
                                    </div>
                                    
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </section>

            <section>
                <Container>
                    <div className='d-flex flex-column'>
                        <h2 className='noBold p-1 m-5 text-center'>BoomWriter is an award-winning writing app that is committed to school and student privacy and safety.</h2>
                        <div className='logoFlex text-center p-1 mb-5'>
                            <div className="m-2">
                                <img className="award-logos" alt="Logo" src="../../../kidsafe.png"/>
                            </div>
                            <div className="m-2">
                                <img className="award-logos" alt="Logo" src="../../../20best.png"/>
                            </div>
                            <div className="m-2">
                                <img className="award-logos" alt="Logo" src="../../../google4education.png"/>
                            </div>
                            <div className="m-2">
                                <img className="award-logos" alt="Logo" src="../../../edtech.png"/>
                            </div>
                            <div className="m-2">
                                <img className="award-logos" alt="Logo" src="../../../spps.jpg"/>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
        <Footer/>
        
        
        </>
    )
}

export default Home