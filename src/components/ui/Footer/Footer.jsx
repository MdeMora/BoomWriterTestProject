import React from 'react'

/*Components*/
/*Styles*/
import './Footer.css'

const Home = () => {

    return(
        <footer>
            <section className='stFooter'>
                <figure>
                    <img src='./../../../footerLogo.png'></img>
                </figure>
                <div>
                <a href="/about-us">About Us</a>
                <a href="/blog">Blog</a>
                <a href="/home/privacy-policy">Privacy Policy</a>
                <a href="/home/terms">Terms of Use</a>
                {/* <a href="https://www.facebook.com/BoomWriter/" target="_blank" class=" "><span class="icon-facebook"></span></a>
                <a href="https://twitter.com/BoomWriter_" target="_blank" class=" "><span class="icon-twitter"></span></a>
                <a href="https://www.linkedin.com/company/boomwriter" target="_blank" class=" "><span class="icon-linkedin"></span></a>
                <a href="https://www.instagram.com/boomwriter/" target="_blank" class=" "><span class="icon-instagram"></span></a>
                <a href="https://www.youtube.com/user/boomwriter/" target="_blank" class=" "><span class="icon-youtube"></span></a> */}
                </div>
            </section>
            <section className='sndFooter'>
                <figure>
                    <img src='./../../../bmMedia.png'></img>
                </figure>
                <p> BoomWriter Media Inc. - <a href="mailto:info@boomwriter.com">info@boomwriter.com</a> | Website and contents © 2010-2020 BoomWriter Media Inc. All rights reserved.</p>
                <p>P atent Pending (62/029,115)</p>
            </section>
        </footer>
    )
}

export default Home