import * as AngularCore from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { i18n } from 'i18next';
import { first, take } from 'rxjs/operators';
import { I18nConfig } from '../config/i18n-config';
import { TranslationChunkService } from '../translation-chunk.service';
import { I18NEXT_INSTANCE } from './i18next-instance';
import { I18nextTranslationService } from './i18next-translation.service';

const testKey = 'testKey';
const testFallbackKey = 'testFallbackKey';
const testSecondFallbackKey = 'testSecondFallbackKey';
const testChunk = 'testChunk';
const testOptions = 'testOptions';
const nonBreakingSpace = String.fromCharCode(160);

fdescribe('I18nextTranslationService', () => {
  let service: I18nextTranslationService;
  let i18next: i18n;

  beforeEach(() => {
    const mockTranslationChunk = {
      getChunkNameForKey: jasmine
        .createSpy('getChunkNameForKey')
        .and.returnValue(testChunk),
    };

    TestBed.configureTestingModule({
      providers: [
        { provide: I18nConfig, useValue: { production: false } },
        {
          provide: TranslationChunkService,
          useValue: mockTranslationChunk,
        },
        I18nextTranslationService,
      ],
    });

    service = TestBed.inject(I18nextTranslationService);
    i18next = TestBed.inject(I18NEXT_INSTANCE);
  });

  describe('loadChunks', () => {
    it('should return result of i18next.loadChunks', () => {
      const expectedResult = new Promise(() => {});
      spyOn(i18next, 'loadNamespaces').and.returnValue(expectedResult as any);
      const chunks = ['chunk1', 'chunk2'];
      const result = service.loadChunks(chunks);
      expect(i18next.loadNamespaces).toHaveBeenCalledWith(chunks);
      expect(result).toBe(expectedResult);
    });
  });

  [
    testKey,
    [testKey, testFallbackKey],
    [testKey, testFallbackKey, testSecondFallbackKey],
  ].forEach((key) => {
    describe(`${
      typeof testKey === 'string'
        ? 'one translation key'
        : 'few translation keys'
    }  `, () => {
      const namespacedKeys = Array.isArray(key)
        ? key.map((k) => `${testChunk}:${k}`)
        : [`${testChunk}:${key}`];
      describe('translate', () => {
        beforeEach(() => {
          i18next.isInitialized = true;
        });

        describe(', when key exists,', () => {
          beforeEach(() => {
            spyOn(i18next, 'exists').and.returnValue(true);
          });

          it('should emit result of i18next.t', () => {
            spyOn(i18next, 't').and.returnValue('value');
            let result;
            service
              .translate(key, testOptions)
              .pipe(take(namespacedKeys.length))
              .subscribe((x) => (result = x));

            expect(i18next.t).toHaveBeenCalledWith(namespacedKeys, testOptions);
            expect(result).toBe('value');
          });
        });

        describe(', when key does NOT exist,', () => {
          beforeEach(() => {
            spyOn(i18next, 'exists').and.returnValue(false);
            spyOn(i18next, 'loadNamespaces').and.returnValue(
              new Promise(() => {})
            );
          });

          it('should emit non-breaking space if whitespaceUntilLoaded is true', () => {
            let result;
            service
              .translate(key, testOptions, true)
              .pipe(first())
              .subscribe((x) => (result = x));
            expect(result).toBe(nonBreakingSpace);
          });

          it('should NOT emit any value if whitespaceUntilLoaded is false', () => {
            let result = 'initial value';
            service
              .translate(key, testOptions, false)
              .pipe(first())
              .subscribe((x) => (result = x));
            expect(result).toBe('initial value');
          });

          it('should load chunk of key', () => {
            service.translate(key, testOptions).pipe(first()).subscribe();

            expect(i18next.loadNamespaces).toHaveBeenCalledWith(
              Array(namespacedKeys.length).fill(`${testChunk}`),
              jasmine.any(Function)
            );
          });
        });

        describe(', when key does NOT exist even after chunk was loaded,', () => {
          beforeEach(() => {
            spyOn(i18next, 'exists').and.returnValue(false);
            spyOn(i18next, 'loadNamespaces').and.callFake(((
              _namespaces,
              onChunkLoad
            ) => onChunkLoad()) as any);
          });

          it('should emit key in brackets for non-production', () => {
            let result;
            service
              .translate(key, testOptions)
              .pipe(first())
              .subscribe((x) => (result = x));
            expect(result).toEqual(
              namespacedKeys.map((k) => `[${k}]`).join(',')
            );
          });

          it('should return non-breaking space for production', () => {
            spyOnProperty(AngularCore, 'isDevMode').and.returnValue(
              () => false
            );
            let result;
            service
              .translate(key, testOptions)
              .pipe(first())
              .subscribe((x) => (result = x));
            expect(result).toBe(nonBreakingSpace);
          });
        });

        // describe(', when key does NOT exist firstly, but it comes with loaded chunk,', () => {
        //   beforeEach(() => {
        //     const existsValues = Array(namespacedKeys.length * 2).fill(false);
        //     existsValues[existsValues.length - 1] = true;
        //     spyOn(i18next, 'exists').and.returnValues(...existsValues);
        //     spyOn(i18next, 'loadNamespaces').and.callFake(((
        //       _namespaces,
        //       onChunkLoad
        //     ) => onChunkLoad()) as any);
        //   });

        //   it('should emit result of i18next.t', () => {
        //     spyOn(i18next, 't').and.returnValue('value');
        //     let result;
        //     service
        //       .translate(key, testOptions)
        //       .pipe(take(namespacedKeys.length))
        //       .subscribe((x) => (result = x));
        //     expect(i18next.t).toHaveBeenCalledWith(
        //       [namespacedKeys[namespacedKeys.length - 1]],
        //       testOptions
        //     );
        //     expect(result).toBe('value');
        //   });
        // });

        describe(', when language changed,', () => {
          it('should emit result of i18next.t in new language', () => {
            let languageChangedCallback;
            spyOn(i18next, 'off');
            spyOn(i18next, 'on').and.callFake(
              (_event, callback) => (languageChangedCallback = callback)
            );
            spyOn(i18next, 'exists').and.returnValue(true);
            spyOn(i18next, 't').and.returnValues('value1', 'value2');

            let result;
            service
              .translate(key, testOptions)
              .pipe(take(2))
              .subscribe((x) => (result = x));
            expect(result).toBe('value1');

            languageChangedCallback();
            expect(result).toBe('value2');

            expect(i18next.off).toHaveBeenCalledWith(
              'languageChanged',
              languageChangedCallback
            );
          });
        });
      });
    });
  });
});
