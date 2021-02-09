import React, {useState} from 'react'
import './form.css';

function Form() {


    const submitHobby = (event) => {
        event.preventDefault();

        // fetch('http://localhost/api/hobbies', {
        //     method: 'POST',
        //     header: {
        //         'Content-Type' : 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // })
    };

    const [name, setName] = useState([]);
    const [image, setImage] = useState([]);
    const [description, setDescription] = useState([]);
    

    /*
        TODO:
        still need send post request to api, 
        set up image upload handler
        look at delete and update requests
        Date is used as index, not suitable to will need to have this
        incremented .
    */

    return (
        <div>
            <form onSubmit={submitHobby} className='form'>
                <div className='hobbyInput'>
                    <input
                    type="text"
                    name="hobby"
                    className="inputHobbyBox"
                    required
                    autoComplete="off"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    
                />
                <label for="hobby" className="labelHobby">
                    <span className="contentHobby">Hobbie</span>
                </label>
                </div>             
                
                <div className="desInput">
                        <input 
                            type="text" 
                            name="description" 
                            className="inputTxtBox"
                            autoComplete="off"   
                            value={description} 
                            onChange={(event) => setDescription(event.target.value)}
                            required 
                                
                        />
                    <label for="description" className="labelDes">
                        <span className="contentDes">Description</span>
                    </label>
                </div>     
                <div className="imageInput">
                    <label className="imgLabel">
                        <span className="contentImg">Image: (JPEG, PNG) </span>
                    </label> 
                    <div className="image">
                        <input type="file" name="filename" className="imgInput"/>    
                    </div>  
                </div>
                
                


                <p>Hobby: {name}</p>
                <p>Description: {description}</p>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Form