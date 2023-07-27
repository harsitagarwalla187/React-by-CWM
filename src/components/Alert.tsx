import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-danger alert-dismissible">
      {children}
      <button className="btn-close" onClick={onClose}></button>
    </div>
  );
};

export default Alert;
