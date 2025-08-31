import Hero from './../../Components/ContactComponents/Banner/Banner';
import ContactForm from './../../Components/ContactComponents/ContactForm/ContactForm';
import FAQ from './../../Components/ContactComponents/FAQ/FAQ';

const Contact = () => {
    return (
        <div>

            {/* banner component  */}
            <div className="w-full ">
                <Hero></Hero>
            </div>

             <div className="w-full ">
                <ContactForm></ContactForm>
            </div>

             <div className="w-full ">
                <FAQ></FAQ>
            </div>

        </div>
    );
};

export default Contact;