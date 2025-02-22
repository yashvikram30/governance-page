"use client";

import * as React from "react";
import { Building2, Users2 } from "lucide-react";
import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

// Adding Building Works Committee data
const buildingWorksCommittee = [
  {
    id: 1,
    name: "Professor (Dr) Prem Lal Patel",
    position: "Chairman",
    details: ["Director, IIIT Nagpur"],
  },
  {
    id: 2,
    name: "Dr. Sachin V. Solanki",
    position: "Member",
    details: [
      "Joint Director, Technical Education Regional Office",
      "DTE, Nagpur",
    ],
  },
  {
    id: 3,
    name: "Dr. Praful Gharpure",
    position: "Member",
    details: [
      "Head (Infrastructure Planning & Development)",
      "Representative of TCS",
    ],
  },
  {
    id: 4,
    name: "Dr. Dilip Lataye",
    position: "Member",
    details: ["Prof. & HOD, Civil Engg. Dept.", "VNIT, Nagpur"],
  },
  {
    id: 5,
    name: "Mrs. Varsha Ghushe",
    position: "Member",
    details: [
      "Executive Engineer (Civil)",
      "Representative of Chief Engineer (Civil) PWD, Nagpur",
    ],
  },
  {
    id: 6,
    name: "Shri R.W. Banait",
    position: "Member",
    details: ["Asst. Superintending Engineer (Electrical)", "PWD, Nagpur"],
  },
  {
    id: 7,
    name: "Dr. Tausif Diwan",
    position: "Member",
    details: ["Associate Dean", "IIIT Nagpur"],
  },
  {
    id: 8,
    name: "Shri Kailas N. Dakhale",
    position: "Member Secretary",
    details: ["Registrar", "IIIT, Nagpur"],
  },
];

const boardOfGovernors = [
  {
    id: 1,
    name: "Shri Ravi Sharma",
    position: "Chairperson",
    details: [
      "(Additional Charge)",
      "Chairperson -BoG, IIIT, Una. HP",
      "President - IIT Alumni Council",
      "Chairman -Telecom Equipment Manufacturers Association of India (TEMA)",
      "Founder - Prama Jyoti Foundation / Mission Chetna / Subodhanand Foundation",
    ],
  },
  {
    id: 2,
    name: "Ms Saumya Gupta",
    position: "Member",
    details: ["JS (Technical Education), MoE, New Delhi"],
  },
  {
    id: 3,
    name: "Dr. Vinod Mohitkar",
    position: "Member",
    details: ["Director, DTE, Govt. of Maharashtra,Mumbai"],
  },
  {
    id: 4,
    name: "Shri Ajay R. Bohora",
    position: "Member",
    details: ["Co-Founder, HDFC Credila Financial Services, Nashik"],
  },
  {
    id: 5,
    name: "Dr. (Mrs). B. Padma S. Rao",
    position: "Member",
    details: [
      "Chief Scientist and Head Environmental Audit and Policy Implementation Div., CSIR-NEERI, Nagpur",
    ],
  },
  {
    id: 6,
    name: "Shri. V. Murlidharan",
    position: "Member",
    details: ["Founder & Managing Trustee", "Sevalaya, Chennai"],
  },
  {
    id: 7,
    name: "Prof Dr. Anupam Shukla",
    position: "Member",
    details: ["Director, SVNIT, Surat"],
  },
  {
    id: 8,
    name: "Prof. Dr. Rajendra Patrikar",
    position: "Member",
    details: ["Professor (Center of VLSI & Nanotechnology) VNIT, Nagpur"],
  },
  {
    id: 9,
    name: "Dr. Sachin Lodha",
    position: "Member",
    details: ["Chief Scientist", "Corporate Technology Office, TCS, Pune"],
  },
  {
    id: 10,
    name: "Professor (Dr.) Prem Lal Patel",
    position: "Member",
    details: ["Director", "VNIT, Nagpur"],
  },
  {
    id: 11,
    name: "Dr. Tausif Diwan",
    position: "Member",
    details: ["Associate Dean IIIT Nagpur"],
  },
  {
    id: 12,
    name: "Dr. Aatish Daryapurkar",
    position: "Member",
    details: ["Assistant Professor, IIIT Nagpur"],
  },
  {
    id: 13,
    name: "Professor (Dr) Prem Lal Patel",
    position: "Member",
    details: ["Director, IIIT Nagpur"],
  },
  {
    id: 14,
    name: "Shri Kailas N. Dakhale",
    position: "Member Secretary",
    details: ["Registrar, IIIT, Nagpur"],
  },
];

const financeCommittee = [
  {
    id: 1,
    name: "Shri Ravi Sharma",
    position: "Chairperson",
    details: [
      "(Additional Charge)",
      "Chairperson -BoG, IIIT, Una. HP",
      "President - IIT Alumni Council",
      "Chairman -Telecom Equipment Manufacturers Association of India (TEMA)",
      "Founder - Prama Jyoti Foundation / Mission Chetna / Subodhanand Foundation",
    ],
  },
  {
    id: 2,
    name: "Shri. N.S. Bisht",
    position: "Member",
    details: ["Dy. Secretary, IFD", "MOE, New Delhi"],
  },
  {
    id: 3,
    name: "Professor (Dr) Prem Lal Patel",
    position: "Member",
    details: ["Director, IIIT Nagpur"],
  },
  {
    id: 4,
    name: "Dr. Sachin Virsingh Solanki",
    position: "Member",
    details: [
      "Joint Director, Technical Education Regional Office",
      "DTE, Nagpur",
    ],
  },
  {
    id: 5,
    name: "Shri Piyush Agrawal",
    position: "Member",
    details: [
      "Services Delivery Leader",
      "Tata Consultancy Services Industry Partner",
    ],
  },
  {
    id: 6,
    name: "Shri Kailas N. Dakhale",
    position: "Member Secretary",
    details: ["Registrar, IIIT, Nagpur"],
  },
];

const senate = [
  {
    id: 1,
    name: "Professor (Dr) Prem Lal Patel",
    position: "Chairman",
    details: ["Director, IIIT Nagpur"],
  },
  {
    id: 2,
    name: "Dr A.G. Keskar",
    position: "Member",
    details: ["Professor VNIT, Nagpur"],
  },
  {
    id: 3,
    name: "Dr Arvind Kumar",
    position: "Member",
    details: ["(Centre Head)", "TATA Consultancy Services", "MIHAN, Nagpur"],
  },
  {
    id: 4,
    name: "Shri Bhaskar Sharma",
    position: "Member",
    details: ["TATA Consultancy Services", "MIHAN, Nagpur"],
  },
  {
    id: 5,
    name: "Dr. (Mrs) Aparajeeta Ojha",
    position: "Member",
    details: [
      "Professor (Department of Computer Science & Engineering)",
      "IIITDM, Jabalpur",
    ],
  },
  {
    id: 6,
    name: "Dr. (Ms) Pushpa Trivedi",
    position: "Member",
    details: [
      "Professor (Department of Humanities)",
      "Indian Institute of Technology, Bombay",
    ],
  },
  {
    id: 7,
    name: "Dr (Mrs) B. Padma S. Rao",
    position: "Member",
    details: [
      "Chief Scientist and Head Environmental Audit and Policy Implementation Division",
      "CSIR-NEERI, Nagpur",
    ],
  },
  {
    id: 8,
    name: "Dr. Tausif Diwan",
    position: "Member",
    details: ["Associate Dean", "IIIT Nagpur"],
  },
  {
    id: 9,
    name: "Dr. Nishat Afshan Ansari",
    position: "Member",
    details: ["HOD, CSE", "IIIT, Nagpur"],
  },
  {
    id: 10,
    name: "Dr. Harsh Goud",
    position: "Member",
    details: ["HOD, ECE", "IIIT, Nagpur"],
  },
  {
    id: 11,
    name: "Dr. Prasad Joshi",
    position: "Member",
    details: ["HOD, BS", "IIIT, Nagpur"],
  },
  {
    id: 12,
    name: "Shri Kailas N. Dakhale",
    position: "Member Secretary",
    details: ["Registrar", "IIIT, Nagpur"],
  },
];

export default function GovernancePage() {
  const [activeTab, setActiveTab] = React.useState("board");

  const renderContent = () => {
    switch (activeTab) {
      case "board":
        return (
          <CommitteeTable
            title="Board of Governors"
            date="As on Dt. 01/10/2024"
            members={boardOfGovernors}
          />
        );
      case "finance":
        return (
          <CommitteeTable
            title="Finance Committee"
            date="As on Dt. 01/10/2024"
            members={financeCommittee}
          />
        );
      case "senate":
        return (
          <CommitteeTable
            title="Senate"
            date="As on Dt. 01/10/2024"
            members={senate}
          />
        );
      case "building":
        return (
          <CommitteeTable
            title="Building Works Committee"
            date="As on Dt. 01/10/2024"
            members={buildingWorksCommittee}
          />
        );
      case "chairman":
        return <ChairmanProfile />;
      case "director":
        return <DirectorProfile />;
      case "registrar":
        return <RegistrarProfile />;
      case "staff":
        return <StaffDirectory />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto py-6 px-4 md:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Governance</h1>
        <p className="text-muted-foreground mt-2">
          Explore the organizational structure and leadership of our institution
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users2 className="h-5 w-5" />
              Committee
            </CardTitle>
          </CardHeader>
          <CardContent>
            <nav className="flex flex-col space-y-1">
              {[
                { id: "board", label: "Board Of Governors" },
                { id: "finance", label: "Finance Committee" },
                { id: "senate", label: "Senate" },
                { id: "building", label: "Building Works Committee" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`rounded-md px-3 py-2 text-sm font-medium text-left transition-colors ${
                    activeTab === item.id
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              Administration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <nav className="flex flex-col space-y-1">
              {[
                { id: "chairman", label: "Chairman" },
                { id: "director", label: "Director" },
                { id: "registrar", label: "Registrar" },
                { id: "staff", label: "Staff" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`rounded-md px-3 py-2 text-sm font-medium text-left transition-colors ${
                    activeTab === item.id
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <ScrollArea className="w-full">{renderContent()}</ScrollArea>
      </div>
    </div>
  );
}

function CommitteeTable({
  title,
  date,
  members,
}: {
  title: string;
  date: string;
  members: {
    id: number;
    name: string;
    position: string;
    details?: string[];
  }[];
}) {
  return (
    <Card>
      <CardHeader className="text-center bg-primary text-primary-foreground">
        <CardTitle className="text-xl md:text-2xl">
          {title}
          <div className="text-base font-normal mt-1">{date}</div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-3 text-left font-medium w-16">Sl. No</th>
                <th className="px-4 py-3 text-left font-medium">Names</th>
                <th className="px-4 py-3 text-left font-medium">Position</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr key={member.id} className="border-b last:border-0">
                  <td className="px-4 py-3 align-top text-center">
                    {member.id}
                  </td>
                  <td className="px-4 py-3">
                    <div className="font-medium">{member.name}</div>
                    {member.details && (
                      <div className="mt-1 text-sm text-muted-foreground">
                        {member.details.map((detail, index) => (
                          <div key={index}>{detail}</div>
                        ))}
                      </div>
                    )}
                  </td>
                  <td className="px-4 py-3 align-top">{member.position}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}

function ChairmanProfile() {
  return (
    <div>
      {/* Banner Section */}
      <section className="banner inner-page relative">
        <div className="banner-img img-responsive">
          <img
            src="https://iiitn.ac.in/images/pages/25/ImageBanner.jpg" // Replace with the appropriate banner image URL if available
            alt="Chairman Banner"
            className="w-full h-64 object-cover"
          />
        </div>
        <div className="page-title absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold text-white text-center">
            Administration - Chairman
          </h1>
        </div>
      </section>

      {/* Chairman Profile Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Chairman Details */}
          <div className="flex flex-col items-center p-6">
            <div className="relative w-full max-w-2xl aspect-[2000/900]">
              <Image
                src="/images/chairperson2.jpg"
                alt="Chairman Shri Ravi Sharma"
                className="w-full h-full object-cover rounded-lg shadow-md"
                width={10000}
                height={100}
              />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mt-6">Shri Ravi Sharma</h2>
            <p className="text-xl font-semibold text-gray-600">Chairman</p>
            <p className="text-lg text-gray-600">
              Indian Institute of Information Technology, Nagpur
            </p>
          </div>

          {/* Biography Section (if available) */}
          <div className="p-6 bg-gray-50">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Biography</h3>
            <div className="prose max-w-none text-gray-700">
              <p>
                Shri Ravi Sharma is the Chairman of the Indian Institute of Information
                Technology, Nagpur. With a distinguished career spanning several decades,
                he has made significant contributions to the fields of technology,
                education, and governance.
              </p>
              <p>
                His visionary leadership and commitment to excellence have been instrumental
                in shaping the growth and development of IIIT Nagpur. Under his guidance,
                the institute has achieved remarkable milestones in academic excellence,
                research, and innovation.
              </p>
              <p>
                Shri Ravi Sharma has held several key positions in both the public and
                private sectors, bringing a wealth of experience and expertise to his role
                as Chairman. His dedication to fostering collaboration between academia and
                industry has been pivotal in creating opportunities for students and
                faculty alike.
              </p>
              <p>
                He is a strong advocate for leveraging technology to address societal
                challenges and believes in the transformative power of education to drive
                progress and development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DirectorProfile() {
  return (
    <div>
      {/* Banner Section */}
      <section className="banner inner-page relative">
        <div className="banner-img img-responsive">
          <Image
            src="/images/banner.jpg"
            alt="Director Banner"
            className="w-full h-64 object-cover"
            width={10000}
            height={100}
          />
        </div>
        <div className="page-title absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold text-white text-center">
            Administration - Director
          </h1>
        </div>
      </section>

      {/* Director Profile Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Director Details */}
          <div className="flex flex-col md:flex-row gap-6 p-6">
            <div className="w-full md:w-48 h-48 mx-auto md:mx-0">
              <Image
                src="/images/director.jpg"
                alt="Director Dr. Prem Lal Patel"
                className="w-full h-full object-cover rounded-lg shadow-md"
                width={10000}
                height={100}
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-800">Dr. Prem Lal Patel</h2>
              <p className="text-xl font-semibold text-gray-600">Director</p>
              <p className="text-lg text-gray-600">
                Indian Institute of Information Technology, Nagpur
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-gray-700">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:director@iiitn.ac.in"
                    className="text-blue-600 hover:underline"
                  >
                    director@iiitn.ac.in
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Biography Section */}
          <div className="p-6 bg-gray-50">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Biography</h3>
            <div className="prose max-w-none text-gray-700">
              <p>
                Professor Prem Lal Patel, Director, VNIT, Nagpur took over the additional
                charge as Director of IIIT, Nagpur on 1<sup>st</sup> October, 2024. He is
                Professor (HAG) of Hydraulics and Water Resources in the Department of Civil
                Engineering, Sardar Vallabhbhai National Institute of Technology (SVNIT),
                Surat. He served as Deputy Director of the Institute (SVNIT) from September
                17, 2019, to September 16, 2022. He has also worked as Dean (PG), Dean
                (R&amp;C), Dean (Academic), and Head of the Department of Civil Engineering
                at SVNIT Surat.
              </p>
              <p>
                Prior to joining SVNIT in 2007, he served as Associate Professor in the
                Civil Engineering Department at Delhi College of Engineering (now DTU) for
                eight years. Before that, he worked as Assistant Executive Engineer (Civil)
                in the Border Roads Organization (BRO), Ministry of Road Transport and
                Highways of India, from 1995 to 1999.
              </p>
              <p>
                He completed his Bachelor&#39;s in Civil Engineering from Government
                Engineering College, Rewa, Madhya Pradesh, India, and pursued his Master&#39;s
                and Doctoral Degrees in Civil Engineering from the Indian Institute of
                Technology Roorkee, India (then University of Roorkee).
              </p>
              <p>
                His research areas include River Mechanics and Flood Control, Hydrological
                Modelling and Optimization of Water Systems, and the Impact of Climate
                Change on Water Resources Systems. He has guided 14 Doctoral Theses, 49
                Master Theses, and executed more than six high-value sponsored research
                projects and over 25 consultancy projects. He has published more than 260
                papers in peer-reviewed journals and conferences of repute.
              </p>
              <p>
                Prof. Patel is a member of various Technical Societies and Expert
                Committees. He has visited countries such as the United States of America,
                the Netherlands, China, Italy, Japan, and Dubai to present his research
                work. He was earlier part of the Climate Change Working Group of IAHR,
                dealing with Fluvial Mechanisms. He is also a Fellow member of the Indian
                Society for Hydraulics, the Indian Water Resources Society, and the
                Institution of Civil Engineers, India.
              </p>
              <p>
                Prof. Patel has been instrumental in setting up a Centre of Excellence (CoE)
                on Water Resources &amp; Flood Management at SVNIT Surat through a research
                grant from the World Bank-sponsored TEQIP-II.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RegistrarProfile() {
  return (
    <div>
      {/* Banner Section */}
      <section className="banner inner-page relative">
        <div className="banner-img img-responsive">
          <Image
            src="/images/banner.jpg"
            alt="Registrar Banner"
            className="w-full h-64 object-cover"
            width={10000}
            height={100}
          />
        </div>
        <div className="page-title absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold text-white text-center">
            Administration - Registrar
          </h1>
        </div>
      </section>

      {/* Registrar Profile Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Registrar Details */}
          <div className="flex flex-col md:flex-row gap-6 p-6">
            <div className="w-full md:w-40 h-48 mx-auto md:mx-0">
              <Image
                src="/images/registrar.jpg"
                alt="Registrar Shri Kailas N. Dakhale"
                className="w-full h-full object-cover rounded-lg shadow-md"
                width={10000}
                height={100}
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-800">Shri Kailas N. Dakhale</h2>
              <p className="text-xl font-semibold text-gray-600">Registrar</p>
              <p className="text-lg text-gray-600">
                Indian Institute of Information Technology, Nagpur
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-gray-700">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:registrar@iiitn.ac.in"
                    className="text-blue-600 hover:underline"
                  >
                    registrar@iiitn.ac.in
                  </a>
                </p>
                <p className="text-gray-700">
                  <strong>Contact:</strong> 9421995010
                </p>
              </div>
            </div>
          </div>

          {/* Profile Section */}
          <div className="p-6 bg-gray-50">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Profile</h3>
            <div className="prose max-w-none text-gray-700">
              <p>
                An engineer by education and an able Administrator with{" "}
                <strong>more than 30 Years</strong> of experience, Shri Kailas N. Dakhale
                has contributed to Central Autonomous Bodies (CABs) like Indian Institute of
                Technology, Kanpur, Visvesvaraya National Institute of Technology, Nagpur,
                and Indian Institute of Information Technology, Nagpur for the last two
                decades.
              </p>
              <p>
                He has vast experience in the administration of Higher Educational
                Institutions functioning under the Ministry of Education, Government of
                India. His expertise in identifying the crux of various issues related to
                Academic and Administrative Matters of Higher Educational Institutions and
                providing quick solutions has received accolades on numerous occasions.
              </p>
              <p>
                He has worked in Stores Purchase, Personnel Administration & Establishment,
                Estate Management, DOSA, Training & Placement, Hostel Management, Academic,
                and Examinations Departments of CABs and has handled all matters related to
                planning & execution of institute management policies, including liaising
                with Central/State Government Authorities and Industry.
              </p>
              <p>
                After serving IIT Kanpur for 14 Years in various Departments, Shri Kailas N.
                Dakhale left IIT as Deputy Registrar and joined VNIT, Nagpur, where he
                served as Joint Registrar. He was associated with VNIT for about 5 Years,
                during which he was recognized as an effective communicator with excellent
                relationship and interpersonal skills. He has also worked in Industry for
                about 7 years and has handled various matters related to Industrial Workers.
              </p>
              <p>
                <strong>
                  Later, he got associated with Indian Institute of Information Technology,
                  Nagpur as I/c Registrar and subsequently joined this “Institution of
                  National Importance” as Registrar with effect from 7<sup>th</sup> October
                  2020.
                </strong>
              </p>
              <p>
                He has also contributed and continues to contribute to the management of
                Higher Educational Institutions as a Member of various Selection
                Committees, Review Committees, and Scrutiny Committees of IIT Kanpur, IIT
                Jodhpur, IIT Gandhinagar, IISER Bhopal, IIPR Kanpur, Central University,
                Hyderabad, Central University, Sagar, Rajiv Gandhi Institute of Petroleum
                Technology (RGIPT), Amethi, Mahatma Gandhi Antarrashtriya Hindi
                VishwaVidyalaya Wardha, Central University of Rajasthan, SVNIT, Surat,
                MNLU, Nagpur, etc.
              </p>
              <p>
                Shri Kailas N. Dakhale has also contributed to the establishment of Indian
                Institute of Information Technology, Design & Manufacturing (IIITDM),
                Jabalpur, and Indian Institute of Technology (IIT), Jodhpur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StaffDirectory() {
  const departments = [
    {
      title: "प्रशासन विभाग Administration Department",
      staff: [
        {
          name: "श्री हर्षद पोफली / Mr. Harshad Pophali",
          designation: "विशेष कार्य अधिकारी / O S D",
          contact: "9373288110",
          email: "harshad.pophali@iiitn.ac.in",
        },
        {
          name: "श्री राजेश महादेवराव हक्के / Rajesh Mahadeorao Hakke",
          designation: "विशेष कार्य अधिकारी / O S D",
          contact: "9422802007",
          email: "osdrhakke@iiitn.ac.in",
        },
      ],
    },
    {
      title: "प्रशिक्षण एवं नियुक्ति / Training & Placement",
      staff: [
        {
          name: "डॉ मीरा सातव / Dr. Meera Satav",
          designation:
            "कनिष्ठ अधीक्षक (प्रशिक्षण एवं नियुक्ति) / Junior Superintendent (T & P)",
          contact: "9764490050",
          email: "meerajagdale@iiitn.ac.in, tnp@iiitn.ac.in",
        },
        {
          name: "डॉ महेश शुक्ला / Dr. Mahesh Shukla",
          designation: "अधिकारी (प्रशिक्षण एवं नियुक्ति) Officer (T & P)",
          contact: "9890070945",
          email: "otp@iiitn.ac.in",
        },
      ],
    },
    {
      title: "लेखा विभाग / Account Section",
      staff: [
        {
          name: "कु. शिल्पा मु. पावनकर / Ms. Shilpa Pawankar",
          designation: "सहायक कुलसचिव (लेखा) / Assistant Registrar (Accounts)",
          contact: "9730012925",
          email: "aracct@iiitn.ac.in",
        },
        {
          name: "श्रीमती माधुरी बोबडे / Mrs. Madhuri Bobade",
          designation: "कनिष्ठ अधिकारी (लेखा) / Junior Officer (Accounts)",
          contact: "9860538883",
          email: "jombobade@iiitn.ac.in",
        },
      ],
    },
    {
      title: "आंतरिक लेखापरीक्षा / Internal Audit",
      staff: [
        {
          name: "श्री तुषार निमकर / Mr. Tushar Nimkar",
          designation:
            "कनिष्ठ सहायक (आंतरिक लेखापरीक्षा) / Junior Assistant (Internal Audit)",
          contact: "8180843224",
          email: "jatrnimkar@iiitn.ac.in",
        },
      ],
    },
    {
      title: "तकनीकी अधिकारी / Technical Officer",
      staff: [
        {
          name: "श्री प्रितेश तिवारी / Mr. Pritesh Tiwari",
          designation: "तकनीकी अधिकारी / Technical Officer",
          contact: "9425786655",
          email: "to@iiitn.ac.in",
        },
      ],
    },
    {
      title: "सामान्य प्रशासनिक विभाग / General Administrative Section",
      staff: [
        {
          name: "श्री अविनाश सूर्यवंशी / Mr. Avinash Suryawanshi",
          designation: "विशेष कार्य सहयोगी अधिकारी / AOSD",
          contact: "9960206223",
          email: "aosd@iiitn.ac.in",
        },
        {
          name: "श्री अनिल पखिडडे / Mr. Anil Pakhidde",
          designation: "अधिकारी प्रशासन / Officer-Admin",
          contact: "9970217560",
          email: "oapakhidde@iiitn.ac.in",
        },
        {
          name: "श्री शशिकांत भोंगले / Mr. Shashikant Bhongale",
          designation:
            "कनिष्ठ अधीक्षक (छात्रावास) / Junior Superintendent (Hostel)",
          contact: "9049638115",
          email: "shashikant.bhongale@iiitn.ac.in",
        },
        {
          name: "श्री अभिषेक पालीवाल / Mr. Abhishek Paliwal",
          designation:
            "कनिष्ठ सहायक (प्रशासन) / Junior Assistant (Multi-Skilled) Admin",
          contact: "8275535335",
          email: "jaaspaliwal@iiitn.ac.in",
        },
        {
          name: "श्री रौनक मूंदड़ा / Mr. Raunak Mundada",
          designation:
            "कनिष्ठ सहायक (प्रशासन) / Junior Assistant (Multi-Skilled) Admin",
          contact: "8446573310",
          email: "jarmundada@iiitn.ac.in",
        },
        {
          name: "श्री मोहन उईके / Mr. Mohan Uikey",
          designation: "कनिष्ठ अधिकारी (प्रशासन) / Junior Officer (Admin)",
          contact: "7719043956",
          email: "jomsuikey@iiitn.ac.in",
        },
        {
          name: "कु. हर्षा नागपुरे / Ms. Harsha Nagpure",
          designation: "कनिष्ठ अधिकारी (प्रशासन) / Junior Officer (Admin)",
          contact: "9096927754",
          email: "johgnagpure@iiitn.ac.in",
        },
        {
          name: "श्री विकाश सिंह शेखावत / Mr. Vikash Singh Shekhawat",
          designation: "कनिष्ठ अधिकारी (प्रशासन) / Junior Officer (Admin)",
          contact: "7568783847",
          email: "jovshekhawat@iiitn.ac.in",
        },
        {
          name: "श्रीमती रूपवती जोगी / Mrs. Rupawati Jogi",
          designation: "कनिष्ठ अधिकारी (प्रशासन) / Junior Officer (Admin)",
          contact: "7020647537",
          email: "jorjogi@iiitn.ac.in",
        },
        {
          name: "श्री शुभम बुरडकर / Mr. Shubham Buradkar",
          designation: "कनिष्ठ अधिकारी (प्रशासन) / Junior Officer (Admin)",
          contact: "8805414194",
          email: "josburadkar@iiitn.ac.in",
        },
        {
          name: "श्री सुनील ढोले / Mr. Sunil Dhole",
          designation: "कनिष्ठ अधिकारी (प्रशासन) / Junior Officer (Admin)",
          contact: "7875721870",
          email: "instructor@iiitn.ac.in",
        },
        {
          name: "श्री पवन संजय कटरे / Mr. Pawan Sanjay Katre",
          designation: "कनिष्ठ अधिकारी (प्रशासन) / Junior Officer (Admin)",
          contact: "8390357486",
          email: "jopkatre@iiitn.ac.in",
        },
        {
          name: "श्री आकाश रामदासराव काकडे / Mr. Akash Ramdasrao Kakde",
          designation: "कनिष्ठ अधिकारी (प्रशासन) / Junior Officer (Admin)",
          contact: "8888984630",
          email: "joakakade@iiitn.ac.in",
        },
      ],
    },
    {
      title: "योग एवं खेल प्रशिक्षक / Yoga & Sports Instructor",
      staff: [
        {
          name: "श्री नीरज जोशी / Mr. Neeraj Joshi",
          designation:
            "शारीरिक प्रशिक्षण प्रशिक्षक / Physical Training Instructor",
          contact: "8668552321",
          email: "pti@iiitn.ac.in",
        },
      ],
    },
    {
      title: "इंजीनियर / Engineer's",
      staff: [
        {
          name: "श्री अशोक डोंगरे / Mr. Ashok Dongare",
          designation: "कनिष्ठ अभियंता (सिविल) / Junior Engineer (Civil)",
          contact: "9689009639",
          email: "jecivil@iiitn.ac.in",
        },
        {
          name: "श्री अजिंक्य भागवतकर / Mr. Ajinkya Bhagwatkar",
          designation: "कनिष्ठ अधिकारी (सिविल) / Junior Officer (Civil)",
          contact: "7770013155",
          email: "joabhagwatkar@iiitn.ac.in",
        },
        {
          name: "श्री अमित उपरे / Mr. Amit Upare",
          designation:
            "कनिष्ठ टेक्नीशियन (विद्युतीय) / Junior Engineer (Electrical)",
          contact: "7385723577",
          email: "jeahu@iiitn.ac.in",
        },
        {
          name: "श्री योगेश धानुरकर / Mr. Yogesh Dhanurkar",
          designation:
            "कनिष्ठ अधिकारी (विद्युतीय) / Junior Officer (Electrical)",
          contact: "8830522142",
          email: "joydhanurkar@iiitn.ac.in",
        },
      ],
    },
    {
      title: "पुस्तकालय / Library",
      staff: [
        {
          name: "श्री तुषार रंगारी / Mr. Tushar Rangari",
          designation: "कनिष्ठ अधिकारी (पुस्तकालय) / Junior Officer (Library)",
          contact: "7020479917",
          email: "oalibrary@iiitn.ac.in",
        },
      ],
    },
    {
      title: "परीक्षा विभाग / Exam Section",
      staff: [
        {
          name: "श्री समीर गुडधे / Mr. Sameer Gudadhe",
          designation: "कनिष्ठ अधिकारी (प्रशासन) / Junior Officer (Admin)",
          contact: "9049000178",
          email: "oa@iiitn.ac.in",
        },
        {
          name: "श्री सुरज शेंडोकार / Mr. Suraj Shendokar",
          designation:
            "कनिष्ठ सहायक (प्रशासन) / Junior Assistant (Multi-Skilled) Admin",
          contact: "7770030195",
          email: "jasuraj@iiitn.ac.in",
        },
        {
          name: "श्री निलोबा महाजन / Mr. Niloba Mahajan",
          designation:
            "कनिष्ठ सहायक (प्रशासन) / Junior Assistant (Multi-Skilled) Admin",
          contact: "8999296062",
          email: "janamahajan@iiitn.ac.in",
        },
      ],
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">Staff Directory</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Add the link to the PDF */}
        <div className="text-center mb-8">
          <p className="text-lg font-semibold">
            <span>Staff Directory PDF: </span>
            <a
              href="https://iiitn.ac.in/Downloads/Directory/Directory_2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Click Here
            </a>
          </p>
        </div>

        {/* Render the departments and staff tables */}
        <div className="space-y-8">
          {departments.map((department, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold bg-primary text-primary-foreground p-3 rounded-lg text-center">
                {department.title}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="px-4 py-2 text-left">
                        क्रमिक संख्या / Sr No.
                      </th>
                      <th className="px-4 py-2 text-left">नाम / Name</th>
                      <th className="px-4 py-2 text-left">पद / Designation</th>
                      <th className="px-4 py-2 text-left">
                        मोबाइल नंबर / Contact
                      </th>
                      <th className="px-4 py-2 text-left">ईमेल आईडी / Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {department.staff.map((member, idx) => (
                      <tr key={idx} className="border-b">
                        <td className="px-4 py-2">{idx + 1}</td>
                        <td className="px-4 py-2">{member.name}</td>
                        <td className="px-4 py-2">{member.designation}</td>
                        <td className="px-4 py-2">{member.contact}</td>
                        <td className="px-4 py-2">{member.email}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
