import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(!state);
    onClick();
  };

  if (state)
    return <AiFillHeart color="pink" size="20" onClick={handleClick} />;
  else return <AiOutlineHeart size="20" onClick={handleClick} />;
};

export default Like;
