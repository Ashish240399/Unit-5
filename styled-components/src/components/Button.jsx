import styled from 'styled-components';

export const Button=styled.button`
background-color:${(props)=>props.state ?  "red":"green"};
color:white;
font-weight:bold;
padding:10px 20px`