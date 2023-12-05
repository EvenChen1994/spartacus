import { OnDestroy } from '@angular/core';
import { BaseSiteService, LoggerService, WindowRef } from '@spartacus/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { CdsConfig } from '../../config/index';
import { DebugEvent, ProfileTagPushEvent } from '../model/profile-tag.model';
import * as i0 from "@angular/core";
export declare class ProfileTagEventService implements OnDestroy {
    private winRef;
    private config;
    private baseSiteService;
    private platform;
    protected subscription: Subscription;
    latestConsentReference: BehaviorSubject<string | null>;
    profileTagDebug: boolean;
    private consentReference$;
    private profileTagWindow;
    private profileTagEvents$;
    protected logger: LoggerService;
    constructor(winRef: WindowRef, config: CdsConfig, baseSiteService: BaseSiteService, platform: any);
    private setConsentReferenceFromLocalStorage;
    getProfileTagEvents(): Observable<string | DebugEvent | Event>;
    getConsentReference(): Observable<string>;
    handleConsentWithdrawn(): void;
    addTracker(): Observable<string>;
    notifyProfileTagOfEventOccurrence(event: ProfileTagPushEvent): void;
    private setConsentReference;
    private debugModeChanged;
    private createConfig;
    private isScriptLoaded;
    private addScript;
    private initWindow;
    private exposeConfig;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProfileTagEventService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ProfileTagEventService>;
}
