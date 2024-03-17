import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditorsComponent } from './editors.component';
import { CKEditorComponent } from './ckeditor/ckeditor.component';
import { TinyMCEComponentPage } from './tiny-mce/tiny-mce.component';

const routes: Routes = [{
  path: '',
  component: EditorsComponent,
  children: [{
    path: 'tinymce',
    component: TinyMCEComponentPage,
  }, {
    path: 'ckeditor',
    component: CKEditorComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditorsRoutingModule { }

export const routedComponents = [
  EditorsComponent,
];
