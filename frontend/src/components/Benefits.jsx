import React from "react";
import CheckSvg from "./Svgs/Check";

const Benefits = () => {
  const benefits = [
    {
      heading: "Convenience",
      des: "Patients can easily book appointments with doctors from the comfort of their homes or on the go.",
    },
    {
      heading: "Access to Specialists",
      des: "Provides access to a wide range of medical specialists, ensuring patients find the right doctor for their needs.",
    },
    {
      heading: "Time Efficiency",
      des: "Saves time by eliminating the need for long phone calls or waiting at the doctor's office.",
    },
    {
      heading: "Appointment Reminders",
      des: "Sends appointment reminders to help patients and doctors stay organized.",
    },
    {
      heading: "Flexible Scheduling",
      des: "Allows patients to schedule appointments at their convenience.",
    },
    {
      heading: "Transparency",
      des: "Offers transparency with doctor profiles, reviews, and ratings for informed decision-making.",
    },
    {
      heading: "Reduced No-Shows",
      des: "Helps reduce missed appointments through reminders and confirmations.",
    },
    {
      heading: "Improved Health",
      des: "Encourages regular check-ups and timely medical attention, contributing to better health outcomes.",
    },
    {
      heading: "Easy Rescheduling",
      des: "Facilitates rescheduling in case of conflicts or emergencies.",
    },
    {
      heading: "Secure Data",
      des: "Ensures the security of patient data and compliance with data protection regulations.",
    },
    {
      heading: "Healthcare Access",
      des: "Expands healthcare access, especially for those with limited mobility.",
    },
    {
      heading: "Time and Cost Savings",
      des: "Minimizes the hassle of traditional appointment booking and reduces unnecessary medical expenses.",
    },
    {
      heading: "Patient Empowerment",
      des: "Empowers patients to take control of their healthcare decisions.",
    },
    {
      heading: "Doctor Efficiency",
      des: "Enhances the efficiency of medical practices by managing appointments more effectively.",
    },
    {
      heading: "Streamlined Workflow",
      des: "Offers a streamlined workflow for both patients and medical professionals.",
    },
    {
      heading: "User-Friendly",
      des: "Provides a user-friendly interface for a seamless experience.",
    },
    {
      heading: "Feedback Loop",
      des: "Allows patients to provide feedback, enhancing the quality of medical services.",
    },
    {
      heading: "Improved Patient Experience",
      des: "Focuses on improving the overall patient experience.",
    },
    {
      heading: "Regulatory Compliance",
      des: "Ensures compliance with healthcare and data protection regulations.",
    },
    {
      heading: "24/7 Availability",
      des: "Allows appointment booking at any time, accommodating varied schedules.",
    },
    {
      heading: "Community Building",
      des: "Fosters a sense of community among patients and healthcare providers.",
    },
    {
      heading: "Patient Education",
      des: "Offers health-related resources and information to educate patients.",
    },
  ];

  // You can access the benefits array to display these benefits on your website.

  return (
    <section class="bg-white bg-gradient-to-r from-yellow-50 to-slate-200 pt-10">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16">
        <div class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-blue-900">
          Key Benefits of Our Service
        </div>
        {benefits?.map((el, index) => (
          <div className="flex gap-4 pt-3">
            <div>
              <CheckSvg />
            </div>
            <div className="flex gap-2">
              <p className="font-bold text-base">{el.heading} :- </p>
              <span className="text-sm">{el.des}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
