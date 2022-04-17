import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Services from '../Service/Services/Services';
import Support from '../Support/Support';
const Home = () => {
    return (
        <div>
           <Banner/>
           <Services/>
           <Support/>
           <ContactUs/>
        </div>
    );
};

export default Home;