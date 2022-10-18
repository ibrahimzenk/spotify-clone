import React from "react";
import { Icon } from "../../Icons";

function Search() {
  return (
    <div className="mr-auto ml-4 relative">
      <label htmlFor="search-input" className="text-black w-12 h-10 flex items-center justify-center absolute top-0 left-0">
        <Icon size={24} name="search" />
      </label>
      <input
        type="text"
        id="search-input"
        className="h-10 w-[22.75rem] max-w-full pl-12 bg-white text-black font-semibold placeholder-black/60 rounded-3xl outline-none"
        placeholder="Ne dinlemek istiyorsun?"
        autoFocus={true}
      />
    </div>
  );
}

export default Search;
