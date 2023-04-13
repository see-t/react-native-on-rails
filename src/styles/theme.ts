import { extendTheme } from 'native-base'

export const theme = extendTheme({
  colors: {
    darkGray: '#212121',
    gray: '#A8A8A8',
    green: '#01EA99',
    lightGray: '#6A6A6A',
    red: '#FF0000',
    yellow: '#FFD800',
  },
  components: {
    Button: {
      defaultProps: {
        _text: {
          color: 'black',
          fontSize: 'md',
          selectable: false,
        },
        alignSelf: 'center',
        bg: 'white',
        colorScheme: 'dark',
        h: 12,
        rounded: 'full',
        variant: 'solid',
        w: '5/6',
      },
    },
    Checkbox: {
      defaultProps: {
        _checked: {
          _pressed: {
            bg: 'red',
            borderColor: 'red',
          },
          bg: 'red',
          borderColor: 'red',
        },
        bg: 'white',
        borderColor: 'lightGray',
        color: 'red',
        colorScheme: 'red',
        size: 'md',
      },
    },
    Heading: {
      defaultProps: {
        color: 'white',
        ellipsizeMode: 'tail',
        selectable: true,
        size: 'md',
        textAlign: 'center',
      },
    },
    Icon: {
      defaultProps: {
        color: 'white',
        size: 22,
      },
    },
    Image: {
      defaultProps: {
        borderRadius: 'lg',
        flex: 1,
        resizeMode: 'cover',
      },
    },
    Input: {
      defaultProps: {
        autoCapitalize: 'sentences',
        autoCorrect: false,
        borderColor: 'white',
        color: 'white',
        h: 12,
        placeholder: 'Type here...',
        placeholderTextColor: 'lightGray',
        size: '2xl',
      },
    },
    Select: {
      defaultProps: {
        _actionSheetBody: { backgroundColor: 'black' },
        _actionSheetContent: {
          _dragIndicator: {
            bg: 'red',
          },
          bg: 'black',
        },
        borderColor: 'white',
        color: 'white',
        h: 12,
        placeholder: 'Select from list...',
        placeholderTextColor: 'lightGray',
        size: 'xl',
      },
    },
    Spinner: {
      defaultProps: { color: 'white' },
    },
    Text: {
      defaultProps: {
        color: 'white',
        ellipsizeMode: 'tail',
        fontSize: 'md',
        selectable: true,
      },
    },
    TextArea: {
      defaultProps: {
        autoCapitalize: 'sentences',
        autoCorrect: true,
        borderColor: 'white',
        color: 'white',
        placeholder: 'Type here...',
        placeholderTextColor: 'lightGray',
        size: 'xl',
        variant: 'outline',
        // h: 12,
      },
    },
  },
})
