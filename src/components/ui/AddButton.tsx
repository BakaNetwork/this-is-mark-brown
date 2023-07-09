import add from "../../resources/ui/addButton.png";

export default function AddButton({ ...props }) {
  return (
    <button {...props}>
      <img src={add} alt="delete" />
    </button>
  );
}
