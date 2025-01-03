import { useEffect } from 'react'
import './Space.css'
const generateSpace = (selector, size, duration, theme) => {
    const colors = (theme == "dark") ? ["#fff2", "#fff4", "#fff7", "#fffc"] : ["#0002", "#0004", "#0007", "#000c"];
    const layer = [];
    for(let i = 1; i < 500; i++){
        const color = colors[Math.floor(Math.random() * colors.length)]
        const x = Math.floor(Math.random() * 300);
        const y = Math.floor(Math.random() * 300);
        layer.push(`${x}vw ${y}vh 0 ${color}, ${x}vw ${y + 100}vh 0 ${color}, ${x}vw ${y + 200}vh 0 ${color}`);
    }
    const container = document.querySelector(selector);
    container.style.setProperty("--space-layer", layer.join(","));
    container.style.setProperty("--size", size);
    container.style.setProperty("--duration", duration);
}
const getThemePreference = () => {
      if(localStorage.getItem("theme")){
        if(localStorage.getItem("theme") !== "system"){
            return localStorage.getItem("theme")
        }
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"
  }
export function SpaceBG(){
    const theme = getThemePreference()
    useEffect(() => {
        generateSpace(".space-1", "1px", "25s", theme)
        generateSpace(".space-2", "2px", "20s", theme)
        generateSpace(".space-3", "4px", "15s", theme)
    }, [])
    
    return (
        <>
            <div className="space space-1"></div>
            <div className="space space-2"></div>
            <div className="space space-3"></div>
        </>
    )
}