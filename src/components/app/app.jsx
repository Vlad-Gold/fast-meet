// import React,{useState} from 'react';
// import './app.css'
// import "bootstrap/dist/css/bootstrap.css";


// const App = () => {

  
//    const [count, setCounter] = useState(0);
//    const [tags, setTags] = useState(['tag1', 'tag2', 'tag3'])


//     const formatCount = () => {
//         return count === 0 ? "empty" : count;
//     };

//     const getBadgeClasses = () => {
//         let classes = "badge m-2 ";
//         classes += count===0 ? "bg-warning" : "bg-primary";
//         return classes;
//     };

//     const handleIncrement = () => {
//         setCounter((prevState) => prevState + 1);
        
//     };

//     const handleDecrement = () => {
//         setCounter((prevState) => prevState - 1);
        
//     };

//     const handleTagChange = (id) => {
//         // setTags(["tag4", "tag5"])
//         setTags(prevState => prevState.filter(item=>item!==id))
//         console.log(id)
//     }

//     const renderTags = () => {

//         return tags.length !== 0
//         ? tags.map(item=>( 
//             <li 
//                 key={item} className = 'btn btn-primary btn-sm m-2' 
//                 onClick = { ()=>handleTagChange(item)}> 
//                 {item}
//             </li>)) : "No Tags"
            
//     }

//     return ( 
//         <>
//         <ul>
//             {renderTags()}
//         </ul>
//             <span className={getBadgeClasses ()}>{formatCount()}</span>
//             <button className='btn btn-primary btn-sm m-2' onClick = {handleIncrement}> + </button>
//             <button className='btn btn-primary btn-sm m-2' onClick = {handleDecrement}> - </button>
            
//         </>
        
// )};
 
// export default App;