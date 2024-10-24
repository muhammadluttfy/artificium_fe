export default defineAppConfig({
  ui: {
    primary: 'blue',
    gray: 'neutral',
    formGroup: {
      error: 'text-xs',
      label: {
        base: 'text-noble-black-300 dark:text-noble-black-300 mb-3'
      },
      help: 'text-gray-500 `dark:text-noble-black-300` text-xs',
      hint: 'text-gray-500 dark:text-noble-black-300 text-xs'
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
      color: {
        white: {
          outline: 'bg-white dark:bg-noble-black-600 ring-gray-300 ring-noble-black-500'
        }
      },
      placeholder: 'placeholder-gray-400 dark:placeholder-noble-black-300',
      icon: {
        base: 'text-noble-black-300 dark:text-noble-black-300'
      }
    },

    checkbox: {
      label: 'text-noble-black-300 dark:text-noble-black-300 text-base -mt-0.5',
      background: 'bg-white dark:bg-noble-black-600'
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
          solid: 'shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400'
        },
        gray: {
          solid: 'shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-noble-black-500 text-gray-700 dark:text-gray-200 bg-gray-200 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400'
        }
      }
    },

    divider: {
      border: {
        base: 'border-noble-black-500'
      }
    },

    card: {
      background: 'bg-white dark:bg-gray-800',
      ring: 'ring-1 ring-gray-200 dark:ring-noble-black-500'
    },

    popover: {
      background: 'bg-white dark:bg-gray-800',
      ring: 'ring-1 ring-gray-200 dark:ring-noble-black-500',
      overlay: {
        background: 'backdrop-blur-sm bg-gray-800/75 dark:bg-noble-black-600/75'
      }
    },

    slideover: {
      overlay: {
        background: 'bg-gray-900/75 dark:bg-noble-black-600/75'
      },
      background: 'bg-white dark:bg-gray-800'
    },

    modal: {
      overlay:
      {
        background: 'bg-gray-800/80 dark:bg-noble-black-600/90'
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
          outline: 'bg-white dark:bg-noble-black-600 ring-gray-300 dark:ring-noble-black-500'
        }
      },
      icon: {
        base: 'text-noble-black-300 dark:text-noble-black-300'
      }
    },

    selectMenu: {
      background: 'bg-white dark:bg-gray-800',
      input: 'bg-white dark:bg-noble-black-600'
    },

    textarea: {
      color: {
        white: {
          outline: 'bg-white dark:bg-noble-black-600 ring-gray-300 dark:ring-noble-black-500'
        }
      },
      placeholder: 'placeholder-gray-400 dark:placeholder-noble-black-300'
    },

    avatar: {
      background: 'bg-gray-200 dark:bg-noble-black-600'
    },

    badge: {
      color: {
        white: {
          solid: 'bg-white dark:bg-noble-black-600'
        }
      }
    },

    notification: {
      background: 'bg-white dark:bg-gray-700'
    },

    skeleton: {
      background: 'bg-gray-300 dark:bg-gray-700'
    },

    tabs: {
      list: {
        background: 'bg-gray-100 dark:bg-noble-black-600',
        marker: {
          background: 'bg-white dark:bg-gray-800'
        }
      }
    },

    dropdown: {
      background: 'bg-white dark:bg-noble-black-600',
      rounded: 'rounded-lg',
      icon: {
        base: 'flex-shrink-0 w-5 h-5',
        active: 'text-gray-500 dark:text-noble-black-300',
        inactive: 'text-noble-black-300 dark:text-noble-black-300'
      }
    },
    table: {
      td: {
        base: 'max-w-sm truncate hover:text-clip hover:max-w-full text-center',
        color: 'text-gray-600 dark:text-gray-300 dark:border-b dark:border-gray-700'
      },
      th: {
        base: 'whitespace-nowrap text-center dark:border-b dark:border-gray-700'
      }
    }
  }
})
