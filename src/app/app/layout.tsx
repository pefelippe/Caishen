"use client"

import { ExpenseModal } from "@/components/modals/ExpenseModal"
import { DashboardHeader } from "@/components/dashboard-header"
import { QuickActionsModal } from "@/components/modals/QuickActionsModal"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { container, item } from "@/lib/animations"

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="flex flex-col bg-white">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto bg-white">
          <div className="">
            {children}
          </div>
        </main>
        <ExpenseModal />
        <QuickActionsModal />
      </div>
    )
  }

  return (
    <AnimatePresence>
      <motion.div 
        className="flex flex-col bg-white"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <motion.div variants={item}>
          <DashboardHeader />
        </motion.div>
        <motion.main 
          className="flex-1 overflow-y-auto bg-white"
          variants={item}
        >
          <div className="">
            {children}
          </div>
        </motion.main>
        <motion.div variants={item}>
          <ExpenseModal />
          <QuickActionsModal />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
} 