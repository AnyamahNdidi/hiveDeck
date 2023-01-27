import React from 'react'
import styled from "styled-components"
import mypix from "./img/use.png"
import { useRecoilState, useRecoilValue } from "recoil"
import {imgshow} from "./Global/Global"


interface iProps {
    toggle: () => void
}

const Imageupload:React.FC<iProps> = ({toggle}) => {
    const [dimag, setDimag] = React.useState<any>(mypix);
    const [how, setHow] = useRecoilState(imgshow)
    const imgown = useRecoilValue(imgshow)
    

    const uploadImage = (e:any) =>{
        const file = e.target.files[0]
        const save =URL.createObjectURL(file)
        setDimag(save)
        setHow(save)
        
      }
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
                 style={{
                    cursor:"pointer",
                    fontSize:"15px",
                 }}
                 onClick={toggle}
                 >x</div>
                </Embed>

                <Upload>
                  Upload Image
                </Upload>
                <File>
                 FILE UPLAOD
                </File>
               
               <MainHolder>
               <MyImageDisplay src={imgown}>

                </MyImageDisplay>
                 
                <ButtonUpload>
                    <Dinput  type= "file"
            id="picture"
            accept='image/*'
            onChange={uploadImage}
            />
                    <Lable htmlFor='picture'>Import Image From Device</Lable>
                </ButtonUpload>
                 

               </MainHolder>

               <TwoButton>
                <Green 
                onClick={toggle}
                >
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

export default Imageupload
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
cursor:pointer;
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
font-size:10px;
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
height:260px;
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
backdrop-filter: blur(10px);
opacity: 1;

`