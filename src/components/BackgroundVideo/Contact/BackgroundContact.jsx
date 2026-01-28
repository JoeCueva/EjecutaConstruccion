import HeroData from '../Contact/BackgroundContact.json';
import FondoContacto from '../../../assets/img/FondoContacto.jpg';
import { useEffect, useState } from 'react';
import './BackgroundContact.css';

const BackgroundContact = () => {

    const content = HeroData && HeroData.length > 0 ? HeroData[0] : null;
    const [titleIndex, setTitleIndex] = useState(0);

    useEffect(() => {
        if(content?.titles) {
            const interval = setInterval(() => {
                setTitleIndex((prev) => (prev + 1) % content.titles.length);
            }, 6000);
            return () => clearInterval(interval);
        }
    }, [content?.titles]);

    if(!content) return  null;

    return(
        <>

        <div className='application_global_header_container_img_contact'>
            <img className='application_global_background_element_contact' src={FondoContacto} />
        </div>
        <div className='application_global_img_element_overlay_contact'></div>

        <div className='hero_text_container_text_left_contact'>
               <div className='hero_title_fixed_height_wrapper_contact' key={titleIndex}>
                    <h1 className='fade_text_contact'>
                        {content.titles[titleIndex]}
                    </h1>
               </div>

               <h2 className='hero_subtitle_contact'>
                    {content.subtitle}
               </h2>

        </div>

        </>
    );
};

export default BackgroundContact;