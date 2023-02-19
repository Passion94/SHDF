import './stories.css'
import Sidebar from '../../components/sidebar/Sidebar';
import SinglePost from '../../components/singlePost/SinglePost';
import Footer from '../../components/footer/Footer';


export default function Stories() {
  return (
    <>
    <div className='single'>
       <SinglePost/>
      <Sidebar/>
    </div>
    <Footer/>
    </>
  )
}
