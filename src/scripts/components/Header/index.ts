class Header {
  selectors = {
    root: "[data-js-header] ",
    overlay: "[data-js-header-overlay]",
    burgerButton: "[data-js-header-burger-button]",
    menuItem: ".header__item a",
  };

  stateClasses = {
    isActive: "is-active",
    isLocked: "is-locked",
  };

  private rootElement: HTMLElement | null;
  private overlayElement: HTMLElement | null;
  private burgerButtonElement: HTMLElement | null;
  private menuItemElements: NodeListOf<HTMLElement>;
  private lenis;
  constructor(lenis) {
    this.rootElement = document.querySelector(this.selectors.root);
    this.overlayElement = this.rootElement?.querySelector(this.selectors.overlay) || null;
    this.burgerButtonElement = this.rootElement?.querySelector(this.selectors.burgerButton) || null;
    this.menuItemElements = this.rootElement?.querySelectorAll(this.selectors.menuItem) as NodeListOf<HTMLElement>;
    this.bindEvents();
    this.lenis = lenis;
  }

  closeMenu = () => {
    this.burgerButtonElement?.classList.remove(this.stateClasses.isActive);
    this.overlayElement?.classList.remove(this.stateClasses.isActive);
    document.documentElement.classList.remove(this.stateClasses.isLocked);
    this.lenis.start();
  };
  onBurgerButtonClick = () => {
    this.burgerButtonElement?.classList.toggle(this.stateClasses.isActive);
    this.overlayElement?.classList.toggle(this.stateClasses.isActive);
    document.documentElement.classList.toggle(this.stateClasses.isLocked);
    if (this.burgerButtonElement?.classList.contains(this.stateClasses.isActive)) {
      this.lenis.stop();
    } else {
      this.lenis.start();
    }
  };
  bindEvents() {
    this.burgerButtonElement?.addEventListener("click", this.onBurgerButtonClick);
    this.menuItemElements.forEach((menuItem) => {
      menuItem.addEventListener("click", this.closeMenu);
    });
  }
}
export default Header;
