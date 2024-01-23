/*
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorModel } from '@spartacus/core';
import { of, throwError } from 'rxjs';
import { KeyValuePair, OpfPage } from '../../model';
import { OpfPaymentVerificationComponent } from './opf-payment-verification.component';
import { OpfPaymentVerificationService } from './opf-payment-verification.service';

@Component({
  selector: 'cx-spinner',
  template: '',
})
class MockSpinnerComponent {}

describe('OpfPaymentVerificationComponent', () => {
  let component: OpfPaymentVerificationComponent;
  let fixture: ComponentFixture<OpfPaymentVerificationComponent>;
  let routeMock: jasmine.SpyObj<ActivatedRoute>;
  let paymentServiceMock: jasmine.SpyObj<OpfPaymentVerificationService>;

  beforeEach(() => {
    routeMock = jasmine.createSpyObj('ActivatedRoute', [], {
      snapshot: { queryParamMap: new Map() },
    });
    paymentServiceMock = jasmine.createSpyObj('OpfPaymentVerificationService', [
      'checkIfProcessingCartIdExist',
      'verifyResultUrl',
      'goToPage',
      'displayError',
      'removeResourcesAndGlobalFunctions',
      'runHostedFieldsPattern',
      'runHostedPagePattern',
    ]);

    TestBed.configureTestingModule({
      declarations: [OpfPaymentVerificationComponent, MockSpinnerComponent],
      providers: [
        { provide: ActivatedRoute, useValue: routeMock },
        {
          provide: OpfPaymentVerificationService,
          useValue: paymentServiceMock,
        },
      ],
    });

    fixture = TestBed.createComponent(OpfPaymentVerificationComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call checkIfProcessingCartIdExist', () => {
      paymentServiceMock.verifyResultUrl.and.returnValue(of());

      component.ngOnInit();
      expect(
        paymentServiceMock.checkIfProcessingCartIdExist
      ).toHaveBeenCalled();
    });

    it('should handle success scenario', () => {
      const mockPaymentSessionId = 'sessionId';
      const mockResponseMap: Array<KeyValuePair> = [];
      const mockAfterRedirectScriptFlag: string = 'false';
      const mockVerifyResult: {
        paymentSessionId: string;
        paramsMap: Array<KeyValuePair>;
        afterRedirectScriptFlag: string;
      } = {
        paymentSessionId: mockPaymentSessionId,
        paramsMap: mockResponseMap,
        afterRedirectScriptFlag: mockAfterRedirectScriptFlag,
      };

      paymentServiceMock.verifyResultUrl.and.returnValue(of(mockVerifyResult));
      paymentServiceMock.runHostedFieldsPattern.and.returnValue(of(true));
      paymentServiceMock.runHostedPagePattern.and.returnValue(of(true));

      component.ngOnInit();

      expect(paymentServiceMock.verifyResultUrl).toHaveBeenCalledWith(
        routeMock
      );
      expect(paymentServiceMock.runHostedPagePattern).toHaveBeenCalledWith(
        mockPaymentSessionId,
        mockResponseMap
      );
    });

    it('should handle error scenario', () => {
      const mockError: HttpErrorModel = { status: 500, message: 'Error' };

      const mockVerifyResult = {
        paymentSessionId: '1',
        paramsMap: [],
        afterRedirectScriptFlag: 'false',
      };

      paymentServiceMock.verifyResultUrl.and.returnValue(of(mockVerifyResult));
      paymentServiceMock.runHostedPagePattern.and.returnValue(
        throwError(mockError)
      );

      spyOn(component, 'onError');

      component.ngOnInit();

      expect(component.onError).toHaveBeenCalledWith(mockError);
    });

    it('should call onError when payment fails', () => {
      const mockVerifyResult = {
        paymentSessionId: '1',
        paramsMap: [],
        afterRedirectScriptFlag: 'false',
      };

      paymentServiceMock.verifyResultUrl.and.returnValue(of(mockVerifyResult));
      paymentServiceMock.runHostedPagePattern.and.returnValue(of(false));

      spyOn(component, 'onError');

      component.ngOnInit();

      expect(component.onError).toHaveBeenCalledWith(undefined);
    });

    it('should handle HostedField pattern successful scenario', () => {
      const mockVerifyResultWithFlag = {
        paymentSessionId: '1',
        paramsMap: [],
        afterRedirectScriptFlag: 'true',
      };

      paymentServiceMock.verifyResultUrl.and.returnValue(
        of(mockVerifyResultWithFlag)
      );
      paymentServiceMock.runHostedFieldsPattern.and.returnValue(of(true));
      component.ngOnInit();

      expect(paymentServiceMock.runHostedFieldsPattern).toHaveBeenCalled();
      expect(paymentServiceMock.runHostedPagePattern).not.toHaveBeenCalled();
    });
  });

  describe('onError', () => {
    it('should call paymentService.displayError with the provided error and paymentService.goToPage with OpfPage.CHECKOUT_REVIEW_PAGE', () => {
      const mockError: HttpErrorModel = { status: 404, message: 'Not Found' };

      component.onError(mockError);

      expect(paymentServiceMock.displayError).toHaveBeenCalledWith(mockError);
      expect(paymentServiceMock.goToPage).toHaveBeenCalledWith(
        OpfPage.CHECKOUT_REVIEW_PAGE
      );
    });
  });

  describe('ngOnDestroy', () => {
    it('should call removeResourcesAndGlobalFunctions in HostedField pattern', () => {
      const mockVerifyResultWithFlag = {
        paymentSessionId: '1',
        paramsMap: [],
        afterRedirectScriptFlag: 'true',
      };

      paymentServiceMock.verifyResultUrl.and.returnValue(
        of(mockVerifyResultWithFlag)
      );
      paymentServiceMock.runHostedFieldsPattern.and.returnValue(of(true));
      component.ngOnInit();

      component.ngOnDestroy();

      expect(
        paymentServiceMock.removeResourcesAndGlobalFunctions
      ).toHaveBeenCalled();
    });
  });
});
