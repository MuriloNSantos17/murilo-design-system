import { AvatarContainer, AvatarImage, AvatarFallback } from "./style";
import { User } from 'phosphor-react'
import { ComponentProps } from "react";

export interface AvatarProps extends ComponentProps<typeof AvatarImage> { }

export function Avatar(props: AvatarProps) {
    return (
        <AvatarContainer>
            <AvatarImage {...props} />
            <AvatarFallback delayMs={600}>
                <User />
            </AvatarFallback>
        </AvatarContainer>
    )
}

Avatar.displayName = 'Avatar'