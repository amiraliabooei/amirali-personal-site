import Styled from "./ContactBox.module.css";


export default function ContactBox(props){
    const Gomail = ()=>{

    }
    const GoPhone = ()=>{

    }
    switch (props.data.lan) {
        case 'en':
            return (
                <>
                    <div className={Styled.ContactBoxWrapper} id={'contact'}>
                        <div className="container">
                            <div className="row">
                                <div className="col-xxl-6 col-xl-6 col-md-12 col-sm-12">
                                    <div className={Styled.ContactSection}>
                                        <h3 className={Styled.ContactTitle}>Let's build something</h3>
                                        <p className={Styled.ContactDesc}>Tell me about your idea. I handle design,
                                            development and deployment.</p>

                                        <div className={Styled.ContactInfo}>
                                            <a className={Styled.InfoBox} href={'mailto:amiraliabooei@gmail.com'}>
                                                <div className={Styled.InfoLable}>Email</div>
                                                <div className={Styled.InfoValue}>Amiraliabooei@gmail.com</div>
                                            </a>

                                            <a className={Styled.InfoBox} href={'tel:+989912162483'}>
                                                <div className={Styled.InfoLable} >Phone</div>
                                                <div className={Styled.InfoValue}>09912162483</div>
                                            </a>

                                            <div className={Styled.ContactLinks}>
                                                <a href="https://t.me/">Telegram</a>
                                                <a href="https://www.linkedin.com/">LinkedIn</a>
                                                <a href="https://www.linkedin.com/">Instagram</a>
                                                <a href="https://www.linkedin.com/">Youtube</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-md-12 col-sm-12">
                                    <div className={Styled.ContactFormWrapper} >
                                        <form className={Styled.ContactFormContainer}>
                                            <label className={Styled.ContactFormLable}>Name</label>
                                            <input className={Styled.ContactFormInput} placeholder="Your name"/>
                                            <br/>
                                            <br/>
                                            <label className={Styled.ContactFormLable} >Email</label>
                                            <input className={Styled.ContactFormInput} placeholder="you@domain.com"/>
                                            <br/>
                                            <br/>
                                            <label className={Styled.ContactFormLable} >Message</label>
                                            <textarea className={Styled.ContactFormTextArea}
                                                      placeholder="Tell me about your project"></textarea>
                                            <div className={Styled.ContactFormBtnContainer}>
                                                <button type="submit" className={Styled.Btn}>Send</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            );

        case 'fa':
            return (
                <></>
            );
    }
}