interface Props {
  child: React.ReactNode;
  colorName?: "primary" | "danger" | "success" | "warning";
  onClose: () => void;
}

const Alert = ({ child, colorName = "primary", onClose }: Props) => {
  return (
    <div className={"alert alert-" + colorName + " alert-dismissible"}>
      {child}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
