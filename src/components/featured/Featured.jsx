import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {

  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=Mumbai,New Delhi,Hyderabad"
    );
  return (
    <div className="featured">
       {loading ? (
        "Loading please wait"
      ) : (
        <>
      <div className="featuredItem">
        <img
          src="https://img.freepik.com/free-photo/mumbai-skyline-seen-from-marine-drive-south-mumbai_469504-11.jpg?w=1380&t=st=1690918844~exp=1690919444~hmac=93aadbd57216fc774e05462f1024d1476a8d269e26fa213fe21e5c5cd57348e4"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Mumbai</h1>
          <h2>1 properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20181121185425/Charminar-Hyderabad.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Hyderabad</h1>
          <h2>2 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://www.revv.co.in/blogs/wp-content/uploads/2019/11/self-drive-car-rental-delhi-gurgaon-noida_revv-blog.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Delhi</h1>
          <h2>1 properties</h2>
        </div>
      </div>
      </>
     )}
    </div>
  );
};

export default Featured;
