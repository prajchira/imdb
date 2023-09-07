import React from 'react';
import ErrorPhoto from '../error.png'



function ErrorPage() {
    return (
        <div className = "pt-3 font-bold mx-6 text-5xl">
            Whoops! There's no routing here! 
            <img src={ErrorPhoto} width={900} height={900} alt = "" />
        </div>
    );
    /* found photo on internet */
}
export default ErrorPage