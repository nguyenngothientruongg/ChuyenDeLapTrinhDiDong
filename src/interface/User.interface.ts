export interface IUser {
  id: string;
  name: string;
  avatar: CUBAvatar;
  error?: boolean;
  number?: number;
}

export interface IUserInfo extends Pick<IUser, 'id' | 'name' | 'avatar'> {
  role: IUserRole;
  roles: Role[];
}
export interface IUserRole {
  id: ULID;
  name: string;
  uniqName: string;
  canCreateProduct: boolean;
  canDeleteProduct: boolean;
}
export type ULID = string;
export type CUBAvatar = {
  photo?: string;
  color?: string;
  label?: {
    text: string;
    color?: string;
  };
  icon?: {
    name: string;
    color?: string;
  };
};
export type Role = {
  id: ULID;
  name: string;
  teamIDs?: ULID[];
  userIDs?: ULID[];
};
