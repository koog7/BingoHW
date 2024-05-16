import React, {useState} from 'react';
import '../App.css'
const RandomNumberLink: React.FC = () => {
    const initialNumbers = [5, 11, 16, 23, 32];
    const [numArray, setNumArray] = useState(initialNumbers);

    const generateRandomNumber = () => {
        const newNumArray: number[] = [];
        while (newNumArray.length < 5) {
            const randomNumber = Math.floor(Math.random() * (36 - 5 + 1)) + 5;
            if (!newNumArray.includes(randomNumber)) {
                newNumArray.push(randomNumber);
            }
        }
        setNumArray(newNumArray);
    };

    return (
        <div>
            <ul>
                <a className={'codepen-button'} href="#" onClick={(e) => {
                    e.preventDefault();
                    generateRandomNumber();
                }}>
                    <span>Сгенерировать числа</span>
                </a>
                {numArray.slice().sort((a, b) => a - b).map((num, index) => (
                    <a className={'circle'} key={index}>{num} </a>
                ))}
            </ul>
        </div>
    );
};

export default RandomNumberLink;

