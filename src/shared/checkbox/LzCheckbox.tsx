import { CheckedIcon, DisabledCheckIcon } from "@/icon";
import { useState } from "react";

const LzCheckbox = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
        className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
      />
      <label className="ml-2 text-sm text-gray-700">Check me!</label>
      <span className="ml-2">
        {checked ? <CheckedIcon /> : <DisabledCheckIcon />}
      </span>
    </div>
  );
};

export default LzCheckbox;
