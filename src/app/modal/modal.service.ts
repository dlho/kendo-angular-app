import { Injectable, ViewContainerRef } from "@angular/core";
import { ModalComponent } from "./modal.component";

@Injectable()
export class ModalService {
	rootViewContainer!: ViewContainerRef;

	createComponent() {
		this.rootViewContainer.createComponent(ModalComponent);
	}

	setRootViewContainerRef(viewContainerRef: ViewContainerRef) {
		this.rootViewContainer = viewContainerRef;
	}

	addDynamicComponent(modalTitle: string, modalText: string) {
		const component = this.rootViewContainer.createComponent(ModalComponent);
		component.instance.modalTitle = modalTitle;
		component.instance.modalText = modalText;
		// Subscribe to the closeModal event and destroy the component
		component.instance.closeModal.subscribe(() => this.removeDynamicComponent(component));

		this.rootViewContainer.insert(component.hostView);
	}

	removeDynamicComponent(component: any) {
		component.destroy();
	}

}
