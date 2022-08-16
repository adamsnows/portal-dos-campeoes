import styled from 'styled-components';
import image from '../../images/background.jpg'

const StyledLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Inter';
    animation: 2s fadeInDown;    
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
    svg {
        font-size: 2rem;
        color: #7289da;
        cursor: pointer;
    }
    img {
        border-radius: 10px;
        width: 60px;
        margin-bottom: 2rem;
        box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.8);
    }
    .login-title {
        width: 80%;
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
        background-color: white;
        border-radius: 10px;
        width: 80%;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 20px;
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
            box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.2);
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
    @media screen and (min-width: 768px) {
        .login-box {
            width: 600px;
            gap: 30px;
            box-shadow: 0px 0px 5px 8px rgba(0,0,0,0.2);
        }
    }
`;

export default StyledLogin;