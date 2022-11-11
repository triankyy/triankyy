/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container } from "@mui/material";

export default function BlogLayout({ children }: Props) {
    return <Container maxWidth="md">{children}</Container>;
}

interface Props {
    children: JSX.Element | JSX.Element[] | any;
}
