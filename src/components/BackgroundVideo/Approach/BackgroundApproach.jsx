import { useEffect, useState } from 'react';
import BackgroundApproachData from './BackgroundApproach.json';
import FondoApproach from '../../../assets/img/ImagenesFondos/fondoEnfoque.jpg'
import './BackgroundApproach.css';

const BackgroundApproach = () => {
    const [titleIndex] = useState(0);
    const [visible, setVisible] = useState(false);

    const content =
        Array.isArray(BackgroundApproachData) && BackgroundApproachData.length > 0
            ? BackgroundApproachData[0]
            : null;

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true);
        }, 200);

        return () => clearTimeout(timer);
    }, []);

    if (!content) return null;

    return (
        <>
            <div className='application_global_header_container_img_approach'>
                <img
                    className='application_global_background_element_approach'
                    src={FondoApproach}
                    alt="Enfoque EJECUTA"
                />
            </div>

            <div className='application_global_img_element_overlay_approach'></div>

            <div
                className={`hero_text_container_text_left_approach ${visible ? 'is-visible' : ''
                    }`}
            >
                <div
                    className='hero_title_fixed_height_wrapper_approach'
                    key={titleIndex}
                >
                    <h1 className='fade_text_approach'>
                        {content.titles[titleIndex]}
                    </h1>
                </div>
            </div>
        </>
    );
};

export default BackgroundApproach;