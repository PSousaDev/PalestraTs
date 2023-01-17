import * as React from "react";

interface Props {
    text: string;
    isCompleted: boolean;
    onClick: () => void;
}

export const Todo: React.FC<Props> = ({ text, isCompleted, onClick }) => {
    return (
        <li
            onClick={onClick}
            style={{ textDecoration: isCompleted ? "line-through" : "none" }}
        >
            {text}
        </li>
    );
};