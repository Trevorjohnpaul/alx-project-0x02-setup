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

export interface CardProps {
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

export interface ButtonProps {
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  children: React.ReactNode;
  onClick?: () => void;
}
