"use client";

import { cn } from "@/lib/utils";
import { Button } from "../ui/Button";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { Icons } from "../Icons";
import { useToast } from "@/hooks/use-toast";

const UserAuthForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { toast } = useToast();

  const loginWithGoogle = async () => {
    setIsLoading(true);

    try {
      await signIn("google");
    } catch (error) {
      toast({
        title: "There was a problem",
        description: "Error signing in with google",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex justify-center")}>
      <Button
        size="sm"
        className="w-full"
        onClick={loginWithGoogle}
        isLoading={isLoading}
      >
        {isLoading ? null : <Icons.google className="h-4 w-4 mr-2" />}
        Google
      </Button>
    </div>
  );
};
export default UserAuthForm;
