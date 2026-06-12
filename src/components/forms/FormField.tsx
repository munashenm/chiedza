import { cn } from "@/lib/utils";

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  as?: "input" | "textarea" | "select";
  options?: { value: string; label: string }[];
  rows?: number;
  className?: string;
}

export function FormField({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
  as = "input",
  options,
  rows = 4,
  className,
}: FormFieldProps) {
  const baseClass =
    "w-full px-4 py-3 rounded-sm border border-navy-900/15 bg-white text-navy-900 text-sm placeholder:text-navy-400 transition-colors";

  return (
    <div className={cn("space-y-2", className)}>
      <label htmlFor={name} className="block text-sm font-medium text-navy-800">
        {label}
        {required && <span className="text-gold-500 ml-1">*</span>}
      </label>
      {as === "textarea" ? (
        <textarea
          id={name}
          name={name}
          required={required}
          placeholder={placeholder}
          rows={rows}
          className={baseClass}
        />
      ) : as === "select" ? (
        <select
          id={name}
          name={name}
          required={required}
          className={baseClass}
          defaultValue=""
        >
          <option value="" disabled>
            {placeholder || "Select an option"}
          </option>
          {options?.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={baseClass}
        />
      )}
    </div>
  );
}
