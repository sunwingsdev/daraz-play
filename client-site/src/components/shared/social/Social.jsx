import { Link } from "react-router-dom";

const Social = ({ social }) => {
  return (
    <div>
      <Link target="_blank" to={social?.urlLink}>
        <img className="w-8" src={social?.image} alt="" />
      </Link>
    </div>
  );
};

export default Social;
