/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * ReleasePublishErrorResponse
 *
 */
class ReleasePublishErrorResponse {
  /**
   * Create a ReleasePublishErrorResponse.
   * @member {string} [message] error Details
   * @member {boolean} [isLogsAvailable] boolean property to tell if logs are
   * available for download
   */
  constructor() {
  }

  /**
   * Defines the metadata of ReleasePublishErrorResponse
   *
   * @returns {object} metadata of ReleasePublishErrorResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ReleasePublishErrorResponse',
      type: {
        name: 'Composite',
        className: 'ReleasePublishErrorResponse',
        modelProperties: {
          message: {
            required: false,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          },
          isLogsAvailable: {
            required: false,
            serializedName: 'is_logs_available',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = ReleasePublishErrorResponse;
