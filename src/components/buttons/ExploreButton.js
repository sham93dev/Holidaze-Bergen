import React from 'react'
import {useHistory} from "react-router-dom";

function ExploreButton() { 
    const history = useHistory();
    const handleTheClick = () => {
        history.push("/accommodations");
        }

    return (
        <div>
          <button className="explore-btn" onClick={handleTheClick}>Read More</button>  
        </div>
    )
}

export default ExploreButton
