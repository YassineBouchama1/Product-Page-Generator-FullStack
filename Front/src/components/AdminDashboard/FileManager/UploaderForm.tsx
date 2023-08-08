"use client";
import UploaderFormHook from "@/components/AdminDashboard/FileManager/UploaderFormHook";
import useInsertFile from "@/components/AdminDashboard/FileManager/UploaderFormHook";

function UploaderForm() {
  const FormFinctions = UploaderFormHook();
  return (
    <>
      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        htmlFor="file_input"
      >
        رفع ملف
      </label>

      <input
        onChange={(e) => FormFinctions.setFile(e.target.files[0])}
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg 
cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 
dark:border-gray-600 dark:placeholder-gray-400"
        id="file_input"
        type="file"
      ></input>

      <button
        onClick={(e) => FormFinctions.onSubmit(e)}
        className="w-full h-14 bg-green-600 text-white rounded-md"
      >
        رفع
      </button>
    </>
  );
}

export default UploaderForm;
