"use client"

import { motion } from "framer-motion"
import { Users } from 'lucide-react'
import { BackButton } from "./back-button"

interface TeamMember {
  name: string
  role: string
  avatar: string
  bio: string
}

interface TeamViewProps {
  onClose: () => void
}

export function TeamView({ onClose }: TeamViewProps) {
  const teamMembers: TeamMember[] = [
    {
      name: "Team Member 1",
      role: "Developer",
      avatar: "/placeholder.svg?height=100&width=100",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      name: "Team Member 2",
      role: "Designer",
      avatar: "/placeholder.svg?height=100&width=100",
      bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      name: "Team Member 3",
      role: "Project Manager",
      avatar: "/placeholder.svg?height=100&width=100",
      bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative max-h-[90vh] w-full max-w-3xl overflow-auto rounded-xl bg-white p-6 shadow-xl"
      >
        <BackButton onClick={onClose} />
        <div className="mb-6 mt-8 text-center">
          <div className="mb-2 flex justify-center">
            <Users className="h-12 w-12 text-[#1c375b]" />
          </div>
          <h2 className="text-3xl font-bold text-[#1c375b]">Our Team</h2>
          <p className="mt-2 text-[#6f8197]">
            Meet the people behind CLA.app
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center rounded-lg bg-gray-50 p-6 text-center"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={member.avatar}
                alt={member.name}
                className="mb-4 h-24 w-24 rounded-full object-cover"
              />
              <h3 className="text-lg font-semibold text-[#1c375b]">{member.name}</h3>
              <p className="mb-2 text-sm text-[#6f8197]">{member.role}</p>
              <p className="text-sm text-[#6f8197]">{member.bio}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-[#6f8197]">
          Together, we're working to revolutionize education!
        </div>
      </motion.div>
    </div>
  )
}

