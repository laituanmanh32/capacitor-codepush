// Type definitions for Apache Cordova CodePush plugin.
// Project: https://github.com/Microsoft/cordova-plugin-code-push
//
// Copyright (c) Microsoft Corporation
// All rights reserved.
// Licensed under the MIT license.

import { InstallOptions } from "./installOptions";

interface StatusReport {
    status: number;
    label: string;
    appVersion: string;
    deploymentKey: string;
    previousLabelOrAppVersion: string;
    previousDeploymentKey: string;
}

interface PluginCallResponse<T> {
    value: T;
}

interface NativeDecodeSignatureOptions {
    publicKey: string;
    signature: string;
}

interface NativePathOptions {
    path: string;
}

interface NativeHashOptions {
    packageHash: string;
}

interface NativeInstallOptions extends InstallOptions {
    startLocation: string;
}

interface NativeStatusReportOptions {
    statusReport: StatusReport;
}

export interface NativeCodePushPlugin {
    getDeploymentKey(): Promise<PluginCallResponse<string>>;
    getServerURL(): Promise<PluginCallResponse<string>>;
    getPublicKey(): Promise<PluginCallResponse<string>>;
    decodeSignature(options: NativeDecodeSignatureOptions): Promise<PluginCallResponse<string>>;
    getBinaryHash(): Promise<PluginCallResponse<string>>;
    getPackageHash(options: NativePathOptions): Promise<PluginCallResponse<string>>;
    notifyApplicationReady(): Promise<void>;
    isFirstRun(options: NativeHashOptions): Promise<PluginCallResponse<boolean>>;
    isPendingUpdate(): Promise<PluginCallResponse<boolean>>;
    isFailedUpdate(options: NativeHashOptions): Promise<PluginCallResponse<boolean>>;
    install(options: NativeInstallOptions): Promise<void>;
    reportFailed(options: NativeStatusReportOptions): Promise<void>;
    reportSucceeded(options: NativeStatusReportOptions): Promise<void>;
    restartApplication(): Promise<void>;
    preInstall(options: NativeInstallOptions): Promise<void>;
    getAppVersion(): Promise<PluginCallResponse<string>>;
    getNativeBuildTime(): Promise<PluginCallResponse<string>>;

    addListener(eventName: "codePushStatus", listenerFunc: (info: any) => void): void;
}

