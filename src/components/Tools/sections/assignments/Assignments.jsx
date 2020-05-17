import React from 'react'

const Assignments = ()=>{
    return(
        <div className='carde mb-5 roundedCorners'>
            <div className='cardTitle green'>
                <div className='m-3'>
                    <h2>A customizable and easy-to-use tool to create group or individual writing assignments!</h2>
                    <p>A flexible and engaging tool for creating group writing assignments.</p>
                    <a>Try assignments today!</a>
                </div>
            </div>
            <div className='cardBody flex-column p-5'>
                <div className='cardBodySection'>
                    <div>
                        <h3>For any number of students...</h3>
                        <p>Our customizable writing activities are easy to use and can be created for individual students or groups of any size or ability.</p>
                    </div>
                    <div>
                        <figure>
                            <img className='bigCardDecoration' src='../../../../anubis.png' alt='decoration pic'></img>
                        </figure>
                    </div>
                </div>

                <div className='cardBodySection'>
                    <div className='p-2 ligthgray half'>
                        <h4 class="headingSmall">How It Works:</h4>
                        <p class="defaultText mb-2">Provide student/s with assignment details, vocabulary, and word count.</p>
                        <p class="defaultText mb-2">Let students write.</p>
                        <p class="defaultText mb-2">Review student work and assess levels of understanding.</p>
                        <p class="defaultText mb-2">Provide personalized feedback.</p>
                        <p class="defaultText mb-2">Let students revise their work.</p>
                        <p class="defaultText mb-2">Initiate peer review and identify winning entry (optional).</p>
                        <p class="defaultText mb-2">Add new section and repeat the process (optional).</p>
                    </div>
                    <div className='half p-5'>
                        <h3>... in any subject!</h3>
                        <p>From crafting arguments and composing informational pieces to developing poetry techniques or explaining mathematical thinking, our Assignments tool facilitates the creation of a limitless number of writing activities in any genre or subject.</p>
                    </div>
                </div>

                <div className='cardBodySection'>
                    <div>
                        <figure>
                            <img className='bigCardDecoration' src='../../../../wordbank.png' alt='decoration pic'></img>
                        </figure>
                    </div>
                    <div>
                        <h3>For any number of students...</h3>
                        <p>Our customizable writing activities are easy to use and can be created for individual students or groups of any size or ability.</p>
                    </div>
                </div>

                <div className='cardBodySection'>
                    <div>
                        <h3>For any number of students...</h3>
                        <p>Our customizable writing activities are easy to use and can be created for individual students or groups of any size or ability.</p>
                    </div>
                    <div>
                        <figure>
                            <img className='bigCardDecoration' src='../../../../sections.png' alt='decoration pic'></img>
                        </figure>
                    </div>
                </div>

            </div>

            <div className='cardFooter green '>
                <a className="cardFooterBtn"> Try Assignments today!</a>
            </div>

        </div>
    )
}

export default Assignments