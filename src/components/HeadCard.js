import headImg from '../assets/Vector.svg'
const HeadCard = () => {
    return ( 
        <div className=''>
        <div className="md:flex-row flex-col flex justify-around mt-4 ">
             <div className='md:w-[40%] w-[100vw]  mx-auto my-auto px-4 '>
               <h2 className='md:text-5xl text-3xl font-[Open Sans] font-bold mb-10'> Sed Imperdiet Enim li Vitae Viverra Justo.</h2>
                <h4 className='font-semibold md:text-2xl text-xl text-[#878787]'>If you need to use a one-off breakpoint that doesn’t make sense to include in your theme, use the min or max modifiers to generate a custom breakpoint.</h4>
               </div>
           
                <img src={headImg} alt="icon" className='object-contain  h-auto sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2   '></img>
            
        </div>

          <div className='flex justify-between gap-2 md:w-[60%] w-[90%] mx-auto mt-16 '>
              <div className='border-r-2 border-gray-400 md:pr-8 pr-4 '>
                 <h2 className='md:text-2xl text-xl font-medium'>
                    lorem ipsum
                 </h2>
                 <h4 className='text-[#7b7a7a]'>some text to be oput here</h4>
              </div>

              <div className='border-r-2 border-gray-400 md:pr-8 pr-4'>
                 <h2 className='md:text-2xl text-xl  font-medium'>
                    lorem ipsum
                 </h2>
                 <h4 className='text-[#7b7a7a]'>some text to be oput here</h4>
              </div>

              <div className=' border-gray-400 md:pr-8 pr-4 '>
                 <h2 className='md:text-2xl text-xl  font-medium'>
                    lorem ipsum
                 </h2>
                 <h4 className='text-[#7b7a7a]'>some text to be oput here</h4>
              </div>
          </div>
        </div>  
     );
}
 
export default HeadCard;