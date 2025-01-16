'use client'

import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '../sub/ProjectCard'


const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20'>
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
            My Projects
        </h1>
            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
                <ProjectCard
                  src="/NextWebSite.png"
                  title="Modern Next.js Portfolio"
                  description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et'
                />
                <ProjectCard
                  src="/CardImage.png"
                  title="Interative Website Cards"
                  description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et'
                />
                <ProjectCard
                  src="/SpaceWebsite.png"
                  title="Space Themed Website"
                  description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et'
                />
            </div>
    </div>
  )
}

export default Projects
