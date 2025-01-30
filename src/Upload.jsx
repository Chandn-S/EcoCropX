import {useState} from "react";

const Upload=()=>{
    const [image,setImage]= useState(null);

    const handleImageUpload = (event) =>{
        const file=event.target.files[0];
        if(file){
            const imageUrl= URL.createObjectURL(file);
            setImage(imageUrl);
        }
    };
    return(
        <div>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            {image && <img src={image} alt="Uploaded Preview" width="200" />}
        </div>
    );
};

export default Upload;