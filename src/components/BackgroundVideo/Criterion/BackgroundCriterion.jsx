import FondoCriterion from '../../../assets/img/ImagenesFondos/fondoCriterio.png';
import BackgroundCriterionData from './BackgroundCriterion.json';
import './BackgroundCriterion.css';
import { useEffect, useState } from 'react';

const BackgroundCriterion = () => {

    const[titleIndex] = useState(0);
    const [visible, setVisible] = useState(false);

    const content =
        Array.isArray(BackgroundCriterionData) && BackgroundCriterionData.length > 0
            ? BackgroundCriterionData[0] : null;

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true);
        }, 200);
        return () => clearTimeout(timer);
    }, []);

    if(!content) return null;

    return (
        <>
            <div className='application_global_header_container_img_criterion'>
                <img
                    className='application_global_background_element_criterion'
                    src={FondoCriterion}
                    alt="Criterio EJECUTA"
                />
            </div>

            <div className='application_global_img_element_overlay_criterion'></div>

            <div
                className={`hero_text_container_text_left_criterion ${visible ? 'is-visible' : ''
                    }`}
            >
                <div
                    className='hero_title_fixed_height_wrapper_criterion'
                    key={titleIndex}
                >
                    <h1 className='fade_text_criterion'>
                        {content.titles[titleIndex]}
                    </h1>
                </div>
            </div>
        </>
    );
};
export default BackgroundCriterion;