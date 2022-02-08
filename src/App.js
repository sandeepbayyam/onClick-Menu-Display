import React from "react";
import "./style.css";


function App() {
  const [show,setShow] = React.useState(false);
  const toggle =(e)=>{
    setShow(!show);
   show?
   e.target.style.transform='rotate(90deg)':
   e.target.style.transform='rotate(45deg)'
  }
  return (
    <div className='betterview'> 
    { show ?
     <div className="box">
       <h3>&nbsp;&nbsp;Add Link</h3>
       <hr/>
       <h3>&nbsp;&nbsp;Upload File</h3>
       <hr/>
       <h3>&nbsp;&nbsp;Write Chapter</h3>
       <hr/>
       <h3>&nbsp;&nbsp;New Playlist</h3>
       <div className="bottom-arrow"></div>
     </div>
      :""
   }
      <button onClick={toggle}> + </button>
    </div>
  );
}
export default App;