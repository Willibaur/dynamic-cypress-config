module.exports = Object.freeze({
  platformA: {
    sanity: [
      'system/location',
      'system/misc'
    ],

    suite: [
      'partner/querying',
      'partner/traversal'
    ]
  },

  platFormB: {
    sanity: [
      'admin/actions',
      'companies/window',
      'supervisor/cookies',
      'supervisor/cypress_api',
      'user/assertions',
      'user/navigation',
    ],

    suite: [
      'admin/actions',
      'admin/aliasing',
      'companies/window',
      'partner/traversal',
      'supervisor/cookies',
      'supervisor/cypress_api',
      'supervisor/utilities',
      'system/location',
      'user/connectors',
      'user/navigation',
      'user/network_requests',
    ]
  }
})
