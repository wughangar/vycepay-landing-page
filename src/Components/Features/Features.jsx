import SectionTitle from "../SectionTitle/SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ShoppingCart } from "lucide-react";

const Features = () => {

    const features = [
        {
            title: 'library stool',
            status: 'New',
            price: '$250',
            image: '/src/assets/features/product_1.png',
            currentPrice: '$200',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: '$250',
            image: '/src/assets/features/product_2.png',
        },
        {
            title: 'library stool Chair',
            price: '$250',
            image: '/src/assets/features/product_3.png',
        },
        {
            title: 'library stool Chair',
            status: 'New',
            price: '$250',
            image: '/src/assets/features/product_4.png',
            currentPrice: '$200',
        },
        {
            title: 'library stool',
            status: 'New',
            price: '$250',
            image: '/src/assets/features/product_1.png',
            currentPrice: '$200',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: '$250',
            image: '/src/assets/features/product_2.png',
        },
        {
            title: 'library stool Chair',
            price: '$250',
            image: '/src/assets/features/product_3.png',
        },
        {
            title: 'library stool Chair',
            status: 'New',
            price: '$250',
            image: '/src/assets/features/product_4.png',
            currentPrice: '$200',
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
        <div>
            <div className="lg:container mx-auto ">
                <SectionTitle title="Featured Products" mb='mb-11'></SectionTitle>

                <div className="slider-container features_slider w-full h-full">
                    <Slider {...settings}>
                        {
                            features?.map((feature, index) => (
                                <div key={index} className="p-4">
                                    <div className="feature_image mb-4 relative">
                                        <img className="w-full h-full object-cover" src={feature?.image} alt={feature?.title} />
                                        {
                                            feature?.status && (
                                                <div className="absolute top-4 left-4 bg-[#007580] text-white px-2 py-1 rounded-lg">
                                                    <button className="text-sm font-inter font-normal">{feature?.status}</button>
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="feature_content">
                                        <div className="flex items-center justify-between">
                                            <h4 className="text-base text-[#007580] capitalize font-inter font-normal mb-4">{feature?.title}</h4>
                                            <span className="bg-[#007580] h-[44px] w-[44px] rounded-lg flex items-center justify-center"><ShoppingCart size='1.5rem' color="#fff"  /></span>
                                        </div>
                                        <p className="text-xl flex items-center gap-2 text-[#272343] font-semibold font-inter ">
                                            {feature?.price} 
                                            {
                                                feature?.currentPrice && (
                                                    <span className="text-sm text-[#9a9caa] font-inter font-normal">{feature?.currentPrice}</span>
                                                )
                                            }
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>

            </div>
        </div>
    );
};

export default Features;