import './Programs.css';
import { programsData } from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png'

function Programs() {
    return (
        <div className='Programs' id="programs">
            <div className="programs-header">
                <span className='stroke-text'>Explore our</span>
                <span>Programs</span>
                <span className='stroke-text'>to shape you</span>
            </div>

            <div className="program-categories">
                {programsData.map((item) => (
                    <div className="category">
                        {item.image}
                        <span>{item.heading}</span>
                        <span>{item.details}</span>
                        <div className='join-now'>Join Now<span><img src={RightArrow} alt="" /></span></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Programs;