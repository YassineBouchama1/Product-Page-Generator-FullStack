const IconIncom = (
  <svg
    viewBox="0 0 64 64"
    fill="currentColor"
    height="1.5em"
    width="1.5em"
    className="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M63 38 A19 19 0 0 1 44 57 A19 19 0 0 1 25 38 A19 19 0 0 1 63 38 z"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M57 38 A13 13 0 0 1 44 51 A13 13 0 0 1 31 38 A13 13 0 0 1 57 38 z"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M30 51H1v6h37v-1M27 45H3v6h27M26 39H5v6h22M26 33H1v6h25M29 27H3v6h23M35 21H1v6h28M40 20v-5H3v6h32M1 9h37v6H1z"
    />
  </svg>
);

const IconCanceld = (
  <svg
    viewBox="0 0 64 64"
    fill="currentColor"
    height="1.5em"
    width="1.5em"
    className="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"
  >
    <g fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={2}>
      <path d="M57 18c-1.504 1.504-2.705 2-5 2-4.59 0-8-3.41-8-8 0-2.295.496-3.496 2-5l-6-6L1 40l6 6c1.504-1.504 2.705-2 5-2 4.59 0 8 3.41 8 8 0 2.295-.496 3.496-2 5l6 6 39-39-6-6zM26 15l4 4M45 34l4 4" />
    </g>
    <path
      fill="none"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M32 21l4 4M39 28l4 4"
    />
  </svg>
);

const IconSales = (
  <svg
    viewBox="0 0 64 64"
    fill="currentColor"
    height="1.5em"
    width="1.5em"
    className="stroke-current  text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"
  >
    <g fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={2}>
      <path d="M21.903 5L55 38.097 34.097 59 1 25.903V5z" />
      <path d="M29.903 5L63 38.097 42.097 59" />
      <path d="M19 18 A5 5 0 0 1 14 23 A5 5 0 0 1 9 18 A5 5 0 0 1 19 18 z" />
    </g>
  </svg>
);



const Icons = {
  IconSales,
  IconCanceld,
  IconIncom,
};

export default Icons;
