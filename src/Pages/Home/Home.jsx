import { useState, useEffect } from "react";
import { texts } from '../../data/Data.jsx'; // حتما export درست باشد
import Header from "../../Components/Header/Header.jsx";
import Styled from './Home.module.css';
import Hero from "../../Components/Hero/Hero.jsx";
import ChangeTitle from "../../Components/ChangeTitle/ChangeTitle.jsx";

export default function Home({ language }) {
    const [text, setText] = useState(texts.en); // مقدار اولیه مناسب

    useEffect(() => {
        if (language === 'en') setText(texts.en);
        else if (language === 'fa') setText(texts.fa);
    }, [language]);

    return (
        <div className={Styled.homeWrapper}>
            <ChangeTitle title={'Amirali Abooei'} />
            <Header data={text} />
            <Hero data={text}/>
        </div>
    );
}
