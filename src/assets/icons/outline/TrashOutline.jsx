export default function TrashOutline({size = 16, className = ""}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M2 4H14M6.66667 4V2.66667C6.66667 2.29848 6.81619 1.94562 7.08124 1.68057C7.34629 1.41553 7.69915 1.266 8.06733 1.266H7.93267C8.30085 1.266 8.65371 1.41553 8.91876 1.68057C9.18381 1.94562 9.33333 2.29848 9.33333 2.66667V4M12.6667 4V13.3333C12.6667 13.7015 12.5171 14.0544 12.2521 14.3194C11.987 14.5845 11.6342 14.734 11.266 14.734H4.73333C4.36515 14.734 4.01229 14.5845 3.74724 14.3194C3.48219 14.0544 3.33267 13.7015 3.33267 13.3333V4"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66663 7.33337V11.3334M9.33329 7.33337V11.3334"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}