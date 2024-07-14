import { Button } from "./ui/button.tsx";
import { useAuth0 } from "@auth0/auth0-react";



export const MainNav = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
       //variant="ghost"
      className="font-bold bg-orange-500 hover:text-orange-500 hover:bg-white"
      onClick={async () => await loginWithRedirect()}
    >
      Log In
    </Button>
  );
};
