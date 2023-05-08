import "./About.css";
import img1 from "./images/photo.png";
export default function About() {
  return (
    <div className="about">
      <div className="about-content-photo">
        <div className="about-photo">
          <img src={img1} />
        </div>
        <div className="about-content">
          <h1>About Me</h1>
          <hr />
          <p>
            Hi, I'm Adil, a web developer with experience of
            creating dynamic and user-friendly websites. My passion for coding
            started in 2019 when I first discovered the power of HTML and CSS.
            Since then, I have continuously honed my skills and kept up with the
            latest trends and technologies to deliver high-quality results for my
            clients. My expertise lies in developing custom websites and web
            applications that cater to the unique needs of each project. Whether
            it's a simple landing page or a complex e-commerce platform, I work
            closely with my clients to understand their requirements and deliver a
            solution that meets their goals and objectives. In addition to my
            technical skills, I'm also a creative problem solver and a great
            communicator. I thrive in collaborative environments where I can share
            my ideas and learn from others. I take pride in my work and always aim
            to exceed my clients' expectations.
          </p>

          <div className="my-details">
            <div className="part-1">
                <div>Name:</div>
                <div>Adil Mohamed</div>
            </div>
            <div className="part-1">
                <div>Age:</div>
                <div>19 Years</div>
            </div>
          </div>

          <div className="my-details">
            <div className="part-1">
                <div>Email:</div>
                <div>adilmohamedmp1@gmail.com</div>
            </div>
            <div className="part-1">
                <div>Address:</div>
                <div>Palakkad,Kerala</div>
            </div>
          </div>
          
        </div>
      </div>

      {/* <footer>
                <p>&copy; 2023 Adil Mohamed</p>
            </footer> */}
    </div>
  );
}
