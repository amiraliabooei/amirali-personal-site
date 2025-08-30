import styled from './Header.module.css';
import { useState, useRef, useEffect } from "react";

export default function Header({ data }) {
    const [isOpenMenuMobile, setisOpenMenuMobile] = useState(false);
    const menuRef = useRef(null); // رفرنس برای منو

    function openMenuMobile() {
        setisOpenMenuMobile(prev => !prev);
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setisOpenMenuMobile(false);
            }
        }

        if (isOpenMenuMobile) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpenMenuMobile]);

    switch (data.lan) {
        case 'en':
            return (
                <div className={styled.headerWrapperen}>
                    <header>
                        <div className="container">
                            <section>
                                <div className={styled.headerNameen}>
                                    <div className={styled.headerIconA}>A</div>
                                    <div>
                                        <p className={styled.headerNameBoxen}>{data.name}</p>
                                        <p className={styled.headerTitleen}>{data.title}</p>
                                    </div>

                                </div>

                                <div className={styled.headerUlenPc}>
                                    <nav className={styled.headerUlNaven}>
                                        <a href="#About">About</a>
                                        <a href="#Skills">Skills</a>
                                        <a href="#projects">Projects</a>
                                        <a href="#contact">Contact</a>
                                        <a href="/resume.pdf" className={styled.headerDownloadResume}>
                                            <div className={styled.headerDownloadResumeIcon}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                                                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                                                </svg>
                                            </div>
                                            Resume
                                        </a>
                                    </nav>
                                </div>

                                <div className={styled.headerUlenMobile}>
                                    <div
                                        className={styled.headerUlenMobileIcon}
                                        onClick={openMenuMobile}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                                             fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                            <path fillRule="evenodd"
                                                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                                        </svg>
                                    </div>
                                </div>

                                <div
                                    id="headerUlenMobileBox"
                                    ref={menuRef}
                                    className={`${styled.headerUlenMobileBox} ${isOpenMenuMobile ? styled.open : ''}`}
                                >
                                    <nav className={styled.headerUlNavenMobile}>
                                        <div className={styled.headerUlNavNameBoxenMobile}>
                                            <div className={styled.headerIconA}>A</div>
                                            <div>
                                                <p className={styled.headerNameBoxen}>{data.name}</p>
                                                <p className={styled.headerTitleen}>{data.title}</p>
                                            </div>
                                        </div>
                                        <a href="#About">About</a>
                                        <a href="#Skills">Skills</a>
                                        <a href="#projects">Projects</a>
                                        <a href="#contact">Contact</a>
                                        <a href="/resume.pdf" className={styled.headerDownloadResumeMobile}>
                                            <div className={styled.headerDownloadResumeIconMobile}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                                                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                                                </svg>
                                            </div>
                                            Resume
                                        </a>
                                    </nav>
                                </div>
                            </section>
                        </div>
                    </header>
                </div>
            );

        case 'fa':
            return (
                <div className={styled.headerWrapperfa}>
                    <header>
                        <div className="container">
                            <section>
                                <div className={styled.headerName}></div>
                                <div className={styled.headerUl}>rdg</div>
                            </section>
                        </div>
                    </header>
                </div>
            );
    }
}
