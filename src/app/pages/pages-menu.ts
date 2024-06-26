import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'E-commerce',
    icon: 'shopping-cart',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'IoT Dashboard',
    icon: 'home',
    link: '/pages/iot-dashboard',
  },
  {
    title: 'COMPONENTS',
    group: true,
  },
  {
    title: 'Components',
    icon: 'cube',
    children: [
      {
        title: 'Accordions',
        link: '/pages/components/accordions',
      },
      {
        title: 'Actions',
        link: '/pages/components/actions',
      },
      {
        title: 'Alerts',
        link: '/pages/components/alerts',
      },
      {
        title: 'AutoCompletes',
        link: '/pages/components/autocompletes',
      },
      {
        title: 'Badges',
        link: '/pages/components/badges',
      },
      {
        title: 'Buttons',
        link: '/pages/components/buttons',
      },
      {
        title: 'Button Groups',
        link: '/pages/components/buttongroups',
      },
      {
        title: 'Calendars',
        link: '/pages/components/calendars',
      },
      {
        title: 'Cards',
        link: '/pages/components/cards',
      },
      {
        title: 'CheckBoxes',
        link: '/pages/components/checkboxes',
      },
      {
        title: 'Context Menus',
        link: '/pages/components/context-menus',
      },
      {
        title: 'Date Pickers',
        link: '/pages/components/datepickers',
      },
      {
        title: 'Dialogs',
        link: '/pages/components/dialogs',
      },
      {
        title: 'Icons',
        link: '/pages/components/icons',
      },
      {
        title: 'Inputs',
        link: '/pages/components/inputs',
      },
      {
        title: 'Lists',
        link: '/pages/components/lists',
      },
      {
        title: 'Menus',
        link: '/pages/components/menus',
      },
      {
        title: 'Popovers',
        link: '/pages/components/popovers',
      },
      {
        title: 'Progress Bars',
        link: '/pages/components/progress-bars'
      },
      {
        title: 'Radios',
        link: '/pages/components/radios',
      },
      {
        title: 'Tags',
        link: '/pages/components/tags',
      },
      {
        title: 'Toastrs',
        link: '/pages/components/toastrs',
      },
      {
        title: 'Toggles',
        link: '/pages/components/toggles',
      },
      {
        title: 'Tooltips',
        link: '/pages/components/tooltips',
      }
    ]
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Layout',
    icon: 'layout',
    children: [
      {
        title: 'Stepper',
        link: '/pages/layout/stepper',
      },
      {
        title: 'List',
        link: '/pages/layout/list',
      },
      {
        title: 'Infinite List',
        link: '/pages/layout/infinite-list',
      },
      {
        title: 'Accordion',
        link: '/pages/layout/accordion',
      },
      {
        title: 'Tabs',
        pathMatch: 'prefix',
        link: '/pages/layout/tabs',
      },
    ],
  },
  {
    title: 'Forms',
    icon: 'edit-2',
    children: [
      {
        title: 'Form Inputs',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/pages/forms/layouts',
      },
      {
        title: 'Buttons',
        link: '/pages/forms/buttons',
      },
      {
        title: 'Datepicker',
        link: '/pages/forms/datepicker',
      },
    ],
  },
  {
    title: 'UI Features',
    icon: 'keypad',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Grid',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/pages/ui-features/icons',
      },
      {
        title: 'Typography',
        link: '/pages/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/pages/ui-features/search-fields',
      },
    ],
  },
  {
    title: 'Modal & Overlays',
    icon: 'browser',
    children: [
      {
        title: 'Dialog',
        link: '/pages/modal-overlays/dialog',
      },
      {
        title: 'Window',
        link: '/pages/modal-overlays/window',
      },
      {
        title: 'Popover',
        link: '/pages/modal-overlays/popover',
      },
      {
        title: 'Toastr',
        link: '/pages/modal-overlays/toastr',
      },
      {
        title: 'Tooltip',
        link: '/pages/modal-overlays/tooltip',
      },
    ],
  },
  {
    title: 'Extra Components',
    icon: 'message-circle',
    children: [
      {
        title: 'Calendar',
        link: '/pages/extra-components/calendar',
      },
      {
        title: 'Progress Bar',
        link: '/pages/extra-components/progress-bar',
      },
      {
        title: 'Spinner',
        link: '/pages/extra-components/spinner',
      },
      {
        title: 'Alert',
        link: '/pages/extra-components/alert',
      },
      {
        title: 'Calendar Kit',
        link: '/pages/extra-components/calendar-kit',
      },
      {
        title: 'Chat',
        link: '/pages/extra-components/chat',
      },
    ],
  },
  {
    title: 'Maps',
    icon: 'map',
    children: [
      {
        title: 'Google Maps',
        link: '/pages/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/pages/maps/leaflet',
      },
      {
        title: 'Bubble Maps',
        link: '/pages/maps/bubble',
      },
      {
        title: 'Search Maps',
        link: '/pages/maps/searchmap',
      },
    ],
  },
  {
    title: 'Charts',
    icon: 'pie-chart',
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
  },
  {
    title: 'Editors',
    icon: 'text',
    children: [
      {
        title: 'TinyMCE',
        link: '/pages/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/pages/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Tables & Data',
    icon: 'grid',
    children: [
      {
        title: 'Smart Table',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Tree Grid',
        link: '/pages/tables/tree-grid',
      },
    ],
  },
  {
    title: 'Miscellaneous',
    icon: 'shuffle-2',
    children: [
      {
        title: '404',
        link: '/pages/miscellaneous/404',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'lock',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
