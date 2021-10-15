import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { RepeatDirective } from './repeat.directive';
import { MessageDirective } from './message.directive';
import { SortPipe } from './sort.pipe';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { ChildComponent } from './child/child.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { CourseFormComponent } from './course-form/course-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    RepeatDirective,
    MessageDirective,
    SortPipe,
    CoursesListComponent,
    ChildComponent,
    FirstComponent,
    SecondComponent,
    CourseFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  // bootstrap: [HelloComponent]
  bootstrap: [AppComponent]
})
export class AppModule { }
