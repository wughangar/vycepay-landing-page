import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from './../SectionTitle/SectionTitle';


const Categories = () => {

    const categories = [
        {
            title: 'Wing Chair',
            products: '3,584 Products',
            image: '/src/assets/categories/categories_1.png',
        },
        {
            title: 'Wooden Chair',
            products: '157 Products',
            image: '/src/assets/categories/categories_2.png',
        },
        {
            title: 'desk Chair',
            products: '154 Products',
            image: '/src/assets/categories/categories_3.png',
        },
        {
            title: 'Park Bench',
            products: '154 Products',
            image: '/src/assets/categories/categories_4.png',
        },

    ];

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "160px",
        slidesToShow: 3,
        speed: 500
    };

    return (
        <div>
            <div className="lg:container mx-auto ">
                <SectionTitle title="Top Categories" mb='mb-11'></SectionTitle>

                <div className="slider-container features_slider w-full h-full">
                    <Slider {...settings}>
                        {
                            categories?.map((category, index) => (
                                <div key={index} className="p-4 h-[424px]">
                                    <div className="feature_image mb-4 relative">
                                        <img className="w-full h-[424px] rounded-lg object-cover" src={category?.image} alt={category?.title} />
                                        <div className="absolute bottom-0 left-0 w-full h-[85px] bg-[#000000] bg-opacity-50 flex flex-col justify-center p-4">
                                            <h4 className="text-xl text-white font-semibold font-inter mb-2 capitalize">{category?.title}</h4>
                                            <p className="text-sm text-white capitalize font-normal font-inter">{category?.products}</p>
                                        </div>
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

export default Categories;