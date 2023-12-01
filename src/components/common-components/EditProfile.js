import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux";
import { getMyProfile, saveProfile } from "../../features/auth/profile";
import { useNavigate } from "react-router-dom";
const { useState, useEffect } = require("react");

const EditProfile = () => {


    const [selectedFile, setSelectedFile] = useState(null);
    const { register, handleSubmit, setValue, reset } = useForm()
    const dispatch=useDispatch()
    const userProfile=useSelector(store=>{
      return store?.profile?.data?.profileData;
    })
    const user=JSON.parse(localStorage.getItem('currentUser'))
    const myId=user?.userId;
    const navigate=useNavigate();

    // console.log("USER PROFILE:",userProfile?.[0]?.[0] );


    const onSubmit = async(data) => 
    {
      data={
        ...data,
        id: myId
      }
      dispatch(saveProfile(data))
      reset()
      // Navigate()
      navigate('/home/profile');
      
    }


    useEffect(()=>{
  
      dispatch(getMyProfile(myId))
    },[])

    useEffect(()=>{
      const defField={
        ig: userProfile?.[0]?.ig,
        email: userProfile?.[0]?.email,
        gender: userProfile?.[0]?.gender,
        location: userProfile?.[0]?.location,
        bio: userProfile?.[0]?.bio,
        birthDate: userProfile?.[0]?.birthday,
        desig: userProfile?.[0]?.designation,
        fullName: `${userProfile?.[0]?.firstName} ${userProfile?.[0]?.lastName}`,
        linkedIn: userProfile?.[0]?.linkedIn,
        fb: userProfile?.[0]?.fb,
        twitter: userProfile?.[0]?.twitter
        }
        for (const field in defField) {
          setValue(field, defField[field]);
        }

    },[userProfile])

  
    const handleFileChange = (event) => {
      const file = event.target.files[0]; // Get the first selected file
      setSelectedFile(file);
  
      // You can access the file properties such as name, size, type, etc.
      console.log("Selected File:", file);
  
      // You can also perform further actions with the selected file, such as uploading it to a server.
    };
  //  async function handleSubmit(values)
  //  {
  //    values.preventDefault();
  //    console.log("Form submjiteed", values);
  //    const formData = new FormData(values?.target);
  //    console.log("VAL::", formData.get('fullName'));
  //  }
  //  const onSubmit = (data) => console.log(data)

    return ( 
        <div className="bg-white m-2 px-8 py-5">
            <h2 className="text-2xl font-bold mb-8">Edit profile: </h2>
            <form onSubmit={handleSubmit(onSubmit)} >

         

            <h2 className="font-bold text-lg mt-4 mb-10">Personal Details: </h2>
                  <div>
            <label className="cursor-pointer text-white py-8 px-6 rounded-lg border-2 border-dotted border-blue-500 hover:border-blue-600 font-medium">
              <span className="text-[#929090]">Select Photo</span>
              <input
                type="file"
                className="hidden"
                name="imageDp"
                {...register("imageDp")}  
                onChange={handleFileChange} // Add the onChange event handler
              />
            </label>

            {selectedFile && (
              <div className="mt-10">
                <p>Selected File: {selectedFile.name}</p>
                {/* Display other file properties if needed */}
              </div>
            )}
                 </div>

            {/* PERSONAL FORM  */}
            <div className="flex  gap-2 mt-12 gap-8">
              {/* Left from  */}
                 <div className="flex flex-col justify-between flex-1 gap-4">
                    <div className="flex flex-col">
                      <label htmlFor="fullName" className="font-semibold">Full Name</label>
                      <input type="text" name="fullName" className="border px-2 py-1 rounded mt-2"  {...register("fullName")} ></input>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="email" className="font-semibold" >Email</label>
                      <input type="text" name="email" disabled className="border px-2 py-1 rounded mt-2"  {...register("email")} ></input>
                    </div>
               
                    <div className="flex flex-col">
                      <label htmlFor="desig" className="font-semibold" >Designation</label>
                      <input type="text" name="desig" className="border px-2 py-1 rounded mt-2"  {...register("desig")} ></input>
                    </div>  
                    
                           
                 </div>
                 {/* Right form */}
                 <div  className="flex flex-col justify-between flex-1" >
                 <div className="flex flex-col">
                      <label htmlFor="birthDate" className="font-semibold" >Birthday</label>
                      <input type="date" name="birthDate" className="border rounded px-3 py-1 mt-2"  {...register("birthDate")} ></input>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="bio" className="font-semibold" >Bio</label>
                      <input type="text" name="bio" className="border px-2 py-1 rounded mt-2"  {...register("bio")} ></input>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="location" className="font-semibold" >Location</label>
                      <input type="text" name="location" className="border px-2 py-1 rounded mt-2"  {...register("location")} ></input>
                    </div>
                
                    
                 </div>

            </div>
            <div className="flex flex-col mt-4">
                      <label className="font-semibold" >Gender: </label>
                      <div className="flex gap-2">
                     <input type="radio" id="male" name="gender" value="Male"  {...register("gender")}  />
                      <label for="male">Male</label>
                     <input type="radio" id="female" name="gender" value="Female" {...register("gender")}   />
                     <label for="female">Female</label>
                     <input type="radio" id="Other" name="gender" value="Other" {...register("gender")}   />
                     <label for="Other">JavaScript</label>
                         
                      </div>

                    </div>
            {/* SOCIAL LINKS  */}
            <h2 className="font-bold text-lg mt-6 mb-2">Social Links: </h2>
            <div className="flex  gap-8">
             
               {/* left links  */}
               <div className=" flex flex-col justify-between flex-1 gap-4">
                     <div className="flex flex-col">
                      <label htmlFor="ig" className="font-semibold" >Instagram</label>
                      <input type="text" name="ig" className="border px-2 py-1 rounded mt-2" {...register("ig")}  ></input>
                  </div>
                    <div className="flex flex-col">
                      <label htmlFor="twitter" className="font-semibold" >Twitter</label>
                      <input type="text" name="twitter" className="border px-2 py-1 rounded mt-2" {...register("twitter")}  ></input>
                    </div>
               </div>
               <div className=" flex flex-col justify-between flex-1 gap-4">
                     <div className="flex flex-col " >
                      <label htmlFor="fb" className="font-semibold" >Facebook</label>
                      <input type="text" name="fb" className="border px-2 py-1 rounded mt-2" {...register("fb")}  ></input>
                    </div>
                    <div className="flex flex-col " >
                      <label htmlFor="linkedIn" className="font-semibold" >LinkedIn</label>
                      <input type="text" name="linkedIn" className="border px-2 py-1 rounded mt-2" {...register("linkedIn")}  ></input>
                    </div>
               </div>
            </div>
          <button type="submit" className="px-3 py-1 rounded-xl bg-[#673AB7] text-white font-medium ">
               Submit
          </button>
            </form>

        </div>
     );
}
 
export default EditProfile;