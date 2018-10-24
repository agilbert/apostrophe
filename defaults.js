module.exports = {
  modules: {
    'apostrophe-utils': {},
    'apostrophe-http': {},
    'apostrophe-tasks': {},
    'apostrophe-launder': {},
    'apostrophe-i18n': {},
    'apostrophe-db': {},
    'apostrophe-locks': {},
    'apostrophe-caches': {},
    'apostrophe-migrations': {},
    'apostrophe-express': {},
    'apostrophe-urls': {},
    'apostrophe-templates': {},
    'apostrophe-email': {},
    'apostrophe-push': {},
    'apostrophe-permissions': {},
    'apostrophe-assets': {},
    'apostrophe-admin-bar': {},
    'apostrophe-notifications': {},
    'apostrophe-login': {},
    'apostrophe-browser-utils': {},
    'apostrophe-ui': {},
    'apostrophe-schemas': {},
    'apostrophe-docs': {},
    'apostrophe-jobs': {},
    'apostrophe-versions': {},
    'apostrophe-modals': {},
    'apostrophe-tags': {},
    'apostrophe-attachments': {},
    'apostrophe-oembed': {},
    'apostrophe-pager': {},
    // global comes first so it can register a doc type manager and clean things up before
    // pages claims any orphan page types
    'apostrophe-global': {},
    'apostrophe-polymorphic-manager': {},
    'apostrophe-pages': {},
    'apostrophe-search': {},
    'apostrophe-any-page-manager': {},
    'apostrophe-areas': {},
    'apostrophe-rich-text-widgets': {},
    'apostrophe-html-widgets': {},
    'apostrophe-video-fields': {},
    'apostrophe-video-widgets': {},
    'apostrophe-groups': {},
    'apostrophe-users': {},
    'apostrophe-images': {},
    'apostrophe-images-widgets': {},
    'apostrophe-files': {},
    'apostrophe-files-widgets': {},
    'apostrophe-soft-redirects': {},
    // ALWAYS LAST FOREVER
    'apostrophe-service-bridge': {}
  }
};
