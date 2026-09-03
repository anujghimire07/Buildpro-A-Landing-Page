import { MdArrowForward } from "react-icons/md";

type Props = {
  text: string;

  borderColor: string;

  bgColor: string; // hover background (slides from left)

  textColor: string; // default text color
  hoverTextColor: string; // hover text color

  arrowColor: string; // default arrow color
  hoverArrowColor: string; // hover arrow color
};

const Animated_button = ({
  text,
  borderColor,
  bgColor,
  textColor,
  hoverTextColor,
  arrowColor,
  hoverArrowColor,
}: Props) => {
  return (
    <button
      style={
        {
          "--border": borderColor,
          "--bg": bgColor,
          "--text": textColor,
          "--hover-text": hoverTextColor,
          "--arrow": arrowColor,
          "--hover-arrow": hoverArrowColor,
        } as React.CSSProperties
      }
      className="group relative overflow-hidden font-bold text-[14px] border-2 border-(--border) py-2.5 px-7 flex items-center justify-center gap-2"
    >
      {/* background */}
      <span className="absolute inset-0 bg-(--bg) -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>

      {/* text */}
      <span className="relative z-10 group-hover:-translate-x-2 text-(--text) group-hover:text-(--hover-text) transition duration-300">
        {text}
      </span>

      {/* arrow */}
      <MdArrowForward className="absolute left-full translate-x-2 text-(--arrow) group-hover:-translate-x-6 group-hover:text-(--hover-arrow) transition-all duration-300 z-10" />
    </button>
  );
};

export default Animated_button;