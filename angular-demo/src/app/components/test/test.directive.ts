import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({ selector: "[appTest]" })
export class TestDirective {
  constructor(
    private elementRef: ElementRef<HTMLDivElement>,
    private renderer: Renderer2
  ) {
    // this.elementRef.nativeElement.style.fontWeight = "bold";
    this.renderer.setStyle(this.elementRef.nativeElement, "cursor", "pointer");
    this.renderer.addClass(this.elementRef.nativeElement, "TEST-CLASS");
  }

  @HostListener("mouseenter")
  onMouseEnter() {
    this.setFontWeight("bold");
  }
  @HostListener("mouseleave")
  onMouseLeave() {
    this.setFontWeight("normal");
  }

  private setFontWeight(val: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, "font-weight", val);
  }
}
