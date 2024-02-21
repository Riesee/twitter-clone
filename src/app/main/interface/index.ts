export interface SidebarItems {
    label: string;
    route?: string;
    icon?: string;
    isActive?: boolean;
}

export interface User{
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    emailVerified: boolean;
    username?: string;
    createdAt: any;
    bio?: string;
}