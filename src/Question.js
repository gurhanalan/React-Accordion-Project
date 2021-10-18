import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ data: { title, info } }) => {
    const [isFull, setIsFull] = useState(false);

    return (
        <div className="question">
            <header>
                <h4>{title}</h4>
                <button
                    className="btn"
                    onClick={() => {
                        setIsFull((prev) => !prev);
                    }}
                >
                    {isFull ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </header>
            {isFull && <p>{info}</p>}
        </div>
    );
};

export default Question;
