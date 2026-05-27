import { useState } from "react";

// useState는 DOM을 찾는 도구가 아니라 화면의 기준이 되는 데이터 상태를 저장하는 도구
type Word = {
    id: number;
    text: string;
    memorized: boolean;
};

function App() {
    const [wordText, setWordText] = useState("");
    const [words, setWords] = useState<Word[]>([]);

    function handleAddWord() {
        const trimmedWord = wordText.trim();

        if (trimmedWord === "") {
            alert("단어를 입력해주세요");
            return;
        }

        const newWord: Word = {
            id: Date.now(),
            text: trimmedWord,
            memorized: false,
        };

        console.log("추가할 단어:", newWord);

        setWords([...words, newWord]);
        setWordText("");
    }

    // UI에서 막았다고 해서 로직 검사를 없애면 안 된다
    function handleDeleteWord(deleteId: number) {
        const nextWords = words.filter((word) => {
            return word.id !== deleteId;
        });

        console.log("삭제할 단어 ID:", deleteId);
        console.log("삭제 후 단어 목록:", nextWords);

        setWords(nextWords);
    }

    function handleToggleMemorized(toggleId: number) {
        const nextWords = words.map((word) => {
            if (word.id === toggleId) {
                return {
                    ...word,
                    memorized: !word.memorized,
                };
            }

            return word;
        });

        setWords(nextWords);
    }

    function handleEditWord(editId: number, currentText: string) {
        console.log("수정 버튼 클릭됨", editId, currentText);
        const newText = prompt("수정할 단어를 입력하세요", currentText);

        if (newText === null) {
            return;
        }

        const trimmedText = newText.trim();

        if (trimmedText === "") {
            alert("단어를 입력해주세요");
            return;
        }

        const nextWords = words.map((word) => {
            if (word.id === editId) {
                return {
                    ...word,
                    text: trimmedText,
                };
            }

            return word;
        });

        setWords(nextWords);
    }

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

            <p>현재 입력값: {wordText}</p>
            <p>글자 수: {wordText.length}</p>
            <p>저장될 값: {wordText.trim()}</p>

            <ul>
                {words.map((word) => (
                    <li key={word.id}>
                        {word.text}

                        <button
                            onClick={() => {
                                handleToggleMemorized(word.id);
                            }}
                        >
                            {word.memorized ? "외움" : "외우지 못함"}
                        </button>

                        <button
                            onClick={() => {
                                handleEditWord(word.id, word.text);
                            }}
                        >
                            수정
                        </button>

                        <button
                            onClick={() => {
                                handleDeleteWord(word.id);
                            }}
                        >
                            삭제
                        </button>
                    </li>
                ))}
            </ul>

            {/* {wordText.trim() === "" && <p>단어를 입력해주세요.</p>} */}
            {/* <button disabled={wordText.trim() === ""}>추가</button> */}
        </div>
    );
}

export default App;
