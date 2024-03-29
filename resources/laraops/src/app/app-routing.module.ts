import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodoListComponent} from "./todo-list/todo-list.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {
    path: 'todo',
    component: TodoListComponent
  },
  {
    path: '*',
    component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
