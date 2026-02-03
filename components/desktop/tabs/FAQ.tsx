import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const content = [
    {
      question: "What's the buzz about DoubleSlash 4.0?",
      answer: "DoubleSlash 4.0 is a 36-hour hackathon where innovation meets commitment. It's your chance to push your coding skills beyond limit and create something extraordinary."
    },
    {
      question: "Do I need to be a coding genius to join?",
      answer: "Nope! If you've got a spark of creativity, that's all you need. Whether you're a coding legend or a novice, there's a place for you to shine at DoubleSlash 4.0!"
    },
    {
      question: "Can I join solo or do I need a team?",
      answer: "Coding is cool, but teamwork and great ideas are what steal the show. If you're flying solo, team up with 1-2 others and make your brilliance shine together!"
    },
    {
      question: "What if my idea flops or I get stuck?",
      answer: "That's where mentors come in! They'll guide you past any roadblocks and help refine your ideas. And remember—failure is just a pit stop on the road to innovation. Take risks and go wild!"
    },
    {
      question: "What's in it for the winners and participants?",
      answer: "Winners walk away with epic prizes, exclusive swag, and certificates! But every participant gets certificates, hands-on experience, networking with industry leaders, and a chance to flaunt your skills to recruiters."
    },
    {
      question: "Is it paid? Be honest—we're engineers.",
      answer: "Zero. Zip. Zilch. Nada. Nothing! Registration for DoubleSlash 4.0 is completely free for all students. Go ahead, join the fun!"
    },
    {
      question: "Do my teammates have to be from the same college, year or department?",
      answer: "Not necessarily. You can team up with anyone from any college, year or department. The more diverse your team, the more innovative your ideas!"
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="h-full p-4">
      <div className="max-w-3xl mx-auto pb-6">
        <h1 className="text-4xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h1>
        <div className="space-y-4">
          {content.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-sm"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center gap-4 transition-colors bg-black/15 hover:bg-black/30 border-b border-b-black/70"
              >
                <span className="text-xl leading-none font-medium pr-8">
                  {item.question}
                </span>
                <ChevronDown size={20} />
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out bg-black/10 ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 py-4 leading-none">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}