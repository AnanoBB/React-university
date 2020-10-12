import React from "react";



function UserInput({value,onChange}){
    return (
      
        <>
        <form>
            <input type ='text' name='username' value={value} onChange={onChange} />
        </form>
        </>
    )
}

export default UserInput;