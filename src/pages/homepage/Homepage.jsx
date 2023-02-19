import Landing from "../landing/Landing";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";
import Footer from "../../components/footer/Footer";

export default function Homepage() {

  return (
    <>
    <Landing/>
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
      <Footer/>
    </>
  );
}