import React from 'react'
import styled from 'styled-components'

interface iProps {
    toggle: () => void
}

const Socail:React.FC<iProps>  = ({toggle}) => {
  return (
    <Conatianer>
    <Wrapper>
        <HolerWraper>
            <Embed>
             <div
             style={{
                fontSize:"15px",
                fontWeight:"700",
             }}
             >Embed</div>
             <div
              onClick={toggle}
             style={{
                cursor:"pointer",
                fontSize:"15px",
             }}
             >x</div>
            </Embed>

           
            <File>
             Video  Provider
            </File>

            <Select>
                <Option>Facebook</Option>
                <Option>Instagram</Option>
                <Option>TikTok</Option>
            </Select>
            <File>
             URL 
            </File>

            <MYinput

            placeholder='https://jungle/Earn-Passive'
            >

            </MYinput>

            <File>
             CODE
            </File>

            <MYinput

            placeholder='<iframe wodth="560" height="315" src="https://youtube.com">'
            >

            </MYinput>
        
           <TwoButton>
            <Green>
                Embed
            </Green>
            <Cancel>
                Cancel
            </Cancel>

           </TwoButton>
            
        </HolerWraper>
    </Wrapper>
</Conatianer>

  )
}

export default Socail


const MYinput = styled.input`
width:99%;
height:28px;
background-color:#FAFAFA;
border:1px solid #BBBBBB;
border-color:#BBBBBB;
margin-bottom:6px;

:focus{
    outline:none;
}
`

const Select = styled.select`
width:100%;
height:35px;
margin-top:5px;
background-color:#FAFAFA;
border:1px solid #BBBBBB;
border-color:#BBBBBB;
margin-bottom:6px;

:focus{
    outline:none;
}
`
const Option = styled.option`

`

const Cancel = styled.div`
height:35px;
display:flex;
margin-top:5px;
justify-content:center;
align-items:center;
color:green;
font-weight:700;
width:100px;
background-color:white;
border-radius:5px;
border:1px solid green;
margin-left:10px;
`

const Green = styled.div`
height:35px;
display:flex;
margin-top:5px;
justify-content:center;
align-items:center;
color:white;
font-weight:700;
width:100px;
background-color:green;
border-radius:5px;
`

const TwoButton = styled.div`
width:100%;
height:auto;
display:flex;
`
const Dinput = styled.input`
display: none;
`
const Lable = styled.label`
width: 200px;
height: 35px;
display: flex;
font-size:13px;
justify-content: center;
align-items: center;
cursor: pointer;
border-radius:5px;
border:1px solid green;
background-color:white;
`

const ButtonUpload = styled.div`
position: absolute;
top: 30px;
left: 150px;
`
const MainHolder = styled.div`
position:relative;
width:100%;
height:auto;
`

const MyImageDisplay = styled.img`
width:100%;
height:100px;
background-color:#FAFAFA;
border:1px dashed green;
object-fit:cover;

`

const File = styled.div`
width:100%;
height:20px;
display:flex;

color:darkgrey;
font-size:12px;
`
const Upload = styled.div`
width:100%;
height:30px;
display:flex;
color:grey;
font-weight:700;
`

const Embed = styled.div`
width:100%;
height:30px;
display:flex;
justify-content:space-between;
`
const HolerWraper = styled.div`
 width: 95%;
 height:auto;
 display: flex;
 flex-direction: column;
 align-items:center;
 justify-content:center;

`
const Wrapper = styled.div`
width:550px;
height:270px;
background-color:#FFFFFF;
display:flex;
justify-content:center;
align-items:center;

@madia screen and (max-width:600px){
    width:100%;
}
`

const Conatianer = styled.div`
width:100%;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
background-color:#BBBBBB;
`