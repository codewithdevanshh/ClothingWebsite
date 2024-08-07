import { Link } from "react-router-dom";
import "../styles/Hero.css";
const Hero = () => {
  return (
    <div className="hero bg-base-200">
    <div className="hero-content text-center">
      <div className="max-w-xl">
      <h1 className="text-6xl font-bold max-md:text-4xl text-content">
      Best Clothing Website Of The Year!
    </h1>
        <p className="py-6 text-2xl max-md:text-lg text-content">
        Step into the virtual realm of fashion with our award-winning website, where style meets convenience effortlessly. Explore curated collections showcasing the latest trends, from casual chic to red-carpet glamour
        </p>
        <Link to="/shop" className="btn btn-wide bg-blue-600 hover:bg-blue-500 text-white">Shop Now</Link>
      </div>
    </div>
  </div>
  )
}

export default Hero

