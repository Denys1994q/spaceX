import TitleMain from "../atoms/TitleMain";
import TitleSpan from "../atoms/TitleSpan";

const Title = ({ text, spanText, mt }: any) => {
    return (
        <>
            <TitleMain text={text} />
            {spanText && <TitleSpan spanText={spanText} />}
        </>
    );
};

export default Title;
