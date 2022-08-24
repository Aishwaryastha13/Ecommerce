import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { mobile } from '../Responsive';
const Container= styled.div``;


const Wrapper= styled.div`
padding:50px;
display:flex;
${mobile({padding :"10px", flexDirection: "column"})}
`;


const ImgContainer= styled.div`
flex:1;
`;

const Image= styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
${mobile({height :"40vh"})}`;

const InfoContainer= styled.div`
flex:1;
padding: 0px 50px;
${mobile({padding :"10px"})}
`;

const Title= styled.h1`
font-weight: 200;
`;

const Desc= styled.p`
margin: 20px 0px;
`;

const Price= styled.span`
font-weight: 100;
font-size: 40px;
`;
const FilterContainer= styled.div`
display: flex;
justify-content: space-between;
width: 50%;
margin: 30px 0px;
${mobile({width :"100%"})}
`;

const Filter= styled.div`
display: flex;
align-item: center;
`;

const FilterTitle= styled.span`
font-size: 20px;
font-weight: 200;
`;

const FilterColor= styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: #{props => props.color};
margin: 0px 5px;
cursor: pointer;
`;

const FilterSize= styled.select`
margin-left: 10px;
padding: 5px;
`;

const FilterSixeOption= styled.option`
`;

const AddContainer= styled.div`
width:50%;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({width :"100%"})}
`;
const AmountContainer= styled.div`
display:flex;
align-items: center;
font-weight; 700;
`;

const Amount= styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`;

const Button= styled.button`
padding: 15px;
border: 2px solid teal;
background-color: white;
cursor: pointer;
font-weight: 500;

&:hover{
    background-color: #FFE5B4;
}
`;

const Product = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <ImgContainer>
        <Image src="https://www.google.com/imgres?imgurl=http%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0860%2F8486%2Ffiles%2FChrono-tan.jpg%3Fv%3D1564149276&imgrefurl=https%3A%2F%2Fwww.lordtimepieces.com%2F&tbnid=ROeDRVkZV5TILM&vet=10CKQBEDMosQFqFwoTCKjxw5XZjfkCFQAAAAAdAAAAABAC..i&docid=DLkNjJZxhLoS_M&w=1000&h=1000&q=watches&ved=0CKQBEDMosQFqFwoTCKjxw5XZjfkCFQAAAAAdAAAAABAC"/>
        </ImgContainer>
        <InfoContainer>
            <Title>
                 LORD
            </Title>
            <Desc>
                Mens watch,Lord Timepieces
            </Desc>
            <Price>
                Rs 20,000
            </Price>
            <FilterContainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color="black"/>
                    <FilterColor color="blue"/>
                    <FilterColor color="gray"/>
                </Filter>
                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                        <FilterSixeOption>S</FilterSixeOption>
                        <FilterSixeOption>M</FilterSixeOption>
                        <FilterSixeOption>L</FilterSixeOption>
                        <FilterSixeOption>XL</FilterSixeOption>
                    </FilterSize>
                </Filter>
            </FilterContainer>
            <AddContainer>
                <AmountContainer>
                    <RemoveIcon/>
                    <Amount>1</Amount>
                    <AddIcon/>
                </AmountContainer>
                <Button>ADD TO CART</Button>
            </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter/>
      <Footer/>

    </Container>
  )
}

export default Product