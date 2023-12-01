export default function getTimeDifference(time)
{
  
  const newdate=new Date(time)
 
  const current=new Date()
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(newdate.getFullYear(), newdate.getMonth(), newdate.getDate());
  const utc2 = Date.UTC(current.getFullYear(), current.getMonth(), current.getDate());


 if(Math.floor((utc2 - utc1) / _MS_PER_DAY)>=7&&Math.floor((utc2 - utc1) / _MS_PER_DAY)<=365)
 {
   let numWeek=Math.round(Math.floor((utc2 - utc1) / _MS_PER_DAY)/7)
   return `${numWeek} weeks ago`;
 }
 else if(Math.floor((utc2 - utc1) / _MS_PER_DAY)>=1&&Math.floor((utc2 - utc1) / _MS_PER_DAY)<7)
 {
  return `${Math.floor((utc2 - utc1) / _MS_PER_DAY)} days ago`;
 }
 else if(Math.floor((utc2 - utc1) / _MS_PER_DAY)<1)
 {
    return `today`;
 }
 else if(Math.floor((utc2 - utc1) / _MS_PER_DAY)>365)
 {
   let numYear=Math.round(Math.floor((utc2 - utc1) / _MS_PER_DAY)/365)
   if(numYear<2){
   return `${numYear} Year ago`
   }
   else{
    return `${numYear} Years ago`
   }
 }



  
}