import Loading from "../../Components/Loading/Loading.jsx";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { texts } from '../../data/Data.jsx';
import Header from "../../Components/Header/Header.jsx";
import Styled from './Home.module.css';
import Hero from "../../Components/Hero/Hero.jsx";
import ChangeTitle from "../../Components/ChangeTitle/ChangeTitle.jsx";
import About from "../../Components/About/About.jsx";
import Skills from "../../Components/Skills/Skills.jsx";
import SelectedProjects from "../../Components/SelectedProjects/SelectedProjects.jsx";
import ContactBox from "../../Components/ContactBox/ContactBox.jsx";
import Footer from "../../Components/Footer/Footer.jsx";

export default function Home({ language }) {
    const [text, setText] = useState(texts.en);
    const [element, setElement] = useState(null);
    const [socialNetworks, setSocialNetworks] = useState([]);
    const [topSkills, setTopSkills] = useState([]);
    const [projects, setProjects] = useState([]);
    const [footerSocials, setFooterSocials] = useState([]);
    const [resumeLink, setResumeLink] = useState([]);

    // به جای IP، مسیر PHP Proxy را قرار بده
    const apiLink = 'https://astracard.ir/api/';

    useEffect(() => {
        if (language === 'en') setText(texts.en);
        else if (language === 'fa') setText(texts.fa);
    }, [language]);

    useEffect(() => {
        axios.get(apiLink + 'page-elements/')
            .then(res => {
                const latest = res.data.reduce((max, el) => el.id > max.id ? el : max, res.data[0]);
                setElement(latest);
            })
            .catch(err => console.error(err));
        console.log(element)

        axios.get(apiLink + 'resume/')
            .then(res => {
                const latest = res.data.reduce((max, el) => el.id > max.id ? el : max, res.data[0]);
                setResumeLink(latest);
            })
            .catch(err => console.error(err));

        axios.get(apiLink + 'socials/')
            .then(res => setSocialNetworks(res.data))
            .catch(err => console.error(err));

        axios.get(apiLink + "skills/")
            .then(res => setTopSkills(res.data))
            .catch(err => console.error(err));

        axios.get(apiLink + "projects/")
            .then(res => setProjects(res.data))
            .catch(err => console.error(err));

        axios.get(apiLink + "footer-socials/")
            .then(res => setFooterSocials(res.data))
            .catch(err => console.error(err));
    }, []);

    const isLoading =
        !element ||
        socialNetworks.length === 0 ||
        topSkills.length === 0 ||
        projects.length === 0 ||
        footerSocials.length === 0 ||
        resumeLink.length === 0;

    if (isLoading) return <Loading />;

    return (
        <div className={Styled.homeWrapper}>
            <ChangeTitle title={'Amirali Abooei'} />
            <Header data={text} element={element} resume={resumeLink} />
            <Hero data={text} element={element} />
            <About data={text} element={element} socialNetworks={socialNetworks} TopSkills={topSkills} />
            <Skills data={text} element={element} skills={topSkills} />
            <SelectedProjects data={text} element={element} projects={projects} />
            <ContactBox data={text} element={element} socialNetworks={socialNetworks} />
            <Footer data={text} element={element} socials={footerSocials} />
        </div>
    );
}
