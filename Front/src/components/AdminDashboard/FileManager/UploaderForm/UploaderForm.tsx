"use client";
import useUploaderForm from "./UploaderFormHook";

function UploaderForm() {
  const { isLoading, onSubmit, setFile } = useUploaderForm();

  return (
    <div>
      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        htmlFor="file_input"
      >
        رفع ملف
      </label>

      <input
        onChange={(e) => {
          if (e.target && e.target.files) {
            setFile(e.target.files[0]);
          }
        }}
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg 
    cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 
    dark:border-gray-600 dark:placeholder-gray-400"
        id="file_input"
        type="file"
        accept="image/*"
        aria-label="Choose file to upload"
      />

      <button
        disabled={isLoading}
        onClick={onSubmit}
        style={{ opacity: isLoading ? 0.5 : 1 }}
        className="w-full h-14 bg-green-600 text-white rounded-md"
        aria-label="Upload file"
      >
        {isLoading ? "جاري التحميل..." : "رفع"}
      </button>
    </div>
  );
}

export default UploaderForm;
