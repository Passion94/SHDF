import './write.css'

export default function Write() {
  
  return (
    <div className='write'>
    <img className='writeImg' src='https://d3f9k0n15ckvhe.cloudfront.net/wp-content/uploads/2021/10/AdobeStock_282255808-1.jpeg'/>
    <form className='writeForm'>
    <div className='writeFormGroup'>
    <label htmlFor='fileInput'>
    <i className=" writeicon fa-regular fa-square-caret-up"></i>
    </label>

<input type="file" id='fileInput' style={{display:"none"}} />
<input type="text" placeholder='Title' className='writeinput' autoFocus={true}></input>
    </div>
<div className='writeFormGroup'>
<textarea type="text" placeholder='description...' className='writeinput writeText'/>
</div>
<button className='writeSubmit' type='submit'> Publish</button>
    </form>
    </div>
  )
}
