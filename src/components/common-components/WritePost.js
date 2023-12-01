import { useDispatch } from 'react-redux'
import user from '../../assets/Avatar.svg'
import feeling from '../../assets/happy-outline.svg'
import picicon from '../../assets/images-outline.svg'
import { getAllPosts, writePost } from '../../features/auth/post'
import { useRef, useState } from 'react'
import storage from '../../firebaseConfig.mjs'
import { ref, uploadBytesResumable,getDownloadURL   } from 'firebase/storage'
import EmojiPicker from 'emoji-picker-react';


const WritePost = () => {

    const dispatch=useDispatch();
    const dataRef = useRef(null);
    const [file, setFile] = useState();
    const [isFileOpen,setFileOpen]=useState(false)
    const [percent,setPercent]=useState(0)
    const[imageToPost,setImgToPost]=useState()
    const [text, setText] = useState('');

    const handleEmojiSelect = (event, emojiObject) => {
      setText(prevText => prevText + event.emoji);
    };

    const handleSubmit= async (e)=>{
        e.preventDefault();
        setEmojiOpen(false);
        // const postData=dataRef.current.value ;
        const postData=text;
        const user=JSON.parse(localStorage.getItem('currentUser'))
        let payload={
            userId:user.userId,
            body:postData,
        }
        if(imageToPost)
        {
            payload={
                ...payload,
                image:imageToPost
            }
        }
        if(!postData && !imageToPost)
        {
            return ;
        }
 
         const res=await dispatch(writePost(payload));
     
         dispatch(getAllPosts())
         dataRef.current.value="";
         setText('')
         setFileOpen(false)
         setImgToPost('')
        
         

         

    }
     function handleUploadChange(event){
       
        const selectedFiles = event.target.files[0];
        
        setFile(selectedFiles);
 

        if(selectedFiles){
                console.log("SS:", selectedFiles);
                const storageRef = ref(storage, `/files/${selectedFiles.name}`)
                const uploadTask =  uploadBytesResumable(storageRef, selectedFiles);
                console.log("Upload task:", uploadTask);
                uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                        const percent = Math.round(
                            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                        );

                        // update progress
                        setPercent(percent);
                    },
                    (err)=>{
                        console.log("Some error",err);
                    },
                     () => {
                        
                        // download url
                        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                            console.log('File available at', downloadURL);
                            setImgToPost(downloadURL)
                          });
                    }
                ); 
            
            
            
                
                // Example: You can use 'fetch' or any library (like Axios) to upload the file to your server.
                // fetch('your-upload-url', { method: 'POST', body: file })
                //   .then((response) => console.log('File uploaded successfully!', response))
                //   .catch((error) => console.error('Error uploading file:', error));
              
        }
        else{
            console.log("no photo selected");
        }

    }
    function handleUpload(){
        setFileOpen(!isFileOpen)
        // console.log("File::",files);
        // const storageRef = ref(storage, `/files/${file.name}`)

     
    }
    const [emojiOpen,setEmojiOpen]=useState(false);

    function handleEmojiOpen()
    {
        setEmojiOpen(prev=>!prev);
    }

    return ( 
        <div className="flex-col  border  w-full px-3 py-3 mb-4 bg-white rounded-xl ">
            <form onSubmit={handleSubmit}>

          
                <div className="flex items-center mb-8">
                    <img src={user} alt="user" width="40px" className='rounded-full mr-4'></img>
                    <textarea placeholder="What's Up? Gonna write something !" name="post-body" ref={dataRef} onChange={e => setText(e.target.value)}  value={text} className="px-3 py-2 border m-2 w-full rounded-xl bg-slate-200"></textarea>
                </div>
                {imageToPost && 
                    <div className='flex-col '>
                        <img src={imageToPost} alt='uploadImg' className='w-1/2'></img>
                        <span className='text-red-500 cursor-pointer font-bold' onClick={()=>setImgToPost('')}>remove</span>
                     </div>
                          }
                <div className="flex justify-between items-center flex-wrap">
                    <div  className='flex items-center' >
                        <img src={picicon} alt="user" width="20px"  ></img> 
                        <div className='flex flex-col gap-2'>
                            {isFileOpen&& <input type="file" className='ml-2' onChange={handleUploadChange}/>}
                                <p className='ml-2  text-[#444] font-bold cursor-pointer' onClick={handleUpload}>Photo/Video</p>
                                {/* <p>{percent} "% done"</p> */}
                        </div>
                
                    </div>
                    <div className='flex items-center' onClick={handleEmojiOpen}>
                        <img src={feeling} alt="user" width="20px" ></img>
                       <span className='ml-2 text-[#444] font-bold cursor-pointer'>Feeling</span>
                    </div>
                    <button className='bg-[#673AB7] px-6 py-2 rounded text-white font-bold float-right'>Post</button>
                </div> 
                {emojiOpen &&  <EmojiPicker onEmojiClick={handleEmojiSelect} />}
            </form>
            
        </div>
       
     );
}
 
export default WritePost;