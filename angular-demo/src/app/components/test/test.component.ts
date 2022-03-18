import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.scss"],
})
export class TestComponent implements OnInit {
  title = "Angular Material Demo";
  count = 0;

  ngOnInit(): void {
    console.log("INIT");
  }

  updateTitle(evt: Event): string {
    const { value } = evt.target as HTMLInputElement;
    if (!value) {
      return (this.title = "Angular Material Demo");
    }
    return (this.title = value);
  }

  increase(): void {
    this.count++;
  }
}
