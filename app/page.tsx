"use client"

import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";



export default function Home() {
  const { toast } = useToast()


  return (
   <div>
    <p>Bu bir test sayfasıdır</p>


    <Button variant="outline">asdsads</Button>

    <Button
      onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
        })
      }}
    >
      Show Toast
    </Button>


    <ModeToggle/>


   </div>
  );
}

