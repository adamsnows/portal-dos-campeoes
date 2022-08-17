import styled from 'styled-components';

export const StyledHome = styled.header`
        width:100%;
        max-height:75vh;
        display:flex;
        flex-direction:column;
        background-image: url("https://wallpaperaccess.com/full/38582.jpg");
        background-position:center;
        background-repeat:no-repeat;
        background-size:cover;
        padding: 10px 0;
        display: flex;
        gap: 20px;

    .contentHeader {
        display:flex;
        align-items:center;
        justify-content:center;
        width:100%;
    }
    nav {
        display:flex;
        width:80%;
        align-items:center;
        justify-content:space-between;
        gap:70px
    }
    .logo {
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        color: #fff;
    }
    .icon {
        font-size:55px;
    }
    h1 {
        text-transform: uppercase;
        font-weight: bolder;
    }
    hr {
        width:10px;
        border-color: #fff;
        color: #fff;
        background-color: #fff;
    }
    button {
        width: 100%;
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 0);
        padding: 10px 15px;
        color: #fff;
        font-weight: bolder;
        border: none;
        cursor: pointer;
        text-transform: uppercase;
        font-size:0.7rem;

        &:hover {
            color: #60707b;
        }
        .border {
            max-width:10px;
            height:10px;
            position:fixed;
            top:0
        }
    }
`
export const StyledMain = styled.main`
        width:100%;
        min-height:100%;
        display:flex;
        flex-direction:column;
   
        .background {
            width:100%;
            min-height:75vh;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            background-image: url("https://wallpaperaccess.com/full/38582.jpg");
            background-position:center;
            background-repeat:no-repeat;
            background-size:cover;
            box-shadow:inset 0px -12vh 31px -19px #F6F6F6;
        }
        .detailsOne {
            width:100%;
            min-height:100vh;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            background-color:#fff;
            background-position:center;
            background-repeat:no-repeat;
            background-size:cover;
        }
`
