import React from 'react'

const Badge = ({
  text = "New",
  className = "w-[58px] h-[38px] bg-[var(--color-blue)] text-[var(--color-white)] flex justify-center  items-center rounded-tl-3xl rounded-br-3xl",
}) => {
  return <div className={` ${className}`}>{text}</div>;
};

export default Badge