"use client";

interface SelectProps {
    onSelect : (value : string) => void ,
    options : {
        id : string,
        key : string,
        value : string;
    }[];
}
export const Select = ({ onSelect , options }: SelectProps ) => {
    return <select onChange={(e) => {
        onSelect(e.target.value)
    }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
        {options.map(option => <option key = {option.id} value={option.key}>{option.value}</option>)}
  </select>
}
