import { useEffect, useState } from 'react';
import './BackgroundProject.css'
import BackgroundProjectData from './BackgroundProject.json';
import FondoProject from '../../../assets/img/ImagenesFondos/fondoProject.jpeg';

const BackgroundProject = () => {

    const content = BackgroundProjectData && BackgroundProjectData.length > 0 ? BackgroundProjectData[0] : null;
    const [titleIndex, setTitleIndex] = useState(0);

    useEffect(() => {
        if (content?.titles) {
            const interval = setInterval(() => {
                setTitleIndex((prev) => (prev + 1) % content.titles.length);
            }, 6000);
            return () => clearInterval(interval);
        }
    }, [content?.titles]);

    if (!content) return null;
    return (
        <>
            <div className='application_global_header_container_img_project'>
                <img className='application_global_background_element_project' src={FondoProject} />
            </div>
            <div className='application_global_img_element_overlay_project'></div>

            <div className='hero_text_container_text_left_project'>
                <div className='hero_title_fixed_height_wrapper_project' key={titleIndex}>
                    <h1 className='fade_text_project'>
                        {content.titles[titleIndex]}
                    </h1>
                </div>

                <h2 className='hero_subtitle_project'>
                    {content.subtitle}
                </h2>

            </div>

        </>
    )
}

export default BackgroundProject;