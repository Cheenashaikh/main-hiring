import React from "react";
import CommonHeading from "../CommonHeading";
import "../../../styles/policies.css"; 

export default function Policies() {
  const policyDetails = [
    {
      title: "Service Agreement and Terms of Use",
      points: [
        "Service Quality Standards: Our platform requires that all service providers meet minimum standards for service delivery. This includes professional behavior, punctuality, and quality of service.",
        "Liability: In cases of property damage, accidents, or other service failures, our platform may not be held responsible unless specified in the service agreement. Clients are advised to verify the credentials of service providers before hiring.",
        "Compliance with Local Laws: We adhere to all employment laws and regulations in the jurisdictions where our platform operates. All workers are expected to comply with relevant local laws regarding employment, tax, and safety."
      ],
    },
    {
      title: "Theft and Incident Policy",
      points: [
        "Reporting Incidents: Clients must report any incidents of theft or suspicious activity immediately through our official support channels. Timely reporting ensures a swift resolution.",
        "Investigation Process: Once a report is filed, we will conduct a thorough investigation in collaboration with local authorities if necessary. All parties involved are expected to cooperate fully during the investigation.",
        "Liability and Accountability: If a worker is found guilty of theft, they will be permanently removed from the platform. Any relevant information about the incident may be shared with law enforcement. We encourage clients to take appropriate legal actions if necessary.",
        "Prevention Measures: We conduct rigorous background checks for all workers, and we strive to provide reliable and trustworthy services. However, clients are advised to take their own security precautions, such as monitoring workers during visits and securing valuable items."
      ],
    },
    {
      title: "Policy on Personal Belongings",
      points: [
        "Workers must handle the personal belongings of clients with care and respect. Unauthorized use or borrowing of personal items is strictly prohibited. Any violations of this policy will lead to disciplinary action."
      ],
    },
    {
      title: "Policy on Privacy and Confidentiality",
      points: [
        "Workers should maintain strict confidentiality about client information, including addresses, personal details, and any private discussions. Disclosure of such information to unauthorized parties is forbidden and may result in termination of employment."
      ],
    },
    {
      title: "Policy on Health and Safety",
      points: [
        "The use of cleaning chemicals should be handled according to safety guidelines. Workers must follow safety protocols, including safe lifting practices, handling equipment properly, and ensuring a clean and hazard-free working environment."
      ],
    },
    {
      title: "Policy on Working Hours and Overtime",
      points: [
        "Workers must adhere to the standard working hours as specified in their contract. Overtime is allowed only with prior approval from the management. Overtime compensation will be provided as agreed in the worker's contract."
      ],
    },
    {
      title: "Policy on Uniforms and Identification",
      points: [
        "Workers are required to wear the company uniform and display identification badges while in a client’s home. This helps clients easily identify workers and maintains security. Failure to wear the uniform and identification badge will result in disciplinary action."
      ],
    },
    {
      title: "Policy on Client Feedback and Dispute Resolution",
      points: [
        "To address client concerns, a designated contact person should be available to receive feedback and resolve disputes. A clear process for handling complaints, including escalation procedures, should be provided to clients. If an issue cannot be resolved through the standard procedure, the matter will be escalated to higher management for resolution."
      ],
    },
  ];

  return (
    <div className="policies-container py-5">
      <div className="policies-inner-container">
        <CommonHeading heading="MAID HIRING" title="Policies" />
        <div className="row g-4 policies-row">
          {policyDetails.map((policy, index) => (
            <div className="col-12" key={index}>
              <div className="policies-card">
                <h2 className="policies-card-title text-primary">{policy.title}</h2>
                <ul className="policies-card-list mb-0">
                  {policy.points.map((point, idx) => (
                    <li key={idx} className="policies-card-item mb-2">
                      <strong>{point.split(":")[0]}:</strong> {point.split(":")[1]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


