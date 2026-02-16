import { TestBed } from '@angular/core/testing';
import { TableComponent } from './table.component';
import { TableColumn } from '../../models/table.model';

describe('TableComponent', () => {
  const columns: TableColumn[] = [
    { key: 'name', label: 'Name', sortable: true, type: 'text' },
    { key: 'email', label: 'Email', sortable: true, type: 'email' },
    { key: 'role', label: 'Role', sortable: true, type: 'text' }
  ];

  const rows = [
    { name: 'Emma Johnson', email: 'emma@example.com', role: 'Manager' },
    { name: 'John Smith', email: 'john@example.com', role: 'Admin' },
    { name: 'Michael Brown', email: 'michael@example.com', role: 'Support' }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableComponent]
    }).compileComponents();
  });

  it('should search rows by query', () => {
    const fixture = TestBed.createComponent(TableComponent);
    fixture.componentRef.setInput('columns', columns);
    fixture.componentRef.setInput('rows', rows);
    fixture.componentRef.setInput('pageSize', 2);
    fixture.detectChanges();

    const component = fixture.componentInstance;
    component.query.set('john');
    component.onSearchChange();

    expect(component.filteredRows().length).toBe(2);
  });

  it('should sort rows by selected column', () => {
    const fixture = TestBed.createComponent(TableComponent);
    fixture.componentRef.setInput('columns', columns);
    fixture.componentRef.setInput('rows', rows);
    fixture.detectChanges();

    const component = fixture.componentInstance;
    component.setSort(columns[0]);

    expect(component.sortedRows()[0]['name']).toBe('Emma Johnson');

    component.setSort(columns[0]);
    expect(component.sortedRows()[0]['name']).toBe('Michael Brown');
  });

  it('should paginate rows with next and previous page', () => {
    const fixture = TestBed.createComponent(TableComponent);
    fixture.componentRef.setInput('columns', columns);
    fixture.componentRef.setInput('rows', rows);
    fixture.componentRef.setInput('pageSize', 2);
    fixture.detectChanges();

    const component = fixture.componentInstance;

    expect(component.totalPages()).toBe(2);
    expect(component.paginatedRows().length).toBe(2);

    component.nextPage();
    expect(component.currentPage()).toBe(2);
    expect(component.paginatedRows().length).toBe(1);

    component.previousPage();
    expect(component.currentPage()).toBe(1);
  });
});

