import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Rating.css";
import { faStar as filledStar } from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
const Rating: FC<{ rateCount: number }> = ({ rateCount }) => {
  console.log(rateCount);
  return (
    <div className="stars">
      {rateCount === 0 ? (
        <>
          <FontAwesomeIcon className={`star`} icon={emptyStar} />
          <FontAwesomeIcon className={`star`} icon={emptyStar} />{" "}
          <FontAwesomeIcon className={`star`} icon={emptyStar} />{" "}
          <FontAwesomeIcon className={`star`} icon={emptyStar} />{" "}
          <FontAwesomeIcon className={`star`} icon={emptyStar} />{" "}
        </>
      ) : rateCount === 1 ? (
        <>
          <FontAwesomeIcon className={`star`} icon={filledStar} />
          <FontAwesomeIcon className={`star`} icon={emptyStar} />
          <FontAwesomeIcon className={`star`} icon={emptyStar} />
          <FontAwesomeIcon className={`star`} icon={emptyStar} />
          <FontAwesomeIcon className={`star`} icon={emptyStar} />
        </>
      ) : rateCount === 2 ? (
        <>
          <FontAwesomeIcon className={`star`} icon={filledStar} />{" "}
          <FontAwesomeIcon className={`star`} icon={filledStar} />{" "}
          <FontAwesomeIcon className={`star`} icon={emptyStar} />{" "}
          <FontAwesomeIcon className={`star`} icon={emptyStar} />{" "}
          <FontAwesomeIcon className={`star`} icon={emptyStar} />{" "}
        </>
      ) : rateCount === 3 ? (
        <>
          <FontAwesomeIcon className={`star`} icon={filledStar} />{" "}
          <FontAwesomeIcon className={`star`} icon={filledStar} />{" "}
          <FontAwesomeIcon className={`star`} icon={filledStar} />{" "}
          <FontAwesomeIcon className={`star`} icon={emptyStar} />{" "}
          <FontAwesomeIcon className={`star`} icon={emptyStar} />{" "}
        </>
      ) : rateCount === 4 ? (
        <>
          <FontAwesomeIcon className={`star`} icon={filledStar} />{" "}
          <FontAwesomeIcon className={`star`} icon={filledStar} />{" "}
          <FontAwesomeIcon className={`star`} icon={filledStar} />{" "}
          <FontAwesomeIcon className={`star`} icon={filledStar} />{" "}
          <FontAwesomeIcon className={`star`} icon={emptyStar} />{" "}
        </>
      ) : rateCount === 5 ? (
        <>
          <FontAwesomeIcon className={`star`} icon={filledStar} />
          <FontAwesomeIcon className={`star`} icon={filledStar} />
          <FontAwesomeIcon className={`star`} icon={filledStar} />
          <FontAwesomeIcon className={`star`} icon={filledStar} />
          <FontAwesomeIcon className={`star`} icon={filledStar} />
        </>
      ) : (
        <FontAwesomeIcon className={`star`} icon={emptyStar} />
      )}
      {/* <FontAwesomeIcon className={`star ${isFilled && 'filled'} ${isHalfFilled && 'half-filled'}`} icon={isHalfFilled ? filledStarHalf : filledStar} /> */}
    </div>
  );
};

export default Rating;
