import HomeAbout from './home-about/HomeAbout';


const About = ({ homeAboutInfo }) => {
  return (
    <>
      {homeAboutInfo && <HomeAbout homeAboutInfo={homeAboutInfo} />}
    </>
  );
};

export default About;
