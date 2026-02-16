import { DOCUMENT } from '@angular/common';
import { inject, Injectable, signal } from '@angular/core';

export type ThemeMode = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  readonly theme = signal<ThemeMode>('light');

  constructor() {
    this.initTheme();
  }

  toggleTheme(): void {
    const nextTheme: ThemeMode = this.theme() === 'light' ? 'dark' : 'light';
    this.applyTheme(nextTheme);
  }

  private initTheme(): void {
    const storedTheme = localStorage.getItem('app-theme') as ThemeMode | null;
    if (storedTheme === 'light' || storedTheme === 'dark') {
      this.applyTheme(storedTheme);
      return;
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.applyTheme(prefersDark ? 'dark' : 'light');
  }

  private applyTheme(theme: ThemeMode): void {
    this.theme.set(theme);
    this.document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('app-theme', theme);
  }
}
