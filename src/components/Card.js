import { FcLike ,FcLikePlaceholder} from "react-icons/fc";
import {useState} from 'react';
import './Card.css';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Card({Course}){
    const [likeCourse,setLikecourse]= useState([]);

    function handler(){
        if(likeCourse.includes(Course.id)){
            setLikecourse((prev)=>prev.filter((cid)=> (cid!==Course.id)));
            toast.warn("unlike courses");
        }
        else{
           if(likeCourse.length===0){
            setLikecourse([Course.id])
           }
           else{
            setLikecourse((prev)=>[...prev,Course.id]);
           }
            toast.success("liked Course");
           
        }

    }
    return ( 
        <div className="card">
            <img className="img"src={Course.image.url} alt={Course.image.alt}></img>
            <div className="btn-toast"onClick={handler}> 
                {
                 (likeCourse.includes(Course.id))? <FcLike fontSize={20}/> :<FcLikePlaceholder fontSize={20}/>

                 }
            </div>
            <div className="detail">
                <p className="title">{Course.title}</p>
                <p className="des">
                    {
                    (Course.description.length>200)? `${Course.description.substring(0,200)}...` :(Course.description)
                    }
                    </p>
            </div>
        </div>
    )
}