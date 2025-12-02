export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  phone?: string;
  website?: string;
}

export interface IPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface IButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  className?: string;
}

export interface ICardProps {
  title: string;
  content: string;
}

export interface IPostCardProps {
  post: IPost;
  onClick: () => void;
}

export interface IUserCardProps {
  user: IUser;
}
