import { StoryObj, Meta } from "@storybook/react"
import { Box, Text, TextArea, TextAreaProps } from "@murilo-nsantos-ui/react"

export default {
    title: 'Typograph/Text Area',
    component: TextArea,
    args: {},
    decorators: [
        (Story) => {
            return (
                <Box as={'label'} css={{display:'flex', flexDirection: 'column', gap: '$2'}}>
                    <Text size={'sm'}>Observations</Text>
                    {Story()}
                </Box>
            )
        }
    ]
} as Meta

export const Primary: StoryObj<TextAreaProps> = {
    args: {
        placeHolder: 'Add any observations...'
    }
}


export const Disabled: StoryObj<TextAreaProps> = {
    args: {
        disabled: true,
    }
}