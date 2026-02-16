import { TestBed } from '@angular/core/testing';
import { UsersPage } from './users.page';

describe('UsersPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersPage]
    }).compileComponents();
  });

  it('should toggle between list and card views', () => {
    const fixture = TestBed.createComponent(UsersPage);
    const component = fixture.componentInstance;

    expect(component.viewMode()).toBe('list');

    component.setViewMode('card');
    expect(component.viewMode()).toBe('card');

    component.setViewMode('list');
    expect(component.viewMode()).toBe('list');
  });

  it('should filter users in card view by query', () => {
    const fixture = TestBed.createComponent(UsersPage);
    const component = fixture.componentInstance;

    component.cardQuery.set('john');
    const filtered = component.filteredCardUsers();

    expect(filtered.length).toBeGreaterThan(0);
    expect(filtered.every((user) => user.name.toLowerCase().includes('john'))).toBe(true);
  });
});

