// src/components/FileUpload.jsx
import { useRef } from "react";
import * as XLSX from "xlsx";

const FileUpload = ({ onUpload }) => {
  const fileInput = useRef(null);

  const handleFile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
      onUpload(data);
    };

    reader.readAsBinaryString(file);
  };

  return (
    <div className="file-upload">
      <input
        type="file"
        accept=".xlsx, .xls"
        onChange={handleFile}
        ref={fileInput}
        hidden
      />
      <button onClick={() => fileInput.current.click()}>
        📁 Upload New File
      </button>
    </div>
  );
};

export default FileUpload;
