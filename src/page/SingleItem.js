import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components'
import { useItemContext } from '../context/itemContext';

function SingleItem() {
    const {getSingleitem}=useItemContext();
    const {id} = useParams();


    useEffect(()=>{
        getSingleitem(id);
    },[id])
    return (
        <Wrapper>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    background-color:teal;
`;

export default SingleItem
