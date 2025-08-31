import Hero from './../../Components/HomeComponents/Banner/Banner';
import WhatWeDo from '../../Components/HomeComponents/WhatWeDo/WhatWeDo';
import WhyChoose from './../../Components/HomeComponents/WhyChoose/WhyChoose';
import Motto from './../../Components/HomeComponents/Motto/Motto';
import Problem from './../../Components/HomeComponents/Problem/Problem';
import Solution from './../../Components/HomeComponents/Solution/Solution'; 
import Features from '../../Components/HomeComponents/Features/Features';
import Roadmap from '../../Components/AboutComponents/Roadmap/Roadmap';
import Market from './../../Components/HomeComponents/Market/Market';
import CTA from './../../Components/HomeComponents/CTA/CTA';    

const Home = () => {
    return (
        <div>

            {/* banner component  */}
            <div className="w-full ">
                <Hero></Hero>
            </div>

            <div className="w-full ">
                <WhatWeDo></WhatWeDo>
            </div>

             <div className="w-full ">
                <WhyChoose></WhyChoose>
            </div>

             <div className="w-full ">
                <Motto></Motto>
            </div>

            <div className="w-full ">
                <Problem></Problem>
            </div>

             <div className="w-full ">
                <Solution></Solution>
            </div>

            <div className="w-full ">
                <Features></Features>
            </div>

             <div className="w-full ">
                <Roadmap></Roadmap>
            </div>

            <div className="w-full ">
                <Market></Market>
            </div>

            <div className="w-full ">
                <CTA></CTA>
            </div>

        </div>
    );
};

export default Home;