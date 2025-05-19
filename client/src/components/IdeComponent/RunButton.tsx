'use client'

import socket from '@/socket'
import { Button } from '@/components/ui/button'

type RunButtonProps = {
  filePath: string
  language: string
}

export default function RunButton({ filePath, language }: RunButtonProps) {
  const handleRun = () => {
    if (!socket || !filePath || !language) return

    socket.emit('terminal:run', { filePath, language })
  }

  return (
    <Button onClick={handleRun} className="flex items-center gap-1">
      ▶ <span>Run</span>
    </Button>
  )
}