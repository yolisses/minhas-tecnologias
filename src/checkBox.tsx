import CheckedFalse from "./assets/check-false.svg";
import CheckedTrue from "./assets/check-true.svg";

type Props = {
  checked: boolean;
  onClick: () => void;
};

export function CheckBox({ checked, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: 0,
        height: "1em",
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      <img src={checked ? CheckedTrue : CheckedFalse} />
    </button>
  );
}
