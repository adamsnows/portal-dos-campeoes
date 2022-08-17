import styled from 'styled-components';
import image from '../../images/background.jpg'

const StyledRegister = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Inter';
    animation: 3s fadeIn;
    .animation-header {
        width: 70%;
        animation: 4s fadeInDown;
    }
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
        border: 1px solid rgba(156, 156, 156, 0.3);
        height: 0.1%;
    }
    .login-title {
        width: 100%;
        font-weight: bolder;
        text-align: center;
        font-size: 2rem;
    }
    .login-description {
        color: #9C9C9C;
        text-align: center;
        width: 65%;
    }
    .login-box {
        margin: 1rem;
        background-color: white;
        border-radius: 10px;
        width: 70%;
        padding: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        .login-register {
            color: #9C9C9C;
            font-size: 0.8rem;
        }
    }
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
            color: #313131;
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
        button {
            margin: 1rem 0 1rem 0;            
            width: 50%;
            border-radius: 5px;
            background-color: #313131;
            padding: 10px;
            color: white;
            font-weight: bolder;
            border: none;
            cursor: pointer;
        }
        
        
    }
    @media screen and (min-width: 1024px) {
        .animation-header {
        width: 20%;
    }
        .login-box {
            padding: 40px;
            width: 400px;
            gap: 30px;
        }
    }
`;

export default StyledRegister;