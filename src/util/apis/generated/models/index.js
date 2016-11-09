/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/* jshint latedef:false */
/* jshint forin:false */
/* jshint noempty:false */

'use strict';

exports.Status = require('./status');
exports.Failure = require('./failure');
exports.ErrorResponse = require('./errorResponse');
exports.ErrorDetails = require('./errorDetails');
exports.ApiTokensPostResponse = require('./apiTokensPostResponse');
exports.ApiTokensPostRequest = require('./apiTokensPostRequest');
exports.ApiTokenResponse = require('./apiTokenResponse');
exports.AppPatchRequest = require('./appPatchRequest');
exports.AppRequest = require('./appRequest');
exports.FeatureNameResponse = require('./featureNameResponse');
exports.FeatureRequestResponse = require('./featureRequestResponse');
exports.FeaturePatchRequest = require('./featurePatchRequest');
exports.UserUpdateRequest = require('./userUpdateRequest');
exports.AppResponse = require('./appResponse');
exports.Owner = require('./owner');
exports.FeatureResponse = require('./featureResponse');
exports.UserProfileResponse = require('./userProfileResponse');
exports.InvitationDetailResponse = require('./invitationDetailResponse');
exports.DistributionGroupResponse = require('./distributionGroupResponse');
exports.DistributionGroupRequest = require('./distributionGroupRequest');
exports.DistributionGroupPatchRequest = require('./distributionGroupPatchRequest');
exports.DistributionGroupUserRequest = require('./distributionGroupUserRequest');
exports.DistributionGroupUserResponse = require('./distributionGroupUserResponse');
exports.SourceRepository = require('./sourceRepository');
exports.WebSocketContainer = require('./webSocketContainer');
exports.Project = require('./project');
exports.XcodeScheme = require('./xcodeScheme');
exports.XcodeSchemeContainer = require('./xcodeSchemeContainer');
exports.XamarinSolution = require('./xamarinSolution');
exports.AndroidProject = require('./androidProject');
exports.AndroidModule = require('./androidModule');
exports.ToolsetProjects = require('./toolsetProjects');
exports.BranchStatus = require('./branchStatus');
exports.Build = require('./build');
exports.BranchProperties = require('./branchProperties');
exports.Branch = require('./branch');
exports.Commit = require('./commit');
exports.BranchConfiguration = require('./branchConfiguration');
exports.BranchConfigurationToolsets = require('./branchConfigurationToolsets');
exports.XcodeBranchConfigurationProperties = require('./xcodeBranchConfigurationProperties');
exports.JavaScriptBranchConfigurationProperties = require('./javaScriptBranchConfigurationProperties');
exports.XamarinBranchConfigurationProperties = require('./xamarinBranchConfigurationProperties');
exports.AndroidBranchConfigurationProperties = require('./androidBranchConfigurationProperties');
exports.RepoInfo = require('./repoInfo');
exports.XcodeVersion = require('./xcodeVersion');
exports.BuildPatch = require('./buildPatch');
exports.SuccessResponse = require('./successResponse');
exports.ValidationErrorResponse = require('./validationErrorResponse');
exports.PackageUploadBeginResponse = require('./packageUploadBeginResponse');
exports.PackageUploadEndRequest = require('./packageUploadEndRequest');
exports.PackageUploadEndResponse = require('./packageUploadEndResponse');
exports.PackageUpdateRequest = require('./packageUpdateRequest');
exports.PackageUpdateResponse = require('./packageUpdateResponse');
exports.PackageDetails = require('./packageDetails');
exports.DistributionGroup = require('./distributionGroup');
exports.BasicPackageDetails = require('./basicPackageDetails');
exports.Symbol = require('./symbol');
exports.SymbolUpload = require('./symbolUpload');
exports.SymbolUploadBeginRequest = require('./symbolUploadBeginRequest');
exports.SymbolUploadBeginResponse = require('./symbolUploadBeginResponse');
exports.SymbolUploadEndRequest = require('./symbolUploadEndRequest');
exports.AppVersion = require('./appVersion');
exports.Stacktrace = require('./stacktrace');
exports.Thread = require('./thread');
exports.StackFrame = require('./stackFrame');
exports.Exception = require('./exception');
exports.ReasonStackFrame = require('./reasonStackFrame');
exports.CrashGroup = require('./crashGroup');
exports.CrashGroupChange = require('./crashGroupChange');
exports.Crash = require('./crash');
exports.Segmentation = require('./segmentation');
exports.SegmentationDataItem = require('./segmentationDataItem');
exports.Histogram = require('./histogram');
exports.HistogramDataItem = require('./histogramDataItem');
exports.CrashCounts = require('./crashCounts');
exports.DateTimeCounts = require('./dateTimeCounts');
exports.ActiveDeviceCounts = require('./activeDeviceCounts');
exports.Places = require('./places');
exports.Place = require('./place');
exports.ErrorModel = require('./errorModel');
exports.ErrorError = require('./errorError');
exports.SessionDurationsDistribution = require('./sessionDurationsDistribution');
exports.SessionDurationsDistributionDistributionItem = require('./sessionDurationsDistributionDistributionItem');
exports.Versions = require('./versions');
exports.Version = require('./version');
exports.SessionCounts = require('./sessionCounts');
exports.SessionsPerDevice = require('./sessionsPerDevice');
exports.SessionsPerDeviceSessionsPerUserItem = require('./sessionsPerDeviceSessionsPerUserItem');
exports.AnalyticsModels = require('./analyticsModels');
exports.Model = require('./model');
exports.Languages = require('./languages');
exports.Language = require('./language');
exports.OSes = require('./oSes');
exports.OS = require('./os');
exports.AvailableVersions = require('./availableVersions');
exports.CrashFreeDevicePercentages = require('./crashFreeDevicePercentages');
exports.DateTimePercentages = require('./dateTimePercentages');
exports.CrashesOverallItem = require('./crashesOverallItem');
exports.CrashOverall = require('./crashOverall');
exports.CrashGroupModels = require('./crashGroupModels');
exports.CrashGroupModel = require('./crashGroupModel');
exports.CrashGroupOperatingSystems = require('./crashGroupOperatingSystems');
exports.CrashGroupOperatingSystem = require('./crashGroupOperatingSystem');
exports.CrashGroupContainer = require('./crashGroupContainer');
exports.CrashGroupAndVersion = require('./crashGroupAndVersion');
exports.Events = require('./events');
exports.Event = require('./event');
exports.LogContainer = require('./logContainer');
exports.Log = require('./log');
exports.Device = require('./device');
exports.DeviceConfiguration = require('./deviceConfiguration');
exports.DeviceModel = require('./deviceModel');
exports.TestRun = require('./testRun');
exports.TestRunStatistics = require('./testRunStatistics');
exports.TestSeries = require('./testSeries');
exports.TestRunSummary = require('./testRunSummary');
exports.DeviceSelection = require('./deviceSelection');
exports.Subscription = require('./subscription');
exports.Tier = require('./tier');
exports.TestReport = require('./testReport');
exports.TestReportStats = require('./testReportStats');
exports.TestReportFeaturesItem = require('./testReportFeaturesItem');
exports.TestReportFeaturesItemTestsItem = require('./testReportFeaturesItemTestsItem');
exports.TestReportFeaturesItemTestsItemRunsItem = require('./testReportFeaturesItemTestsItemRunsItem');
exports.TestReportFeaturesItemTestsItemRunsItemStepsItem = require('./testReportFeaturesItemTestsItemRunsItemStepsItem');
exports.TestReportFeaturesItemTestsItemRunsItemStepsItemStepExecutionsItem = require('./testReportFeaturesItemTestsItemRunsItemStepsItemStepExecutionsItem');
exports.TestReportDeviceLogsItem = require('./testReportDeviceLogsItem');
exports.TestCloudErrorDetails = require('./testCloudErrorDetails');
exports.TestCloudFileHash = require('./testCloudFileHash');
exports.TestCloudStartTestRunOptions = require('./testCloudStartTestRunOptions');
exports.TestCloudStartTestRunResult = require('./testCloudStartTestRunResult');
exports.TestRunState = require('./testRunState');
exports.Permission = require('./permission');
exports.Table = require('./table');
exports.TableColumn = require('./tableColumn');
exports.ImportDataContainer = require('./importDataContainer');
exports.CrashGroups = require('./crashGroups');