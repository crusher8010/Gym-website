import './Join.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Join() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_2j3oclh", "template_73tt1lk", form.current, "gvNe7r5ssqUQcVacx").then((res) => console.log(res.text)).catch((err) => console.log(err.text))
    }

    return (
        <div className='Join' id="join-us">
            <div className="left-j">
                <hr />
                <div>
                    <span>READY TO</span>
                    <span>LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY</span>
                    <span>WITH US?</span>
                </div>
            </div>
            <din className="right-j">
                <form ref={form} action="" className='email-container' onSubmit={sendEmail}>
                    <input type="email" name="user_email" placeholder='Enter your Email address' />
                    <button className='btn btn-j'>Join Now</button>
                </form>
            </din>
        </div>
    )
}

export default Join;