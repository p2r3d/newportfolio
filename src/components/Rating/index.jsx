import './rating.scss'
import GreyStar from '../../assets/images/GreyStar.png'
import Star from '../../assets/images/Star.png'

function Rating({ratings }) {
  // 3 étoiles max
  const totalStars = 3; 
  return (
    <div className="ratingDiv"> 
    {/*on itère sur le tableau pour choisir l'e nb d'étoiles colorées */}
      {[...Array(totalStars)].map((_, index) => (
        <img
          key={index}
          src={index < ratings ? Star : GreyStar}
          alt="notation avec étoiles"
          width="25"
          height="25"
        />
      ))}
    </div>
  );
}

export default Rating;
