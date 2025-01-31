/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Class representing a CloseAccountOrganizationResponse.
 * @extends models['OrganizationResponse']
 */
class CloseAccountOrganizationResponse extends models['OrganizationResponse'] {
  /**
   * Create a CloseAccountOrganizationResponse.
   * @member {number} collaboratorsCount The number of collaborators from the
   * organization
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of CloseAccountOrganizationResponse
   *
   * @returns {object} metadata of CloseAccountOrganizationResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CloseAccountOrganizationResponse',
      type: {
        name: 'Composite',
        className: 'CloseAccountOrganizationResponse',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: true,
            serializedName: 'display_name',
            type: {
              name: 'String'
            }
          },
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          avatarUrl: {
            required: false,
            serializedName: 'avatar_url',
            type: {
              name: 'String'
            }
          },
          origin: {
            required: true,
            serializedName: 'origin',
            type: {
              name: 'String'
            }
          },
          createdAt: {
            required: true,
            serializedName: 'created_at',
            type: {
              name: 'String'
            }
          },
          updatedAt: {
            required: true,
            serializedName: 'updated_at',
            type: {
              name: 'String'
            }
          },
          collaboratorsCount: {
            required: true,
            serializedName: 'collaborators_count',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = CloseAccountOrganizationResponse;
