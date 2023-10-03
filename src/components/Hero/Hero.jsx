import Header from '../Header/Header';
import './Hero.css';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';

import NumberCounter from 'number-counter';
import { motion } from 'framer-motion';

function Hero() {
    const transition = { type: 'spring', duration: 3 };
    const mobile = window.innerWidth <= 768 ? true : false

    return (
        <div className="hero" id="hero">
            <div className='blur blur-h'></div>
            <div className="left-h">
                <Header />

                <div className="the-best-ad">
                    <motion.div
                        initial={{ left: mobile ? '160px' : '210px' }}
                        whileInView={{ left: '8px' }}
                        transition={{ ...transition, type: 'tween' }}
                    ></motion.div>
                    <span>The best fitness club in the town</span>
                </div>

                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div>
                        <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                    </div>
                </div>

                <div className='figures'>
                    <div>
                        <span style={{ display: 'flex' }}>
                            +<NumberCounter end={140} start={100} duration='3' />
                        </span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span style={{ display: 'flex' }}>
                            +<NumberCounter end={978} start={800} duration='3' />
                        </span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span style={{ display: 'flex' }}>
                            +<NumberCounter end={50} start={0} duration='2' />
                        </span>
                        <span>fitness programs</span>
                    </div>
                </div>

                <div className='hero-buttons'>
                    <button className='btn'>Get Started</button>
                    <button className='btn'>Learn More</button>
                </div>
            </div>
            <div className="right-h">
                <button className='btn'>Join Now</button>

                <motion.div
                    initial={{ right: '-1rem' }}
                    whileInView={{ right: '8rem' }}
                    transition={transition}
                    className="heart-rate">
                    <img src={Heart} alt="heart" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>


                <img src={hero_image} alt="hero_image" className='hero_image' />
                <motion.img
                    initial={{ right: '15rem' }}
                    whileInView={{ right: '24rem' }}
                    transition={transition}
                    src={hero_image_back} alt="hero_image_back" className='hero_image_back' />

                <motion.div
                    initial={{ right: '34rem' }}
                    whileInView={{ right: '43rem' }}
                    transition={transition}
                    className="calories">
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero;