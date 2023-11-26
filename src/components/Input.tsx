

type InputProps = {
  id: string;
  label: string;
  name: string;
  required?: boolean;
  type: string;
};

export default function Input({
  id,
  label,
  name,
  required = false,
  type,
}: InputProps) {

  return (
    <div className="relative mb-6" data-te-input-wrapper-init>
      <input
        className="
        block
        rounded
        px-6
        pt-6
        pb-1
        w-full
        text-md
      text-white
      bg-neutral-700
        appearance-none
        focus:outline-none
        focus:ring-0
        peer
        invalid:border-b-1
        "
        placeholder=" "
        type={type}
        name={name}
        id={id}
        required={required}
        min={0}
        
      />
      <label
        // for="exampleInput7"
        htmlFor={id}
        className="
        absolute 
        text-md
      text-zinc-400
        duration-150 
        transform 
        -translate-y-3 
        scale-75 
        top-4 
        z-10 
        origin-[0] 
        left-6
        peer-placeholder-shown:scale-100 
        peer-placeholder-shown:translate-y-0 
        peer-focus:scale-75
        peer-focus:-translate-y-3
      "
      >
        {label}
      </label>
    </div>
  );
}
