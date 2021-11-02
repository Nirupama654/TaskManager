import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoItemComponent } from './MyComponents/todo-item/todo-item.component';
import { TodosComponent } from './MyComponents/todos/todos.component';

const routes: Routes = [
  // {path: 'view Todos',component: TodoItemComponent},
  // {path : 'view Todos',component:TodoItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
