import { Calendar, ChevronLeft, FolderOpen, ListTodo, Moon, Sun, UserRoundSearch, UsersRound  as IconType, Home, Library, Cog, UsersRound, ChevronRight } from "lucide-svelte";
import { writable } from "svelte/store";

type MenuItem = {
  name: string;
  href: string;
  icon: typeof IconType;
  enabled: boolean;
};

export const menuItems = writable<MenuItem[]>([
  {
    name: 'Home',
    href: '/',
    icon: Home,
    enabled: true
  },
  {
    name: 'Contactos',
    href: '/contactos',
    icon: UsersRound,
    enabled: true
  },
  {
    name: 'Leads',
    href: '/leads',
    icon: UserRoundSearch,
    enabled: true
  },
  {
    name: 'Proyectos',
    href: '/proyectos',
    icon: FolderOpen,
    enabled: true
  },
  {
    name: 'Tareas',
    href: '/tareas',
    icon: ListTodo,
    enabled: true
  },
  {
    name: 'Calendario',
    href: '/calendario',
    icon: Calendar,
    enabled: true
  }
]);