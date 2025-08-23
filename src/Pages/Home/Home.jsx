import { useState, useEffect } from "react";
import { texts } from '../../data/Data.jsx'; // حتما export درست باشد
import Header from "../../Components/Header/Header.jsx";
import Styled from './Home.module.css';

export default function Home({ language }) {
    const [text, setText] = useState(texts.en); // مقدار اولیه مناسب

    useEffect(() => {
        if (language === 'en') setText(texts.en);
        else if (language === 'fa') setText(texts.fa);
    }, [language]);

    return (
        <div className={Styled.homeWrapper}>
            <Header data={text} />
        </div>
    );
}
