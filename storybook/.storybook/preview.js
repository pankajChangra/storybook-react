import { addDecorator, addParameters } from '@storybook/react';
import { Box, ChakraBaseProvider, extendBaseTheme  } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'
import '@storybook/addon-console';
import { withKnobs } from "@storybook/addon-knobs";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { withA11y } from "@storybook/addon-a11y";

const { Button } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Button,
  },
})

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
}

addDecorator(story => <ChakraBaseProvider theme={theme}>
  <Box m='4'>{story()}</Box>
</ChakraBaseProvider>)

// check label and set bool value for button (enabled/disabled)
addDecorator(withKnobs)

// check accessibility
addDecorator(withA11y)

// add parameter for viewport addon
addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
})