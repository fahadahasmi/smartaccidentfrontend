import {React,useState} from 'react';
import { FileUploader } from "react-drag-drop-files";

function FileUpload(props) {
    const fileTypes = ['jpeg','jpg','png','gif']
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        props.sendData(file);
        setFile(file);
    };
    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '25% 4%' }}>
                <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
                <div>

                </div>
            </div>
        </>
    );
}

export default FileUpload;