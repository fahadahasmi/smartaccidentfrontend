import {React,useState} from 'react';
//Components
import FileUpload from './components/FileUploader';
import SimpleMap from './components/Map';
import PredModal from './components/Modal';

export default function Home() {

  const [data, setData] = useState('');
  const [pred,setPred] = useState('');
  const [isShow,setIsShow] = useState(false);
  const [url,setUrl] = useState('')

  function handleData(dataFromChild) {
    const imageUrl = URL.createObjectURL(dataFromChild);
    setUrl(imageUrl);
    setData(dataFromChild);
  }

  function handle(){
    console.log(data)
    const formData = new FormData();
    formData.append('file', data);
    fetch(`http://127.0.0.1:8000/`,{
      method:'POST',
      body:formData
    })
    .then(res => res.json())
    .then((data)=>{
      console.log(data)
      setIsShow(true);
      setPred(data);
    })
    .catch((e)=>{
      console.error(e)
    })
  }

  return (
    <>
      <div style={{display:'flex',flexDirection:'column',alignItems: 'center', justifyContent: 'center' }}>
        {
          isShow && data?
          (<PredModal prediction={pred.Prediction} img={url} />):null
        }
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <FileUpload sendData={handleData} />
          <SimpleMap />
        </div>
        <button style={{ fontSize: '20px', padding: '15px', background: 'blue', color: 'white', outline: 'none', border: 'none', borderRadius: '10px',width:'120px' }} onClick={handle} >Upload</button>
      </div>
    </>
  );

}