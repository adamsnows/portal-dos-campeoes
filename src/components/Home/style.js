import styled from 'styled-components';

const StyledHome = styled.header`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    width:100%;
    position:fixed;
    top:0;
    background-color: white;
    padding: 20px;
    display: flex;
    gap: 20px;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;

    .contentHeader {
        display:flex;
        align-items:center;
        justify-content:space-between;
        width:70%;
    }
    
    .title {
        display:flex;
        align-items:center;
        gap:5px;
    }
    .icon {
        
    }
    h1 {
        font-weight: bolder;
        text-align: center;
        font-size: 1rem;
    }

    nav {
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:20px
    }
    .buttonRegister {
        width: 100%;
        border-radius: 5px;
        background-color: rgb(49, 49, 49);
        padding: 10px 15px;
        color: white;
        font-weight: bolder;
        border: none;
        cursor: pointer;
    }
    .buttonLogin {
        width: 50%;
        border-radius: 5px;
        background-color: rgb(49, 49, 49);
        padding: 10px 15px;
        color: white;
        font-weight: bolder;
        border: none;
        cursor: pointer;
    }
`
export default StyledHome;