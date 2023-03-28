import styled from "styled-components";

const StyledPicture = styled.img`
    width: ${props => props.width || "411px"};
    height: ${props => props.height || "296px"};
    @media (max-width: 1300px) {
        width: auto;
        height: 200px;
    }
`;

export interface IPictureProps {
    pictureWidth?: string;
    pictureHeight?: string;
    pictureSrc: string;
}

const Picture = ({ pictureSrc, pictureWidth, pictureHeight }: IPictureProps): JSX.Element => {
    return <StyledPicture src={pictureSrc} alt='card-picture-img' width={pictureWidth} height={pictureHeight} />;
};

export default Picture;
