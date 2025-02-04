import styled from "styled-components";
import Button from "../Button";

const ShortUrlCamp = styled.div`
    display:flex;

`
const TitleUrlShort = styled.h3`
    font-size:20px;
    font-weight:600;
`
const ShortenedUrl = styled.a`
    font-size: 22px;
    font-weight:800;
`


function ShortUrl ({url,onCopy}:{url:string , onCopy:()=>void}) {
    const handleCopy = ()=>{
        navigator.clipboard.writeText(url);
        onCopy();

    }
    return (
        <ShortUrlCamp>
            <TitleUrlShort>Url encurtada</TitleUrlShort><ShortenedUrl target='_blank' >{url}</ShortenedUrl>
            <Button onClick={handleCopy}>Copiar</Button>
        </ShortUrlCamp>
    )
}

export default ShortUrl;