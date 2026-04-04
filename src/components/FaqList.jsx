import { useState } from "react";
import { Plus } from "lucide-react";

const FAQS = [
  {
    question: "How long does a custom build take?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quia dolores. Quia, quos. Quibusdam, quae. Quo, quod. Quisquam, quia.",
  },
  {
    question: "How long does a custom build take?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quia dolores. Quia, quos. Quibusdam, quae. Quo, quod. Quisquam, quia.",
  },
  {
    question: "How long does a custom build take?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quia dolores. Quia, quos. Quibusdam, quae. Quo, quod. Quisquam, quia.",
  },
];

const FaqList = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-28 px-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <p className="section-label">Know Before You Buy</p>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>
        <dl className="divide-y divide-lightbrown">
          {FAQS.map((faq, index) => (
            <div key={index} className="py-5">
              <dt>
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center cursor-pointer font-semibold text-lg text-darkbrown/70 hover:text-darkbrown"
                >
                  <span>{faq.question}</span>
                  <Plus
                    size={16}
                    className={`transition duration-150 ease-in-out ${openIndex === index ? "rotate-45" : "rotate-0"}`}
                  />
                </button>
              </dt>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-gray-500">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default FaqList;
