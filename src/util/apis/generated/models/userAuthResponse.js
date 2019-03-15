/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a UserAuthResponse.
 */
class UserAuthResponse {
  /**
   * Create a UserAuthResponse.
   * @property {uuid} id The unique id (UUID) of the user
   * @property {string} displayName The full name of the user. Might for
   * example be first and last name
   * @property {string} email The email address of the user
   * @property {string} [externalProvider] The name of the external auth
   * provider
   * @property {string} [externalUserId] The user ID given by the external
   * provider
   * @property {string} name The unique name that is used to identify the user
   * @property {string} origin The creation origin of this user. Possible
   * values include: 'appcenter', 'hockeyapp', 'codepush'
   */
  constructor() {
  }

  /**
   * Defines the metadata of UserAuthResponse
   *
   * @returns {object} metadata of UserAuthResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UserAuthResponse',
      type: {
        name: 'Composite',
        className: 'UserAuthResponse',
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
          origin: {
            required: true,
            serializedName: 'origin',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = UserAuthResponse;
