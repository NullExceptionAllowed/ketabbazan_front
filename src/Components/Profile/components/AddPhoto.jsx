import React from "react";
import "../Profile.css"; 
import axios from "axios";




const AddPhoto = () =>
{

    const [selectedFile, setSelectedFile] = React.useState('');
    console.log('hellsdjfkljsdfksdklghisdjgklsdjgklsdhgjls');
    const onFileChange = event => {
        setSelectedFile(event.target.files[0]);
        console.log('event :',event.target.files[0]);
       
        console.log('pic ', selectedFile);
    }

    const onFileUpload = () => {
    
        // Create an object of formData
        const formData = new FormData();
      
        // Update the formData object
        formData.append(
          "myFile",
          this.state.selectedFile,
          this.state.selectedFile.name
        );
        // const res =  await apiFUnction(file);
      
        // Details of the uploaded file
        console.log(this.state.selectedFile);
      
        // Request made to the backend api
        // Send formData object
        axios.post("api/uploadfile", formData);
      };

    return(
        <div className="root">
            <div className="section addPhoto">

                <form>
                    <input type="file" onChange={onFileChange}/>
                    <button onClick={onFileUpload}/>
                    <img src={selectedFile} alt={'whatever'}/>
                </form>

            </div>        


        </div>

   

    );
    

};

export default AddPhoto;