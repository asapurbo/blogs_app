import { Link } from "react-router-dom"
import { FaHouse } from "react-icons/fa6";

const BackButton = () => {
  return (
    <div className="container mt-8">
    <Link to="/" className="inline-block text-gray-600 home-btn" id="lws-goHome">
      <div className="flex items-center">
      <FaHouse className="mr-2 fa-solid fa-house inline-block"/>
      <h3>Go Home</h3>
      </div>
    </Link>
  </div>
  )
}

export default BackButton