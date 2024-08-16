import React from "react";

export default function HelpPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-12">
      <h1 className="section-title">Need Help?</h1>
      <p className="section-description">
        Reach out to us and we&apos;ll get back to you within 3 working days.
      </p>
      <form className="bg-blue flex flex-col gap-6 rounded-xl bg-zinc-200 p-8">
        <div className="flex flex-col">
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" id="firstName" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" id="lastName" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            minLength={5}
            maxLength={40}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="enquiry">Enquiry</label>
          <textarea name="enquiry" id="enquiry" />
        </div>
      </form>
    </div>
  );
}
