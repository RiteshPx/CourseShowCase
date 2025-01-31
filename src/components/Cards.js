import Card from './Card'
import'./Cards.css';
export default function Cards({course,Title}){

    // let allCourses=[];
//    const courses=()=>{
//         Object.values(course).forEach((coursesCategory) => {
//             coursesCategory.forEach((course)=>{
//                 allCourses.push(course);
           
//         });
//         // console.log(coursesCategory);
//     });
//     return allCourses;
// };
// courses();
   
 function allCourses(){
    if(Title==="All"){
       return  Object.values(course).flat();
    }
    else if(Title==="Development"){
        return  course.Development ;
    }
    else if(Title==="Business"){
        return  course.Business;
    }
    else if(Title==="Lifestyle"){
        return  course.Lifestyle;
    }
    else if(Title==="Design"){
        return  course.Design;
    }
 }
    return (
      <div className='cards'>
       { allCourses().map((Course,indx)=>{
           return (
             <Card Course={Course} key={indx} />  
            )
       })
       }
       
    </div>
    )
}