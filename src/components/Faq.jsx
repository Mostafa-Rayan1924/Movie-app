import { useState } from "react";
import MainTitle from "./MainTitle";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
const Faq = () => {
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  let h2 = "Frequently Asked Questions";
  let p =
    "Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.";
  return (
    <section className="pb-[150px]">
      <div className="container">
        <MainTitle h2={h2} p={p} />
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
            <Accordion
              className="pb-5 border-b border-[#e5000092]"
              open={open === 7}
              icon={<Icon id={7} open={open} />}>
              <AccordionHeader
                className="border-b-transparent  "
                onClick={() => handleOpen(7)}>
                <div className="flex gap-3 items-center">
                  <h3 className="bg-[#1F1F1F] border border-[#262626] py-3 px-5 rounded-lg">
                    01
                  </h3>
                  <h3>How can I watch StreamVibe?</h3>
                </div>
              </AccordionHeader>
              <AccordionBody>
                We&;re not always in the position that we want to be at. We&;re
                constantly growing. We&;re constantly making mistakes. We&;re
                constantly trying to express ourselves and actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion
              className="pb-5 border-b border-[#e5000092]"
              open={open === 1}
              icon={<Icon id={1} open={open} />}>
              <AccordionHeader
                className="border-b-transparent "
                onClick={() => handleOpen(1)}>
                <div className="flex gap-3">
                  <h3 className="bg-[#1F1F1F] border border-[#262626] py-3 px-5 rounded-lg">
                    02
                  </h3>
                  <h3>How do I contact StreamVibe customer support?</h3>
                </div>
              </AccordionHeader>
              <AccordionBody>
                We&;re not always in the position that we want to be at. We&;re
                constantly growing. We&;re constantly making mistakes. We&;re
                constantly trying to express ourselves and actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion
              className="pb-5 border-b border-[#e5000092]"
              open={open === 2}
              icon={<Icon id={2} open={open} />}>
              <AccordionHeader
                className="border-b-transparent"
                onClick={() => handleOpen(2)}>
                <div className="flex gap-3 items-center">
                  <h3 className="bg-[#1F1F1F] border border-[#262626] py-3 px-5 rounded-lg">
                    03
                  </h3>
                  <h3>How much does StreamVibe cost?</h3>
                </div>
              </AccordionHeader>
              <AccordionBody>
                We&;re not always in the position that we want to be at. We&;re
                constantly growing. We&;re constantly making mistakes. We&;re
                constantly trying to express ourselves and actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion
              className="pb-5 border-b border-[#e5000092]"
              open={open === 3}
              icon={<Icon id={3} open={open} />}>
              <AccordionHeader
                className="border-b-transparent"
                onClick={() => handleOpen(3)}>
                <div className="flex gap-3 items-center">
                  <h3 className="bg-[#1F1F1F] border border-[#262626] py-3 px-5 rounded-lg">
                    04
                  </h3>
                  <h3>What is the StreamVibe free trial?</h3>
                </div>
              </AccordionHeader>
              <AccordionBody>
                We&;re not always in the position that we want to be at. We&;re
                constantly growing. We&;re constantly making mistakes. We&;re
                constantly trying to express ourselves and actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion
              className="pb-5 border-b border-[#e5000092]"
              open={open === 4}
              icon={<Icon id={4} open={open} />}>
              <AccordionHeader
                className="border-b-transparent"
                onClick={() => handleOpen(4)}>
                <div className="flex gap-3 items-center">
                  <h3 className="bg-[#1F1F1F] border border-[#262626] py-3 px-5 rounded-lg">
                    05
                  </h3>
                  <h3>What content is available on StreamVibe?</h3>
                </div>
              </AccordionHeader>
              <AccordionBody>
                We&;re not always in the position that we want to be at. We&;re
                constantly growing. We&;re constantly making mistakes. We&;re
                constantly trying to express ourselves and actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion
              className="pb-5 border-b border-[#e5000092]"
              open={open === 5}
              icon={<Icon id={5} open={open} />}>
              <AccordionHeader
                className="border-b-transparent"
                onClick={() => handleOpen(5)}>
                <div className="flex gap-3 items-center">
                  <h3 className="bg-[#1F1F1F] border border-[#262626] py-3 px-5 rounded-lg">
                    06
                  </h3>
                  <h3>What are the StreamVibe payment methods?</h3>
                </div>
              </AccordionHeader>
              <AccordionBody>
                We&;re not always in the position that we want to be at. We&;re
                constantly growing. We&;re constantly making mistakes. We&;re
                constantly trying to express ourselves and actualize our dreams.
              </AccordionBody>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
