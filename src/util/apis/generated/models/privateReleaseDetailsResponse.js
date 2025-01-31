/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Details of an uploaded release
 *
 */
class PrivateReleaseDetailsResponse {
  /**
   * Create a PrivateReleaseDetailsResponse.
   * @member {number} [id] ID identifying this unique release.
   * @member {string} [status] OBSOLETE. Will be removed in next version. The
   * availability concept is now replaced with distributed. Any 'available'
   * release will be associated with the default distribution group of an
   * app.</br>
   * The release state.<br>
   * <b>available</b>: The uploaded release has been distributed.<br>
   * <b>unavailable</b>: The uploaded release is not visible to the user. <br>
   * . Possible values include: 'available', 'unavailable'
   * @member {string} [appName] The app's name (extracted from the uploaded
   * release).
   * @member {string} [appDisplayName] The app's display name.
   * @member {string} [version] The release's version.<br>
   * For iOS: CFBundleVersion from info.plist.
   * For Android: android:versionCode from AppManifest.xml.
   * @member {string} [shortVersion] The release's short version.<br>
   * For iOS: CFBundleShortVersionString from info.plist.
   * For Android: android:versionName from AppManifest.xml.
   * @member {string} [releaseNotes] The release's release notes.
   * @member {string} [provisioningProfileName] The release's provisioning
   * profile name.
   * @member {string} [provisioningProfileType] The type of the provisioning
   * profile for the requested app version. Possible values include: 'adhoc',
   * 'enterprise', 'other'
   * @member {boolean} [isProvisioningProfileSyncing] A flag that determines
   * whether the release's provisioning profile is still extracted or not.
   * @member {number} [size] The release's size in bytes.
   * @member {string} [minOs] The release's minimum required operating system.
   * @member {string} [deviceFamily] The release's device family.
   * @member {string} [androidMinApiLevel] The release's minimum required
   * Android API level.
   * @member {string} [bundleIdentifier] The identifier of the apps bundle.
   * @member {string} [fingerprint] MD5 checksum of the release binary.
   * @member {string} [uploadedAt] UTC time in ISO 8601 format of the uploaded
   * time.
   * @member {string} [downloadUrl] The URL that hosts the binary for this
   * release.
   * @member {string} [appIconUrl] A URL to the app's icon.
   * @member {string} [installUrl] The href required to install a release on a
   * mobile device. On iOS devices will be prefixed with
   * `itms-services://?action=download-manifest&url=`
   * @member {string} [distributionGroupId] the destination where release is
   * distributed
   * @member {string} [publishingStatus] the publishing status of the
   * distributed release
   * @member {string} [destinationType] The destination type.<br>
   * <b>group</b>: The release distributed to internal groups and
   * distribution_groups details will be returned.<br>
   * <b>store</b>: The release distributed to external stores and
   * distribution_stores details will be returned. <br>
   * . Possible values include: 'group', 'store'
   */
  constructor() {
  }

  /**
   * Defines the metadata of PrivateReleaseDetailsResponse
   *
   * @returns {object} metadata of PrivateReleaseDetailsResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PrivateReleaseDetailsResponse',
      type: {
        name: 'Composite',
        className: 'PrivateReleaseDetailsResponse',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'Number'
            }
          },
          status: {
            required: false,
            serializedName: 'status',
            type: {
              name: 'String'
            }
          },
          appName: {
            required: false,
            serializedName: 'app_name',
            type: {
              name: 'String'
            }
          },
          appDisplayName: {
            required: false,
            serializedName: 'app_display_name',
            type: {
              name: 'String'
            }
          },
          version: {
            required: false,
            serializedName: 'version',
            type: {
              name: 'String'
            }
          },
          shortVersion: {
            required: false,
            serializedName: 'short_version',
            type: {
              name: 'String'
            }
          },
          releaseNotes: {
            required: false,
            serializedName: 'release_notes',
            type: {
              name: 'String'
            }
          },
          provisioningProfileName: {
            required: false,
            serializedName: 'provisioning_profile_name',
            type: {
              name: 'String'
            }
          },
          provisioningProfileType: {
            required: false,
            serializedName: 'provisioning_profile_type',
            type: {
              name: 'String'
            }
          },
          isProvisioningProfileSyncing: {
            required: false,
            serializedName: 'is_provisioning_profile_syncing',
            type: {
              name: 'Boolean'
            }
          },
          size: {
            required: false,
            serializedName: 'size',
            type: {
              name: 'Number'
            }
          },
          minOs: {
            required: false,
            serializedName: 'min_os',
            type: {
              name: 'String'
            }
          },
          deviceFamily: {
            required: false,
            serializedName: 'device_family',
            type: {
              name: 'String'
            }
          },
          androidMinApiLevel: {
            required: false,
            serializedName: 'android_min_api_level',
            type: {
              name: 'String'
            }
          },
          bundleIdentifier: {
            required: false,
            serializedName: 'bundle_identifier',
            type: {
              name: 'String'
            }
          },
          fingerprint: {
            required: false,
            serializedName: 'fingerprint',
            type: {
              name: 'String'
            }
          },
          uploadedAt: {
            required: false,
            serializedName: 'uploaded_at',
            type: {
              name: 'String'
            }
          },
          downloadUrl: {
            required: false,
            serializedName: 'download_url',
            type: {
              name: 'String'
            }
          },
          appIconUrl: {
            required: false,
            serializedName: 'app_icon_url',
            type: {
              name: 'String'
            }
          },
          installUrl: {
            required: false,
            serializedName: 'install_url',
            type: {
              name: 'String'
            }
          },
          distributionGroupId: {
            required: false,
            serializedName: 'distribution_group_id',
            type: {
              name: 'String'
            }
          },
          publishingStatus: {
            required: false,
            serializedName: 'publishing_status',
            type: {
              name: 'String'
            }
          },
          destinationType: {
            required: false,
            serializedName: 'destination_type',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = PrivateReleaseDetailsResponse;
