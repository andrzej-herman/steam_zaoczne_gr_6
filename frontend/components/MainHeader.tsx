import Image from "next/image";
import { Button } from "@/components/ui/button"


export default function MainHeader() {
  return (
      <div className="w-full bg-[#171D25]">
        <div className="flex container
     items-center
     justify-between

     py-8">
          <Image
            src="/steam-logo.png"
            alt="Steam Logo"
            width={140}
            height={100}
          />
          <div className="flex text-neutral-300 text-sm tracking-tight font-medium gap-4">
            <p>STRONA GŁÓWNA</p>
            <p>SPORTOWE</p>
            <p>STRZELANKI</p>
            <p>STRATEGICZNE</p>
            <p>PRZYGODOWE</p>
          </div>
          <Button size="sm" variant="steam" className="rounded-none">Zaloguj się</Button>
        </div >
      </div>
  )
}

//
// SPORTOWE
// STRZELANKI
// STRATEGICZNE
// PRZYGODOWE

// #171D25