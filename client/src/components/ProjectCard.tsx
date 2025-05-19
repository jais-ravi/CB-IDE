import React from 'react'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type Project = {
  id: string
  title: string
  description: string
  tech: string
  lastUpdated: string
}

type Props = {
  project: Project
}

const ProjectCard = ({ project }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>

      <CardFooter className="flex justify-between text-sm text-muted-foreground">
        <p>{project.tech}</p>
        <span>{project.lastUpdated}</span>
      </CardFooter>
    </Card>
  )
}

export default ProjectCard