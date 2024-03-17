import { AvatarProps } from "@radix-ui/react-avatar";
import { User } from "next-auth";
import Image from "next/image";

import { Icons } from "../Icons";
import { Avatar, AvatarFallback } from "../ui/Avatar";

interface IUserAvatar extends AvatarProps {
  user: Pick<User, "name" | "image">;
}

const UserAvatar = ({ user, ...props }: IUserAvatar) => {
  return (
    <Avatar {...props}>
      {user.image ? (
        <div className="relative aspect-square h-full w-full">
          <Image
            src={user.image}
            alt="profile picture"
            fill
            referrerPolicy="no-referrer"
            sizes="100%"
          />
        </div>
      ) : (
        <AvatarFallback>
          <span className="sr-only">{user?.name}</span>
          <Icons.user />
        </AvatarFallback>
      )}
    </Avatar>
  );
};
export default UserAvatar;
