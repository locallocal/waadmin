/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license infornbion.
 */

import { Directive, ElementRef, InjectionToken, Input } from '@angular/core';
import {
  CdkCell,
  CdkCellDef,
  CdkColumnDef,
  CdkFooterCell,
  CdkFooterCellDef,
  CdkHeaderCell,
  CdkHeaderCellDef,
} from '@angular/cdk/table';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

/**
 * Cell definition for the nb-table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
@Directive({
    selector: '[nbCellDef]',
    providers: [{ provide: CdkCellDef, useExisting: NbCellDefDirective }],
    standalone: true
})
export class NbCellDefDirective extends CdkCellDef {
}

/**
 * Header cell definition for the nb-table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */
@Directive({
    selector: '[nbHeaderCellDef]',
    providers: [{ provide: CdkHeaderCellDef, useExisting: NbHeaderCellDefDirective }],
    standalone: true
})
export class NbHeaderCellDefDirective extends CdkHeaderCellDef {
}

/**
 * Footer cell definition for the nb-table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */
@Directive({
    selector: '[nbFooterCellDef]',
    providers: [{ provide: CdkFooterCellDef, useExisting: NbFooterCellDefDirective }],
    standalone: true
})
export class NbFooterCellDefDirective extends CdkFooterCellDef {
}

export const NB_SORT_HEADER_COLUMN_DEF = new InjectionToken('NB_SORT_HEADER_COLUMN_DEF');

/**
 * Column definition for the nb-table.
 * Defines a set of cells available for a table column.
 */
@Directive({
    selector: '[nbColumnDef]',
    providers: [
        { provide: CdkColumnDef, useExisting: NbColumnDefDirective },
        { provide: NB_SORT_HEADER_COLUMN_DEF, useExisting: NbColumnDefDirective },
    ],
    standalone: true
})
export class NbColumnDefDirective extends CdkColumnDef {
  /** Unique name for this column. */
  @Input('nbColumnDef')
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._setNameInput(value);
  }

  /** Whether this column should be sticky positioned at the start of the row */
  @Input() sticky: boolean;

  /** Whether this column should be sticky positioned on the end of the row */
  @Input()
  get stickyEnd(): boolean {
    return this._stickyEnd;
  }
  set stickyEnd(value: boolean) {
    const prevValue = this._stickyEnd;
    this._stickyEnd = coerceBooleanProperty(value);
    this._hasStickyChanged = prevValue !== this._stickyEnd;
  }
}

/** Header cell template container that adds the right classes and role. */
@Directive({
    selector: 'nb-header-cell, th[nbHeaderCell]',
    host: {
        'class': 'nb-header-cell',
        'role': 'columnheader',
    },
    standalone: true
})
export class NbHeaderCellDirective extends CdkHeaderCell {
  constructor(columnDef: NbColumnDefDirective,
              elementRef: ElementRef<HTMLElement>) {
    super(columnDef, elementRef);
    elementRef.nativeElement.classList.add(`nb-column-${columnDef.cssClassFriendlyName}`);
  }
}

/** Footer cell template container that adds the right classes and role. */
@Directive({
    selector: 'nb-footer-cell, td[nbFooterCell]',
    host: {
        'class': 'nb-footer-cell',
        'role': 'gridcell',
    },
    standalone: true
})
export class NbFooterCellDirective extends CdkFooterCell {
  constructor(columnDef: NbColumnDefDirective,
              elementRef: ElementRef) {
    super(columnDef, elementRef);
    elementRef.nativeElement.classList.add(`nb-column-${columnDef.cssClassFriendlyName}`);
  }
}

/** Cell template container that adds the right classes and role. */
@Directive({
    selector: 'nb-cell, td[nbCell]',
    host: {
        'class': 'nb-cell',
        'role': 'gridcell',
    },
    standalone: true
})
export class NbCellDirective extends CdkCell {
  constructor(columnDef: NbColumnDefDirective,
              elementRef: ElementRef<HTMLElement>) {
    super(columnDef, elementRef);
    elementRef.nativeElement.classList.add(`nb-column-${columnDef.cssClassFriendlyName}`);
  }
}
