import { faStar as solidStar , faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Rating({rating}) {
    const stars = [1,2,3,4,5];
    function getStars(star){
            if (rating >= star){
                return solidStar
            } else if (rating >= star-0.5) { return faStarHalfStroke
        } else { return regularStar
    }  
    }

  return <>
    <div className="stars flex items-center">
        {stars.map(star =>{
            return <FontAwesomeIcon key={star} className="text-yellow-400" icon={getStars(star)} />
        })}
    </div>
  
  </>
}
