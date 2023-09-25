import './Testimonials.css';
import { testimonialsData } from '../../data/testimonialsData';
import { useState } from 'react';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';

function Testimonials() {
    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;

    const handleLeftClick = () => {
        if (selected === 0) {
            setSelected(tLength - 1);
        } else {
            setSelected((prev) => prev - 1);
        }
    }

    const handleRightClick = () => {
        if (selected === (tLength - 1)) {
            setSelected(0)
        } else {
            setSelected((prev) => prev + 1);
        }
    }

    return (
        <div className='Testimonials'>
            <div className='left-t'>
                <span>Testimonials</span>
                <span className='stroke-text'>What they</span>
                <span>say about us</span>
                <span>
                    {testimonialsData[selected].review}
                </span>
                <span>
                    <span style={{ color: 'var(--orange)' }}>{testimonialsData[selected].name} </span>
                    - {testimonialsData[selected].status}
                </span>
            </div>
            <div className='right-t'>
                <div></div>
                <div></div>
                <img src={testimonialsData[selected].image} alt="" />

                <div className="arrows">
                    <img src={leftArrow} alt="leftArrow" onClick={handleLeftClick} />
                    <img src={rightArrow} alt="rightArrow" onClick={handleRightClick} />
                </div>
            </div>
        </div>
    )
}

export default Testimonials;