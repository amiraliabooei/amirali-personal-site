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
                                        <div className="col-xxl-6 col-xl-6 col-md-12 col-sm-12">
                                            <div className={Styled.ProjectCard}>
                                                <div className={Styled.ProjectHeader}>
                                                    <div className={Styled.ProjectsIcon}>NFC</div>
                                                    <div>
                                                        <div className={Styled.ProjectTitle}>NFC Cards with Custom Designs
                                                        </div>
                                                        <div className={Styled.ProjectSub}>Design • Frontend • Marketing</div>
                                                    </div>
                                                </div>
                                                <div className={Styled.ProjectDesc}>
                                                    A small product landing + admin panel for managing NFC designs and
                                                    orders.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-xl-6 col-md-12 col-sm-12">
                                            <div className={Styled.ProjectCard}>
                                                <div className={Styled.ProjectHeader}>
                                                    <div className={Styled.ProjectsIcon}>Site</div>
                                                    <div>
                                                        <div className={Styled.ProjectTitle}>Personal Portfolio
                                                        </div>
                                                        <div className={Styled.ProjectSub}>Branding • Performance</div>
                                                    </div>
                                                </div>
                                                <div className={Styled.ProjectDesc}>
                                                    Fast, accessible portfolio with CMS integration and resume download.
                                                </div>
                                            </div>
                                        </div>
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