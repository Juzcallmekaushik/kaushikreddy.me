import React from 'react';
import About from "@/components/about";
<<<<<<< Updated upstream
=======
import Top from "@/components/top";
>>>>>>> Stashed changes
import Education from "@/components/education/education";
import Skills from "@/components/skills/skills";
import Header from "@/components/header";
import Projects from '@/components/projects/projects';
import Credits from '@/components/credits';
import {promises as fs} from 'fs';

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/public/translations/en.json', 'utf-8');
  const data = JSON.parse(file);

  return (
    <main className="flex min-h-screen flex-col items-center py-24 px-6 lg:px-24">
      <div className="z-2 w-full max-w-5xl font-mono text-sm flex flex-col lg:flex-row justify-between">
        <Header data={data.general}></Header>
        <div className='lg:pl-[50%]'>
          <About data={data.general}></About>
          <Skills data={data.skills}></Skills>
          <Education data={data.education}></Education>
          <Projects data={data.projects}></Projects>
          <Credits data={data.general}></Credits>
        </div>
      </div>
<<<<<<< Updated upstream
=======
      <Top data={data.top}></Top><Top />
>>>>>>> Stashed changes
    </main>
  )
}
