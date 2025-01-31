/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * A request containing information pertaining to begin a release upload
 * process
 *
 */
class ReleaseUploadBeginRequest {
  /**
   * Create a ReleaseUploadBeginRequest.
   * @member {number} [releaseId] The ID of the release.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ReleaseUploadBeginRequest
   *
   * @returns {object} metadata of ReleaseUploadBeginRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ReleaseUploadBeginRequest',
      type: {
        name: 'Composite',
        className: 'ReleaseUploadBeginRequest',
        modelProperties: {
          releaseId: {
            required: false,
            serializedName: 'release_id',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = ReleaseUploadBeginRequest;
