import React from "react";

export default function BtnCopyLink({ url } ) {
  const copy = async (
    imageLink: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    await navigator.clipboard.writeText(imageLink);
    alert("link copied");
  };

  return (
    <button
      onClick={(e) => copy(url, e)}
      className="inline-flex items-center px-4 mt-3 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Copy Link
    </button>
  );
}
