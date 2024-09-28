import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question:
      "I Have Submitted My Application, Is Documents Verification At Facilitation Centre Is Necessary?",
    answer:
      "Yes, without documents verification at Facilitation Centre created by J&K and Ladakh Government, students are not eligible for Scholarship. Further the choice filling option will not be opened for the respective candidate.",
  },
  {
    question:
      "Is Attending Online Counseling Mandatory For Eligible Students For Availing Benefits Under PMSSS?",
    answer:
      "Yes, it is mandatory for all the students to attend the online counseling process or want to take admission on/her own for General/Professional/Engineering stream courses subject to Methodology available on the AICTE website, for availing benefits under the scheme PMSSS. For Medical students NEET counseling for availing benefits under the scheme PMSSS. For B.Sc.(Nursing) students, NEET is also mandatory wherever applicable",
  },
  {
    question:
      "I Have Submitted My Online Application For PMSSS Scholarship. Is It Possible To Edit My Application?",
    answer:
      "Yes, officer of Facilitation Centre can only edit the online application form, subject to the production of original documents in support of your claim/request for editing.",
  },
  {
    question:
      "I Am An Eligible Candidate For PMSSS Scholarship. How Can I Apply For Registration Of This Scholarship?",
    answer:
      "Log on to AICTE Website and follow the Steps to apply for “Online Registration for scholarship” and follow the instructions on how to fill the online application. Step 1: Open AICTE Website via link : https://www.aicte-india.org/bureaus/jk Step 2: Go to PMSSS tab on the home page. Step 3: Further click on the tab of A/Y 2022-23 and register yourself by following the instructions.",
  },
  {
    question:
      "What Format Or Size Of Photo And Signature To Upload In Website For PMSSS Scholarship?",
    answer:
      "Both photo & signature should be in .JPG /.PDF/.PNG format with size of the file should be less than 2 MB.",
  },
  {
    question:
      "Is It Necessary To Submit Separate Online Application For General & Engineering Course?",
    answer:
      "Candidates are required to select “Both” option from the dropdown menu under “Stream applied for” field, if they want to apply for both General & Engineering Stream under J&K PMSSS while submitting online application. The candidate need to fill only one application form.",
  },
  {
    question:
      "I Have Filled & Submitted My Online Application Form. What Should I Do Next?",
    answer:
      "Take printout of online filled application and visit your nearest facilitation centre along with original documents & one set of self-attested photocopies of all original documents for verification. The details are given in AICTE website.",
  },
  {
    question:
      "To Which Facilitation Centre Should I Go For Document Verification?",
    answer:
      "You can go to any one of the nearest facilitation centers established by Govt. of UTs of Jammu & Kashmir and Ladakh as per your convenience for document verification and after that choice filling option would be open. (List of Facilitation Centers is available at AICTE Website).",
  },
  {
    question:
      "Is There Any Document I Should Collect From Facilitation Centre After Document Verification process?",
    answer:
      "Yes, you must collect document verification report (Student Copy) from the facilitation centre without fail.",
  },
  {
    question:
      "Is It Necessary For Me To Submit Original Documents To The Facilitation Centre After The Document verification?",
    answer:
      "No original documents are to be submitted in the facilitation centers. However, you have to show all the original documents to the Nodal Officer for verification.",
  },
  {
    question:
      "Is There Any Helpline No./E-Mail/Grievance Mechanism For PMSSS Scholarship Queries?",
    answer:
      "Yes, you may call on 011-29581043/07/51/10 (from 9.30 am to 5.00 pm Monday to Friday) or email at jkadmission2022@aicte-india.org on all working days for any queries. You can also register your grievance from your login to get the resolution for your query.",
  },
  {
    question:
      "I Am Not Able To Register Under PMSSS Scholarship And Facing Technical Issue?",
    answer:
      "Any technical issue at the time of registration you may email at itpmsss@aicte- india.org, it2pmsss@aicte-india.org",
  },
  {
    question:
      "I Have Done Diploma In Engineering Field, Can I Apply Under PMSSS?",
    answer:
      "Yes, Candidates who want to take admission under Lateral Entry Scheme have passed Diploma in Engineering from the Polytechnics recognized by UTs of Jammu & Kashmir and Ladakh directorate of technical education not earlier than AY 2020-21. Admission under LateralEntry Scheme will be subject to vacant seats available during academic year 2021-22 in Engineering Stream only.",
  },
  {
    question:
      "I Wish To Pursue My Studies In IIT/NIT/Institute Of National Importance/Centrally Funded Institutions Programs/Courses On My Own Without Participating In J&K PMSSS Counseling Process 2022-23, Am I Eligible For PMSSS Scholarship?",
    answer:
      "Students who qualify entrance examination conducted by Central Govt. (NEET/JEE) are eligible for scholarships, if they have registered themselves under PMSSS scheme. Candidates are required to get their documents verified by nearest Facilitation Center.",
  },
  {
    question:
      " I Wish To Pursue My Studies In Architecture Course On My Own Without Participating In J&K PMSSS Counseling Process 2022-23. Am I Eligible For J&K PMSSS Scholarship?",
    answer:
      "Students taking the Architecture course are required to qualify for the NATA examination and register themselves under PMSSS scheme. Candidates are required to get their documents verified by Facilitation Center.",
  },
  {
    question:
      "I Have Taken Admission Under Management Quota, Am I Eligible For PMSSS Scholarship?",
    answer:
      "No, Candidates taking admission under Management Quota or by Agents / NGO are not eligible for PMSSS Scholarship.",
  },
  {
    question: "When And How Do I Have To Upload My Joining Report?",
    answer:
      "After freezing the seat, candidate is required to report to the allotted college immediately and upload the joining report from his/her PMSSS Login Portal within stipulated time period. Also complete admission process as per Institute/University rules.",
  },
  {
    question: "Where To Check The Details Of My Nodal Officer?",
    answer:
      "Candidate can check the details of the Nodal Officer either on the Welcome Letter of the Institute or in their Login",
  },
];

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="pt-6">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base font-semibold leading-7">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon
                        aria-hidden="true"
                        className="h-6 w-6 group-data-[open]:hidden"
                      />
                      <MinusSmallIcon
                        aria-hidden="true"
                        className="h-6 w-6 [.group:not([data-open])_&]:hidden"
                      />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base leading-7 text-gray-600">
                    {faq.answer}
                  </p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
