import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'header-root',
    imports: [RouterLink],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeaderComponent {
    collapsed = true;
}