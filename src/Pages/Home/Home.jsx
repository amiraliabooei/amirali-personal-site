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
    const [element, setElement] = useState(null); // این برای PageElement آخر هست

    // تغییر زبان
    useEffect(() => {
        if (language === 'en') setText(texts.en);
        else if (language === 'fa') setText(texts.fa);
    }, [language]);

    // گرفتن آخرین PageElement
    useEffect(() => {
        axios.get('http://localhost:8000/api/page-elements/')
            .then(res => {
                const latest = res.data.reduce((max, el) => el.id > max.id ? el : max, res.data[0]);
                setElement(latest);        // **اینجا element ست میشه**
                // setText(latest);           // اگر میخوای text هم آپدیت شه
            })
            .catch(err => console.error(err));
    }, []);

    // فقط وقتی element لود شد نمایش بده
    if (!element) return <p>Loading...</p>;

    return (
        <div className={Styled.homeWrapper}>
            <ChangeTitle title={'Amirali Abooei'} />
            <Header data={text} element={element} />
            <Hero data={text} element={element}/>
            <About data={text} element={element}/>
            <Skills data={text} element={element} />
            <SelectedProjects data={text} element={element}/>
            <ContactBox data={text} element={element} />
            <Footer data={text} element={element} />
        </div>
    );
}
