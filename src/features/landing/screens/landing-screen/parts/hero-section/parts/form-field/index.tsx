interface FormFieldProps {
  label: string
  placeholder: string
}

export function FormField({ label, placeholder }: FormFieldProps) {
  return (
    <div className="flex flex-1 flex-col gap-1.5">
      <label className="text-deep-brown text-sm font-medium">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="border-deep-brown/15 text-deep-brown placeholder:text-deep-brown/35 focus:border-warm-yellow w-full rounded-xl border-[1.5px] bg-transparent px-4 py-3 text-sm transition-colors outline-none"
      />
    </div>
  )
}
