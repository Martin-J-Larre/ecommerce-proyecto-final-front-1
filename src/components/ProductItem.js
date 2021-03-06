import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import styled from "styled-components"

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;  
    position: relative; 
    overflow: hidden;
    
    &:hover ${Info}{
        opacity: 1;
    }
`
// Encontrar productos y sacarle el fondo
// const Circle = styled.div`
//     width: 200px;
//     height: 200px;
//     border-radius: 50%;
//     background-color: #fff;
//     position: absolute;  
// `
const Image = styled.img`
    height: 75%;
    z-index: 2; 
    object-fit: cover;
`

const IconContainer = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px; 
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`

const ProductItem = ({ item }) => {
    return (
        <Container>
            {/* <Circle /> */}
            <Image src={ item.img } />
            <Info>
                <IconContainer>
                    <ShoppingCartOutlined />
                </IconContainer>
                <IconContainer>
                    <SearchOutlined />
                </IconContainer>
                <IconContainer>
                    <FavoriteBorderOutlined />
                </IconContainer>
            </Info>
        </Container>
    )
}

export default ProductItem