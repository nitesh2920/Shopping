import React from "react";

type MedalProps = {
  className?: string; // Allow custom Tailwind classes
};

export const Medal: React.FC<MedalProps> = ({ className = "" }) => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className} // This will apply Tailwind text color classes
    >
      <path
        d="M8.87451 22.9583V33.3124C8.87451 37.1041 8.87451 37.1041 12.4578 39.5208L22.3121 45.2082C23.7912 46.0624 26.2079 46.0624 27.6871 45.2082L37.5412 39.5208C41.1246 37.1041 41.1246 37.1041 41.1246 33.3124V22.9583C41.1246 19.1667 41.1246 19.1667 37.5412 16.75L27.6871 11.0625C26.2079 10.2083 23.7912 10.2083 22.3121 11.0625L12.4578 16.75C8.87451 19.1667 8.87451 19.1667 8.87451 22.9583Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M36.4583 15.8957V10.4165C36.4583 6.24984 34.375 4.1665 30.2083 4.1665H19.7916C15.625 4.1665 13.5416 6.24984 13.5416 10.4165V15.7498"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M26.3121 22.896L27.4996 24.7502C27.6871 25.0418 28.1038 25.3335 28.4163 25.4168L30.5413 25.9585C31.8538 26.2918 32.208 27.4168 31.3538 28.4585L29.958 30.146C29.7496 30.4168 29.583 30.896 29.6038 31.2293L29.7288 33.4168C29.8121 34.771 28.8538 35.4585 27.6038 34.9585L25.5621 34.146C25.2496 34.021 24.7288 34.021 24.4163 34.146L22.3746 34.9585C21.1246 35.4585 20.1662 34.7502 20.2496 33.4168L20.3746 31.2293C20.3954 30.896 20.2287 30.396 20.0204 30.146L18.6246 28.4585C17.7704 27.4168 18.1246 26.2918 19.4371 25.9585L21.5621 25.4168C21.8955 25.3335 22.3121 25.021 22.4788 24.7502L23.6663 22.896C24.4163 21.771 25.583 21.771 26.3121 22.896Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
