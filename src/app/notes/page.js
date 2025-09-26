"use client"

import Editor from "@/components/Editor";
import SideNav from "@/components/SideNav";
import TN from "@/components/TN";
import { useState } from "react";

export default function NotesPage() {

    const [isViewer, setIsViewer] = useState(true)

    function handleToggleViewer(){
        console.log("isviewer", isViewer)
          setIsViewer(!isViewer)
    }

  return (
    <main id="notes">
        <SideNav  />
      { !isViewer && (<Editor isViewer={isViewer} 
      handleToggleViewer={handleToggleViewer} />)}

       {  isViewer &&
       ( <TN isViewer={isViewer} handleToggleViewer={handleToggleViewer} />)}
    </main>
  );
}
