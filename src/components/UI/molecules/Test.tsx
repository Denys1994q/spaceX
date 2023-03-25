interface ITestProps {
    testText: string;
}

const Test = ({ testText }: ITestProps) => {
    return (
        <>
            <div>{testText}</div>
        </>
    );
};

export default Test;
