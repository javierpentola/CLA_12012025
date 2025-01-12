"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Users } from 'lucide-react'
import { TeamView } from "./team-view"

export function TeamButton() {
  const [showTeam, setShowTeam] = useState(false)

  return (
    <>
      <Button
        variant="outline"
        className="h-8 gap-2 px-3"
        onClick={() => setShowTeam(true)}
      >
        <Users className="h-4 w-4" />
        <span className="text-sm">Team</span>
      </Button>
      {showTeam && <TeamView onClose={() => setShowTeam(false)} />}
    </>
  )
}

