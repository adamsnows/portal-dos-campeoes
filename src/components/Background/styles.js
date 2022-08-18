import styled from 'styled-components';
import image from '../../images/background2.jpg'

const StyledBackground = styled.div`
    max-width: 100vw;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;    
    background-image: url(${image});
    background-size: cover;
    background-repeat: no-repeat;
`;

export default StyledBackground;