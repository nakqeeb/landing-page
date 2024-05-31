import { FC } from "react";
import "./heading-title.css";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const HeadingTitle: FC<{
  title: string;
  description?: string;
  className?: string;
}> = ({ title, description, className }) => {
  const { height, width } = useWindowDimensions();
  return (
    <div className={`${className} heading-title`}>
      <p className={`${width <= 767 ? "h-s" : "h-m"} body3-medium title`}>
        {title}
      </p>
      <p className="b-m subtitle-normal description">{description}</p>
    </div>
  );
};

export default HeadingTitle;
