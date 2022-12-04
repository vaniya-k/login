import { useEffect, useState } from 'react'

export const useCapsLock = () => {
  const [isOn, setIsOn] = useState(false)

  useEffect(() => {
    const handler =
      (event) => setIsOn((prevIsOn) => event.getModifierState?.("CapsLock") ?? prevIsOn)

    document.addEventListener('keydown', handler)

    return () => document.removeEventListener('keydown', handler)
  }, []);

  return isOn;
};