"use client";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is this platform?",
      answer:
        "This platform helps people create and manage fundraising campaigns for different social causes.",
    },
    {
      question: "How can I create a campaign?",
      answer:
        "After logging in, go to the Add Campaign page, fill out the form, and submit your campaign.",
    },
    {
      question: "Who can manage campaigns?",
      answer:
        "Organizers and admins can manage campaigns from the Manage Campaigns page.",
    },
    {
      question: "Can I update my profile?",
      answer:
        "Yes, you can update your profile information from the My Profile page.",
    },
    {
      question: "Is my information secure?",
      answer: "Yes, user information is securely stored and protected.",
    },
  ];
  return (
    <section className="max-w-4xl mx-auto text-center my-6">
      <div className="text-center my-4">
        <h2 className="text-secondary text-2xl md:text-4xl font-bold">
          Frequently Asked Questions
        </h2>
        <p className="text-accent-content md:font-bold my-2">
          Become part of a community dedicated to helping others.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            tabIndex={0}
            className="collapse collapse-arrow bg-base-100 border-base-300 border"
          >
            <div className="collapse-title font-semibold after:start-5 after:end-auto pe-4 ps-12">
              {faq.question}
            </div>
            <div className="collapse-content text-sm">{faq.answer}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
