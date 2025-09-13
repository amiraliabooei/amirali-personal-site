import Styled from './Skills.module.css';

export default function Skills(props) {
    // if (!props.AllSkills) return <p>Loading...</p>;
    console.log(props.skills)

    switch (props.data.lan) {
        case 'en':
            return (
                <div className={Styled.skillsWrapper} id="Skills">
                    <div className="container">
                        <section>
                            <h3>Skills & Tools</h3>
                            <div className="row">
                                {props.skills.map(skill => (
                                    <div
                                        className="col-xxl-3 col-xl-3 col-md-6 col-sm-6 col-6"
                                        key={skill.id}   // اینجا skill.id نه props.skills.id
                                    >
                                        <div className={Styled.skillsCard}>
                                            <div className={Styled.skillsCardTitle}>{skill.slillName}</div>
                                            <div className={Styled.skillsCardSub}>{skill.skillLevel}</div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </section>
                    </div>
                </div>
            );

        case 'fa':
            return (
                <div className={Styled.skillsWrapper} id="Skills">
                    <div className="container">
                        <section>
                            <h3>مهارت‌ها و ابزارها</h3>
                            <div className="row">
                                {props.AllSkills.map(skill => (
                                    <div
                                        className="col-xxl-3 col-xl-3 col-md-6 col-sm-6 col-6"
                                        key={skill.id}
                                    >
                                        <div className={Styled.skillsCard}>
                                            <div className={Styled.skillsCardTitle}>{skill.slillName}</div>
                                            <div className={Styled.skillsCardSub}>{skill.skillLevel}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            );

        default:
            return null;
    }
}
