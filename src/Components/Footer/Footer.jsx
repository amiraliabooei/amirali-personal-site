import Styled from './Footer.module.css'

export default function Footer(props){
    switch (props.data.lan) {
        case 'en':
            return (
                <>
                    <footer>
                        <div className="container">
                            <div className={Styled.footerContainer}>
                                <div>© 2025 AmirAli Abooei</div>

                                <div className={Styled.footerLinks}>
                                    {props.socials && props.socials.map(social => (
                                        <a
                                            href={social.link}
                                            aria-label={social.name || "social"}
                                            key={social.id}
                                            dangerouslySetInnerHTML={{ __html: social.Icon }}
                                        />
                                    ))}
                                </div>
                            </div>

                        </div>
                    </footer>
                </>
            );

        case 'fa':
            return (
                <></>
            );
    }
}