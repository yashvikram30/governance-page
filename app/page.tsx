"use client"

import * as React from "react"
import { Building2, Users2 } from "lucide-react"
import Image from "next/image"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

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
    details: ["Joint Director, Technical Education Regional Office", "DTE, Nagpur"],
  },
  {
    id: 3,
    name: "Dr. Praful Gharpure",
    position: "Member",
    details: ["Head (Infrastructure Planning & Development)", "Representative of TCS"],
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
    details: ["Executive Engineer (Civil)", "Representative of Chief Engineer (Civil) PWD, Nagpur"],
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
]

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
    details: ["Chief Scientist and Head Environmental Audit and Policy Implementation Div., CSIR-NEERI, Nagpur"],
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
]

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
    details: ["Joint Director, Technical Education Regional Office", "DTE, Nagpur"],
  },
  {
    id: 5,
    name: "Shri Piyush Agrawal",
    position: "Member",
    details: ["Services Delivery Leader", "Tata Consultancy Services Industry Partner"],
  },
  {
    id: 6,
    name: "Shri Kailas N. Dakhale",
    position: "Member Secretary",
    details: ["Registrar, IIIT, Nagpur"],
  },
]

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
    details: ["Professor (Department of Computer Science & Engineering)", "IIITDM, Jabalpur"],
  },
  {
    id: 6,
    name: "Dr. (Ms) Pushpa Trivedi",
    position: "Member",
    details: ["Professor (Department of Humanities)", "Indian Institute of Technology, Bombay"],
  },
  {
    id: 7,
    name: "Dr (Mrs) B. Padma S. Rao",
    position: "Member",
    details: ["Chief Scientist and Head Environmental Audit and Policy Implementation Division", "CSIR-NEERI, Nagpur"],
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
]

export default function GovernancePage() {
  const [activeTab, setActiveTab] = React.useState("board")

  const renderContent = () => {
    switch (activeTab) {
      case "board":
        return <CommitteeTable title="Board of Governors" date="As on Dt. 01/10/2024" members={boardOfGovernors} />
      case "finance":
        return <CommitteeTable title="Finance Committee" date="As on Dt. 01/10/2024" members={financeCommittee} />
      case "senate":
        return <CommitteeTable title="Senate" date="As on Dt. 01/10/2024" members={senate} />
      case "building":
        return (
          <CommitteeTable
            title="Building Works Committee"
            date="As on Dt. 01/10/2024"
            members={buildingWorksCommittee}
          />
        )
      case "chairman":
        return <ChairmanProfile />
      case "director":
        return <DirectorProfile />
      case "registrar":
        return <RegistrarProfile />
      case "staff":
        return <StaffDirectory />
      default:
        return null
    }
  }

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
                    activeTab === item.id ? "bg-primary text-primary-foreground" : "hover:bg-muted"
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
                    activeTab === item.id ? "bg-primary text-primary-foreground" : "hover:bg-muted"
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
  )
}

function CommitteeTable({
  title,
  date,
  members,
}: {
  title: string
  date: string
  members: {
    id: number
    name: string
    position: string
    details?: string[]
  }[]
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
                  <td className="px-4 py-3 align-top text-center">{member.id}</td>
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
  )
}

function ChairmanProfile() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">Chairman</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        <div className="relative w-full max-w-2xl aspect-[2000/900]">
          <Image
            src="/images/Shri Ravi Sharma.jpg"
            alt="Chairman Shri Ravi Sharma"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <h2 className="text-2xl font-bold">Shri Ravi Sharma</h2>
      </CardContent>
    </Card>
  )
}

function DirectorProfile() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">Director</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="relative w-48 h-48 mx-auto md:mx-0">
            <Image
              src="/images/director.jpg"
              alt="Director Dr. Prem Lal Patel"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Dr. Prem Lal Patel</h2>
            <p className="text-lg font-semibold">Director</p>
            <p>Indian Institute of Information Technology, Nagpur</p>
            <p className="mt-2">
              <strong>Email:</strong> director@iiitn.ac.in
            </p>
          </div>
        </div>
        <div className="prose max-w-none">
          <p>
            Professor Prem Lal Patel, Director, VNIT, Nagpur took over the additional charge as Director of IIIT, Nagpur
            on 1st October, 2024. He is Professor (HAG) of Hydraulics and Water Resources in Department of Civil
            Engineering, Sardar Vallabhbhai National Institute of Technology (SVNIT), Surat...
          </p>
          {/* Rest of the biography text */}
        </div>
      </CardContent>
    </Card>
  )
}

function RegistrarProfile() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">Registrar</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="relative w-40 h-48 mx-auto md:mx-0">
            <Image
              src="/images/Staff/registrar.jpg"
              alt="Registrar Shri Kailas N. Dakhale"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Shri Kailas N. Dakhale</h2>
            <p className="text-lg font-semibold">Registrar</p>
            <p>Indian Institute of Information Technology, Nagpur</p>
            <p className="mt-2">
              <strong>Email:</strong> registrar@iiitn.ac.in
            </p>
            <p>
              <strong>Contact:</strong> 9421995010
            </p>
          </div>
        </div>
        <div className="prose max-w-none">
          <h3 className="text-xl font-semibold">Profile</h3>
          <p>
            An engineer by education and an able Administrator by of more than 30 Years, Shri Kailas N. Dakhale, is
            giving his contribution to the Central Autonomous Bodies (CABs)...
          </p>
          {/* Rest of the profile text */}
        </div>
      </CardContent>
    </Card>
  )
}

function StaffDirectory() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">Staff Directory</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {[
            {
              title: "प्रशासन विभाग Administration Department",
              staff: [
                {
                  name: "श्री हर्षद पोफली / Mr. Harshad Pophali",
                  designation: "विशेष कार्य अधिकारी / O S D",
                  contact: "9373288110",
                  email: "harshad.pophali@iiitn.ac.in",
                },
                // ... other staff members
              ],
            },
            // ... other departments
          ].map((department, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold bg-primary text-primary-foreground p-3 rounded-lg text-center">
                {department.title}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="px-4 py-2 text-left">क्रमिक संख्या / Sr No.</th>
                      <th className="px-4 py-2 text-left">नाम / Name</th>
                      <th className="px-4 py-2 text-left">पद / Designation</th>
                      <th className="px-4 py-2 text-left">मोबाइल नंबर / Contact</th>
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
  )
}

