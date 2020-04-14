import React from 'react';
import { Link } from 'react-router-dom';

const nav = () => {
 return (
     <div>
         <div>
             <div><Link to="/activity">Acitvity</Link></div>
         </div>
         <div>
            <div><Link to="/agreements">Quotes & Contracts</Link></div>
         </div>
         <div>
            <div><Link to="/bills">Bills</Link></div>
         </div>
     </div>
 )
}

export default nav;