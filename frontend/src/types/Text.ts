import type { User } from "./User"


export interface Text {
    id: string
    title: string
    content: string
    author: User
    createdAt: string
}