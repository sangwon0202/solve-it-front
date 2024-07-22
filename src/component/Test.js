import axios from 'axios';
import {API} from '../config.js';
import React, {useState} from 'react';

export default function Test() {

    const [pageNumber, setPageNumber] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [responseString, setResponseString] = useState('');


    const getQuizList = () => {
        console.log(pageNumber, pageSize);
        axios.get(API.MAIN + "/quizzes", {
            params: {
            page: pageNumber,
            size: pageSize
            }
        })
        .then(response => {
            setResponseString(JSON.stringify(response.data));
            console.log(response.data);
        })
        .catch(error => {
            setResponseString(error);
        });
    };

    return <div>
    <div>
        <p>페이지 번호</p>
        <input
            type="number"
            value={pageNumber}
            onChange={(e) => setPageNumber(e.target.value)}/>
    </div>
    <div>
        <p>페이지 크기</p>
        <input
            type="number"
            value={pageSize}
            onChange={(e) => setPageSize(e.target.value)}/>
    </div>
    <button onClick={getQuizList}>호출</button>
    <div>
        <p>응답</p>
        <p>{responseString}</p>
    </div>
    </div>;
}