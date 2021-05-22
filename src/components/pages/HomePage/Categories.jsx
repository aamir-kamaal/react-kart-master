import React from 'react'
import styled from 'styled-components'
import { grey } from '@material-ui/core/colors'

const categories = ["Electronics", "Fashion", "Stationary", "Mobiles", "Kitchen", "Sports", "Grocery"]

const CategoryItem = styled.div`
    font-size: 16px;
    width: 100px;
    cursor: pointer;    
    padding: 10px;
    text-align: center;
    :hover{
       border-radius : 5px;      
        background : #b3b3ff;
        
    }
`

const Categories = () => {

    const categoreisStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: '100%',
        borderBottom: "1px solid rgb(92, 133, 214)",
        height: 50,
    }
    return (
        <div style={categoreisStyle}>
            {categories && categories.length !== 0 && categories.map((category, index) => <CategoryItem key={index}>{category}</CategoryItem>)}
        </div>
    )
}

export default Categories