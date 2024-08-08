interface Props {
  showAlert: () => void;
}

const Button = ({ showAlert }: Props) => {
  return (
    <button className="btn btn-primary" onClick={showAlert}>
      Show Alert
    </button>
  );
};

export default Button;
