import {
  SchematicTestRunner,
  UnitTestTree,
} from '@angular-devkit/schematics/testing';
import {
  Schema as ApplicationOptions,
  Style,
} from '@schematics/angular/application/schema';
import { Schema as WorkspaceOptions } from '@schematics/angular/workspace/schema';
import * as path from 'path';
import {
  SPARTACUS_CONFIGURATION_MODULE,
  SPARTACUS_CORE,
  SPARTACUS_SCHEMATICS,
  SPARTACUS_STOREFRONTLIB,
  SPARTACUS_STYLES,
} from '../shared/libs-constants';
import { spartacusFeaturesModulePath } from '../shared/utils/test-utils';
import { Schema as SpartacusOptions } from './schema';

const collectionPath = path.join(__dirname, '../collection.json');

describe('add-spartacus', () => {
  const schematicRunner = new SchematicTestRunner(
    SPARTACUS_SCHEMATICS,
    collectionPath
  );

  let appTree: UnitTestTree;

  const workspaceOptions: WorkspaceOptions = {
    name: 'workspace',
    newProjectRoot: 'projects',
    version: '0.5.0',
  };

  const appOptions: ApplicationOptions = {
    name: 'schematics-test',
    inlineStyle: false,
    inlineTemplate: false,
    routing: false,
    style: Style.Scss,
    skipTests: false,
    standalone: false,
  };

  const defaultOptions: SpartacusOptions = {
    project: 'schematics-test',
    occPrefix: 'xxx',
    baseSite: 'electronics',
    baseUrl: 'https://localhost:9002',
    lazy: true,
    features: [],
  };

  const newLineRegEx = /(?:\\[rn]|[\r\n]+)+/g;

  beforeEach(async () => {
    appTree = await schematicRunner.runExternalSchematic(
      '@schematics/angular',
      'workspace',
      workspaceOptions
    );

    appTree = await schematicRunner.runExternalSchematic(
      '@schematics/angular',
      'application',
      appOptions,
      appTree
    );
  });

  it('should throw an error if app.module.ts not found', async () => {
    let standaloneAppTree: UnitTestTree;

    standaloneAppTree = await schematicRunner.runExternalSchematic(
      '@schematics/angular',
      'workspace',
      workspaceOptions
    );
    standaloneAppTree = await schematicRunner.runExternalSchematic(
      '@schematics/angular',
      'application',
      { ...appOptions, standalone: true },
      standaloneAppTree
    );

    await expect(
      schematicRunner.runSchematic(
        'add-spartacus',
        defaultOptions,
        standaloneAppTree
      )
    ).rejects.toMatchInlineSnapshot(`
      [Error: File "app.module.ts" not found. Please re-create your application:
      1. remove your application code
      2. make sure to pass the flag "--standalone=false" to the command "ng new". For more, see https://angular.io/cli/new#options
      3. try again installing Spartacus with a command "ng add @spartacus/schematics" ...
              
      Note: Since version 17, Angular's command "ng new" by default creates an app without a file "app.module.ts" (in a so-called "standalone" mode). But Spartacus installer requires this file to be present.
      ]
    `);
  });

  it('should add spartacus deps', async () => {
    const tree = await schematicRunner.runSchematic(
      'add-spartacus',
      defaultOptions,
      appTree
    );

    const packageJson = tree.readContent('/package.json');
    const packageObj = JSON.parse(packageJson);
    const depPackageList = Object.keys(packageObj.dependencies);
    expect(depPackageList.includes(SPARTACUS_CORE)).toBe(true);
    expect(depPackageList.includes(SPARTACUS_STOREFRONTLIB)).toBe(true);
    expect(depPackageList.includes(SPARTACUS_STYLES)).toBe(true);
  });

  it('Import necessary modules in app.module', async () => {
    const tree = await schematicRunner.runSchematic(
      'add-spartacus',
      defaultOptions,
      appTree
    );

    const appModule = tree.readContent(
      '/projects/schematics-test/src/app/app.module.ts'
    );

    const appModuleImports = [
      `import { HttpClientModule } from "@angular/common/http";`,
      `import { AppRoutingModule } from "@spartacus/storefront";`,
      `import { StoreModule } from "@ngrx/store";`,
      `import { EffectsModule } from "@ngrx/effects";`,
      `import { SpartacusModule } from './spartacus/spartacus.module';`,
    ];

    appModuleImports.forEach((appImport) =>
      expect(appModule.includes(appImport)).toBe(true)
    );
  });

  describe('Setup configuration', () => {
    it('should set baseUrl', async () => {
      const tree = await schematicRunner.runSchematic(
        'add-spartacus',
        { ...defaultOptions, baseUrl: 'test-url' },
        appTree
      );

      const appModule = tree.readContent(
        `/projects/schematics-test/src/app/spartacus/${SPARTACUS_CONFIGURATION_MODULE}.module.ts`
      );
      expect(appModule.includes(`baseUrl: 'test-url'`)).toBe(true);
    });

    it('should set occPrefix', async () => {
      const tree = await schematicRunner.runSchematic(
        'add-spartacus',
        { ...defaultOptions, occPrefix: '/occ/v2/' },
        appTree
      );

      const appModule = tree.readContent(
        `/projects/schematics-test/src/app/spartacus/${SPARTACUS_CONFIGURATION_MODULE}.module.ts`
      );
      expect(appModule.includes(`prefix: '/occ/v2/'`)).toBe(true);
    });

    it('should not set occPrefix', async () => {
      const tree = await schematicRunner.runSchematic(
        'add-spartacus',
        { ...defaultOptions },
        appTree
      );

      const appModule = tree.readContent(
        `/projects/schematics-test/src/app/spartacus/${SPARTACUS_CONFIGURATION_MODULE}.module.ts`
      );
      expect(appModule.includes(`prefix: '/occ/v2/'`)).toBe(false);
    });

    it('should set feature level', async () => {
      const tree = await schematicRunner.runSchematic(
        'add-spartacus',
        { ...defaultOptions, featureLevel: '1.5' },
        appTree
      );

      const appModule = tree.readContent(
        `/projects/schematics-test/src/app/spartacus/${SPARTACUS_CONFIGURATION_MODULE}.module.ts`
      );
      expect(appModule.includes(`level: '1.5'`)).toBe(true);
    });

    it('should create the styles config file.', async () => {
      const tree = await schematicRunner.runSchematic(
        'add-spartacus',
        defaultOptions,
        appTree
      );

      expect(
        tree.exists('/projects/schematics-test/src/styles-config.scss')
      ).toBe(true);
    });

    it('should set styleVersion based on featureLevel', async () => {
      const tree = await schematicRunner.runSchematic(
        'add-spartacus',
        { ...defaultOptions, featureLevel: '5.5' },
        appTree
      );

      const appModule = tree.readContent(
        '/projects/schematics-test/src/styles-config.scss'
      );
      expect(appModule.includes(`$styleVersion: 5.5`)).toBe(true);
    });

    it('Main styles should import the styles config.', async () => {
      const tree = await schematicRunner.runSchematic(
        'add-spartacus',
        defaultOptions,
        appTree
      );

      const mainStylesContent = tree.readContent(
        '/projects/schematics-test/src/styles.scss'
      );
      expect(mainStylesContent.includes("@import 'styles-config';")).toBe(true);
    });

    describe('context config', () => {
      describe('baseSite', () => {
        it('should set a single baseSite', async () => {
          const tree = await schematicRunner.runSchematic(
            'add-spartacus',
            { ...defaultOptions, baseSite: 'test-site' },
            appTree
          );

          const appModule = tree.readContent(
            `/projects/schematics-test/src/app/spartacus/${SPARTACUS_CONFIGURATION_MODULE}.module.ts`
          );
          expect(appModule.includes(`baseSite: ['test-site']`)).toBe(true);
        });

        it('should set multiple baseSites', async () => {
          const tree = await schematicRunner.runSchematic(
            'add-spartacus',
            {
              ...defaultOptions,
              baseSite:
                'electronics-spa,apparel-uk-spa,apparel-uk,electronics,apparel-de',
            },
            appTree
          );

          const appModule = tree.readContent(
            `/projects/schematics-test/src/app/spartacus/${SPARTACUS_CONFIGURATION_MODULE}.module.ts`
          );

          expect(
            appModule.includes(
              `baseSite: ['electronics-spa', 'apparel-uk-spa', 'apparel-uk', 'electronics', 'apparel-de']`
            )
          ).toBe(true);
        });
      });

      it('should enable auto-base site by omitting context property in config', async () => {
        const tree = await schematicRunner.runSchematic(
          'add-spartacus',
          {
            ...defaultOptions,
            baseSite: '',
          },
          appTree
        );

        const appModule = tree.readContent(
          `/projects/schematics-test/src/app/spartacus/${SPARTACUS_CONFIGURATION_MODULE}.module.ts`
        );

        expect(appModule.includes(`baseSite: [`)).toBeFalsy();
      });
    });

    describe('currency', () => {
      it('should set no currency when not provided', async () => {
        const tree = await schematicRunner.runSchematic(
          'add-spartacus',
          {
            ...defaultOptions,
          },
          appTree
        );

        const appModule = tree.readContent(
          `/projects/schematics-test/src/app/spartacus/${SPARTACUS_CONFIGURATION_MODULE}.module.ts`
        );

        expect(appModule.includes(`currency: `)).toBe(false);
      });
      it('should set the single currency', async () => {
        const tree = await schematicRunner.runSchematic(
          'add-spartacus',
          {
            ...defaultOptions,
            currency: 'rsd',
          },
          appTree
        );

        const appModule = tree.readContent(
          `/projects/schematics-test/src/app/spartacus/${SPARTACUS_CONFIGURATION_MODULE}.module.ts`
        );

        expect(appModule.includes(`currency: ['RSD']`)).toBe(true);
      });
      it('should set multiple currencies', async () => {
        const tree = await schematicRunner.runSchematic(
          'add-spartacus',
          {
            ...defaultOptions,
            currency: 'CAD,rsd',
          },
          appTree
        );

        const appModule = tree.readContent(
          `/projects/schematics-test/src/app/spartacus/${SPARTACUS_CONFIGURATION_MODULE}.module.ts`
        );

        expect(appModule.includes(`currency: ['CAD', 'RSD']`)).toBe(true);
      });
    });
    describe('language', () => {
      it('should set no language when not provided', async () => {
        const tree = await schematicRunner.runSchematic(
          'add-spartacus',
          {
            ...defaultOptions,
          },
          appTree
        );

        const appModule = tree.readContent(
          `/projects/schematics-test/src/app/spartacus/${SPARTACUS_CONFIGURATION_MODULE}.module.ts`
        );

        expect(appModule.includes(`language: `)).toBe(false);
      });
      it('should set the single language', async () => {
        const tree = await schematicRunner.runSchematic(
          'add-spartacus',
          {
            ...defaultOptions,
            language: 'RS',
          },
          appTree
        );

        const appModule = tree.readContent(
          `/projects/schematics-test/src/app/spartacus/${SPARTACUS_CONFIGURATION_MODULE}.module.ts`
        );

        expect(appModule.includes(`language: ['rs']`)).toBe(true);
      });
      it('should set multiple languages', async () => {
        const tree = await schematicRunner.runSchematic(
          'add-spartacus',
          {
            ...defaultOptions,
            language: 'EN,RS',
          },
          appTree
        );

        const appModule = tree.readContent(
          `/projects/schematics-test/src/app/spartacus/${SPARTACUS_CONFIGURATION_MODULE}.module.ts`
        );

        expect(appModule.includes(`language: ['en', 'rs']`)).toBe(true);
      });
    });

    describe('urlParameters', () => {
      it('should not set the urlParameters, if not provided', async () => {
        const tree = await schematicRunner.runSchematic(
          'add-spartacus',
          defaultOptions,
          appTree
        );

        const appModule = tree.readContent(
          `/projects/schematics-test/src/app/spartacus/${SPARTACUS_CONFIGURATION_MODULE}.module.ts`
        );

        expect(appModule.includes(`urlParameters: ['`)).toBe(false);
      });
      it('should set the provided urlParameters', async () => {
        const tree = await schematicRunner.runSchematic(
          'add-spartacus',
          {
            ...defaultOptions,
            urlParameters: 'baseSite,language,currency',
          },
          appTree
        );

        const appModule = tree.readContent(
          `/projects/schematics-test/src/app/spartacus/${SPARTACUS_CONFIGURATION_MODULE}.module.ts`
        );

        expect(
          appModule.includes(
            `urlParameters: ['baseSite', 'language', 'currency']`
          )
        ).toBe(true);
      });
    });

    describe('baseSite, language, currency and urlParameters', () => {
      it('should combine all context params properly', async () => {
        const tree = await schematicRunner.runSchematic(
          'add-spartacus',
          {
            ...defaultOptions,
            baseSite:
              'electronics-spa,apparel-uk-spa,apparel-uk,electronics,apparel-de',
            currency: 'CAD,rsd',
            language: 'EN,RS',
            urlParameters: 'baseSite,language,currency',
          },
          appTree
        );

        const appModule = tree.readContent(
          `/projects/schematics-test/src/app/spartacus/${SPARTACUS_CONFIGURATION_MODULE}.module.ts`
        );

        expect(appModule.includes(`currency: ['CAD', 'RSD'],`)).toBe(true);
        expect(appModule.includes(`language: ['en', 'rs'],`)).toBe(true);
        expect(
          appModule.includes(
            `baseSite: ['electronics-spa', 'apparel-uk-spa', 'apparel-uk', 'electronics', 'apparel-de'],`
          )
        ).toBe(true);
        expect(
          appModule.includes(
            `urlParameters: ['baseSite', 'language', 'currency']`
          )
        ).toBe(true);
      });
    });
  });

  it('Import Spartacus styles to styles.scss', async () => {
    const tree = await schematicRunner.runSchematic(
      'add-spartacus',
      defaultOptions,
      appTree
    );

    const stylesFile = tree.readContent(
      '/projects/schematics-test/src/styles.scss'
    );
    expect(stylesFile.includes(`@import '@spartacus/styles/index';`)).toBe(
      true
    );
  });

  it('Add theme to styles.scss', async () => {
    const tree = await schematicRunner.runSchematic(
      'add-spartacus',
      { ...defaultOptions, theme: 'santorini' },
      appTree
    );

    const stylesFile = tree.readContent(
      '/projects/schematics-test/src/styles.scss'
    );
    expect(
      stylesFile.includes(`@import '@spartacus/styles/scss/theme/santorini';`)
    ).toBe(true);
  });

  it('Overwrite app.component with cx-storefront', async () => {
    const tree = await schematicRunner.runSchematic(
      'add-spartacus',
      { ...defaultOptions, overwriteAppComponent: true },
      appTree
    );

    const appComponentTemplate = tree
      .readContent('/projects/schematics-test/src/app/app.component.html')
      .replace(newLineRegEx, '');

    expect(appComponentTemplate).toEqual(`<cx-storefront></cx-storefront>`);
  });

  it('Add cx-storefront component to your app.component', async () => {
    const tree = await schematicRunner.runSchematic(
      'add-spartacus',
      { ...defaultOptions, overwriteAppComponent: false },
      appTree
    );

    const appComponentTemplate = tree.readContent(
      '/projects/schematics-test/src/app/app.component.html'
    );
    const cxTemplate = `<cx-storefront></cx-storefront>`;
    expect(appComponentTemplate.includes(cxTemplate)).toBe(true);
    expect(appComponentTemplate.length).toBeGreaterThan(cxTemplate.length);
  });

  describe('Update index.html', () => {
    it('should not add meta tags by default', async () => {
      const tree = await schematicRunner.runSchematic(
        'add-spartacus',
        defaultOptions,
        appTree
      );

      const indexHtmlFile = tree.readContent(
        '/projects/schematics-test/src/index.html'
      );
      expect(indexHtmlFile.includes(`<meta name="occ-backend-base-url"`)).toBe(
        false
      );
      expect(
        indexHtmlFile.includes(`<meta name="media-backend-base-url"`)
      ).toBe(false);
    });

    it('should add meta tags', async () => {
      const tree = await schematicRunner.runSchematic(
        'add-spartacus',
        { ...defaultOptions, useMetaTags: true },
        appTree
      );

      const indexHtmlFile = tree.readContent(
        '/projects/schematics-test/src/index.html'
      );
      expect(
        indexHtmlFile.includes(
          `<meta name="occ-backend-base-url" content="${defaultOptions.baseUrl}" />`
        )
      ).toBe(true);
      expect(
        indexHtmlFile.includes(
          `<meta name="media-backend-base-url" content="MEDIA_BACKEND_BASE_URL_VALUE" />`
        )
      ).toBe(true);
    });

    it('should set baseUrl in meta tag', async () => {
      const tree = await schematicRunner.runSchematic(
        'add-spartacus',
        { ...defaultOptions, useMetaTags: true, baseUrl: 'test-url' },
        appTree
      );

      const indexHtmlFile = tree.readContent(
        '/projects/schematics-test/src/index.html'
      );
      const appModule = tree.readContent(
        '/projects/schematics-test/src/app/app.module.ts'
      );
      expect(
        indexHtmlFile.includes(
          `<meta name="occ-backend-base-url" content="test-url" />`
        )
      ).toBe(true);
      expect(appModule.includes(`baseUrl:`)).toBe(false);
    });
  });

  describe('when invoked twice', () => {
    it('should not duplicate imports, exports nor declarations arrays', async () => {
      appTree = await schematicRunner.runSchematic(
        'add-spartacus',
        defaultOptions,
        appTree
      );

      // run it again
      appTree = await schematicRunner.runSchematic(
        'add-spartacus',
        defaultOptions,
        appTree
      );

      const featureModuleContent = appTree.readContent(
        `/projects/schematics-test/${spartacusFeaturesModulePath}`
      );
      const importModuleOccurrences =
        featureModuleContent.match(/AuthModule.forRoot()/gm)?.length ?? -1;
      expect(importModuleOccurrences).toBe(1);

      const spartacusModuleContent = appTree.readContent(
        '/projects/schematics-test/src/app/spartacus/spartacus.module.ts'
      );
      expect(spartacusModuleContent).toContain(`BaseStorefrontModule`);
      const exportOccurrences =
        spartacusModuleContent.match(/BaseStorefrontModule/gm)?.length ?? -1;
      // we expect three occurrences - one in the import statement, imports array and in the exports array
      expect(exportOccurrences).toBe(3);
    });

    it('should not duplicate providers arrays', async () => {
      appTree = await schematicRunner.runSchematic(
        'add-spartacus',
        defaultOptions,
        appTree
      );

      // run it again
      appTree = await schematicRunner.runSchematic(
        'add-spartacus',
        defaultOptions,
        appTree
      );

      const configurationModule = appTree.readContent(
        '/projects/schematics-test/src/app/spartacus/spartacus-configuration.module.ts'
      );

      // test the `provideConfig` configs
      expect(configurationModule).toContain(`provideConfig(layoutConfig)`);
      const provideConfigOccurrences =
        configurationModule.match(/provideConfig\(layoutConfig\)/gm)?.length ??
        -1;
      expect(provideConfigOccurrences).toBe(1);

      // test other Spartacus-related configs (i.e. NON `provideConfig` configs)
      expect(configurationModule).toContain(`...defaultCmsContentProviders`);
      const nonProvideConfigOccurrences =
        configurationModule.match(/\.\.\.defaultCmsContentProviders/gm)
          ?.length ?? -1;
      expect(nonProvideConfigOccurrences).toBe(1);
    });
  });
});
