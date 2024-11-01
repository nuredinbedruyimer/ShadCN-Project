import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardHeader , CardContent, CardFooter} from '../ui/card'


const CustomeSkeloton = () => {
  return (
    <Card className="flex flex-col justify-between ">
    <CardHeader>
        <Skeleton className="h-24 w-24 rounded-full"/>
        <Skeleton className="h-6 flex-grow rounded-full"/>


  
        
     

            
  

    </CardHeader>
    <CardContent>
    <Skeleton className="h-6 mt-4"/>
    <Skeleton className="h-6 mt-4"/>
    <Skeleton className="h-6 w-1/2 mt-4"/>

    </CardContent>
    <CardFooter className="flex justify-between">
    <Skeleton className="h-10 w-48 "/>
    <Skeleton className="h-4 w-24 "/>


    </CardFooter>
      
    </Card>
  )
}

export default CustomeSkeloton
