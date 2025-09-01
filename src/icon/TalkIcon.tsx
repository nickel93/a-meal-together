interface TalkIconProps {
  color?: string;
}

const TalkIcon = (props: TalkIconProps) => {
  const { color = "#D1D5DC" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M8.625 12H8.635M12.625 12H12.635M16.625 12H16.635M8.525 20C10.4336 20.9791 12.6291 21.2443 14.7159 20.7478C16.8027 20.2514 18.6436 19.0259 19.9068 17.2922C21.17 15.5586 21.7724 13.4308 21.6056 11.2922C21.4387 9.15366 20.5136 7.14502 18.9968 5.62824C17.48 4.11146 15.4714 3.1863 13.3328 3.01946C11.1943 2.85263 9.06647 3.45509 7.33282 4.71829C5.59917 5.98149 4.37369 7.82236 3.87722 9.90916C3.38075 11.996 3.64594 14.1915 4.625 16.1L2.625 22L8.525 20Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TalkIcon;
