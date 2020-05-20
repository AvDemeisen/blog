import styled from "styled-components"
import { Colors } from "../../styles/variables"

export const List = styled.ul`
    display: flex;
`

export const ListItem = styled.li`
    margin-left: 10px;
`

export const ListButton = styled.button`
    margin: 0;
    padding: 0 12px;
    height: 25px;
    background-color: ${Colors["charcoal"]};
    color: ${Colors["white"]};
    border: none;
    font-size: 1rem;
    transition: all 300ms ease;
`


