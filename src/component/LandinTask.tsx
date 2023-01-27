import React from 'react'
import styled from "styled-components"
import ReactQuill from 'react-quill';
import "./style.css"
import 'react-quill/dist/quill.snow.css';



const LandinTask = () => {
    const [code, setCode] = React.useState<string>("hellllo");
    const [dimag, setDimag] = React.useState("https://cdn.punchng.com/wp-content/uploads/2021/05/15064920/dollars.jpg");
    let reactQuillRef = React.useRef<ReactQuill>(null);

    const myButt = () =>{
        
    }
    const handleProcedureContentChange = (content:any, delta:any, source:any, editor:any) => {
      setCode(content);
    //   setDimag(content)
      //let has_attribues = delta.ops[1].attributes || "";
      //console.log(has_attribues);
      //const cursorPosition = e.quill.getSelection().index;
      // this.quill.insertText(cursorPosition, "★");
      //this.quill.setSelection(cursorPosition + 1);
    };

    const modules = {
        toolbar:[
            
            [{header:[1,2,3,4,5,6, false]}],
        //    [{ font:[]}],
        //    [{ size:[]}],
            // superscript/subscript
             // outdent/indent
          ["align", ],
          ["align", ],
          ["align", ],
         
          ["link", "image"],
          ["bold", "italic"],
          [
            {list:"ordered"},
            {list:"bullet"},
            {indent:"-1"},
           ],   

           
           
          
        ],
       
    }

    function imageHandler() {
        if (!reactQuillRef.current) return
    
        const editor = reactQuillRef.current.getEditor()
        const range = editor.getSelection()
        
    
        if (range) {
          editor.insertEmbed(range.index, "image", dimag, "user")
        }
      }

    const uploadImage = (e:any) =>{
        const file = e.target.files[0]
        const save =URL.createObjectURL(file)
        setDimag(save)
        
      }
  return (
    <center>
        <Container>
           <ReactQuill 
            ref={(el :any) => {
                reactQuillRef = el
            } }
            // ref={reactQuillRef}
            theme="snow" 
            value={code} 
            onChange = {handleProcedureContentChange }
            modules={modules}
            className= "showing"
            
          
        />
           

           <BoxHoldet>
            {/* <img src={dimag} alt="myoivc"/> */}
           <Image
            type= "file"
            id="picture"
            accept='image/*'
            // onChange={(e) => uploadImage(e.target.files[0]) }
            onChange={uploadImage}
            />
            <Label htmlFor='picture'>upload Image</Label>
                     <BoxButton>
                        +
                    </BoxButton>
           </BoxHoldet>
           
            


        </Container>
    </center>
  )
}

export default LandinTask

const Label = styled.label`
width: 250px;
height: 35px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
background-color: pink;
border-radius: 6px;
font-weight: 500;
margin-bottom: 20px;
`
const Image = styled.input`
display: none
`

const BoxHoldet = styled.div`
position: relative;
bottom:100px;
`

const BoxButton = styled.div`
height:50px;
width:50px;
border-radius:50%;
background-color:#E7F1E9;
color:black;
font-size:30px;
position:relative;
display:flex;
justify-content:center;
align-items:center;
cursor:pointer;
font-width:700;
`

const Container  = styled.div`
width: 70%;
height: 500px;

margin-top:40px;
position:relative;

@madia screen and (max-width:600px){
    width:100%;
}
`