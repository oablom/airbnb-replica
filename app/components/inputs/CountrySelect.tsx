"use client";

import Select from "react-select";
import useCountries from "@/app/hooks/useCountries";
import Flag from "react-world-flags";

export type CountrySelectValue = {
  flag: string;
  label: string;
  latlng: number[];
  region: string;
  value: string;
};

interface CountrySelectProps {
  value?: CountrySelectValue;
  onChange: (value: CountrySelectValue) => void;
}

const CountrySelect: React.FC<CountrySelectProps> = ({ value, onChange }) => {
  const { getAll } = useCountries();
  return (
    <div>
      <Select
        placeholder="Anywhere"
        isClearable
        options={getAll()}
        value={value}
        onChange={(value) => onChange(value as CountrySelectValue)}
        formatOptionLabel={(option: any) => (
          <div className="flex flex-row items-center gap-3 z-10">
            <Flag code={option.value} style={{ width: "1em", height: "1em" }} />
            <div>
              {option.label}
              <span className="text-neutral-500 ml-1">{option.region}</span>
            </div>
          </div>
        )}
        classNames={{
          control: () => `p-3 border-2`,
          input: () => `text-lg`,
          option: () => `text-lg`,
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary25: "#ffe4e6",
            primary: "black",
          },
        })}
      />
    </div>
  );
};
export default CountrySelect;
