import "./contact.css";
import emailjs from "emailjs-com";
import {useState} from "react";


export default function Contact() {
    const [result, showResult] = useState(false);

    const Result =()=>{
        return(
            <p style={{color:"green", fontSize:"20px", fontWeight:"bold"}}> Message successfully sent</p>
        )
    }

    const sendEmail=(e)=>{
        e.preventDefault();
        emailjs.sendForm(
            "service_fbw4xi8",
            "template_nmkl1wo",
              e.target,
             "user_AmdjZkDE9OtrBDgpjgoSm"
             ).then(result=>{
                 console.log(result.text)
             }).catch(err=>{
                 console.log(err.text);
             });
             e.target.reset();
             showResult(true);
    }
    return (
        <div className="contact">
            <h1 className="contactTitle"> WRITE US</h1>
            <form className="contactForm" onSubmit={sendEmail}>
                <label>Name </label>
                   <input type="text" name="name" className="contactInput form-control" />
                <label>Email </label>
                     <input type="email" name="user_email"  className="contactInput" />
                <label>Message</label>
                <textarea name="message" rows="4" />
                <button type="submit" className="contactButton">Submit</button>
                 {
                     result ? <Result /> : null
                 }
            </form>
        </div>
    )
}
