import styled from "styled-components";

import TitleH3 from "../atoms/TitleH3";
import Paragraph from "../atoms/Paragraph";

const TitleWrapper = styled.div`
    margin-bottom: 16px;
`;

interface ITitleWithDescProps {
    titleText: string;
    paragraphValue: string;
}

const TitleWithDesc = ({ titleText, paragraphValue }: ITitleWithDescProps) => {
    return (
        <>
            <TitleWrapper>
                <TitleH3 titleText={titleText} />
            </TitleWrapper>
            <Paragraph paragraphValue={paragraphValue} />
        </>
    );
};

export default TitleWithDesc;
