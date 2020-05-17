import React , {useState} from 'react'

/*Components*/
import Navbar from '../ui/NavBar/Navbar'
import Footer from '../ui/Footer/Footer'
import { Container, Row, Col } from 'react-bootstrap'
/*Styles*/
import './Pricing.css'


const Pricing = () => {

    const [term, setTerm] = useState('teachers')


    return(
        <>
        <Navbar/>

        <section>
            <article className='pricing'>
                <h1>BoomWriter Pricing</h1>
                <div className='d-flex justify-content-center'>
                    <div className={term==='teachers'?'termBtn selected':'termBtn'} onClick={()=> setTerm('teachers')}>Teachers</div>
                    <div className={term==='schools'?'termBtn selected':'termBtn'}onClick={()=>setTerm('schools')}> Schools</div>
                </div>
            </article>
            <article className='teacherPricing ligthgray patternBG'>

                {term==='schools'?

                (
                    <div className='fitter'>
                        <div className='schoolInfo bg-white text-center'>
                            <h2 className=''>BoomWriter Schools</h2>
                            <p>Looking to use BoomWriter as a school or district solution?</p>
                            <a href='#link' className='blueLink'>Contact us for more information</a>
                        </div>
                    </div>
                    
                    
                ):( 
                    
                    <Container>
                        <div className='pricingText'>
                            <p>BoomWriter is committed to providing teachers unlimited free access to our tools. We also provide additional feature upgrades to better support teachers' in-school and remote teaching efforts.</p> 
                        </div>
                        <Row >
                            <Col md={4}>
                                <div className='carde bg-white'>
                                    <div className="cardTitle green">Free</div>
                                    <ul>
                                        <li>Unlimited number of BoomWriter Writing activities (Stories, Assignments, Student Journals)</li>
                                        <li>Unlimited number of students</li>
                                        <li>Unlimited number of classes</li>
                                    </ul>
                                    <div className='btnWrapper text-center'>
                                        <a href='#link' className="blueLink">Get started</a>
                                    </div>
                                </div>
                                
                            </Col>
                            <Col md={4}>
                                <div className='carde bg-white'>
                                    <div className="cardTitle gray">Basic – $5/month</div>
                                    <ul className='noUlStyle'>
                                    <li class="mb-1 priceList-icon">Everything included in the Free version, plus:</li>
                                    
                                    <li class="mb-1 priceList-icon">
                                        <img class="priceList-icon-img" alt="" data-rjs="/assets/pricing/rubrics@2x-63a42fedc9ee5911c7e4a9bf8681a6e3142c1141d7acb908f91c440fda150022.png" src="/assets/pricing/rubrics-ab5c128e907543c16b539d4436e461304782b025d99961af3fc14ceee4cc162f.png"/>
                                        Standard-based grading system to measure your students’ performance<br/>
                                        <a data-target="#Grading" href="/tools/grading-writing-tool">View Sample Rubrics</a>
                                    </li>

                                    <li class="mb-1 priceList-icon">
                                        <img class="priceList-icon-img" alt="" data-rjs="/assets/pricing/pdf@2x-e2670f66bf95c63441798fd6c21a11a91092b70e1e0dfc7f05204558f315c56b.png" src="/assets/pricing/pdf-40dd4ff58c4f746473eadbbd876afd6896eb0391b0e633366e400f077da0b04a.png"/>
                                        PDF creation of student work to digitally share or print<br/>
                                        <a href="/pricingdownload/6a-water-unit+study-guide.pdf">PDF Print Sample</a>
                                    </li>
                                    <li class="mb-1 priceList-icon">
                                        <img class="priceList-icon-img" alt="" data-rjs="/assets/pricing/duplicate@2x-627d25964b613a4e61194197ee5d2ea04e276dbf5132fb539d463b561e5dd6a3.png" src="/assets/pricing/duplicate-a212196062a44414c68d204f50ef24e8a6902cc02d20a68de17e93398b733b28.png"/>
                                        Duplicate existing assignments to use in your other classes
                                    </li>

                                    <li class="priceList-icon">
                                        <img class="priceList-icon-img" alt="" data-rjs="/assets/pricing/discount@2x-ef1cc69eafc9bec3f9302e6a47e68cfd37c1daa1d995191615e6299ed3b58859.png" src="/assets/pricing/discount-fff06cf78c851ec6d791e1e07fd6ae98d2ada9c2b822ee3cf7a0e36a058c2319.png"/>
                                        Families receive a 10% discount on purchases of student stories or journals
                                    </li>

                                    <li class="mb-1 priceList-icon"><strong>*7-day free trial</strong></li>
                                    
                                    </ul>
                                    <div className='btnWrapper text-center'>
                                        <a href='#link' className="blueLink">Get started</a>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className='carde bg-white'>
                                    <div className="cardTitle darkblue">Complete – $10/month</div>
                                    <ul className='noUlStyle'>
                                        <li>Everything included in the Free version, plus</li>

                                        <li>Standard-based grading system to measure your students’ performance
                                            <a data-target="#Grading" href="/tools/grading-writing-tool">View Sample Rubrics</a>
                                        </li>

                                        <li class="mb-1 priceList-icon">
                                            <img class="priceList-icon-img" alt="" data-rjs="/assets/pricing/pdf@2x-e2670f66bf95c63441798fd6c21a11a91092b70e1e0dfc7f05204558f315c56b.png" src="/assets/pricing/pdf-40dd4ff58c4f746473eadbbd876afd6896eb0391b0e633366e400f077da0b04a.png"/>
                                            PDF creation of student work to digitally share or print<br/>
                                            <a href="/pricingdownload/6a-water-unit+study-guide.pdf">PDF Print Sample</a>
                                        </li>

                                        <li class="mb-1 priceList-icon">
                                            <img class="priceList-icon-img" alt="" data-rjs="/assets/pricing/duplicate@2x-627d25964b613a4e61194197ee5d2ea04e276dbf5132fb539d463b561e5dd6a3.png" src="/assets/pricing/duplicate-a212196062a44414c68d204f50ef24e8a6902cc02d20a68de17e93398b733b28.png"/>
                                            Duplicate existing assignments to use in your other classes
                                        </li>

                                        <li class="priceList-icon">
                                            <img class="priceList-icon-img" alt="" data-rjs="/assets/pricing/discount@2x-ef1cc69eafc9bec3f9302e6a47e68cfd37c1daa1d995191615e6299ed3b58859.png" src="/assets/pricing/discount-fff06cf78c851ec6d791e1e07fd6ae98d2ada9c2b822ee3cf7a0e36a058c2319.png"/>
                                            Families receive a 10% discount on purchases of student stories or journals
                                        </li>

                                        <li>In-app chat allowing teachers to communicate with their students in real-time</li>

                                        <li>Multiple teachers can collaborate on writing activities.</li>

                                        <li>Students can provide teacher guided feedback to other classmates’ work (Coming soon)</li>

                                    </ul>
                                    <div className='btnWrapper text-center'>
                                        <a href='#link' className="blueLink">Get started</a>
                                    </div>
                                    
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    
                )}
            
                
            </article>

        </section>
        <Footer/>
        </>
    )
}

export default Pricing