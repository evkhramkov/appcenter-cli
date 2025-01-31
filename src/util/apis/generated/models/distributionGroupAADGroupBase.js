/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a DistributionGroupAADGroupBase.
 */
class DistributionGroupAADGroupBase {
  /**
   * Create a DistributionGroupAADGroupBase.
   * @member {uuid} [aadGroupId] The id of the aad group
   * @member {string} [displayName] The display name of the aad group
   */
  constructor() {
  }

  /**
   * Defines the metadata of DistributionGroupAADGroupBase
   *
   * @returns {object} metadata of DistributionGroupAADGroupBase
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DistributionGroupAADGroupBase',
      type: {
        name: 'Composite',
        className: 'DistributionGroupAADGroupBase',
        modelProperties: {
          aadGroupId: {
            required: false,
            serializedName: 'aad_group_id',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: false,
            serializedName: 'display_name',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DistributionGroupAADGroupBase;
