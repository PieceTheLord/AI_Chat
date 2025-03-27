"use client"

import { useTheme } from "next-themes";
import { Button } from "./button";

function ToggleTheme(){
  const {setTheme, theme} = useTheme();
  return <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
    Change theme
  </Button>
 
}
export default ToggleTheme;
