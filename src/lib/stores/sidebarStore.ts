// src/lib/stores/sidebarStore.ts
import { writable } from 'svelte/store';

export const sidebarMenuPosition = writable('justify-between'); // 'justify-between' or 'justify-start'
export const sidebarOpen = writable(true);