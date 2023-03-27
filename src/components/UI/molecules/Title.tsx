import TitleMain from "../atoms/TitleMain";
import TitleSpan from "../atoms/TitleSpan";

const Title = ({ text, spanText }: any) => {
    return (
        <>
            <TitleMain text={text} />
            {spanText && <TitleSpan spanText={spanText} />}
        </>
    );
};

export default Title;
