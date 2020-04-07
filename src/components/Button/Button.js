import styled from "styled-components";

export default styled.button`
    cursor: pointer;
    background-color: #1db954;
    border-radius: 50px;
    padding: 12px 24px;
    border-width: 0;
    outline: none;
    color: #ffffff;
    font-size: 12px;
    font-weight: 700;

    :not(:disabled):hover {
        background-color: #1ed760;
    }

    :disabled {
        cursor: not-allowed;
    }
`