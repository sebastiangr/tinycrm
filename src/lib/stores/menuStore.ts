import { Calendar, ChevronLeft, FolderOpen, ListTodo, Moon, Sun, UserRoundSearch, UsersRound  as IconType, Home, Library, Cog, UsersRound, ChevronRight, Inbox, Receipt, DollarSign, ChartColumn } from "lucide-svelte";
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
    name: 'Inbox',
    href: '/inbox',
    icon: Inbox,
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
  },
  {
    name: 'Ventas',
    href: '/ventas',
    icon: DollarSign,
    enabled: true
  },
  {
    name: 'Facturas',
    href: '/facturas',
    icon: Receipt,
    enabled: true
  },
  {
    name: 'Métricas',
    href: '/metricas',
    icon: ChartColumn ,
    enabled: true
  }
]);