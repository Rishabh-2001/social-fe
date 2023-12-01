const CommentIcon = ({color}) => {
    
    return ( 
        <div className="w-[24px]">
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M408 64H104a56.16 56.16 0 00-56 56v192a56.16 56.16 0 0056 56h40v80l93.72-78.14a8 8 0 015.13-1.86H408a56.16 56.16 0 0056-56V120a56.16 56.16 0 00-56-56z" fill={color || 'none'} stroke={color || "currentColor" }stroke-linejoin="round" stroke-width="32"/></svg>
        </div>
     );
}
 
export default CommentIcon;