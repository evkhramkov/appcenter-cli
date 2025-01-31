/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Class representing a TestReport.
 */
class TestReport {
  /**
   * Create a TestReport.
   * @member {string} appUploadId
   * @member {string} date
   * @member {string} testType
   * @member {string} platform
   * @member {object} stats
   * @member {number} [stats.os]
   * @member {number} [stats.devices]
   * @member {number} [stats.filesize]
   * @member {number} [stats.totalDeviceMinutes]
   * @member {number} [stats.devicesNotRunned]
   * @member {number} [stats.failed]
   * @member {number} [stats.skipped]
   * @member {number} [stats.passed]
   * @member {number} [stats.total]
   * @member {number} [stats.devicesFinished]
   * @member {number} [stats.devicesFailed]
   * @member {number} [stats.devicesSkipped]
   * @member {number} [stats.stepCount]
   * @member {object} [stats.artifacts]
   * @member {string} id
   * @member {number} schemaVersion
   * @member {number} revision
   * @member {array} features
   * @member {array} finishedDeviceSnapshots
   * @member {array} deviceLogs
   * @member {string} dateFinished
   * @member {string} [errorMessage]
   * @member {array} [snapshotFatalErrors]
   */
  constructor() {
  }

  /**
   * Defines the metadata of TestReport
   *
   * @returns {object} metadata of TestReport
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TestReport',
      type: {
        name: 'Composite',
        className: 'TestReport',
        modelProperties: {
          appUploadId: {
            required: true,
            serializedName: 'app_upload_id',
            type: {
              name: 'String'
            }
          },
          date: {
            required: true,
            serializedName: 'date',
            type: {
              name: 'String'
            }
          },
          testType: {
            required: true,
            serializedName: 'testType',
            type: {
              name: 'String'
            }
          },
          platform: {
            required: true,
            serializedName: 'platform',
            type: {
              name: 'String'
            }
          },
          stats: {
            required: true,
            serializedName: 'stats',
            type: {
              name: 'Composite',
              className: 'TestReportStats'
            }
          },
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          schemaVersion: {
            required: true,
            serializedName: 'schema_version',
            type: {
              name: 'Number'
            }
          },
          revision: {
            required: true,
            serializedName: 'revision',
            type: {
              name: 'Number'
            }
          },
          features: {
            required: true,
            serializedName: 'features',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'TestReportFeaturesItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'TestReportFeaturesItem'
                  }
              }
            }
          },
          finishedDeviceSnapshots: {
            required: true,
            serializedName: 'finished_device_snapshots',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          deviceLogs: {
            required: true,
            serializedName: 'device_logs',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'TestReportDeviceLogsItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'TestReportDeviceLogsItem'
                  }
              }
            }
          },
          dateFinished: {
            required: true,
            serializedName: 'date_finished',
            type: {
              name: 'String'
            }
          },
          errorMessage: {
            required: false,
            serializedName: 'errorMessage',
            type: {
              name: 'String'
            }
          },
          snapshotFatalErrors: {
            required: false,
            serializedName: 'snapshot_fatal_errors',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'TestReportSnapshotFatalErrorsItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'TestReportSnapshotFatalErrorsItem'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = TestReport;
