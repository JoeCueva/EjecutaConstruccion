import { useEffect, useState } from 'react';
import videoBg from '../../../assets/video/videoBg.mp4';
import HeroData from '../Home/BackgroundText.json';
import './BackgroundHome.css'

const BackgroundHome = () => {

    const content = HeroData && HeroData.length > 0 ? HeroData[0] : null;
    const [titleIndex, setTitleIndex] = useState(0);

    useEffect(() => {
        if (content?.titles) {
            const interval = setInterval(() => {
                setTitleIndex((prev) => (prev + 1) % content.titles.length);
            }, 4000);
            return () => clearInterval(interval);
        }
    }, [content?.titles]);

    if (!content) return null;

    return (
        <>
            <div className='application_global_header_container_video'>
                <video autoPlay muted loop playsInline className='application_global_background_element'>
                    <source src={videoBg} type='video/mp4' />
                </video>
                <div className="application_global_video_element_overlay"></div>


                <div className='hero_text_container_text_left'>

                    <div className='hero_title_fixed_height_wrapper' key={titleIndex}>
                        <h1 className='fade_text'>
                            {content.titles[titleIndex]}
                        </h1>
                    </div>

                    <p className='hero_reason'>
                        {content.reason}
                    </p>

                    <div className='hero_actions'>
                        <button className='btn_primary'>{content.primaryBtn}</button>
                        <button className='btn_secondary'>{content.secondaryBtn}</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default BackgroundHome;

