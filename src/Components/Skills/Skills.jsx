import Styled from './Skills.module.css'
import PersonalImage from "../../assets/Image.png";


export default function Skills(props){
    switch (props.data.lan) {
        case 'en':
            return (
                <>
                    <div className={Styled.skillsWrapper} id={'Skills'}>
                        <div className="container">
                        <section >


                                <h3>Skills & Tools</h3>
                                <div className="row">
                                    <div className="col-xxl-3 col-xl-3 col-md-6 col-sm-6 col-6">
                                        <div className={Styled.skillsCard}>
                                            <div className={Styled.skillsCardTitle}>HTML</div>
                                            <div className={Styled.skillsCardSub}>Advanced</div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-3 col-xl-3 col-md-6 col-sm-6 col-6">
                                        <div className={Styled.skillsCard}>
                                            <div className={Styled.skillsCardTitle}>CSS</div>
                                            <div className={Styled.skillsCardSub}>Advanced</div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-3 col-xl-3 col-md-6 col-sm-6 col-6">
                                        <div className={Styled.skillsCard}>
                                            <div className={Styled.skillsCardTitle}>JavaScript</div>
                                            <div className={Styled.skillsCardSub}>Advanced</div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-3 col-xl-3 col-md-6 col-sm-6 col-6">
                                        <div className={Styled.skillsCard}>
                                            <div className={Styled.skillsCardTitle}>Python</div>
                                            <div className={Styled.skillsCardSub}>Advanced</div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-3 col-xl-3 col-md-6 col-sm-6 col-6">
                                        <div className={Styled.skillsCard}>
                                            <div className={Styled.skillsCardTitle}>Django</div>
                                            <div className={Styled.skillsCardSub}>Proficient</div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-3 col-xl-3 col-md-6 col-sm-6 col-6">
                                        <div className={Styled.skillsCard}>
                                            <div className={Styled.skillsCardTitle}>React</div>
                                            <div className={Styled.skillsCardSub}>Proficient</div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-3 col-xl-3 col-md-6 col-sm-6 col-6">
                                        <div className={Styled.skillsCard}>
                                            <div className={Styled.skillsCardTitle}>Bootstrap</div>
                                            <div className={Styled.skillsCardSub}>Proficient</div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-3 col-xl-3 col-md-6 col-sm-6 col-6">
                                        <div className={Styled.skillsCard}>
                                            <div className={Styled.skillsCardTitle}>UI/UX</div>
                                            <div className={Styled.skillsCardSub}>Proficient</div>
                                        </div>
                                    </div>
                                </div>


                        </section>
                        </div>
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