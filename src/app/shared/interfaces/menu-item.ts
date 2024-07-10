export interface MenuItem {
    title: string;
    icon: string;
    route?: string;
    submenus?: { title: string, route: string }[];
}