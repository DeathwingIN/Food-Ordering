import React from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from "./ui/sheet.tsx";
import { Separator } from "./ui/separator.tsx";
import { Button } from "./ui/button.tsx";
import { Circle, CircleUserRound, Menu } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks.tsx";

export const MobileNav = () => {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-500" />
      </SheetTrigger>
      <SheetContent className={"space-y-3"}>
        <SheetTitle>
          {isAuthenticated ? (
            <span className="flex items-center font-bold gap-2">
              <CircleUserRound className="text-orange-500" />
              {user?.email}
            </span>
          ) : (
            <span>Welcome to FoodOrder.com</span>
          )}
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex flex-col gap-4">
          {isAuthenticated ? (
            <MobileNavLinks />
          ) : (
            <Button 
              onClick={() => loginWithRedirect()}
            className={"flex-1 items-center px-3 font-bold bg-orange-500"}>Log In</Button>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};
