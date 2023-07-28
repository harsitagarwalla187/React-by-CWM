import Button from "./Button";
import { useState } from "react";

interface Props {
  children: string;
  maxChar?: number;
}

const ExpandableText = ({ children, maxChar = children.length }: Props) => {
  const [more, setMore] = useState(false);

  function handleClick() {
    setMore(!more);
  }

  return (
    <div>
      {maxChar === children.length || more
        ? children
        : children.substring(0, maxChar).concat("...")}{" "}
      {maxChar < children.length ? (
        <Button onClick={handleClick}>{more ? "less" : "more"}</Button>
      ) : (
        ""
      )}
    </div>
  );
};

export default ExpandableText;
