import styled from "styled-components/native";

export const div = styled.View`
    /* SASS */
`;

// Types SigIn Application 
interface Container {
    position?: string,
    bottom?: number | string,
    padding?: number | string,
    width?: string,
}

// Content view SigIn application 
export const Content = styled.View`
    flex: 1;
    background-color: #122023;
`;

// Header Content, Image and Text 
export const Image = styled.Image`
    width: 100%;
    height: 100%;
    `;

export const Overlay = styled.View`
    position: absolute;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(10px);
    background-color: #000000b1;
`;

export const HeaderTitle = styled.View`
    position: absolute;
    padding: 7% 7% 0 7%;
    align-self: center;
    top: 20%;
`;

export const TextHeaderTitle = styled.Text`
    font-size: 75px;
    font-weight: bold;
    color: #f8f8fa;
`;


// Container Bottom and Text
export const Container = styled.View<Container>`
    position: ${({ position }) => position};
    padding: ${({ padding }) => !padding ? '7% 7% 0 7%' : padding};
    bottom: ${({ bottom }) => bottom};
    width: ${({ width }) => !width ? '100%' : width};
`;

export const Title = styled.Text`
    font-size: 24px;
    font-weight: 700;
    color: #F8F8FA;
`;

export const SubTitle = styled.Text`
    color: #F8F8FA;
    font-size: 16px;
    margin-top: 15px;
`;

// Button Bottom and Text
export const Button = styled.TouchableOpacity`
    background-color: #9CD91B;
    border-radius: 15px;
    padding: 20px;
    margin-top: 35px;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const TextButton = styled.Text`
    color: #F8F8FA;
    font-size: 18px;
    font-weight: 800;
    text-align: center;
    margin-right: 10px;
`;