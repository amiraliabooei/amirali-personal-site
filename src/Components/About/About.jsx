import Styled from './About.module.css'
import PersonalImage from "../../assets/Image.png";

export default function About(props){
    switch (props.data.lan) {
        case 'en':
            return (
               <>
                   <div className={Styled.aboutWrapper} id={'About'}>
                       <section className={Styled.AboutSection}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12">
                                        <div className={Styled.AboutBoxWrapper}>
                                            <div className={Styled.AboutBox}>
                                                <h2>
                                                    About
                                                </h2>
                                                <p>
                                                    I'm a web and software developer and UI/UX designer from Yazd. I started programming in 2018 and went professional in 2020. I work as a freelancer building web apps and designs — if you have a project, let's talk.
                                                </p>
                                                <div className={Styled.aboutLocationAndExperiance}>
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <div
                                                                className={Styled.aboutLocationAndExperianceLable}>Location
                                                            </div>
                                                            <div
                                                                className={Styled.aboutLocationAndExperianceValue}>Yazd,
                                                                Iran
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div
                                                                className={Styled.aboutLocationAndExperianceLable}>
                                                                Experience
                                                            </div>
                                                            <div
                                                                className={Styled.aboutLocationAndExperianceValue}>
                                                                Since 2018
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={Styled.AboutBoxLinks}>

                                                        <a href="https://youtube.com/@programmingwithamirali">Youtube</a>
                                                        <a href="https://t.me/AAA_B_I">Telegram</a>
                                                        <a href="https://www.linkedin.com/">LinkedIn</a>
                                                        <a href="https://www.instagram.com/">Instagram</a>

                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                        <div className={Styled.topSkillsWrapper}>
                                            <div className={Styled.topSkillsBox}>
                                                <div className={Styled.topSkillsBoxLable}>Top skills</div>
                                                <div className={Styled.topSkillsBoxItems}>
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <div className={Styled.topSkillsItem}>
                                                                <div className={Styled.Name}>HTML</div>
                                                                <div className={Styled.Level}>Advanced</div>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className={Styled.topSkillsItem}>
                                                                <div className={Styled.Name}>CSS</div>
                                                                <div className={Styled.Level}>Advanced</div>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className={Styled.topSkillsItem}>
                                                                <div className={Styled.Name}>JavaScript</div>
                                                                <div className={Styled.Level}>Advanced</div>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className={Styled.topSkillsItem}>
                                                                <div className={Styled.Name}>Python</div>
                                                                <div className={Styled.Level}>Advanced</div>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className={Styled.topSkillsItem}>
                                                                <div className={Styled.Name}>Django</div>
                                                                <div className={Styled.Level}>proficient</div>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className={Styled.topSkillsItem}>
                                                                <div className={Styled.Name}>React</div>
                                                                <div className={Styled.Level}>proficient</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className={Styled.certificatesWrapper}>
                                            <div className={Styled.certificatesBox}>
                                                <div className={Styled.certificatesBoxLabel}>Certificates</div>
                                                <div className={Styled.certificatesBoxText}>Hamarh Aval, Khwarazmi awards and others.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                       </section>
                   </div>


               </>
            );

        case 'fa':
            return (
                <>
                </>
            );
    }
}