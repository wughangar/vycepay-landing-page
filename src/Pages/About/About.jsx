import AboutHero from './../../Components/AboutComponents/Banner/Banner';
import Mission from './../../Components/AboutComponents/Mission/Mission';
import ProblemSolution from './../../Components/AboutComponents/ProblemSolution/ProblemSolution';   
import Features from './../../Components/AboutComponents/Features/Features';
import Vision from './../../Components/AboutComponents/Vision/Vision';
import CallToAction from './../../Components/AboutComponents/CTA/CTA';
import Roadmap from '../../Components/AboutComponents/Roadmap/Roadmap';

const About = () => {
    return (
        <div>

            {/* banner component  */}
            <div className="w-full ">
                <AboutHero></AboutHero>
            </div>

            <div className="w-full ">
                <Mission></Mission>
            </div>

            <div className="w-full ">
                <ProblemSolution></ProblemSolution>
            </div>

            <div className="w-full ">
                <Features></Features>
            </div>

            <div className="w-full ">
                <Roadmap></Roadmap>
            </div>

             <div className="w-full ">
                <Vision></Vision>
            </div>

             <div className="w-full ">
                <CallToAction></CallToAction>
            </div>

        </div>
    );
};

export default About;