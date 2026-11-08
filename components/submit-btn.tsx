import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-busy={pending}
      className="button-primary w-fit disabled:cursor-not-allowed disabled:opacity-65"
      disabled={pending}
    >
      {pending ? (
        <>
          <span
            aria-hidden="true"
            className="h-5 w-5 animate-spin rounded-full border-b-2 border-current"
          />
          <span>Sending…</span>
        </>
      ) : (
        <>
          Send message
          <FaPaperPlane aria-hidden="true" className="text-xs" />
        </>
      )}
    </button>
  );
}
