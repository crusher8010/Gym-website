import './Plans.css';
import { plansData } from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png'

function Plans() {
    return (
        <div className="plans-container">
            <div className="programs-header" style={{ gap: '2rem' }}>
                <span className='stroke-text'>READY TO START</span>
                <span style={{ marginBottom: "0.5rem" }}>YOUR JOURNEY</span>
                <span className='stroke-text'>WITH US</span>
            </div>

            <div className="plans">
                {plansData.map((item, i) => (
                    <div className="plan" key={i}>
                        {item.icon}
                        <span>{item.name}</span>
                        <span>{item.price}</span>

                        <div className="features">
                            {item.features.map((feature, i) => (
                                <div className="feature">
                                    <img src={whiteTick} alt="" />
                                    <span key={i}>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div><span>See more benefits {'->'}</span></div>
                        <button className='btn'>Join now</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Plans;