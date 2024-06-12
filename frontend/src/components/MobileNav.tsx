import React from 'react'
import {Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription} from './ui/sheet.tsx'
import {Separator} from './ui/separator.tsx'
import {Button} from './ui/button.tsx'
import {Menu} from 'lucide-react'

export const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className='text-orange-500'/>
            </SheetTrigger>
            <SheetContent className={"space-y-3"}>
                <SheetTitle>
                    <span>Welcome to FoodOrder.com</span>
                </SheetTitle>
                <Separator/>
                <SheetDescription>
                    <Button className={"flex-1 font-bold bg-orange-500"}>Log In</Button>
                </SheetDescription>
            </SheetContent>
        </Sheet>
    )
}
