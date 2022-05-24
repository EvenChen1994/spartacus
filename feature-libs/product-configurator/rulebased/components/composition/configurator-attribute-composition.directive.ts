import {
  Directive,
  Injector,
  Input,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { ConfiguratorAttributeCompositionConfig } from './configurator-attribute-composition.config';
import { ConfiguratorAttributeCompositionContext } from './configurator-attribute-composition.model';

@Directive({
  selector: '[cxConfiguratorAttributeComponent]',
})
export class ConfiguratorAttributeCompositionDirective implements OnInit {
  @Input('cxConfiguratorAttributeComponent')
  context: ConfiguratorAttributeCompositionContext;

  constructor(
    protected vcr: ViewContainerRef,
    protected configuratorAttributeCompositionConfig: ConfiguratorAttributeCompositionConfig
  ) {}

  ngOnInit(): void {
    const componentKey = this.context.componentKey;

    const composition =
      this.configuratorAttributeCompositionConfig.productConfigurator
        ?.attributeComponentAssignment;
    if (composition) {
      this.renderComponent(composition[componentKey]);
    }
    //TODO CHHI log warn in dev mode if no config available
  }

  protected renderComponent(component: any) {
    if (component) {
      this.vcr.createComponent(component, {
        injector: this.getComponentInjector(),
      });
    }
    //TODO CHHI log warn in dev mode if component is undefined, missing in config
  }

  protected getComponentInjector(): Injector {
    return Injector.create({
      providers: [
        {
          provide: ConfiguratorAttributeCompositionContext,
          useValue: this.context,
        },
      ],
      parent: this.vcr.injector,
    });
  }
}
