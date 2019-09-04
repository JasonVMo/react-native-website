module.exports = {
  name: 'Modal',
  props: {
    visible: {
      flowType: {
        name: 'boolean',
      },
      required: false,
      description:
        'The `visible` prop determines whether your modal is visible.',
    },
    supportedOrientations: {
      flowType: {
        name:
          "array of enum('portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right')",
      },
      required: false,
      platform: 'iOS',
      description:
        "On iOS, the modal is still restricted by what's specified in your app's Info.plist's UISupportedInterfaceOrientations field. When using `presentationStyle` of `pageSheet` or `formSheet`, this property will be ignored by iOS.",
    },
    onRequestClose: {
      flowType: {
        name: 'function',
      },
      required: true,
      platform: 'Android, Platform.isTVOS',
      description:
        'The `onRequestClose` callback is called when the user taps the hardware back button on Android or the menu button on Apple TV. Because of this required prop, be aware that `BackHandler` events will not be emitted as long as the modal is open.',
      /*
      Schema needs to be able to represent the following
      | Type     | Required | Platform                 |
      | -------- | -------- | ------------------------ |
      | function | Yes      | Android, Platform.isTVOS |
      | function | No       | (Others)                 |
      */
    },
    onShow: {
      flowType: {name: 'function'},
      required: false,
      description:
        'The `onShow` prop allows passing a function that will be called once the modal has been shown.',
    },
    transparent: {
      flowType: {name: 'boolean'},
      required: false,
      description:
        'The `transparent` prop determines whether your modal will fill the entire view. Setting this to `true` will render the modal over a transparent background.',
    },
    animationType: {
      flowType: {name: "enum('none', 'slide', 'fade')"},
      required: false,
      description: `The \`animationType\` prop controls how the modal animates.

- \`slide\` slides in from the bottom
- \`fade\` fades into view
- \`none\` appears without an animation

Default is set to \`none\`.`,
    },
    hardwareAccelerated: {
      flowType: {name: 'boolean'},
      required: false,
      platform: 'Android',
      description:
        'The `hardwareAccelerated` prop controls whether to force hardware acceleration for the underlying window.',
    },
    onDismiss: {
      flowType: {name: 'function'},
      required: false,
      platform: 'iOS',
      description:
        'The `onDismiss` prop allows passing a function that will be called once the modal has been dismissed.',
    },
    onOrientationChange: {
      flowType: {name: 'function'},
      required: false,
      platform: 'iOS',
      description:
        "The `onOrientationChange` callback is called when the orientation changes while the modal is being displayed. The orientation provided is only 'portrait' or 'landscape'. This callback is also called on initial render, regardless of the current orientation.",
    },
    presentationStyle: {
      flowType: {
        name: "enum('fullScreen', 'pageSheet', 'formSheet', 'overFullScreen')",
      },
      required: false,
      platform: 'iOS',
      description: `The \`presentationStyle\` prop controls how the modal appears (generally on larger devices such as iPad or plus-sized iPhones). See https://developer.apple.com/reference/uikit/uimodalpresentationstyle for details.

- \`fullScreen\` covers the screen completely
- \`pageSheet\` covers portrait-width view centered (only on larger devices)
- \`formSheet\` covers narrow-width view centered (only on larger devices)
- \`overFullScreen\` covers the screen completely, but allows transparency

Default is set to \`overFullScreen\` or \`fullScreen\` depending on \`transparent\` property.`,
    },
    animated: {
      flowType: {name: 'boolean'},
      required: false,
      description:
        '> **Deprecated.** Use the [`animationType`](modal.md#animationtype) prop instead.',
    },
  },
};
