import styled from 'styled-components';
import image from '../../images/background.jpg'

const StyledBackground = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;    
    background-image: url(${image});
    background-size: cover;
    background-repeat: no-repeat; 
`;

export default StyledBackground;