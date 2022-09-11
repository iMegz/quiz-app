import React, { useState } from "react";

export default function QuizQuestion({
    id,
    question,
    choices,
    correct,
    showAnswer,
    choose,
}) {
    const [selected, setSelected] = useState();
    function select(ev) {
        const value = ev.target.value;
        setSelected(+value);
        choose(id, +value === correct);
    }

    function markQuestion() {
        if (showAnswer) {
            if (correct === selected) {
                return "correct-answer-question";
            } else {
                return "wrong-answer-question";
            }
        }
    }
    function isCorrect(choice) {
        if (showAnswer) {
            if (choice === correct) return "correct-answer";
            else if (choice === selected) return "wrong-answer";
        }
    }

    return (
        <div className={"form-group p-3 quiz-question my-2 " + markQuestion()}>
            <h3>{question}</h3>
            <div className="row">
                <div className="col-lg-3">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name={id}
                            onClick={select}
                            id={`choice${id}0`}
                            value="0"
                            disabled={showAnswer}
                        />
                        <label
                            className={"form-check-label " + isCorrect(0)}
                            htmlFor={`choice${id}0`}
                        >
                            {choices[0]}
                        </label>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name={id}
                            onClick={select}
                            id={`choice${id}1`}
                            value="1"
                            disabled={showAnswer}
                        />
                        <label
                            className={"form-check-label " + isCorrect(1)}
                            htmlFor={`choice${id}1`}
                        >
                            {choices[1]}
                        </label>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name={id}
                            onClick={select}
                            id={`choice${id}2`}
                            value="2"
                            disabled={showAnswer}
                        />
                        <label
                            className={"form-check-label " + isCorrect(2)}
                            htmlFor={`choice${id}2`}
                        >
                            {choices[2]}
                        </label>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name={id}
                            onClick={select}
                            id={`choice${id}3`}
                            value="3"
                            disabled={showAnswer}
                        />
                        <label
                            className={"form-check-label " + isCorrect(3)}
                            htmlFor={`choice${id}3`}
                        >
                            {choices[3]}
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}
