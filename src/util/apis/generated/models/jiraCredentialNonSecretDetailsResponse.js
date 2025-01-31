/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Jira credentials non-secret details
 *
 * @extends models['GooglePlayConnectionNonSecretResponse']
 */
class JiraCredentialNonSecretDetailsResponse extends models['GooglePlayConnectionNonSecretResponse'] {
  /**
   * Create a JiraCredentialNonSecretDetailsResponse.
   * @member {object} data Jira credentials non-secret details
   * @member {string} [data.baseUrl] baseUrl to connect to jira instance
   * @member {string} [data.username] username to connect to jira instance
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of JiraCredentialNonSecretDetailsResponse
   *
   * @returns {object} metadata of JiraCredentialNonSecretDetailsResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'JiraCredentialNonSecretDetailsResponse',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'serviceType',
          clientName: 'serviceType'
        },
        uberParent: 'SharedConnectionResponse',
        className: 'JiraCredentialNonSecretDetailsResponse',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: false,
            serializedName: 'displayName',
            type: {
              name: 'String'
            }
          },
          credentialType: {
            required: true,
            serializedName: 'credentialType',
            type: {
              name: 'String'
            }
          },
          isValid: {
            required: false,
            serializedName: 'isValid',
            type: {
              name: 'Boolean'
            }
          },
          is2FA: {
            required: false,
            serializedName: 'is2FA',
            type: {
              name: 'Boolean'
            }
          },
          serviceType: {
            required: true,
            serializedName: 'serviceType',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          data: {
            required: true,
            serializedName: 'data',
            type: {
              name: 'Composite',
              className: 'JiraSecretDetailsResponse'
            }
          }
        }
      }
    };
  }
}

module.exports = JiraCredentialNonSecretDetailsResponse;
