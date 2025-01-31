
import './Filter.css';
export default function Filter(props){

   function FilterHandler(title){
    props.setTitle(title);

   }
    return(

    <div className="filter-data">
       {props.filterData.map((data)=>{
        return (
         <button onClick={()=>FilterHandler(data.title)} className={`btn ${(data.title===props.initialTitle)?("click"):("")} `}>
            {data.title}
         </button>)
       })
       }
    </div> 
   )
}