import React, { useState } from "react";
import QuizQuestion from "./QuizQuestion";
import Progress from "../Progress";

import "./Quiz.css";

const questions = [
    {
        id: 1,
        question: "HTML stands for ?",
        choices: [
            "How To Make Lemonade",
            "Hypertext Markup Language",
            "Hypertype Markup Language",
            "Hello To Machine Language",
        ],
        correct: 1,
    },
    {
        id: 2,
        question: "CSS stands for ?",
        choices: [
            "Can't Stop Smiling",
            "Car Stop Station",
            "Cascading Style Sheet",
            "Cross Site Scripting",
        ],
        correct: 2,
    },
    {
        id: 3,
        question: "JS Stands for ?",
        choices: ["Javascript", "Job Study", "Jam Shop", "Judo Session"],
        correct: 0,
    },
    {
        id: 4,
        question: "What is my favourite riot game ?",
        choices: [
            "League of legends",
            "Wildrift",
            "Valorant",
            "Team Fight Tactics",
        ],
        correct: 1,
    },
    {
        id: 5,
        question: "How is the best hacker in the world ?",
        choices: [
            "Ahmed Magdi",
            "Not Ahmed Magdi",
            "Someone else other than Ahmed Magdi",
            "Adel shakl",
        ],
        correct: 0,
    },
];

export default function Quiz() {
    const [submited, setSubmit] = useState(false);
    const [score, setScore] = useState(0);

    const mark = {
        choices: {},
        total: questions.length,
    };
    function choose(id, value) {
        mark.choices[id] = value;
    }

    function submit() {
        setSubmit(true);
        let result = 0;
        for (const key in mark.choices) {
            console.log(key, mark.choices[key]);
            if (mark.choices[key]) result++;
        }
        setScore(result);
    }

    return (
        <div>
            {questions.map((q) => (
                <QuizQuestion
                    key={q.id}
                    id={q.id}
                    question={q.question}
                    choices={q.choices}
                    showAnswer={submited}
                    correct={q.correct}
                    choose={choose}
                />
            ))}
            <button className="btn btn-primary" onClick={submit}>
                Submit
            </button>

            {submited && <Progress percent={(score / mark.total) * 100} />}
        </div>
    );
}
