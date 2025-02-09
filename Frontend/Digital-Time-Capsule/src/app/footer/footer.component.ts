import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'footer-root',
    imports: [RouterLink],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
    currYear: number = -1;
    
    ngOnInit(): void{
        this.currYear = new Date().getFullYear();
    }
}