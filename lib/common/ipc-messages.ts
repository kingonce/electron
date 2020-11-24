export const enum IPC_MESSAGES {
  BROWSER_CLIPBOARD_SYNC = 'BROWSER_CLIPBOARD_SYNC',
  BROWSER_GET_LAST_WEB_PREFERENCES = 'BROWSER_GET_LAST_WEB_PREFERENCES',
  BROWSER_PRELOAD_ERROR = 'BROWSER_PRELOAD_ERROR',
  BROWSER_SANDBOX_LOAD = 'BROWSER_SANDBOX_LOAD',
  BROWSER_WINDOW_CLOSE = 'BROWSER_WINDOW_CLOSE',

  CRASH_REPORTER_GET_LAST_CRASH_REPORT = 'CRASH_REPORTER_GET_LAST_CRASH_REPORT',
  CRASH_REPORTER_GET_UPLOADED_REPORTS = 'CRASH_REPORTER_GET_UPLOADED_REPORTS',
  CRASH_REPORTER_GET_UPLOAD_TO_SERVER = 'CRASH_REPORTER_GET_UPLOAD_TO_SERVER',
  CRASH_REPORTER_SET_UPLOAD_TO_SERVER = 'CRASH_REPORTER_SET_UPLOAD_TO_SERVER',
  CRASH_REPORTER_GET_CRASHES_DIRECTORY = 'CRASH_REPORTER_GET_CRASHES_DIRECTORY',

  GUEST_INSTANCE_VISIBILITY_CHANGE = 'GUEST_INSTANCE_VISIBILITY_CHANGE',

  GUEST_VIEW_INTERNAL_DESTROY_GUEST = 'GUEST_VIEW_INTERNAL_DESTROY_GUEST',
  GUEST_VIEW_INTERNAL_DISPATCH_EVENT = 'GUEST_VIEW_INTERNAL_DISPATCH_EVENT',
  GUEST_VIEW_INTERNAL_IPC_MESSAGE = 'GUEST_VIEW_INTERNAL_IPC_MESSAGE',

  GUEST_VIEW_MANAGER_CREATE_GUEST = 'GUEST_VIEW_MANAGER_CREATE_GUEST',
  GUEST_VIEW_MANAGER_ATTACH_GUEST = 'GUEST_VIEW_MANAGER_ATTACH_GUEST',
  GUEST_VIEW_MANAGER_DETACH_GUEST = 'GUEST_VIEW_MANAGER_DETACH_GUEST',
  GUEST_VIEW_MANAGER_FOCUS_CHANGE = 'GUEST_VIEW_MANAGER_FOCUS_CHANGE',
  GUEST_VIEW_MANAGER_CALL = 'GUEST_VIEW_MANAGER_CALL',
  GUEST_VIEW_MANAGER_CAPTURE_PAGE = 'GUEST_VIEW_MANAGER_CAPTURE_PAGE',
  GUEST_VIEW_MANAGER_PROPERTY_GET = 'GUEST_VIEW_MANAGER_PROPERTY_GET',
  GUEST_VIEW_MANAGER_PROPERTY_SET = 'GUEST_VIEW_MANAGER_PROPERTY_SET',

  GUEST_WINDOW_MANAGER_WINDOW_OPEN = 'GUEST_WINDOW_MANAGER_WINDOW_OPEN',
  GUEST_WINDOW_MANAGER_WINDOW_CLOSED = 'GUEST_WINDOW_MANAGER_WINDOW_CLOSED',
  GUEST_WINDOW_MANAGER_WINDOW_POSTMESSAGE = 'GUEST_WINDOW_MANAGER_WINDOW_POSTMESSAGE',
  GUEST_WINDOW_MANAGER_WINDOW_METHOD = 'GUEST_WINDOW_MANAGER_WINDOW_METHOD',
  GUEST_WINDOW_MANAGER_WEB_CONTENTS_METHOD = 'GUEST_WINDOW_MANAGER_WEB_CONTENTS_METHOD',
  GUEST_WINDOW_POSTMESSAGE = 'GUEST_WINDOW_POSTMESSAGE',

  RENDERER_WEB_FRAME_METHOD = 'RENDERER_WEB_FRAME_METHOD',

  NAVIGATION_CONTROLLER_GO_BACK = 'NAVIGATION_CONTROLLER_GO_BACK',
  NAVIGATION_CONTROLLER_GO_FORWARD = 'NAVIGATION_CONTROLLER_GO_FORWARD',
  NAVIGATION_CONTROLLER_GO_TO_OFFSET = 'NAVIGATION_CONTROLLER_GO_TO_OFFSET',
  NAVIGATION_CONTROLLER_LENGTH = 'NAVIGATION_CONTROLLER_LENGTH',

  INSPECTOR_CONFIRM = 'INSPECTOR_CONFIRM',
  INSPECTOR_CONTEXT_MENU = 'INSPECTOR_CONTEXT_MENU',
  INSPECTOR_SELECT_FILE = 'INSPECTOR_SELECT_FILE',

  DESKTOP_CAPTURER_GET_SOURCES = 'DESKTOP_CAPTURER_GET_SOURCES',
  NATIVE_IMAGE_CREATE_THUMBNAIL_FROM_PATH = 'NATIVE_IMAGE_CREATE_THUMBNAIL_FROM_PATH',
}
