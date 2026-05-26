import { useState } from "react";

// useState는 DOM을 찾는 도구가 아니라 화면의 기준이 되는 데이터 상태를 저장하는 도구야
function App() {
    const [wordText, setWordText] = useState("");
    const [words, setWords] = useState<string[]>([]);
    function handleAddWord() {
        const trimmedWord = wordText.trim();

        if (trimmedWord === "") {
            alert("단어를 입력해주세요");
            return;
        }

        setWords([...words, trimmedWord]);
        setWordText("");
    }
    //UI에서 막았다고 해서 로직 검사를 없애면 안된다

    return (
        <div>
            <h1>일본어 단어 카드</h1>

            <input
                value={wordText}
                onChange={(e) => {
                    setWordText(e.target.value);
                }}
                placeholder="단어를 입력하세요."
            />

            <button onClick={handleAddWord} disabled={wordText.trim() === ""}>
                추가
            </button>
            <p>현재 입력값: {wordText} </p>
            <p>글자 수: {wordText.length}</p>
            <p>저장될 값: {wordText.trim()}</p>
            <ul>
                {words.map((word, index) => (
                    <li key={index}>{word}</li>
                ))}
            </ul>
            {/* {wordText.trim() === "" && <p>단어를 입력해주세요.</p>} */}
            {/* <button disabled={wordText.trim() === ""}>추가</button> */}
        </div>
    );
}

export default App;
