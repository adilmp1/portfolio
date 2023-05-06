import c from './images/logos/c.png'
import cpp from './images/logos/cpp.png'
import html from './images/logos/html.png'
import css from './images/logos/css.png'
import javascript from './images/logos/javascript.png'
import figma from './images/logos/figma.png'
import react from './images/logos/react.png'
import java from './images/logos/java.png'
import mysql from './images/logos/mysql.png'
import './Skills.css'
export default function Skills()
{
    return(
        <div className="skills">
            <h1>My Skills</h1>
            <div className='my-skills'>
                <div className='skill'>
                    <img src={html} alt=''></img>
                    <h2>html</h2>
                </div>
                <div className='skill'>
                    <img src={css} alt=''></img>
                    <h2>css</h2>
                </div>
                <div className='skill'>
                    <img src={javascript} alt=''></img>
                    <h2>javascript</h2>
                </div>
                <div className='skill'>
                    <img src={react} alt=''></img>
                    <h2>react</h2>
                </div>
                <div className='skill'>
                    <img src={c} alt=''></img>
                    <h2>c</h2>
                </div>
                <div className='skill'>
                    <img src={cpp} alt=''></img>
                    <h2>cpp</h2>
                </div>
                <div className='skill'>
                    <img src={java} alt=''></img>
                    <h2>java</h2>
                </div>
                <div className='skill'>
                    <img src={mysql} alt=''></img>
                    <h2>mysql</h2>
                </div>
                <div className='skill'>
                    <img src={figma} alt=''></img>
                    <h2>figma</h2>
                </div>
            </div>
        </div>
    )
}