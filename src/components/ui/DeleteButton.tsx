import dimage from "../../resources/ui/CanccelButton.png";

export default function DeleteButton({ ...props }) {
  return (
    <button {...props}>
      <img src={dimage} alt="delete" />
    </button>
  );
}
