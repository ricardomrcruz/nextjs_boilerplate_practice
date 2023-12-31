type TextAreaProps = {
  id: string;
  label: string;
  name: string;
  required?: boolean;
};

export default function TextArea({
  id,
  label,
  name,
  required = false,
}: TextAreaProps) {
  return (
    <div className="relative mb-6" data-te-input-wrapper-init>
      <textarea
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
        rows={5}
        placeholder=" "
        name={name}
        id={id}
        required={required}
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
