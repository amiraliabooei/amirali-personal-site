import { useState, useEffect } from "react";
import { texts } from '../../data/Data.jsx'; // حتما export درست باشد
import Header from "../../Components/Header/Header.jsx";
import Styled from './Home.module.css';
import Hero from "../../Components/Hero/Hero.jsx";
import ChangeTitle from "../../Components/ChangeTitle/ChangeTitle.jsx";
import About from "../../Components/About/About.jsx";
import Skills from "../../Components/Skills/Skills.jsx";
import SelectedProjects from "../../Components/SelectedProjects/SelectedProjects.jsx";

export default function Home({ language }) {
    const [text, setText] = useState(texts.en); // مقدار اولیه مناسب

    useEffect(() => {
        if (language === 'en') setText(texts.en);
        else if (language === 'fa') setText(texts.fa);
    }, [language]);

    return (
        <div className={Styled.homeWrapper}>
            <ChangeTitle title={'Amirali Abooei'} />
            <Header data={text}  />
            <Hero data={text}/>

            <About data={text}/>
            <Skills data={text} />
            <SelectedProjects data={text}/>

        </div>
    );
}
