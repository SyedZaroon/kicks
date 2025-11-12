export default function CloseOutlineIcon({
    size = 24,
    className = "",
}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            fill="none"
            viewBox="0 0 12 12"
            className={className}
        >
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m.75 11.236 5.243-5.243M11.236.75 5.992 5.993m0 0L.75.75m5.243 5.243 5.243 5.243"
            ></path>
        </svg>
    )
}
