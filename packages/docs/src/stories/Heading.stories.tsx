import { StoryObj, Meta } from "@storybook/react"
import { Heading, HeadingProps } from "@murilo-nsantos-ui/react"


export default {
    title: 'Typograph/Heading',
    component: Heading,
    args: {
        children: 'Lorem, ipsum dolor sit',
        size: 'md'
    },
    argTypes: {
        size: {
            options: ['sm','md', 'lg', '2xl', '4xl', '5xl', '6xl'],
            control: {
                type: 'inline-radio'
            }
        },
    },
} as Meta

export const Primary: StoryObj<HeadingProps> = {
}

export const CustomTag: StoryObj<HeadingProps> = {
    args: {
        children: 'H1 Heading',
        as: 'h1'
    },
    parameters: {
        docs: {
            description: {
                story: 'Por padrão o heading será sempre um `h2`, mas podemos alterar isso com a propriedade `as`'
            }
        }
    }
}
