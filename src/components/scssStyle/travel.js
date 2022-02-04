import styled from "styled-components";

export const Button = styled.button`
color: #fff;
width: 90px;
border-radius: 5px;
cursor: pointer;
padding: 5px 3px;
font-size: 14px;
border: 0;
outline: none;
background-color: #52a9ff;

`
export const PendingButton = styled(Button)`
color: #fff;
background-color: #ffa252;
border-radius: 0;
font-size: 10px;
text-transform: uppercase;
letter-spacing: 1px;
`
export const DeleteButton = styled(Button)`
padding: 5px 3px;
font-size: 12px;
border: 0;
outline: none;
background-color: #e33e3e;
color: #fff;
width: 60px;
border-radius: 5px;
cursor: pointer;
border-radius: 0;
font-size: 10px;
text-transform: uppercase;

`
export const CompleteddButton = styled(Button)`
    color: #fff;
    background-color: #19e100;
    border-radius: 0;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: no-drop;
`
export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    th{
        text-align: left;
        background: #1976d2;
        padding: 10px 15px;
        color: #fff;
    }
    td{
        padding: 10px 15px;
        border-bottom: 1px solid #ddd;
        text-align:left;
    }
    h4{
        margin:0;
    }
`