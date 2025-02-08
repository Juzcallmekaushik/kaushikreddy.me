import React from 'react';
import About from "@/components/about";
import Top from "@/components/top";
import Education from "@/components/education/education";
import Skills from "@/components/skills/skills";
import Header from "@/components/header";
import Projects from '@/components/projects/projects';
import Designs from '@/components/designs/designs';
import Credits from '@/components/credits';
import {promises as fs} from 'fs';

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/public/translations/en.json', 'utf-8');
  const data = JSON.parse(file);

  return (
    <main className="flex min-h-screen flex-col lg:flex-row items-start py-16 px-5 lg:px-25 justify-center">
      <div className="z-2 w-full max-w-5xl font-mono text-sm flex flex-col lg:flex-row justify-between">
        <Header data={data.general}></Header>
        <div className=' lg:pl-[50%]'>
          <About data={data.general}></About>
          <Skills data={data.skills}></Skills>
          <Education data={data.education}></Education>
          <Projects data={data.projects}></Projects>
          <Designs data={data.designs}></Designs>
          <Credits data={data.general}></Credits>
        </div>
      </div>
      <Top data={data.top}></Top><Top />
    </main>
  )
}
