import styled from "styled-components";
import React, { useState } from 'react';
import { createShortUrl } from "../../services/api";
import Button from "../Button";
import ShortUrl from "../ShortUrl";
const SectionForm = styled.section`

    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    text-align: center;
    padding: 85px 0;
    height: 470px;
    width: 100%;
    
`
const Form = styled.form`
    margin:auto;
    width:200px;
    display:flex;
    flex-direction:row;
    border:1px solid grey;
    padding:1px;

`
const InpuForm = styled.input`
    flex-grow: 2;
    width:100px;
    border:none;
    &:focus{
        outline: none;
        }
`


function Input ( ) {
    const [full, setFull] = useState('');
    const [short,setShort]= useState('');
    const [isCopied,setIsCopied] = useState(false);

    

    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await createShortUrl(full);
            setShort(response.short); // Certifique-se de que `response.short` existe
            setIsCopied(false);
        } catch (error) {
            console.error('Erro ao encurtar a URL:', error);
        }
    }
    const handleCopy = () => {
        setIsCopied(true);
    }
    


    return (
        <SectionForm>
            <Form onSubmit={handleSubmit} >
                <InpuForm type= "text" placeholder="Digite sua URL" value={full} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setFull(e.target.value)} required/>
                <Button type="submit">Corte</Button>
            </Form>
        {short && (
            <ShortUrl url={`http://localhost:5000/api/url/${short}`} onCopy={handleCopy}/>
        )}
        {isCopied && <p style={{color:'green'}}>URL copiada com sucesso!</p>}

        </SectionForm>
            
        )
    
}

export default Input