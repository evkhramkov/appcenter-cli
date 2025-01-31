/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a InternalUserSignupResponse.
 */
class InternalUserSignupResponse {
  /**
   * Create a InternalUserSignupResponse.
   * @member {uuid} id The unique id (UUID) of the user
   * @member {string} displayName The full name of the user. Might for example
   * be first and last name
   * @member {string} email The email address of the user
   * @member {string} [externalProvider] The name of the external auth provider
   * @member {string} [externalUserId] The user ID given by the external
   * provider
   * @member {string} name The unique name that is used to identify the user.
   * @member {string} [status] The current status of the user record after
   * signup. Possible values include: 'Complete', 'NeedsVerification'
   */
  constructor() {
  }

  /**
   * Defines the metadata of InternalUserSignupResponse
   *
   * @returns {object} metadata of InternalUserSignupResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'InternalUserSignupResponse',
      type: {
        name: 'Composite',
        className: 'InternalUserSignupResponse',
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
          email: {
            required: true,
            serializedName: 'email',
            type: {
              name: 'String'
            }
          },
          externalProvider: {
            required: false,
            serializedName: 'external_provider',
            type: {
              name: 'String'
            }
          },
          externalUserId: {
            required: false,
            serializedName: 'external_user_id',
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
          status: {
            required: false,
            serializedName: 'status',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = InternalUserSignupResponse;
