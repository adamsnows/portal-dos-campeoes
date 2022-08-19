import styled from 'styled-components';

const StyledLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Inter';
    animation: 0.8s fadeInDown;
    .discord-animation {
        width: 40%;
    }
    .line-discord {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80%;        
    }
    
    hr {
        width: 40%;
        border: 2px solid rgba(156, 156, 156, 0.3);
        height: 0.1%;
        border-radius: 5px;
    }
    img {
        border-radius: 10px;
        width: 60px;
        margin-bottom: 2rem;
        box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.5);
    }
    .login-title {
        width: 100%;
        text-align: center;
        font-size: 3.5rem;
        font-family: 'Bebas Neue';
        color: white;
    }
    .login-description {
        color: white;
        text-align: center;
        width: 65%;
        font-size: 0.9rem;
    }
    /* .login-box {
        background-color: rgba(0,0,0, 0.7);
        border-radius: 10px;
        width: 70%;
        padding: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 20px;
        box-shadow: rgba(0,0,0, 0.7) 0px 7px 29px 0px;
        .login-register {
            color: #9C9C9C;
            font-size: 0.8rem;
        }
    } */
    .register-link {
            font-style: italic;
            text-decoration: underline;
            cursor: pointer;
        }
    .forgot-link {
        cursor: pointer;
        text-decoration: underline;
    }
    .discord-link {
        cursor: pointer;
        text-decoration: underline;
    }
    .login-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        width: 100%;
        label,span {
            font-size: 0.8rem;
            width: 80%;
            text-align: left;
            color: white;
            font-weight: bolder;
        }
        span {
            color: #9C9C9C;
            font-weight: 500;
            
        }

        input {
            width: 80%;
            padding: 10px;
            border-radius: 5px;
            border: none;
            box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
            color: #9C9C9C;
            :focus {
                outline: none;
            }
            :focus::-webkit-input-placeholder {
                color: transparent;
                transition: 0.5s;
            }
        }          
    }
    @media screen and (min-width: 1024px) {
        .animation-header {
        width: 20%;
    }
        .login-register-box {            
            width: 400px;
        }
    }
`;

export default StyledLogin;