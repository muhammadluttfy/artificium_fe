export default defineAppConfig({
  ui: {
    primary: 'blue',
    gray: 'neutral',
    formGroup: {
      error: 'text-xs',
      label: {
        base: 'text-noble-black-200'
      },
      help: 'text-noble-black-200 text-xs',
      hint: 'text-noble-black-200 text-xs'
    },

    input: {
      padding: {
        '2xs': 'px-2 py-1',
        xs: 'px-2.5 py-1.5',
        sm: 'px-2.5 py-1.5',
        md: 'px-3 py-4',
        lg: 'px-3.5 py-5',
        xl: 'px-3.5 py-5'
      },
      rounded: 'rounded-lg',
      color: {
        white: {
          outline: 'bg-noble-black-600 ring-noble-black-500'
        }
      },
      placeholder: 'placeholder-noble-black-300',
      icon: {
        base: 'text-noble-black-300'
      }
    },

    checkbox: {
      label: 'text-noble-black-200 text-base -my-0.5',
      background: 'bg-noble-black-600'
    },

    button: {
      padding: {
        '2xs': 'px-2 py-1',
        xs: 'px-2.5 py-1.5',
        sm: 'px-2.5 py-1.5',
        md: 'px-3 py-4',
        lg: 'px-3.5 py-5',
        xl: 'px-3.5 py-5'
      },
      rounded: 'rounded-lg',
      color: {
        white: {
          solid: 'shadow-sm ring-1 ring-inset ring-gray-600 text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 focus-visible:ring-2 focus-visible:ring-primary-500'
        },
        gray: {
          solid: 'shadow-sm ring-1 ring-inset ring-noble-black-500 text-gray-200 bg-gray-200 hover:bg-gray-100 disabled:bg-gray-50 focus-visible:ring-2 focus-visible:ring-primary-500'
        }
      }
    },

    divider: {
      border: {
        base: 'border-noble-black-500'
      }
    },

    card: {
      background: 'bg-noble-black-700',
      ring: 'ring-1 ring-gray-200'
    },

    popover: {
      background: 'bg-noble-black-700',
      ring: 'ring-1 ring-gray-200',
      overlay: {
        background: 'backdrop-blur-sm bg-gray-800/75'
      }
    },

    slideover: {
      overlay: {
        background: 'bg-gray-900/75'
      },
      background: 'bg-noble-black-700'
    },

    modal: {
      overlay: {
        background: 'bg-gray-800/80'
      },
      rounded: 'rounded-2xl',
      width: 'max-w-xl'
    },

    notifications: {
      position: 'top-0 bottom-auto'
    },

    select: {
      padding: {
        sm: 'px-3.5 py-2.5'
      },
      color: {
        white: {
          outline: 'bg-noble-black-600 ring-noble-black-500'
        }
      },
      icon: {
        base: 'text-noble-black-200'
      }
    },

    selectMenu: {
      background: 'bg-noble-black-700',
      input: 'bg-noble-black-600'
    },

    textarea: {
      color: {
        white: {
          outline: 'bg-noble-black-600 ring-noble-black-500'
        }
      },
      placeholder: 'placeholder-noble-black-300'
    },

    avatar: {
      background: 'bg-gray-200'
    },

    badge: {
      color: {
        white: {
          solid: 'bg-noble-black-600'
        }
      }
    },

    notification: {
      background: 'bg-gray-700'
    },

    skeleton: {
      background: 'bg-gray-300'
    },

    tabs: {
      list: {
        background: 'bg-gray-100',
        marker: {
          background: 'bg-noble-black-700'
        }
      }
    },

    dropdown: {
      background: 'bg-noble-black-600',
      rounded: 'rounded-lg',
      icon: {
        base: 'flex-shrink-0 w-5 h-5',
        active: 'text-noble-black-200',
        inactive: 'text-noble-black-200'
      }
    },
    table: {
      td: {
        base: 'max-w-sm truncate hover:text-clip hover:max-w-full text-center',
        color: 'text-gray-600 border-b border-gray-700'
      },
      th: {
        base: 'whitespace-nowrap text-center border-b border-gray-700'
      }
    }
  }
})