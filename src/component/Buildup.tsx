import React,{useState}from 'react'
import styled from 'styled-components'
import { BsLink45Deg, BsFillImageFill } from 'react-icons/bs';
import { AiOutlineAlignLeft,AiOutlineAlignRight,AiOutlineAlignCenter,AiOutlineBold,AiOutlineItalic,AiOutlineMenuUnfold } from 'react-icons/ai';
import { HiListBullet } from 'react-icons/hi2';
import { MdOutlineFormatListNumbered } from 'react-icons/md';

import Imageupload from './Imageupload';
import Videoupalod from './Videoupalod';
import Socail from './Socail';
import { AiFillGolden } from 'react-icons/ai';
import {RiVidiconFill } from 'react-icons/ri';
import { useRecoilState, useRecoilValue } from "recoil"
import {imgshow, videoshow} from "./Global/Global"

const Buildup = () => {
    const [show, setShow] = React.useState<boolean>(false)
    const [showPic, setShowPic] = useState(false);
    const [showVideo, setShowVideo] = useState(false);
    const [showSocial, setShowSocial] = useState(false);
    const [how, setHow] = useRecoilState(imgshow)
    const imgown = useRecoilValue(imgshow)
    const videoown = useRecoilValue(videoshow)
    console.log(videoown)
    const [steps, setSteps] = React.useState<any>([
		{
			_id: Math.floor(Math.random() * 1000),

			MyImage: "",
		},
	]);

    const onChangeSteps = (i: any, e: any) => {
		const values = [...steps];
		values[i][e.target.name] = e.target.value;
		setSteps(values);
		// console.log(steps);
		console.log(values);
	};


    const addStep = (e: any) => {
		if (e.key === "Enter") {
			setSteps([
				...steps,
				{
					_id: Math.floor(Math.random() * 1000),

					MyImage: "",
				},
			]);
		}
	};

    const uploadImage = (e:any) =>{
        const file = e.target.files[0]
        const save =URL.createObjectURL(file)
        setHow(save)
        
      }

      const myVideo = require("https://www.youtube.com/watch?v=MhBYWBu9-9Q")

    let [text, setMyText] = useState<any>(null);

    const togglepic =()=>{
        setShowPic(!showPic);
    }
    const togglevideo =()=>{
        setShowVideo(!showVideo);
    }
    const toggleSocila =()=>{
      setShowSocial(!showSocial)
    }

  React.useEffect(()=>{
    if (showPic) {
        document.body.style.overflow = "hidden";
      } else if (showVideo) {
        document.body.style.overflow = "hidden";
      } else if (showSocial) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
  },[showPic, showVideo,showSocial ])

  const handleKeyDown = (event:any) => {
    if (event.key === 'Enter') {

     
        setMyText(event.target.value);
    }

    
 
  };
   
  return (
    <>

{
        showPic ? (<Imageupload
        toggle={togglepic}
        />) : null
    }
    {
        showVideo ? (<Videoupalod
            toggle={togglevideo}
        />) : null
    }
    {
        showSocial ? (<Socail
            toggle={toggleSocila}
        />) : null
    }
   
        <All>
             <Container>
           <EmptyCenter>
           </EmptyCenter>
           <TextTitle>
            <span>This is the title</span>
           </TextTitle>
           <ContentHold>
            <Select>
                <Option>paragraph</Option>
                <Option>normal</Option>
                <Option>heading 1</Option>
                <Option>heading 2</Option>
            </Select>

            <LingImage>
               {/* <div
               
               ><IconLink/></div> */}

               <div>
                <ImgInpute
                type= "file"
                id="picture"
                accept='image/*'
                onChange={uploadImage}

            />

                <label htmlFor='picture'><ImgLink/></label>
                </div>
            </LingImage>

            <AlignCon>
                <div><LinkLeft/></div>
                <div><LinkCenter/></div>
                <div><LinkRight/></div>
            </AlignCon>

            <BoldI>
                <div><BoldLink/></div>
                <div><ItalickLink/></div>
            </BoldI>

            <TypesBullet>
                <div><LisNum/></div>
                <div><BulletNum/></div>
                <div><LisMenu/></div>
            </TypesBullet>

           </ContentHold>

          

           <TextPoitn>
           <HolderBoth>
          {
            steps?.map((props:any, i:any) =>(
                <>
                 <MyTextArea 
                  autoFocus= {i +1}
                 onKeyPress={(e) => {
                    addStep(e);
                }}
                  name='steps'
						onChange={(e) => {
							onChangeSteps(i, e);
						}}
                        placeholder="type here"
/>
                </>
               

            ))
          }

          {
            imgown === "" ? null : (<><img src={imgown} width="400px" height="300px"
             style={{
                objectFit:"cover",
                marginTop:"10px"
             }}  /></>)
          }
        {
            videoown === "" ? null : (<><iframe width="420" height="315"
            src={videoown}>
            </iframe></>)
        }

          
          
            {/* {
                text === "" ? (<MyTextArea   onKeyDown={handleKeyDown} />) :
                 (<>
                  <p>{text}</p>
                  <MyTextArea  onKeyDown={handleKeyDown}/>
                 </>)
            } */}
           
           
            </HolderBoth>
           

             <Mainpoint>
                <PlusPoint onClick={()=>{
                    setShow(!show);
                }}>
                    +
                </PlusPoint>
                {
                    show ? 
                    <>
                     <Conatianer1>
        <Emcon>
         <span>EMBEDS</span>
        </Emcon>
        <PicCon
        onClick={togglepic}
        >
         <ImgCon>
           <BsFillImageFill/>
         </ImgCon>
         <ConPic>
            <Title>
             <span>Picture</span>
            </Title>
            <Type>
                <span>.png .jpeg</span>
            </Type>
         </ConPic>
        </PicCon>
        <Video
         onClick={togglevideo}
        >
        <ImgCon>
           <RiVidiconFill/>
         </ImgCon>
         <ConPic>
            <Title>
             <span>Video</span>
            </Title>
            <Type>
                <span>Embed a YouTube Video</span>
            </Type>
         </ConPic>

        </Video>
        <Socail1 
         onClick={toggleSocila}
        >
        <ImgCon>
           <AiFillGolden/>
         </ImgCon>
         <ConPic>
            <Title>
             <span>Socail</span>
            </Title>
            <Type>
                <span>Embed a facebook link</span>
            </Type>
         </ConPic>
        </Socail1>

    </Conatianer1>
                    </>
                     : null
                }

             </Mainpoint>

           </TextPoitn>

         </Container>
        </All>
        </>
        
 
   
  )
}

export default Buildup

const ImgInpute = styled.input`
display:none;
`

const HolderBoth = styled.div``
const PlusPoint = styled.div`
height:40px;
width:40px;
border-radius:50%;
background-color:#E7F1E9;
color:black;
font-size:30px;

display:flex;
justify-content:center;
align-items:center;
cursor:pointer;
font-width:700;
margin-top:10px;
`
const Mainpoint = styled.div`
display: flex;
position: relative;
display:flex;
flex-direction: column;
`

const MyTextArea = styled.input`
 width:95%;
 background-color:#FAFAFA;
height:auto;


 border:none;
 

 :focus {
    border:none;
    outline:none;
 }
`

const TextPoitn = styled.div`
padding-left:13px;
height:auto;
display:flex;
flex-direction:column;

`
const LisMenu = styled(AiOutlineMenuUnfold)`
cursor: pointer;
`
const LisNum = styled(HiListBullet)`
cursor: pointer;
`
const BulletNum = styled(MdOutlineFormatListNumbered)`
cursor: pointer;
`
const BoldLink = styled(AiOutlineBold)`
cursor:pointer;
`
const ItalickLink = styled(AiOutlineItalic)`
cursor:pointer;
`
const LinkLeft = styled(AiOutlineAlignLeft)`
cursor:pointer;
`
const LinkRight = styled(AiOutlineAlignRight)`
cursor:pointer;
`
const LinkCenter= styled(AiOutlineAlignCenter)`
cursor:pointer;
`

const IconLink = styled(BsLink45Deg)`
cursor:pointer;

`
const ImgLink = styled(BsFillImageFill)`
cursor:pointer;
`

const TypesBullet = styled.div`
width:85px;
height:35px;
border:1px solid #ECEDEC;
border-color:#ECEDEC;
background-color:white;
display:flex;
align-items:center;
justify-content:space-around;
`
const BoldI = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
width:60px;
height:35px;
border:1px solid #ECEDEC;
border-color:#ECEDEC;
background-color:white;
`

const AlignCon = styled.div`
width:85px;
height:35px;
border:1px solid #ECEDEC;
border-color:#ECEDEC;
background-color:white;
display:flex;
justify-content:space-around;
align-items:center;
`
const LingImage = styled.div`
width:60px;
height:35px;
border:1px solid #ECEDEC;
border-color:#ECEDEC;
background-color:white;
display:flex;
align-items:center;
justify-content:space-around;
`

const Select = styled.select`

 width:100px;
height:37px;
 border:1px solid #ECEDEC;
 border-color:#ECEDEC;
 
`

const Option = styled.option`
background-color:#ECEDEC;
`


const ContentHold = styled.div`
display: flex;
height:40px;
padding-left:10px;
margin-top:5px;
`

const All = styled('div')`
width: 100%;
min-height:100vh;
height: 100%;
display:flex;
justify-content:center;
align-items:center;
`

const TextTitle = styled.div`
padding-left:15px;
span{
    font-size:20px;
    font-weight:600;

}
`
const EmptyCenter = styled.div`
height: 50px;
border-bottom:2px solid #ECEDEC;
width:100%;
`

const Container = styled.div`
width:600px;
min-height:500px;
height:auto;
border:2px solid #ECEDEC;
padding-bottom:15px;

display:flex;
flex-direction:column;

@media screen and (max-width:600px){
    width:90%;
}
`

const Title = styled.div`
span{
    font-weight:700;
    font-size:12px;
    margin-top:-30px;
}
`
const Type = styled.div`
span{
    font-size:10px;
}
`
const ConPic = styled.div`
height:100%;
line-height:14px;



`
const ImgCon = styled.div`
height:100%;
width:23px;

`
const Emcon = styled.div`
padding-left:10px;
height:30px;

span{
    font-size:12px;
    font-width:700;
}
`
const PicCon = styled.div`
display:flex;
padding-left:10px;
height:38px;
cursor:pointer;

:hover{
    background-color:#FAFAFA;
}


`
const Video = styled.div`
display:flex;
padding-left:10px;
height:38px;
cursor:pointer;

:hover{
    background-color:#FAFAFA;
}
`
const Socail1 = styled.div`
display:flex;
padding-left:10px;
height:38px;
cursor:pointer;

:hover{
    background-color:#FAFAFA;
}
`

const Conatianer1  = styled.div`
width:230px;
height:150px;
margin-top:7px;
background-color:white;
display:flex;
flex-direction:column;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`