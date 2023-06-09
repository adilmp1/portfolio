import img1 from './images/photo.png'
import './Home.css'
export default function Home()
{
    return(
        <div className="home">
            <div className='my-photo'>
              <img src={img1}></img>      
            </div>
            <div className='home-content'>
                <h1>Turning Vision Into Reality With Code And Design</h1>
                <p>
                    As a skilled fontend developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projetcs and articles, showcasing my expertise in React.js and web development
                </p>
                <a target='blank' href='https://drive.google.com/file/d/1rMiE1zBLjGCDRm-fZCVqOTwP05czHboN/view?usp=share_link'>
                    <button>Resume<i class="ri-arrow-right-up-line"></i></button>   
                </a>
            </div>
        </div>  
    )
}
