// import background from "../../resources/ui/backg.png";
import right from "../../resources/ui/rightButton.png";

export default function BlueRightButton({ ...props }) {
  return (
    <button {...props}>
      <img src={right} alt="" className=" aspect-square" />
    </button>
  );
}
