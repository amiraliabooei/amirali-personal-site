import Styled from './SelectedProjects.module.css'
// import styled from "../Header/Header.module.css";


export default function SelectedProjects(props){
    switch (props.data.lan) {
        case 'en':
            return (
                <>
                    <div id="projects">
                        <div className={Styled.SelectedProjectsWrapper}>
                            <div className="container">
                                <section className={Styled.SelectedProjects}>
                                    <h3>Selected Projects</h3>
                                    <div className="row">
                                            {props.projects.map(project => (
                                                <div className="col-xxl-6 col-xl-6 col-md-12 col-sm-12" key={project.id}>
                                                    <div className={Styled.ProjectCard}>
                                                        <div className={Styled.ProjectHeader}>
                                                            <div className={Styled.ProjectsIcon}>{project.projectIcon}</div>
                                                            <div>
                                                                <div className={Styled.ProjectTitle}>{project.projectName}
                                                                </div>
                                                                <div className={Styled.ProjectSub}>{project.projectTools}</div>
                                                            </div>
                                                        </div>
                                                        <div className={Styled.ProjectDesc}>
                                                            {project.projectText}
                                                        </div>
                                                    </div>
                                                </div>

                                            ))}

                                    </div>
                                </section>
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