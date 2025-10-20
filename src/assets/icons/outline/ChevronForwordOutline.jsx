export default function ChevronForword({ size = "20", className="", onClick }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 7 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        d="M5.5 10.5L1 6L5.5 1.5"
        stroke="#232321"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
};
