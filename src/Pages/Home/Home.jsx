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

    useEffect(() => {
        if (language === 'en') setText(texts.en);
        else if (language === 'fa') setText(texts.fa);
    }, [language]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/page-elements/')
            .then(res => {
                const latest = res.data.reduce((max, el) => el.id > max.id ? el : max, res.data[0]);
                setElement(latest);
            })
            .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        axios.get('http://localhost:8000/api/socials/')
            .then(res => setSocialNetworks(res.data))
            .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        axios.get("http://localhost:8000/api/skills/")
            .then(res => setTopSkills(res.data))
            .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        axios.get("http://localhost:8000/api/projects/")
            .then(res => setProjects(res.data))
            .catch(err => console.error(err));
    }, []);

    if (!element)  return <p>Loading...</p>;

    return (
        <div className={Styled.homeWrapper}>
            <ChangeTitle title={'Amirali Abooei'} />
            <Header data={text} element={element}  />
            <Hero data={text} element={element} />
            <About data={text} element={element} socialNetworks={socialNetworks} TopSkills={topSkills} />
            <Skills data={text} element={element} skills={topSkills} />
            <SelectedProjects data={text} element={element} projects={projects} />
            <ContactBox data={text} element={element} />
            <Footer data={text} element={element}  />
        </div>
    );
}
