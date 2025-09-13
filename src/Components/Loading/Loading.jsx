import Styled from './Loading.module.css'
export default function Loading() {
    return (
        <div className={Styled.LoaderWrapper}>
            <div className={Styled.loader}></div>
        </div>
    );
}
