/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Class representing a OrganizationInvitationDetailResponse.
 */
class OrganizationInvitationDetailResponse {
  /**
   * Create a OrganizationInvitationDetailResponse.
   * @member {uuid} id The unique ID (UUID) of the invitation
   * @member {object} organization
   * @member {uuid} [organization.id] The internal unique id (UUID) of the
   * organization.
   * @member {string} [organization.displayName] The display name of the
   * organization
   * @member {string} [organization.name] The slug name of the organization
   * @member {string} [organization.avatarUrl] The URL to a user-uploaded
   * Avatar image
   * @member {string} [organization.origin] The creation origin of this
   * organization. Possible values include: 'appcenter', 'hockeyapp'
   * @member {string} [organization.createdAt] The creation date of this
   * organization
   * @member {string} [organization.updatedAt] The date the organization was
   * last updated at
   * @member {string} email The email address of the invited user
   * @member {object} invitedBy
   * @member {uuid} [invitedBy.id] The unique id (UUID) of the user
   * @member {string} [invitedBy.avatarUrl] The avatar URL of the user
   * @member {boolean} [invitedBy.canChangePassword] User is required to send
   * an old password in order to change the password.
   * @member {string} [invitedBy.displayName] The full name of the user. Might
   * for example be first and last name
   * @member {string} [invitedBy.email] The email address of the user
   * @member {string} [invitedBy.name] The unique name that is used to identify
   * the user.
   * @member {array} [invitedBy.permissions] The permissions the user has for
   * the app
   * @member {string} [invitedBy.origin] The creation origin of this user.
   * Possible values include: 'appcenter', 'hockeyapp', 'codepush'
   * @member {boolean} isExistingUser Indicates whether the invited user
   * already exists
   * @member {string} [role] The role assigned to the invited user
   */
  constructor() {
  }

  /**
   * Defines the metadata of OrganizationInvitationDetailResponse
   *
   * @returns {object} metadata of OrganizationInvitationDetailResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'OrganizationInvitationDetailResponse',
      type: {
        name: 'Composite',
        className: 'OrganizationInvitationDetailResponse',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          organization: {
            required: true,
            serializedName: 'organization',
            type: {
              name: 'Composite',
              className: 'OrganizationResponse'
            }
          },
          email: {
            required: true,
            serializedName: 'email',
            type: {
              name: 'String'
            }
          },
          invitedBy: {
            required: true,
            serializedName: 'invited_by',
            type: {
              name: 'Composite',
              className: 'UserProfileResponse'
            }
          },
          isExistingUser: {
            required: true,
            serializedName: 'is_existing_user',
            type: {
              name: 'Boolean'
            }
          },
          role: {
            required: false,
            serializedName: 'role',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = OrganizationInvitationDetailResponse;
