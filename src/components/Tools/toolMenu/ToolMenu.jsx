import React from 'react'
import { Link } from 'react-router-dom'
import './ToolMenu.css'

const ToolMenu = ({term}) => {
    return(
        <nav className='toolNav'>
            <ul className='noUlStyle'>
                <li className='mb-2'>
                    <Link to='/tools/assignment-writing-tool' className={term==='assignment'?'navLink liSelected':'navLink'}>
                        <span className='navIcon green'>A</span>
                         Assignment
                    </Link>
                </li>
                <li className='mb-2'>
                    <Link to='/tools/journal-writing-tool' className={term==='journal'?'navLink liSelected':'navLink'}>
                        <span className='navIcon darkblue'>A</span>
                         Journals
                    </Link>
                </li>
                <li className='mb-2'>
                    <Link to='/tools/books-writing-tool' className={term==='stories'?'navLink liSelected':'navLink'}>
                        <span className='navIcon blue'>A</span>
                         Stories
                    </Link>
                </li>
                <li className='mb-2'>
                    <Link to='/tools/grading-writing-tool' className={term==='grading'?'navLink liSelected':'navLink'}>
                        <span className='navIcon orange'>A</span>
                         Grading
                    </Link>
                </li>
            </ul>
        </nav>
    )

}

export default ToolMenu