import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AddAccountComponent } from "./add-account/add-account.component";
import { EditAccountComponent } from "./edit-account/edit-account.component";
import { ListAccountComponent } from "./list-account/list-account.component";
import { PostsEffects } from "./state/account.effect";
import { postsReducer } from "./state/account.reducer";
import { POST_STATE_NAME } from "./state/account.selector";

const routes: Routes = [

    {
        path: '',
        component: ListAccountComponent,
        children: [
            { path: 'add', component: AddAccountComponent },
            { path: 'edit/:id', component: EditAccountComponent },
        ],
    },

];

@NgModule({

    declarations: [
        ListAccountComponent,
        AddAccountComponent,
        EditAccountComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature(POST_STATE_NAME, postsReducer),
        EffectsModule.forFeature([PostsEffects]),
    ]
})

export class PostsModule {}