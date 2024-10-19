import * as React from "react";

import { cn } from "@/lib/utils";
import { X } from "lucide-react";

const SearchInput = React.forwardRef(({ className, onClear, icon, type, ...props }, ref) => {
  return (
    <div className="relative flex items-center">
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 pr-7 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0082C8]focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
          className
        )}
        ref={ref}
        {...props}
      />
      {icon && <X className="cursor-pointer absolute right-3 text-slate-400 w-4" onClick={onClear} />}
    </div>
  );
});
SearchInput.displayName = "SearchInput";

export { SearchInput };
