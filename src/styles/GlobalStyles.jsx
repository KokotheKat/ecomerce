import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,*::before,*::after{
    box-sizing:border-box;
    margin:0;
    padding:0;
}
html {
                &::-webkit-scrollbar {
                    width: 0.5rem;
                    height: 0.5rem;
                }

                &::-webkit-scrollbar-track {
                    background: #0e0e0e;
                    border-radius: 0.25rem;
                }

                &::-webkit-scrollbar-thumb {
                    background-color: #333;
                    border-radius: 0.25rem;
                    border: 0.1rem solid #0e0e0e;
                }
                &::-webkit-scrollbar-thumb:hover {
                    background-color: #444;
                    border-color: #000;
                }
                &::-webkit-scrollbar-button {
                    display: none;
                }
                scroll-behavior: smooth;
            }

            body {
                font-size: 100%;
                min-height: 100vh;
                color: #f1f1f1;
                background: #0a0722;
            }

`   