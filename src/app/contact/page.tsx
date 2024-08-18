export default function HelpPage() {
  return (
    <div className="flex flex-col items-center justify-center rounded-b-3xl rounded-t-3xl bg-white p-12">
      <h1 className="section-title">Need Help?</h1>
      <p className="section-description">
        Reach out to us and we&apos;ll get back to you within 3 working days.
        All fields are required to be filled.
      </p>

      <form
        action="sendContactEnquiry"
        className="bg-blue flex w-full max-w-md flex-col gap-6 rounded-xl bg-zinc-200 p-8"
      >
        <div className="flex flex-col">
          <label htmlFor="firstName" className="mb-1">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="rounded-2xl p-2"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="lastName" className="mb-1">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="rounded-2xl p-2"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            minLength={5}
            maxLength={40}
            className="rounded-2xl p-2"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="enquiry" className="mb-1">
            Enquiry
          </label>
          <textarea
            name="enquiry"
            id="enquiry"
            className="h-32 rounded-2xl p-2"
            required
          />
        </div>

        <button type="submit" className="rounded bg-black p-2 text-white">
          Send
        </button>
      </form>
    </div>
  );
}
