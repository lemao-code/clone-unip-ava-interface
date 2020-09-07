import styled from 'styled-components'


export const Container = styled.div `
    background-color: white;
    width: 100%;
    height: 900px;
    margin-top: 200px;
    border-top-right-radius: 60px;
    border-top-left-radius: 60px;
 
`

export const Tittle = styled.h1 `
    color: rgb(254,238,0);
    position: absolute;
    right: 100px;
    top: 10px;
    font-family: 'Anton', sans-serif;
    font-size: 70px;
    font-style: italic;
`

export const SubTittle = styled.h2 ` 
    color: white;
    position: absolute;
    right: 80px;
    top: 115px;
    font-family: 'Anton', sans-serif;
    font-size: 15px;
    font-style: italic;

`
export const Conteudos = styled.button ` 
    background-color: red;
    width: 400px;
    height: 130px;
    margin-left: 25px;
    margin-top: 30px;
    border-radius: 15px;
    outline: none;
    border: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    color: white;
`
export const Calendario = styled.button ` 
    background-color: blue;
    width: 400px;
    height: 130px;;
    margin-left: 30px;
    margin-top: 30px;
    border-radius: 15px;
    outline: none;
    border: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    color: white;
`

export const Bibliotecas = styled.button ` 
    background-color: purple;
    width: 400px;
    height: 130px;
    margin-left: 30px;
    margin-top: 30px;
    border-radius: 15px;
    outline: none;
    border: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    color: white;
`

export const Comunidades = styled.button ` 
    background-color: green;
    width: 400px;
    height: 130px;
    margin-left: 30px;
    margin-top: 30px;
    border-radius: 15px;
    outline: none;
    border: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    color: white;
`

export const Secretaria = styled.button ` 
    background-color: blue;
    width: 400px;
    height: 130px;
    margin-left: 30px;
    margin-top: 30px;
    border-radius: 15px;
    outline: none;
    border: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    color: white;
`

export const Mural = styled.button ` 
    background-color: orange;
    width: 400px;
    height: 130px;
    margin-left: 30px;
    margin-top: 30px;
    border-radius: 15px;
    outline: none;
    border: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    color: white;
`

export const Tutoriais = styled.button ` 
    background-color: rgb(0, 131,110);
    width: 400px;
    height: 130px;
    margin-left: 30px;
    margin-top: 30px;
    border-radius: 15px;
    outline: none;
    border: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    color: white;
`

export const Ava = styled.h1 `
    color: rgb(254,238,0);
    position: absolute;
    left: 50%;
    top: -50px;
    font-size: 130px;
    font-family: "Megrim";
    opacity: 0.2;

`

export const ImagePerfil = styled.img `
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100px;
    height: 100px;
    border-radius: 50px;
    border: 2px solid yellow;
`

export const Text = styled.a `
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
`


export const ContainerAviso = styled.div `
    width: auto;
    height: auto;
    border-bottom: 1px solid grey;
    margin-top: 10px;
    margin-left: 10px;
`

export const TextAvisos = styled.p `
    margin: 10px;
    text-indent: 20px;
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    letter-spacing: 1.5px;
    white-space: normal;

`