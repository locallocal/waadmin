/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { NbStatusService } from '../../services/status.service';
import { NbComponentOrCustomStatus } from '../component-status';
import { NbIconLibraries } from './icon-libraries';
import { NbSvgIcon } from './icon';
import { NbIcons } from './icon-pack';
import { icons } from 'eva-icons';

export interface NbIconConfig {
  icon: string;
  pack?: string;
  status?: NbComponentOrCustomStatus;
  options?: { [name: string]: any };
}

interface NbOriginalEvaIcon {
  toSvg(options: NbEvaIconOptions);
}

export interface NbEvaIconOptions {
  width: string,
  height: string,
  fill: string,
  animation: {
    type: string,
    hover: boolean,
    infinite: boolean,
  },
}

export class NbEvaSvgIcon extends NbSvgIcon {

  constructor(protected name, protected content: NbOriginalEvaIcon) {
    super(name, '');
  }

  getContent(options): string {
    return this.content.toSvg({
      width: '100%',
      height: '100%',
      fill: 'currentColor',
      ...options,
    });
  }
}

/**
 * Icon component. Allows to render both `svg` and `font` icons.
 * Starting from Nebular 4.0 uses [Eva Icons](https://akveo.github.io/eva-icons/) pack by default.
 *
 * Basic icon example:
 * @stacked-example(Showcase, icon/icon-showcase.component)
 *
 * Icon configuration:
 *
 * ```html
 * <nb-icon icon="star"></nb-icon>
 * ```
 * ### Installation
 *
 * By default Nebular comes without any pre-installed icon pack.
 * Starting with Nebular 4.0.0 we ship separate package called `@nebular/eva-icons`
 * which integrates SVG [Eva Icons](https://akveo.github.io/eva-icons/) pack to Nebular. To add it to your
 * project run:
 * ```sh
 * npm i eva-icons @nebular/eva-icons
 * ```
 * This command will install Eva Icons pack. Then register `NbEvaIconsModule` into your app module:
 * ```ts
 * import { NbEvaIconsModule } from '@nebular/eva-icons';
 *
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbEvaIconsModule,
 *   ],
 * })
 * export class AppModule { }
 * ```
 * Last thing, import `NbIconModule` to your feature module where you need to show an icon:
 * ```ts
 * import { NbIconModule } from '@nebular/theme';
 *
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbIconModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Icon can be colored using `status` input:
 * ```html
 * <nb-icon icon="star" status="warning"></nb-icon>
 * ```
 *
 * Colored icons:
 * @stacked-example(Colored Icons, icon/icon-colors.component)
 *
 * In case you need to specify an icon from a specific icon pack, this could be done using `pack` input property:
 * ```html
 * <nb-icon icon="star" pack="font-awesome"></nb-icon>
 * ```
 * Additional icon settings (if available by the icon pack) could be passed using `options` input:
 *
 * ```html
 * <nb-icon icon="star" [options]="{ animation: { type: 'zoom' } }"></nb-icon>
 * ```
 *
 * @styles
 *
 * icon-font-size:
 * icon-line-height:
 * icon-width:
 * icon-height:
 * icon-svg-vertical-align:
 * icon-basic-color:
 * icon-primary-color:
 * icon-info-color:
 * icon-success-color:
 * icon-warning-color:
 * icon-danger-color:
 * icon-control-color:
 */
@Component({
  standalone: true,
  selector: 'nb-icon',
  styleUrls: [`./icon.component.scss`],
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    NbIconLibraries,
  ],
})
export class NbIconComponent implements NbIconConfig, OnChanges, OnInit {

  private NAME = 'eva';
  private essentialsPackName = 'nebular-essentials';
  protected iconDef;
  protected prevClasses = [];

  @HostBinding('innerHtml')
  html: SafeHtml = '';

  @HostBinding('class.status-primary')
  get primary() {
    return this.status === 'primary';
  }

  @HostBinding('class.status-info')
  get info() {
    return this.status === 'info';
  }

  @HostBinding('class.status-success')
  get success() {
    return this.status === 'success';
  }

  @HostBinding('class.status-warning')
  get warning() {
    return this.status === 'warning';
  }

  @HostBinding('class.status-danger')
  get danger() {
    return this.status === 'danger';
  }

  @HostBinding('class.status-basic')
  get basic() {
    return this.status === 'basic';
  }

  @HostBinding('class.status-control')
  get control() {
    return this.status === 'control';
  }

  @HostBinding('class')
  get additionalClasses(): string[] {
    if (this.statusService.isCustomStatus(this.status)) {
      return [this.statusService.getStatusClass(this.status)];
    }
    return [];
  }

  /**
   * Icon name
   * @param {string} status
   */
  @Input() icon: string;

  /**
   * Icon pack name
   * @param {string} status
   */
  @Input() pack: string;

  /**
   * Additional icon settings
   * @param {[name: string]: any}
   */
  @Input() options: { [name: string]: any };

  /**
   * Icon status (adds specific styles):
   * `basic`, `primary`, `info`, `success`, `warning`, `danger`, `control`
   */
  @Input() status?: NbComponentOrCustomStatus;

  /**
   * Sets all icon configurable properties via config object.
   * If passed value is a string set icon name.
   * @docs-private
   */
  @Input()
  get config(): string | NbIconConfig {
    return this._config;
  }
  set config(value: string | NbIconConfig) {
    if (!value) {
      return;
    }

    this._config = value;

    if (typeof value === 'string') {
      this.icon = value;
    } else {
      this.icon = value.icon;
      this.pack = value.pack;
      this.status = value.status;
      this.options = value.options;
    }
  }
  protected _config: string | NbIconConfig;

  constructor(
    protected sanitizer: DomSanitizer,
    protected iconLibrary: NbIconLibraries,
    protected el: ElementRef,
    protected renderer: Renderer2,
    protected statusService: NbStatusService,
  ) {
    this.iconLibrary.registerSvgPack(this.NAME, this.createIcons());
    this.iconLibrary.setDefaultPack(this.NAME);

    // in case of consequent calls we don't need to enable `nebular-essentials` pack again
    if (this.iconLibrary.getPack(this.essentialsPackName)) {
      return;
    }

    /* eslint-disable max-len */
    this.iconLibrary.registerSvgPack(this.essentialsPackName, {
      'chevron-down-outline': '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="100%" height="100%" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="chevron-down"><rect width="24" height="24" opacity="0"/><path d="M12 15.5a1 1 0 0 1-.71-.29l-4-4a1 1 0 1 1 1.42-1.42L12 13.1l3.3-3.18a1 1 0 1 1 1.38 1.44l-4 3.86a1 1 0 0 1-.68.28z"/></g></g></svg>',
      'chevron-up-outline': '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="100%" height="100%" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="chevron-up"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M16 14.5a1 1 0 0 1-.71-.29L12 10.9l-3.3 3.18a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.42l4-3.86a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.42 1 1 0 0 1-.69.28z"/></g></g></svg>',
      'chevron-left-outline': '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="100%" height="100%" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="chevron-left"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M13.36 17a1 1 0 0 1-.72-.31l-3.86-4a1 1 0 0 1 0-1.4l4-4a1 1 0 1 1 1.42 1.42L10.9 12l3.18 3.3a1 1 0 0 1 0 1.41 1 1 0 0 1-.72.29z"/></g></g></svg>',
      'chevron-right-outline': '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="100%" height="100%" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="chevron-right"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M10.5 17a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42L13.1 12 9.92 8.69a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l3.86 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-.7.32z"/></g></g></svg>',
      'checkmark-outline': '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="100%" height="100%" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="checkmark"><rect width="24" height="24" opacity="0"/><path d="M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z"/></g></g></svg>',
      'paper-plane-outline': '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="100%" height="100%" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="paper-plane"><rect width="24" height="24" opacity="0"/><path d="M21 4a1.31 1.31 0 0 0-.06-.27v-.09a1 1 0 0 0-.2-.3 1 1 0 0 0-.29-.19h-.09a.86.86 0 0 0-.31-.15H20a1 1 0 0 0-.3 0l-18 6a1 1 0 0 0 0 1.9l8.53 2.84 2.84 8.53a1 1 0 0 0 1.9 0l6-18A1 1 0 0 0 21 4zm-4.7 2.29l-5.57 5.57L5.16 10zM14 18.84l-1.86-5.57 5.57-5.57z"/></g></g></svg>',
      'file-text-outline': '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="100%" height="100%" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="file-text"><rect width="24" height="24" opacity="0"/><path d="M15 16H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2z"/><path d="M9 14h3a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2z"/><path d="M19.74 8.33l-5.44-6a1 1 0 0 0-.74-.33h-7A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V9a1 1 0 0 0-.26-.67zM14 5l2.74 3h-2a.79.79 0 0 1-.74-.85zm3.44 15H6.56a.53.53 0 0 1-.56-.5v-15a.53.53 0 0 1 .56-.5H12v3.15A2.79 2.79 0 0 0 14.71 10H18v9.5a.53.53 0 0 1-.56.5z"/></g></g></svg>',
      'alert-triangle-outline': '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="100%" height="100%" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="alert-triangle"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M22.56 16.3L14.89 3.58a3.43 3.43 0 0 0-5.78 0L1.44 16.3a3 3 0 0 0-.05 3A3.37 3.37 0 0 0 4.33 21h15.34a3.37 3.37 0 0 0 2.94-1.66 3 3 0 0 0-.05-3.04zm-1.7 2.05a1.31 1.31 0 0 1-1.19.65H4.33a1.31 1.31 0 0 1-1.19-.65 1 1 0 0 1 0-1l7.68-12.73a1.48 1.48 0 0 1 2.36 0l7.67 12.72a1 1 0 0 1 .01 1.01z"/><circle cx="12" cy="16" r="1"/><path d="M12 8a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1z"/></g></g></svg>',
      'question-mark-outline': '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="100%" height="100%" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="question-mark"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"/><circle cx="12" cy="19" r="1"/></g></g></svg>',
      'email-outline': '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="100%" height="100%" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="email"><rect width="24" height="24" opacity="0"/><path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.67 2L12 10.75 5.67 6zM19 18H5a1 1 0 0 1-1-1V7.25l7.4 5.55a1 1 0 0 0 .6.2 1 1 0 0 0 .6-.2L20 7.25V17a1 1 0 0 1-1 1z"/></g></g></svg>',
      'flash-outline': '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="100%" height="100%" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="flash"><rect width="24" height="24" opacity="0"/><path d="M11.11 23a1 1 0 0 1-.34-.06 1 1 0 0 1-.65-1.05l.77-7.09H5a1 1 0 0 1-.83-1.56l7.89-11.8a1 1 0 0 1 1.17-.38 1 1 0 0 1 .65 1l-.77 7.14H19a1 1 0 0 1 .83 1.56l-7.89 11.8a1 1 0 0 1-.83.44zM6.87 12.8H12a1 1 0 0 1 .74.33 1 1 0 0 1 .25.78l-.45 4.15 4.59-6.86H12a1 1 0 0 1-1-1.11l.45-4.15z"/></g></g></svg>',
      'search-outline': '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="100%" height="100%" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="search"><rect width="24" height="24" opacity="0"/><path d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"/></g></g></svg>',
      'close-outline': '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="100%" height="100%" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="close"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g></svg>',
      'collapse-outline': '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="100%" height="100%" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="collapse"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M19 9h-2.58l3.29-3.29a1 1 0 1 0-1.42-1.42L15 7.57V5a1 1 0 0 0-1-1 1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2z"/><path d="M10 13H5a1 1 0 0 0 0 2h2.57l-3.28 3.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L9 16.42V19a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1z"/></g></g></svg>',
      'expand-outline': '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="100%" height="100%" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="expand"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M20 5a1 1 0 0 0-1-1h-5a1 1 0 0 0 0 2h2.57l-3.28 3.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L18 7.42V10a1 1 0 0 0 1 1 1 1 0 0 0 1-1z"/><path d="M10.71 13.29a1 1 0 0 0-1.42 0L6 16.57V14a1 1 0 0 0-1-1 1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2H7.42l3.29-3.29a1 1 0 0 0 0-1.42z"/></g></g></svg>',
      'minus-outline': '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="100%" height="100%" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="minus"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M19 13H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2z"/></g></g></svg>',
      'minus-bold-outline': '<svg xmlns:xlink="http://www.w3.org/1999/xlink" fill="currentColor" viewBox="0 0 8 2" width="100%" height="100%"><defs><rect id="nb-mbo" y="3" width="8" height="2" rx="1"/></defs><use xlink:href="#nb-mbo" transform="translate(0 -3)" fill-rule="evenodd"/></svg>',
      'checkmark-bold-outline': '<svg xmlns:xlink="http://www.w3.org/1999/xlink" fill="currentColor" viewBox="0 0 8 7" width="100%" height="100%"><defs><path id="nb-cbo" d="M6.039 1.43a1.11 1.11 0 0 1 1.517-.228c.483.342.588.998.234 1.466L4.431 7.1a1 1 0 0 1-1.492.115L.317 4.677a1.023 1.023 0 0 1 .002-1.483 1.113 1.113 0 0 1 1.535.002l1.641 1.59L6.04 1.428z"/></defs><use xlink:href="#nb-cbo" transform="translate(0 -1)" fill-rule="evenodd"/></svg>',
      'arrow-back': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="arrow-back"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z"/></g></g></svg>',
    });
    /* eslint-enable max-len */
  }

  private createIcons(): NbIcons {
    return Object
      .entries<NbOriginalEvaIcon>(icons)
      .map(([name, icon]) => {
        return [name, new NbEvaSvgIcon(name, icon)] as [string, NbSvgIcon];
      })
      .reduce((newIcons, [name, icon]: [string, NbSvgIcon]) => {
        newIcons[name] = icon;
        return newIcons;
      }, {});
  }

  ngOnInit() {
    this.iconDef = this.renderIcon(this.icon, this.pack, this.options);
  }

  ngOnChanges() {
    const iconDef = this.iconLibrary.getIcon(this.icon, this.pack);
    if (iconDef) {
      this.renderIcon(this.icon, this.pack, this.options);
    } else {
      this.clearIcon();
    }
  }

  renderIcon(name: string, pack?: string, options?: { [name: string]: any }) {
    const iconDefinition = this.iconLibrary.getIcon(name, pack);
    if (!iconDefinition) {
      return undefined;
    }

    const content = iconDefinition.icon.getContent(options);
    if (content) {
      this.html = this.sanitizer.bypassSecurityTrustHtml(content);
    }

    this.assignClasses(iconDefinition.icon.getClasses(options));
    return iconDefinition;
  }

  protected clearIcon(): void {
    this.html = '';
    this.assignClasses([]);
  }

  protected assignClasses(classes: string[]) {
    this.prevClasses.forEach((className: string) => {
      this.renderer.removeClass(this.el.nativeElement, className);
    });

    classes.forEach((className: string) => {
      this.renderer.addClass(this.el.nativeElement, className);
    });

    this.prevClasses = classes;
  }
}
